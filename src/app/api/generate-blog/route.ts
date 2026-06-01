import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request: Request) {
  // 1. Verify OpenAI API key is configured
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "OpenAI API Key is not configured on the server. Please define OPENAI_API_KEY in your environment.",
      },
      { status: 500 }
    );
  }

  try {
    // 2. Parse request body and validate inputs
    const body = await request.json();
    const { topic, keyword, category, tone, targetAudience } = body;

    if (!topic || !keyword || !category || !tone || !targetAudience) {
      return NextResponse.json(
        {
          error:
            "Missing required fields. Please provide: topic, keyword, category, tone, and targetAudience.",
        },
        { status: 400 }
      );
    }

    // 3. Initialize OpenAI client
    const openai = new OpenAI({ apiKey });

    // 4. Construct System Prompt to enforce structural JSON formatting
    const systemPrompt = `You are an expert technical writer and SEO specialist.
Generate a comprehensive, high-quality, and engaging blog post about the given topic.

You MUST respond with a JSON object. The JSON object MUST conform EXACTLY to the following structure:
{
  "title": "A catchy, SEO-optimized title for the blog post",
  "excerpt": "A short, engaging 2-3 sentence description summarizing the article.",
  "seoDescription": "A meta description for SEO purposes, under 160 characters.",
  "slug": "A URL-friendly lowercase hyphenated version of the title (e.g. 'how-to-migrate-legacy-systems')",
  "content": "The full blog post content formatted in Markdown. Use headings (##, ###), bullet lists, and paragraphs. Do not include h1 (#) as the title is handled separately.",
  "faqs": [
    {
      "question": "A frequently asked question related to the topic",
      "answer": "A clear, concise answer to the question"
    }
  ]
}

Ensure the tone of voice is: "${tone}".
Ensure the article is specifically written and tailored for: "${targetAudience}".
You must naturally incorporate the following target keyword: "${keyword}".
Ensure the content is detailed, informative, and formatted with clean Markdown headings and paragraphs.`;

    const userPrompt = `Generate a blog post about: "${topic}" under the category: "${category}".`;

    // 5. Query OpenAI using JSON response format
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
    });

    const responseText = response.choices[0]?.message?.content;
    if (!responseText) {
      return NextResponse.json(
        { error: "Received an empty response from OpenAI." },
        { status: 502 }
      );
    }

    // 6. Parse and return the generated blog
    const parsedBlog = JSON.parse(responseText);

    return NextResponse.json(parsedBlog);
  } catch (error: any) {
    console.error("Error in generate-blog API route:", error);

    // Handle JSON parsing errors if OpenAI failed to return exact format (rare with json_object format)
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Failed to parse OpenAI response as JSON." },
        { status: 502 }
      );
    }

    // General error fallback
    return NextResponse.json(
      { error: error?.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

// demo blog generator with mock ai 

// import { NextResponse } from "next/server";
// import OpenAI from "openai";

// export async function POST(request: Request) {
//   try {
//     // --------------------------------------------------
//     // 1. Parse Request Body
//     // --------------------------------------------------

//     const body = await request.json();

//     const {
//       topic,
//       keyword,
//       category,
//       tone,
//       targetAudience,
//     } = body;

//     // --------------------------------------------------
//     // 2. Validate Inputs
//     // --------------------------------------------------

//     if (
//       !topic ||
//       !keyword ||
//       !category ||
//       !tone ||
//       !targetAudience
//     ) {
//       return NextResponse.json(
//         {
//           error:
//             "Missing required fields: topic, keyword, category, tone, targetAudience",
//         },
//         { status: 400 }
//       );
//     }

//     // --------------------------------------------------
//     // 3. MOCK MODE (Development Testing)
//     // --------------------------------------------------

//     const useMockAI =
//       process.env.USE_MOCK_AI === "true";

//     if (useMockAI) {
//       return NextResponse.json({
//         title: "How MPC Wallets Work",
//         excerpt:
//           "Learn how MPC wallets improve Web3 security and eliminate seed phrase vulnerabilities.",

//         seoDescription:
//           "Complete beginner guide to MPC wallets, Web3 security, and multi-party computation.",

//         slug: "how-mpc-wallets-work",

//         content: `
// ## Introduction

// MPC wallets are becoming one of the most secure authentication methods in Web3 applications.

// Unlike traditional wallets, MPC technology removes the need for a single vulnerable private key.

// ## How MPC Works

// MPC stands for Multi-Party Computation.

// The private key is split into multiple cryptographic shares distributed across different devices or systems.

// ## Benefits of MPC Wallets

// - Enhanced security
// - No seed phrase exposure
// - Better user experience
// - Enterprise-grade authentication

// ## MPC vs Traditional Wallets

// Traditional wallets rely on one private key.

// MPC wallets distribute trust across multiple parties.

// ## Conclusion

// MPC wallets are shaping the future of secure Web3 onboarding and authentication.
//         `,

//         faqs: [
//           {
//             question: "What is MPC?",
//             answer:
//               "MPC stands for Multi-Party Computation, a cryptographic security method.",
//           },
//           {
//             question: "Are MPC wallets safer?",
//             answer:
//               "Yes, they reduce single points of failure compared to traditional wallets.",
//           },
//         ],
//       });
//     }

//     // --------------------------------------------------
//     // 4. Verify OpenAI API Key
//     // --------------------------------------------------

//     const apiKey = process.env.OPENAI_API_KEY;

//     if (!apiKey) {
//       return NextResponse.json(
//         {
//           error:
//             "OPENAI_API_KEY is missing from environment variables.",
//         },
//         { status: 500 }
//       );
//     }

//     // --------------------------------------------------
//     // 5. Initialize OpenAI
//     // --------------------------------------------------

//     const openai = new OpenAI({
//       apiKey,
//     });

//     // --------------------------------------------------
//     // 6. System Prompt
//     // --------------------------------------------------

//     const systemPrompt = `
// You are an expert technical writer and SEO specialist.

// Generate a high-quality technical blog article.

// You MUST return ONLY valid JSON.

// JSON structure:

// {
//   "title": "SEO optimized title",
//   "excerpt": "Short article summary",
//   "seoDescription": "SEO meta description under 160 characters",
//   "slug": "url-friendly-slug",
//   "content": "Full markdown article",
//   "faqs": [
//     {
//       "question": "FAQ question",
//       "answer": "FAQ answer"
//     }
//   ]
// }

// Rules:
// - Tone: ${tone}
// - Audience: ${targetAudience}
// - Target keyword: ${keyword}
// - Use proper markdown headings
// - Do not include H1 title inside content
// - Make article detailed and readable
// `;

//     const userPrompt = `
// Generate a technical blog post about:
// "${topic}"

// Category:
// "${category}"
// `;

//     // --------------------------------------------------
//     // 7. Generate AI Response
//     // --------------------------------------------------

//     const response =
//       await openai.chat.completions.create({
//         model: "gpt-4o-mini",

//         messages: [
//           {
//             role: "system",
//             content: systemPrompt,
//           },
//           {
//             role: "user",
//             content: userPrompt,
//           },
//         ],

//         response_format: {
//           type: "json_object",
//         },

//         temperature: 0.7,
//       });

//     // --------------------------------------------------
//     // 8. Extract Response
//     // --------------------------------------------------

//     const responseText =
//       response.choices?.[0]?.message?.content;

//     if (!responseText) {
//       return NextResponse.json(
//         {
//           error:
//             "OpenAI returned an empty response.",
//         },
//         { status: 502 }
//       );
//     }

//     // --------------------------------------------------
//     // 9. Parse JSON Safely
//     // --------------------------------------------------

//     let parsedBlog;

//     try {
//       parsedBlog = JSON.parse(responseText);
//     } catch (parseError) {
//       console.error(
//         "JSON Parse Error:",
//         parseError
//       );

//       return NextResponse.json(
//         {
//           error:
//             "Failed to parse AI response JSON.",
//         },
//         { status: 502 }
//       );
//     }

//     // --------------------------------------------------
//     // 10. Return Final Blog
//     // --------------------------------------------------

//     return NextResponse.json(parsedBlog);

//   } catch (error: any) {
//     console.error(
//       "Generate Blog API Error:",
//       error
//     );

//     // OpenAI quota / billing errors
//     if (error?.status === 429) {
//       return NextResponse.json(
//         {
//           error:
//             "OpenAI quota exceeded. Please check billing settings.",
//         },
//         { status: 429 }
//       );
//     }

//     return NextResponse.json(
//       {
//         error:
//           error?.message ||
//           "Unexpected server error occurred.",
//       },
//       { status: 500 }
//     );
//   }
// }