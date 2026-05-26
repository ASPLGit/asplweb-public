"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  BookOpen,
  Tag,
  Calendar,
  ChevronRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Plus,
  Trash2,
  ArrowLeft,
  Save,
  Settings,
  Eye,
  Code,
  Laptop,
  Smartphone,
  ExternalLink,
  Search,
  RefreshCw,
  FileText
} from "lucide-react";

// Types matching /types/app.ts
type BlogType =
  | "Software"
  | "Website"
  | "Application"
  | "QA & Testing"
  | "Microsoft"
  | "DevOps & Cloud"
  | "Salesforce"
  | "Cybersecurity"
  | "AI"
  | "Blockchain";

interface FAQ {
  question: string;
  answer: string;
}

interface BlogData {
  title: string;
  excerpt: string;
  seoDescription: string;
  slug: string;
  content: string;
  faqs: FAQ[];
  coverImage: string;
  date: string;
  category: string;
  blogType: BlogType;
  tags: string[];
}

export default function BlogGeneratorPage() {
  const router = useRouter();

  // --- State for Generation Form ---
  const [topic, setTopic] = useState("");
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("AI & ML");
  const [blogType, setBlogType] = useState<BlogType>("AI");
  const [tone, setTone] = useState("Professional & Informative");
  const [targetAudience, setTargetAudience] = useState("CTOs & Tech Leaders");

  // --- Loading / Flow states ---
  const [isGenerating, setIsGenerating] = useState(false);
  const [loadingStepIndex, setLoadingStepIndex] = useState(0);
  const [isPublishing, setIsPublishing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [publishedSlug, setPublishedSlug] = useState<string | null>(null);

  // --- Generated Blog Data State ---
  const [blogData, setBlogData] = useState<BlogData | null>(null);

  // --- UI Layout state ---
  const [editorTab, setEditorTab] = useState<"content" | "metadata" | "faqs">("content");
  const [previewTab, setPreviewTab] = useState<"render" | "raw">("render");
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "mobile">("desktop");
  const [faqOpenStates, setFaqOpenStates] = useState<Record<number, boolean>>({});

  // Loading Steps texts
  const loadingSteps = [
    "Contacting OpenAI GPT-4o-mini...",
    "Analyzing topic & keyword optimization...",
    "Structuring deep technical article outline...",
    "Drafting MDX body content with rich prose...",
    "Formulating helpful interactive FAQs...",
    "Executing SEO schema review & final adjustments..."
  ];

  // Simulating step-by-step progress while waiting for OpenAI API
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isGenerating) {
      setLoadingStepIndex(0);
      interval = setInterval(() => {
        setLoadingStepIndex((prev) => {
          if (prev < loadingSteps.length - 1) {
            return prev + 1;
          }
          return prev;
        });
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isGenerating]);

  // Handle generation call
  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic || !keyword) {
      setError("Please provide both a topic and a primary keyword.");
      return;
    }

    setIsGenerating(true);
    setError(null);
    setSuccessMessage(null);
    setBlogData(null);

    try {
      const response = await fetch("/api/generate-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic,
          keyword,
          category,
          tone,
          targetAudience,
        }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Failed to generate blog post.");
      }

      const data = await response.json();

      // Populate blog data state
      setBlogData({
        title: data.title || "",
        excerpt: data.excerpt || "",
        seoDescription: data.seoDescription || "",
        slug: data.slug || "",
        content: data.content || "",
        faqs: data.faqs || [],
        coverImage: "/images/blogs/ai.png",
        date: new Date().toISOString().split("T")[0],
        category: category,
        blogType: blogType,
        tags: [keyword.toLowerCase(), category.toLowerCase()],
      });
      setEditorTab("content");
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred during generation.");
    } finally {
      setIsGenerating(false);
    }
  };

  // Handle direct field updates
  const updateBlogField = (field: keyof BlogData, value: any) => {
    if (!blogData) return;
    setBlogData({
      ...blogData,
      [field]: value,
    });
  };

  // Manage FAQ edits
  const handleFaqChange = (index: number, key: "question" | "answer", value: string) => {
    if (!blogData) return;
    const newFaqs = [...blogData.faqs];
    newFaqs[index] = { ...newFaqs[index], [key]: value };
    updateBlogField("faqs", newFaqs);
  };

  const addFaqRow = () => {
    if (!blogData) return;
    const newFaqs = [...blogData.faqs, { question: "", answer: "" }];
    updateBlogField("faqs", newFaqs);
  };

  const removeFaqRow = (index: number) => {
    if (!blogData) return;
    const newFaqs = blogData.faqs.filter((_, idx) => idx !== index);
    updateBlogField("faqs", newFaqs);
  };

  // Toggle FAQ in preview panel
  const toggleFaqPreview = (index: number) => {
    setFaqOpenStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Handle MDX content editing textarea adjustments
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateBlogField("content", e.target.value);
  };

  // Handle save/publish call
  const handlePublish = async () => {
    if (!blogData) return;
    if (!blogData.title.trim() || !blogData.slug.trim() || !blogData.content.trim()) {
      setError("Title, slug, and markdown content cannot be empty.");
      return;
    }

    setIsPublishing(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch("/api/publish-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Failed to publish blog post.");
      }

      const resData = await response.json();
      setSuccessMessage("Blog post published successfully on disk!");
      setPublishedSlug(resData.slug);

      // Auto scroll to top of window to see the success state
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred while publishing.");
    } finally {
      setIsPublishing(false);
    }
  };

  // Dynamic Markdown preview generator
  const renderMockupMarkdown = (md: string) => {
    if (!md) return <p className="text-slate-400 italic">No content written yet.</p>;
    const lines = md.split("\n");
    let inList = false;
    let listItems: string[] = [];
    const elements: React.ReactNode[] = [];

    const flushList = (key: number) => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`ul-${key}`} className="list-disc pl-6 mb-6 space-y-2 text-slate-700 dark:text-slate-300">
            {listItems.map((item, idx) => (
              <li key={`li-${idx}`}>{item}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();
      if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        inList = true;
        listItems.push(trimmed.substring(2));
      } else {
        if (inList) {
          flushList(index);
        }

        if (trimmed.startsWith("## ")) {
          elements.push(
            <h2 key={index} className="text-2xl font-bold text-slate-900 mt-8 mb-4 border-b border-slate-100 pb-2">
              {trimmed.substring(3)}
            </h2>
          );
        } else if (trimmed.startsWith("### ")) {
          elements.push(
            <h3 key={index} className="text-xl font-semibold text-slate-800 mt-6 mb-3">
              {trimmed.substring(4)}
            </h3>
          );
        } else if (trimmed === "") {
          // empty space line
        } else {
          elements.push(
            <p key={index} className="text-slate-700 leading-relaxed mb-4 text-base">
              {trimmed}
            </p>
          );
        }
      }
    });

    if (inList) {
      flushList(lines.length);
    }

    return <div className="prose max-w-none">{elements}</div>;
  };

  // Compile final MDX representation for the Code block view
  const getRawMdxString = () => {
    if (!blogData) return "";
    const tagsJson = JSON.stringify(blogData.tags);

    let faqText = "";
    if (blogData.faqs.length > 0) {
      faqText = "\n\n## Frequently Asked Questions\n";
      blogData.faqs.forEach((faq) => {
        faqText += `\n### ${faq.question}\n\n${faq.answer}\n`;
      });
    }

    return `---
title: ${JSON.stringify(blogData.title)}
description: ${JSON.stringify(blogData.excerpt)}
date: ${JSON.stringify(blogData.date)}
tags: ${tagsJson}
coverImage: ${JSON.stringify(blogData.coverImage)}
category: ${JSON.stringify(blogData.category)}
blogType: ${JSON.stringify(blogData.blogType)}
---

${blogData.content.trim()}${faqText}`;
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 font-inter antialiased pb-20 pt-24 md:pt-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* --- Notifications/Alerts Block --- */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-xl flex items-start gap-3 animate-fadeIn">
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-red-800">Operation Error</h4>
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        )}

        {successMessage && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-5 rounded-xl flex items-start gap-4 animate-fadeIn shadow-sm">
            <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h4 className="font-bold text-emerald-800 text-lg">Action Successful!</h4>
              <p className="text-sm text-emerald-700">{successMessage}</p>
              {publishedSlug && (
                <div className="pt-2">
                  <Link
                    href={`/blogs/${publishedSlug}`}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 underline"
                  >
                    View Live Article <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        {/* --- MAIN LAYOUT GRID --- */}
        {!blogData && !isGenerating ? (

          /* =========================================================================
             STAGE 1: GENERATION FORM
             ========================================================================= */
          <div className="max-w-3xl mx-auto bg-white border border-slate-200 p-8 rounded-2xl shadow-sm relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Generate Blog Parameters</h2>
                <p className="text-slate-500 text-xs">Define options to structure a highly engaging, SEO-optimized post.</p>
              </div>
            </div>

            <form onSubmit={handleGenerate} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Topic */}
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                    Target Blog Topic / Title Idea <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Migration from WCF to modern gRPC on .NET 9"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 transition duration-300 outline-none text-sm"
                  />
                </div>

                {/* Focus Keyword */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                    Focus SEO Keyword <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. migrate wcf to grpc"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 transition duration-300 outline-none text-sm"
                  />
                </div>

                {/* Blog Type */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                    Primary Blog Type (Enum Sync)
                  </label>
                  <select
                    value={blogType}
                    onChange={(e) => setBlogType(e.target.value as BlogType)}
                    className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 rounded-xl px-4 py-3 text-slate-900 transition duration-300 outline-none text-sm"
                  >
                    <option value="AI">AI</option>
                    <option value="Software">Software</option>
                    <option value="DevOps & Cloud">DevOps & Cloud</option>
                    <option value="Microsoft">Microsoft</option>
                    <option value="Website">Website</option>
                    <option value="Application">Application</option>
                    <option value="QA & Testing">QA & Testing</option>
                    <option value="Salesforce">Salesforce</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Blockchain">Blockchain</option>
                  </select>
                </div>

                {/* Custom Category */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                    Category Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. .NET Migration"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 transition duration-300 outline-none text-sm"
                  />
                </div>

                {/* Writing Tone */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                    Tone of voice
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Professional, authoritative"
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 rounded-xl px-4 py-3 text-slate-900 transition duration-300 outline-none text-sm"
                  />
                </div>

                {/* Target Audience */}
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                    Target Audience
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Enterprise Architect, C-Suite, IT Lead"
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 rounded-xl px-4 py-3 text-slate-900 transition duration-300 outline-none text-sm"
                  />
                </div>

              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <span className="text-slate-400 text-xs italic">Powered by gpt-4o-mini</span>
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-sm hover:shadow-md active:scale-95 transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5"
                >
                  <Sparkles className="w-5 h-5 text-white" /> Generate Blog Draft
                </button>
              </div>
            </form>
          </div>

        ) : isGenerating ? (

          /* =========================================================================
             STAGE 2: STEP-BY-STEP PROGRESS LOADER
             ========================================================================= */
          <div className="max-w-2xl mx-auto bg-white border border-slate-200 p-8 rounded-2xl shadow-sm flex flex-col items-center justify-center space-y-8 min-h-[400px]">

            {/* Pulsing AI ring */}
            <div className="relative w-20 h-20 flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping" />
              <div className="absolute inset-2 bg-blue-600 rounded-full flex items-center justify-center" />
              <Sparkles className="w-8 h-8 text-white relative z-10 star-animate" />
            </div>

            <div className="text-center space-y-2">
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 animate-pulse">Drafting Article Content</h2>
              <p className="text-slate-500 text-sm max-w-md mx-auto">
                OpenAI is busy generating copy, SEO keywords, headers, and FAQs based on your input.
              </p>
            </div>

            {/* Steps tracker card */}
            <div className="w-full max-w-md bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-4">
              {loadingSteps.map((step, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-3">
                    {idx < loadingStepIndex ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : idx === loadingStepIndex ? (
                      <Loader2 className="w-4 h-4 text-blue-600 animate-spin shrink-0" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-slate-300 shrink-0" />
                    )}
                    <span className={`${idx === loadingStepIndex ? "text-slate-900 font-semibold" : idx < loadingStepIndex ? "text-slate-400" : "text-slate-500"}`}>
                      {step}
                    </span>
                  </div>
                  {idx < loadingStepIndex && <span className="text-emerald-600 text-[10px] font-bold uppercase tracking-wider">Done</span>}
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="w-full max-w-md bg-slate-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-blue-600 h-full transition-all duration-700"
                style={{ width: `${((loadingStepIndex + 1) / loadingSteps.length) * 100}%` }}
              />
            </div>

            <p className="text-slate-400 text-xs italic">Usually takes about 10-25 seconds.</p>
          </div>

        ) : (

          /* =========================================================================
             STAGE 3: SPLIT-SCREEN INTERACTIVE EDITOR & LIVE PREVIEW
             ========================================================================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* ==================== LEFT COLUMN: EDITOR PANEL ==================== */}
            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">

              {/* Tab Navigation header */}
              <div className="bg-slate-50 border-b border-slate-200 p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setEditorTab("content")}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${editorTab === "content" ? "bg-white border border-slate-200 text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-800 hover:bg-slate-100/50"
                      }`}
                  >
                    Content Editor
                  </button>
                  <button
                    onClick={() => setEditorTab("metadata")}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${editorTab === "metadata" ? "bg-white border border-slate-200 text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-800 hover:bg-slate-100/50"
                      }`}
                  >
                    SEO & Metadata
                  </button>
                  <button
                    onClick={() => setEditorTab("faqs")}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${editorTab === "faqs" ? "bg-white border border-slate-200 text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-800 hover:bg-slate-100/50"
                      }`}
                  >
                    FAQs ({blogData?.faqs.length || 0})
                  </button>
                </div>
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 hidden sm:inline flex-shrink-0">
                  Editable Fields
                </span>
              </div>

              {/* Editor Tabs Body */}
              <div className="p-6 space-y-6">

                {blogData && editorTab === "content" && (
                  <div className="space-y-6 animate-fadeIn">

                    {/* Blog Title */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                        Blog Title
                      </label>
                      <input
                        type="text"
                        value={blogData.title}
                        onChange={(e) => updateBlogField("title", e.target.value)}
                        className="w-full bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-100 rounded-xl px-4 py-3 text-slate-800 text-base font-semibold outline-none transition duration-200"
                      />
                    </div>

                    {/* Blog Excerpt */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                        Excerpt / Description
                      </label>
                      <textarea
                        rows={3}
                        value={blogData.excerpt}
                        onChange={(e) => updateBlogField("excerpt", e.target.value)}
                        className="w-full bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-100 rounded-xl px-4 py-3 text-slate-800 text-sm outline-none transition resize-none leading-relaxed duration-200"
                      />
                    </div>

                    {/* Blog Body markdown text */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                          Markdown Body Text
                        </label>
                        <span className="text-slate-400 text-[10px] italic">Supports markdown tags</span>
                      </div>
                      <textarea
                        rows={16}
                        value={blogData.content}
                        onChange={handleContentChange}
                        className="w-full bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-100 rounded-xl px-4 py-4 text-slate-800 text-sm font-mono outline-none transition leading-relaxed duration-200"
                      />
                    </div>

                  </div>
                )}

                {blogData && editorTab === "metadata" && (
                  <div className="space-y-6 animate-fadeIn">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                      {/* URL Slug */}
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                          URL Slug (Lowercase Alphanumeric / Hyphens)
                        </label>
                        <input
                          type="text"
                          value={blogData.slug}
                          onChange={(e) => updateBlogField("slug", e.target.value)}
                          className="w-full bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-100 rounded-xl px-4 py-3 text-slate-800 text-sm font-mono outline-none transition duration-200"
                        />
                      </div>

                      {/* Cover Image Url */}
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                          Cover Image Path
                        </label>
                        <input
                          type="text"
                          value={blogData.coverImage}
                          onChange={(e) => updateBlogField("coverImage", e.target.value)}
                          className="w-full bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-100 rounded-xl px-4 py-3 text-slate-800 text-sm outline-none transition duration-200"
                        />
                      </div>

                      {/* Category */}
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                          Category
                        </label>
                        <input
                          type="text"
                          value={blogData.category}
                          onChange={(e) => updateBlogField("category", e.target.value)}
                          className="w-full bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-100 rounded-xl px-4 py-3 text-slate-800 text-sm outline-none transition duration-200"
                        />
                      </div>

                      {/* Blog Type */}
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                          Blog Type
                        </label>
                        <select
                          value={blogData.blogType}
                          onChange={(e) => updateBlogField("blogType", e.target.value as BlogType)}
                          className="w-full bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-100 rounded-xl px-4 py-3 text-slate-800 text-sm outline-none transition duration-200"
                        >
                          <option value="AI">AI</option>
                          <option value="Software">Software</option>
                          <option value="DevOps & Cloud">DevOps & Cloud</option>
                          <option value="Microsoft">Microsoft</option>
                          <option value="Website">Website</option>
                          <option value="Application">Application</option>
                          <option value="QA & Testing">QA & Testing</option>
                          <option value="Salesforce">Salesforce</option>
                          <option value="Cybersecurity">Cybersecurity</option>
                          <option value="Blockchain">Blockchain</option>
                        </select>
                      </div>

                      {/* Date */}
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                          Published Date
                        </label>
                        <input
                          type="date"
                          value={blogData.date}
                          onChange={(e) => updateBlogField("date", e.target.value)}
                          className="w-full bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-100 rounded-xl px-4 py-3 text-slate-800 text-sm outline-none transition duration-200"
                        />
                      </div>

                      {/* Tags (Comma Separated) */}
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                          Tags (comma-separated list)
                        </label>
                        <input
                          type="text"
                          value={blogData.tags.join(", ")}
                          onChange={(e) => {
                            const inputTags = e.target.value.split(",").map((tag) => tag.trim());
                            updateBlogField("tags", inputTags);
                          }}
                          className="w-full bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-100 rounded-xl px-4 py-3 text-slate-800 text-sm outline-none transition duration-200"
                        />
                      </div>

                      {/* SEO Description */}
                      <div className="space-y-2 md:col-span-2">
                        <div className="flex justify-between">
                          <label className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                            SEO Meta Description (under 160 chars)
                          </label>
                          <span className={`${blogData.seoDescription.length > 160 ? "text-amber-600" : "text-slate-400"} text-[10px] font-bold`}>
                            {blogData.seoDescription.length} / 160
                          </span>
                        </div>
                        <textarea
                          rows={2}
                          value={blogData.seoDescription}
                          onChange={(e) => updateBlogField("seoDescription", e.target.value)}
                          className="w-full bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-100 rounded-xl px-4 py-3 text-slate-800 text-sm outline-none transition resize-none duration-200"
                        />
                      </div>

                    </div>
                  </div>
                )}

                {blogData && editorTab === "faqs" && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">Interactive FAQs</h4>
                        <p className="text-slate-500 text-xs">These will append to the markdown content dynamically when saving.</p>
                      </div>
                      <button
                        onClick={addFaqRow}
                        className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 rounded-lg text-xs font-bold transition flex items-center gap-1"
                      >
                        <Plus className="w-3.5 h-3.5" /> Add FAQ
                      </button>
                    </div>

                    {blogData.faqs.length === 0 ? (
                      <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl text-center">
                        <p className="text-slate-400 text-sm italic">No FAQs configured yet. Click 'Add FAQ' to insert a question row.</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {blogData.faqs.map((faq, idx) => (
                          <div
                            key={idx}
                            className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-3 relative group"
                          >
                            <button
                              onClick={() => removeFaqRow(idx)}
                              className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition p-1 hover:bg-red-500/10 rounded"
                              title="Delete FAQ"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>

                            <div className="space-y-1.5 pr-8">
                              <label className="text-[10px] uppercase font-bold text-slate-500">
                                Question #{idx + 1}
                              </label>
                              <input
                                type="text"
                                value={faq.question}
                                onChange={(e) => handleFaqChange(idx, "question", e.target.value)}
                                className="w-full bg-white border border-slate-200 focus:border-blue-500 rounded-lg px-3 py-2 text-slate-800 text-xs outline-none transition"
                                placeholder="e.g. What is the main benefit?"
                              />
                            </div>

                            <div className="space-y-1.5">
                              <label className="text-[10px] uppercase font-bold text-slate-500">
                                Answer
                              </label>
                              <textarea
                                rows={2}
                                value={faq.answer}
                                onChange={(e) => handleFaqChange(idx, "answer", e.target.value)}
                                className="w-full bg-white border border-slate-200 focus:border-blue-500 rounded-lg px-3 py-2 text-slate-800 text-xs outline-none transition resize-none leading-relaxed"
                                placeholder="Write the concise answer here..."
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

              </div>
            </div>

            {/* ==================== RIGHT COLUMN: PREVIEW PANEL ==================== */}
            <div className="lg:col-span-6 space-y-4">

              {/* Tab Navigation header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                {/* Tabs selection */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 border border-slate-200 rounded-xl max-w-fit">
                  <button
                    onClick={() => setPreviewTab("render")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${previewTab === "render" ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-800"
                      }`}
                  >
                    <Eye className="w-3.5 h-3.5" /> Reader View
                  </button>
                  <button
                    onClick={() => setPreviewTab("raw")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${previewTab === "raw" ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-800"
                      }`}
                  >
                    <Code className="w-3.5 h-3.5" /> Raw MDX Output
                  </button>
                </div>

                {/* Device controls for Reader Preview */}
                {previewTab === "render" && (
                  <div className="flex items-center gap-1 bg-slate-100 p-1 border border-slate-200 rounded-xl max-w-fit">
                    <button
                      onClick={() => setPreviewDevice("desktop")}
                      className={`p-1.5 rounded-lg transition ${previewDevice === "desktop" ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-800"
                        }`}
                      title="Desktop view"
                    >
                      <Laptop className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setPreviewDevice("mobile")}
                      className={`p-1.5 rounded-lg transition ${previewDevice === "mobile" ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-800"
                        }`}
                      title="Mobile view"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>

              {/* TAB 1: RENDERED SIMULATOR VIEW */}
              {previewTab === "render" && blogData && (
                <div
                  className={`mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 ${previewDevice === "mobile" ? "max-w-[360px]" : "w-full"
                    }`}
                >
                  {/* Browser Bar */}
                  <div className="bg-slate-100 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <div className="w-2.5 h-2.5 bg-red-400 rounded-full" />
                      <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
                      <div className="w-2.5 h-2.5 bg-green-400 rounded-full" />
                    </div>

                    <div className="bg-white text-[10px] text-slate-600 font-mono py-1 px-3 rounded-lg flex items-center gap-1 border border-slate-200 w-full max-w-xs justify-center overflow-hidden whitespace-nowrap text-ellipsis">
                      <Search className="w-3 h-3 text-slate-400" />
                      aplombsoft.com/blogs/{blogData.slug || "new-post"}
                    </div>

                    <div className="w-6 shrink-0" />
                  </div>

                  {/* Browser Content Simulator (Light theme inside to match user blogs!) */}
                  <div className="bg-white text-slate-900 h-[650px] overflow-y-auto p-6 sm:p-8 scrollbar-thin scrollbar-thumb-slate-200">
                    <div className="space-y-6 max-w-2xl mx-auto">

                      {/* Top Type Tag */}
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full w-fit">
                        {blogData.blogType}
                      </span>

                      {/* Header Title */}
                      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                        {blogData.title || <span className="text-slate-300 italic">Untitled Article</span>}
                      </h1>

                      {/* Excerpt Summary */}
                      {blogData.excerpt && (
                        <p className="text-slate-500 italic text-sm border-l-2 border-slate-200 pl-4 py-1 leading-relaxed">
                          {blogData.excerpt}
                        </p>
                      )}

                      {/* Metadata row */}
                      <div className="flex items-center gap-4 text-xs text-slate-400 border-b border-slate-100 pb-4">
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {new Date(blogData.date).toDateString()}</span>
                        <span className="flex items-center gap-1"><Tag className="w-3.5 h-3.5" /> {blogData.category}</span>
                      </div>

                      {/* Cover Image Placeholder */}
                      <div className="relative w-full h-[220px] bg-slate-100 rounded-xl overflow-hidden flex flex-col items-center justify-center border border-slate-200">
                        <FileText className="w-12 h-12 text-slate-300 mb-2" />
                        <span className="text-slate-400 text-xs font-mono">{blogData.coverImage}</span>
                        <div className="absolute bottom-2 left-2 bg-slate-950/70 text-[9px] font-bold text-white px-2 py-0.5 rounded">Cover Image</div>
                      </div>

                      {/* Markdown rendered paragraphs */}
                      <div className="text-slate-700 leading-relaxed text-sm space-y-4">
                        {renderMockupMarkdown(blogData.content)}
                      </div>

                      {/* FAQs section in simulator */}
                      {blogData.faqs.length > 0 && (
                        <div className="pt-8 border-t border-slate-100 space-y-4">
                          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                            Frequently Asked Questions
                          </h3>

                          <div className="space-y-3">
                            {blogData.faqs.map((faq, idx) => {
                              const isOpen = !!faqOpenStates[idx];
                              return (
                                <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
                                  <button
                                    onClick={() => toggleFaqPreview(idx)}
                                    className="w-full text-left px-4 py-3 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-800 hover:bg-slate-100 transition"
                                  >
                                    <span>{faq.question || `Question #${idx + 1}`}</span>
                                    <span className="text-slate-400 transition transform duration-200 shrink-0 ml-2">
                                      {isOpen ? "−" : "+"}
                                    </span>
                                  </button>
                                  {isOpen && (
                                    <div className="px-4 pb-3 text-slate-600 text-xs sm:text-sm border-t border-slate-100 pt-2 bg-white leading-relaxed">
                                      {faq.answer || <span className="italic text-slate-400">Empty answer</span>}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Tags list footer */}
                      {blogData.tags && blogData.tags.length > 0 && (
                        <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-1.5 items-center">
                          <span className="text-[10px] uppercase font-bold text-slate-400 mr-1.5">Tags:</span>
                          {blogData.tags.map((tag, idx) => (
                            <span key={idx} className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: RAW CODE OUTPUT VIEW */}
              {previewTab === "raw" && blogData && (
                <div className="bg-slate-950 border border-slate-200 rounded-2xl p-6 shadow-sm h-[695px] overflow-hidden flex flex-col space-y-3 relative font-mono">

                  <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
                    <span>content/blog/{blogData.slug || "new-post"}.mdx</span>
                    <span className="text-blue-400 font-bold uppercase tracking-wider text-[10px]">MDX YAML Frontmatter</span>
                  </div>

                  <pre className="flex-1 overflow-auto text-slate-300 text-xs leading-relaxed scrollbar-thin scrollbar-thumb-slate-800 pr-2">
                    <code>{getRawMdxString()}</code>
                  </pre>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(getRawMdxString());
                      alert("MDX content copied to clipboard!");
                    }}
                    className="absolute top-4 right-4 bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-800 hover:text-white px-2.5 py-1 rounded text-[10px] font-bold transition uppercase tracking-wider"
                  >
                    Copy Code
                  </button>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
