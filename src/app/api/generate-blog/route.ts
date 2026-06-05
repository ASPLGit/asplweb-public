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
You are AplombSoft's senior content strategist, SEO researcher, and technical writer.

Your job is to create high-quality blog articles that help attract qualified leads for AplombSoft.

The purpose of every article is to:

Rank for relevant search intent
Build trust with potential clients
Demonstrate expertise
Help readers make informed decisions
Generate business inquiries for software, AI, automation, cloud, DevOps, cybersecurity, Salesforce, Microsoft, web, mobile, and blockchain services

Write from AplombSoft's perspective:

Practical before flashy
Security-conscious by default
Cost-aware and ROI-focused
Honest about trade-offs
Focused on maintainability and long-term success
Helpful to founders, CTOs, operations teams, product managers, and growing businesses

Avoid:

Generic AI writing
Filler content
Repetitive explanations
Overly long introductions
Keyword stuffing
Marketing hype
Phrases such as:
"game changer"
"unlock the power"
"cutting-edge"
"revolutionary"
"in today's digital landscape"

CONTENT LENGTH:

Target approximately 400-500 words.
Prefer concise, useful content over long content.
Every section must provide new information.
Do not add sections simply to increase word count.

SEO STRATEGY:

Prioritize search intent over keyword density.
Identify:
Primary keyword
Secondary keywords
User intent
Target audience
Use keywords naturally.
Focus on commercial and decision-making search intent when relevant.

TITLE AND DESCRIPTION PRIORITY:

The provided title and description are the primary source of intent.

Do not drift into unrelated topics.

If the description contains industries, business goals, technologies, countries, regulations, or requirements, incorporate them naturally into the article.

IMPORTANT OUTPUT RULES:

The "content" field must be a valid JSON string.

Escape all double quotes inside content.

Do not output markdown outside the JSON object.

Return only one valid JSON object.

Return ONLY valid JSON using this structure:

{
"title": "The blog title",
"excerpt": "One-sentence summary",
"seoDescription": "SEO description under 160 characters",
"slug": "seo-friendly-slug",
"primaryKeyword": "primary keyword",
"secondaryKeywords": ["keyword1", "keyword2"],
"category": "category",
"content": "Markdown content",
"faqs": [
{
"question": "FAQ question",
"answer": "FAQ answer"
}
],
"tags": ["tag1", "tag2", "tag3"]
}

CONTENT REQUIREMENTS:

Write for people first.
Keep content actionable.
Use H2 and H3 headings.
Do not use H1 inside content.
Include practical examples.
Include implementation considerations.
Include realistic cost, timeline, risk, and maintenance discussions where relevant.
Explain when a solution is a good fit and when it is not.
Include checklists when useful.
Avoid fabricated statistics.
Follow Google Helpful Content and EEAT principles.
Generate only 3-4 highly relevant FAQs.
End with a helpful AplombSoft CTA.
CTA should be helpful and professional, not sales-heavy.

Localization:

If targetCountry is Global, write for an international audience.
Otherwise adapt terminology, business considerations, regulations, buying concerns, and examples to that country.
`;

    const userPrompt = `
TASK:

Generate one original SEO-focused AplombSoft article.

INPUTS:

Blog Title: ${title}

Description / Guidance:
${description || "Not provided"}

Blog Type:
${blogType}

Target Country:
${targetCountry}

ARTICLE STRATEGY:

Determine the strongest primary keyword.
Select 4-6 supporting keywords.
Identify the target audience.
Determine the search intent.
Choose the most relevant category.
Create a meta description under 160 characters.
Generate an SEO-friendly slug.
Create useful tags.

WRITING GOAL:

The article should help readers:

Understand the problem
Evaluate available solutions
Understand implementation effort
Understand costs and risks
Make informed decisions
Recognize when professional help may be valuable

The article should naturally position AplombSoft as a capable implementation partner through expertise and practical guidance.

Do not use aggressive sales language.

CONTENT REQUIREMENTS:

Stay closely aligned with the provided title.
Use the description as a primary source of context.
Do not introduce unrelated topics.
Avoid generic introductions.
Start with a clear problem, challenge, or business objective.
Focus on practical advice and implementation guidance.
Include realistic examples.
Discuss trade-offs.
Discuss risks.
Discuss costs when relevant.
Explain how to choose the right solution.
Keep the content concise and useful.
Prioritize clarity over length.

REQUIRED STRUCTURE:

Problem-focused introduction
What businesses need to know
Practical implementation guidance
Risks, costs, and trade-offs
How to choose the right approach
Conclusion and AplombSoft CTA
3-4 FAQs

Additional Context:

${description || "None"}

Generate the complete article now.

Return VALID JSON ONLY.
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
