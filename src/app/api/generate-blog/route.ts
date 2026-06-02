import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Gemini API Key is not configured. Please define GEMINI_API_KEY in your environment variables.",
      },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();

    const {
      title,
      description,
      targetCountry,
      blogType,
    } = body;

    // =====================================================
    // Validation
    // =====================================================

    if (!title || !blogType) {
      return NextResponse.json(
        {
          error:
            "Missing required fields. Please provide title and blogType.",
        },
        { status: 400 }
      );
    }

    // =====================================================
    // OPENAI IMPLEMENTATION (COMMENTED FOR FUTURE USE)
    // =====================================================

    /*
    import OpenAI from "openai";

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response =
      await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: userPrompt,
          },
        ],
        response_format: {
          type: "json_object",
        },
      });

    const responseText =
      response.choices?.[0]?.message?.content;
    */

    // =====================================================
    // GEMINI IMPLEMENTATION
    // =====================================================

    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash-lite",
    });

    const systemPrompt = `
You are an expert SEO strategist, keyword researcher, content marketer, and technical writer.

Your task is to create SEO-first blog articles with automatic keyword research and category determination.

You receive:
- Blog title
- Optional description/guidance
- Blog type (AI, Software, DevOps & Cloud, etc.)
- Target country (for localization)

YOU MUST DETERMINE:
1. Best primary keyword for SEO
2. Secondary keywords (related terms)
3. Target audience
4. Search intent
5. Article category
6. Meta description (under 160 chars)
7. URL slug
8. Tags

IMPORTANT:

The "content" field must be a valid JSON string.

Escape all double quotes inside content.

Do not output markdown outside the JSON object.

Return only a single valid JSON object.

Return ONLY valid JSON with this exact structure:

{
  "title": "The blog title",
  "excerpt": "One-sentence summary of the article",
  "seoDescription": "Under 160 character meta description for search engines",
  "slug": "url-slug-format",
  "primaryKeyword": "main keyword targeted",
  "secondaryKeywords": ["keyword1", "keyword2", "keyword3"],
  "category": "Determined category based on content",
  "content": "Markdown formatted body content",
  "faqs": [
    {
      "question": "FAQ question?",
      "answer": "FAQ answer with useful information"
    }
  ],
  "tags": ["tag1", "tag2", "tag3"]
}

CRITICAL REQUIREMENTS:

- Create SEO-first content that ranks well
- Perform automatic keyword research
- Generate 6-8 FAQs that address user search queries
- Use H2 and H3 headings in markdown
- Do NOT include H1 in content body
- Include practical examples and use cases
- Add statistics and data where relevant
- Create compelling, engaging copy
- Use bullet points for lists
- Avoid keyword stuffing
- Make content 2000+ words minimum
- Follow EEAT principles (Expertise, Authoritativeness, Trustworthiness)
- Optimize for featured snippets
- Include a strong introduction hook
- Add clear call-to-action sections

Localization:
- If targetCountry is Global: write for international audience
- Otherwise: include local examples, terminology, and country-specific insights
`;

    const userPrompt = `
TASK: Generate an SEO-optimized blog article

INPUTS PROVIDED:

Blog Title: ${title}

Description/Guidance: ${description || "Not provided - infer from title"}

Blog Type: ${blogType}

Target Country: ${targetCountry}

INSTRUCTIONS:

1. Analyze the title and determine the best primary keyword
2. Research and determine 5-7 secondary keywords
3. Identify the search intent (informational, commercial, transactional, navigational)
4. Determine the most appropriate category
5. Generate a compelling meta description under 160 characters
6. Create a SEO-friendly URL slug
7. Generate the complete blog article in markdown format
8. Create 6-8 relevant FAQs that people search for related to this topic
9. Generate relevant tags

The blog MUST be:
- Highly optimized for SEO
- Written for the determined target audience
- Focused on the primary keyword naturally
- Incorporating secondary keywords
- Rich with useful information
- Well-structured with headings
- Including practical examples
- At least 2000 words of quality content

${description ? `\nAdditional Context: ${description}` : ""}

Generate the complete SEO-optimized article now.
`;


    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `${systemPrompt}

${userPrompt}`,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.8,
        responseMimeType: "application/json",
      },
    });

    const responseText = result.response.text();

    if (!responseText) {
      return NextResponse.json(
        {
          error:
            "Received an empty response from Gemini.",
        },
        {
          status: 502,
        }
      );
    }

    let parsedBlog;

    try {
      parsedBlog = JSON.parse(responseText);
    } catch (parseError) {
      console.error(
        "Gemini JSON Parse Error:",
        parseError
      );

      return NextResponse.json(
        {
          error:
            "Failed to parse Gemini response as JSON.",
        },
        {
          status: 502,
        }
      );
    }

    // Safety defaults

    parsedBlog.faqs = parsedBlog.faqs || [];
    parsedBlog.tags = parsedBlog.tags || [];
    parsedBlog.secondaryKeywords = parsedBlog.secondaryKeywords || [];
    parsedBlog.category = parsedBlog.category || "Technology";
    parsedBlog.primaryKeyword = parsedBlog.primaryKeyword || "";

    return NextResponse.json(parsedBlog);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "An unexpected server error occurred.";
    console.error(
      "Generate Blog API Error:",
      errorMessage
    );

    return NextResponse.json(
      {
        error: errorMessage,
      },
      {
        status: 500,
      }
    );
  }
}