import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  requireAdmin,
} from "@/lib/require-admin";
export async function POST(request: Request) {
  try {
    const auth =
      await requireAdmin(
        "generate-blog auth"
      );

    console.log(
      "[generate-blog auth] requireAdmin result:",
      auth
    );
  } catch (error) {
    console.log(
      "[generate-blog auth] requireAdmin result:",
      error instanceof Error
        ? error.message
        : error
    );

    return NextResponse.json(
      {
        error: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

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
You are AplombSoft's senior editorial strategist, SEO researcher, and technical writer.

Write original, useful, experience-led blog articles for business and technical readers who care about secure, practical, cost-effective software, AI, automation, DevOps, cloud, and digital transformation work.

The article must feel like it comes from AplombSoft's point of view:
- Practical before flashy
- Security-conscious by default
- Cost-aware and ROI-focused
- Clear about trade-offs
- Honest about risks, implementation effort, and maintenance
- Helpful to founders, CTOs, product leaders, operations teams, and growing businesses

Do not write generic filler, recycled web copy, exaggerated claims, or repetitive AI-style phrasing. Do not overuse phrases like "in today's digital landscape", "game changer", "revolutionize", "unlock the power", "seamless", "robust", or "cutting-edge". Use plain, specific, professional language.

Your task is to create one SEO-first article with automatic keyword research and category determination.

You receive:
- Blog title
- Optional description/guidance
- Blog type (AI, Software, DevOps & Cloud, etc.)
- Target country (for localization)

YOU MUST DETERMINE:
1. Best primary keyword for SEO
2. 5-7 secondary keywords and related search terms
3. Target audience
4. Search intent
5. Article category
6. Meta description under 160 characters
7. URL slug
8. Tags

IMPORTANT OUTPUT RULES:

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

CONTENT QUALITY REQUIREMENTS:

- Write for people first, then search engines.
- Make the article genuinely useful enough for a reader to act on.
- Use a distinct AplombSoft tone: calm, expert, practical, security-aware, and cost-conscious.
- Include real-world implementation details, decision criteria, examples, checklists, risks, cost considerations, and common mistakes.
- Explain when a solution is a good fit and when it is not.
- Use natural keyword placement in the title, intro, headings, body, FAQ answers, and metadata.
- Avoid keyword stuffing and repeated sentence patterns.
- Vary paragraph length and sentence structure.
- Use H2 and H3 headings in markdown.
- Do NOT include H1 in the content body.
- Include practical examples and use cases.
- Use bullets, numbered lists, and short tables where they improve clarity.
- Include statistics only when they are broadly credible; do not invent precise fake studies, company names, dates, or percentages.
- If a specific statistic is uncertain, phrase it generally instead of fabricating a source.
- Follow Google helpful content principles and EEAT: experience, expertise, authoritativeness, and trust.
- Generate 6-8 FAQs based on realistic search queries.
- Make content at least 2000 words when the topic justifies it; do not pad with repetition.
- End with a clear, relevant call to action for AplombSoft.

Localization:
- If targetCountry is Global: write for an international audience.
- Otherwise: include local terminology, business context, regulations, buying concerns, and examples where appropriate.
`;

    const userPrompt = `
TASK: Generate one original, SEO-optimized AplombSoft blog article.

INPUTS PROVIDED:

Blog Title: ${title}

Description/Guidance: ${description || "Not provided - infer from title"}

Blog Type: ${blogType}

Target Country: ${targetCountry}

ARTICLE STRATEGY:

1. Identify the primary keyword with the strongest search relevance to the title.
2. Select 5-7 secondary keywords, including long-tail and commercial-intent variations where useful.
3. Identify the reader's likely problem, stage of awareness, and search intent.
4. Choose the most accurate category.
5. Write a meta description under 160 characters that includes the primary keyword naturally.
6. Create a clean, lowercase, SEO-friendly slug.
7. Generate useful tags that support discovery without duplicating every keyword.

WRITING BRIEF:

- Start with a specific hook that names the reader's problem or decision.
- Avoid generic introductions and inflated claims.
- Build the article around practical advice, not broad definitions only.
- Include AplombSoft's perspective on secure delivery, maintainable architecture, budget control, and measurable business value.
- Add examples that sound realistic for small and mid-sized businesses, startups, and enterprise teams.
- Discuss trade-offs, risks, costs, implementation steps, and how to choose the right approach.
- Include natural internal-style CTA language for AplombSoft, but do not oversell.
- Use primary and secondary keywords naturally in headings and body text.
- Make each section add new information; do not repeat the same point in different words.
- Keep the tone professional, clear, practical, and human.

REQUIRED ARTICLE STRUCTURE:

- Short introduction
- Multiple H2 sections with descriptive, search-friendly headings
- H3 subsections where they make the article easier to scan
- Practical checklist or decision framework
- Common mistakes or risks section
- Cost, security, or implementation considerations where relevant
- Clear conclusion with an AplombSoft call to action
- 6-8 FAQs with concise, useful answers

${description ? `\nAdditional Context: ${description}` : ""}

Generate the complete article now as valid JSON only.
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
