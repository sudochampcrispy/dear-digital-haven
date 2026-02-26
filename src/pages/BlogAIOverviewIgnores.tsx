import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { personSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { ArrowLeft, Calendar, Clock, User, ExternalLink, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "Blog", url: "https://seoexpertinkarachi.com/blog" },
  { name: "5 Websites AI Overview Ignores", url: "https://seoexpertinkarachi.com/blog/websites-ai-overview-ignores" },
]);

const webPage = buildWebPage({
  name: "5 Types of Websites AI Overview Deliberately Ignores in 2026",
  description: "AI Overview skips thin content, AI spam, affiliate-only sites, zero-entity brands, and inconsistent niche blogs. Learn exactly why and how to fix each issue.",
  url: "https://seoexpertinkarachi.com/blog/websites-ai-overview-ignores",
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "5 Types of Websites AI Overview Deliberately Ignores in 2026",
  description: "AI Overview skips thin content, AI spam, affiliate-only sites, zero-entity brands, and inconsistent niche blogs. Learn exactly why and how to fix each issue.",
  author: { "@type": "Person", name: "Naveed Ganatra" },
  publisher: { "@id": "https://seoexpertinkarachi.com/#organization" },
  datePublished: "2026-02-22",
  dateModified: "2026-02-22",
  mainEntityOfPage: "https://seoexpertinkarachi.com/blog/websites-ai-overview-ignores",
  video: {
    "@type": "VideoObject",
    name: "Why YouTube Is #1 Source for AI Search Citations (2026)",
    description: "AI Overview ignores 5 types of websites. This video explains the trust signals AI requires.",
    thumbnailUrl: "https://img.youtube.com/vi/_jLgM5atupw/maxresdefault.jpg",
    uploadDate: "2026-02-22",
    contentUrl: "https://youtube.com/shorts/_jLgM5atupw",
    embedUrl: "https://www.youtube.com/embed/_jLgM5atupw",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why does AI Overview ignore some websites that rank on page 1?",
      acceptedAnswer: { "@type": "Answer", text: "AI Overview evaluates trust, entity signals, and topical authority independently from traditional ranking factors. A page ranking on page 1 through backlinks alone lacks the semantic depth AI requires for citation." },
    },
    {
      "@type": "Question",
      name: "What is an entity signal in SEO?",
      acceptedAnswer: { "@type": "Answer", text: "An entity signal is a verifiable digital footprint — brand mentions across authoritative platforms, structured author profiles, consistent NAP data, social proof, and knowledge panel presence. These signals confirm a website represents a real, trustworthy entity." },
    },
    {
      "@type": "Question",
      name: "How do I fix thin content for AI Overview inclusion?",
      acceptedAnswer: { "@type": "Answer", text: "Replace 800-word generic articles with 2,000+ word comprehensive guides covering subtopics, real examples, original data, expert commentary, and semantic entity coverage. Each page must fully satisfy the user's search intent." },
    },
    {
      "@type": "Question",
      name: "Does AI Overview penalize affiliate websites?",
      acceptedAnswer: { "@type": "Answer", text: "AI Overview does not penalize affiliate sites explicitly. It ignores pages where the primary purpose is selling rather than informing. Affiliate content that provides genuine comparative analysis, original testing data, and unbiased recommendations can qualify for AI citations." },
    },
  ],
};

const ignoredTypes = [
  {
    icon: XCircle,
    title: "Thin Content Websites",
    problem: "Pages with 800–1,000 words of generic, keyword-stuffed text provide zero informational depth.",
    why: "AI Overview extracts answers from passages with high entity density, contextual coverage, and factual specificity. Generic articles lack these 3 requirements. The retrieval cost exceeds the informational value.",
    fix: "Create comprehensive content exceeding 2,000 words with specific data points, real examples, and complete subtopic coverage. Every paragraph must add unique informational value.",
  },
  {
    icon: XCircle,
    title: "Pure AI-Generated Spam Sites",
    problem: "Content without depth, real examples, author identity, or source citations follows detectable template patterns.",
    why: "AI recognizes scalable template content through 4 signals: repetitive sentence structures, absence of first-person expertise, generic transitional phrases, and zero cited sources. These patterns trigger low-trust classification.",
    fix: "Add original research, personal case studies, expert commentary, and verifiable data. Establish clear author profiles with credentials linked to real entities.",
  },
  {
    icon: XCircle,
    title: "Affiliate-Only Websites",
    problem: "Every page exists to sell — information serves as a sales funnel rather than genuine user education.",
    why: "AI Overview's purpose is answering questions, not driving purchases. Pages where commercial intent dominates informational intent fail the trust evaluation. AI distinguishes between 'inform-first' and 'sell-first' content architectures.",
    fix: "Balance commercial and informational content at a 30:70 ratio. Lead with genuine comparative analysis, original testing results, and unbiased recommendations before any affiliate links.",
  },
  {
    icon: XCircle,
    title: "No Entity Signal Websites",
    problem: "The brand has zero mentions across authoritative platforms, no strong author profiles, and no social proof.",
    why: "AI validates entities through cross-platform verification. A website without external entity signals — knowledge panels, brand mentions on news sites, LinkedIn profiles, YouTube presence — lacks the trust infrastructure AI requires for citation.",
    fix: "Build entity signals across 5+ platforms: Google Business Profile, LinkedIn, YouTube, industry directories, and authoritative guest publications. Create structured author pages with verifiable credentials.",
  },
  {
    icon: XCircle,
    title: "Inconsistent Niche Sites",
    problem: "Publishing health content today, cryptocurrency tomorrow, and travel next week destroys topical coherence.",
    why: "AI evaluates topical authority — the depth and consistency of expertise within a specific subject. Random blogging across unrelated topics produces zero topical authority. Each off-topic article dilutes the site's semantic relevance score.",
    fix: "Choose 1 primary topic and build a topical map with 50+ interlinked pages covering every subtopic. Establish hub-and-spoke content architecture within your niche.",
  },
];

const BlogAIOverviewIgnores = () => (
  <Layout>
    <SeoHead
      title="5 Types of Websites AI Overview Deliberately Ignores (2026)"
      description="AI Overview skips thin content, AI spam, affiliate-only sites, zero-entity brands, and inconsistent niche blogs. Learn exactly why and how to fix each issue."
      canonical="https://seoexpertinkarachi.com/blog/websites-ai-overview-ignores"
    />
    <JsonLd data={articleSchema} />
    <JsonLd data={personSchema} />
    <JsonLd data={breadcrumb} />
    <JsonLd data={webPage} />
    <JsonLd data={faqSchema} />

    <main>
      {/* Hero */}
      <section className="section-padding surface-sunken">
        <div className="section-container max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4">AI & SEO</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            5 Types of Websites AI Overview Deliberately Ignores in 2026
          </h1>
          <p className="text-lg text-body font-medium mb-6">
            Your website ranks on page 1 — yet AI Overview never cites it. The problem is not SEO. <strong>The problem is trust.</strong>
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-subtle">
            <span className="flex items-center gap-1"><User className="h-4 w-4" /> Naveed Ganatra</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> February 22, 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 8 min read</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <article className="space-y-10">

            {/* Video Embed */}
            <div className="rounded-xl overflow-hidden border border-border bg-card">
              <div className="aspect-[9/16] max-w-[360px] mx-auto">
                <iframe
                  src="https://www.youtube.com/embed/_jLgM5atupw"
                  title="5 Types of Websites AI Overview Ignores — Naveed Ganatra"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <p className="text-center text-xs text-subtle py-3">Watch the original video breakdown on YouTube</p>
            </div>

            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-heading mb-4">AI Overview Ranking Is a Trust Game — Not a Keywords Game</h2>
              <p className="text-body mb-4">
                Google's AI Overview selects citation sources based on <strong>entity trust, topical authority, and semantic depth</strong> — 3 factors that operate independently from traditional ranking signals like backlinks and domain authority.
              </p>
              <p className="text-body">
                A website can hold position 1 for a target keyword and still receive zero AI Overview citations. The reason: AI evaluates whether the source is a <strong>trusted entity</strong> with consistent expertise, not merely a page with optimized on-page SEO.
              </p>
            </div>

            {/* 5 Types */}
            <div>
              <h2 className="text-2xl font-bold text-heading mb-6">The 5 Website Types AI Overview Skips</h2>
              <div className="space-y-8">
                {ignoredTypes.map((type, i) => (
                  <div key={type.title} className="metric-card">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-destructive/10 text-destructive font-bold text-sm">{i + 1}</span>
                      <h3 className="text-xl font-bold text-heading">{type.title}</h3>
                    </div>
                    <div className="space-y-3 pl-11">
                      <div>
                        <p className="text-xs font-semibold text-destructive uppercase tracking-wide mb-1">The Problem</p>
                        <p className="text-body">{type.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Why AI Ignores It</p>
                        <p className="text-body">{type.why}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">How to Fix It</p>
                        <p className="text-body">{type.fix}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Insight */}
            <div className="metric-card bg-primary/5 border-primary/20">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-heading mb-2">The Core Insight</h2>
                  <p className="text-body text-lg">
                    AI Overview is not a ranking game. <strong>AI Overview is a trust game.</strong> Websites that fail to establish themselves as verified, consistent, topically authoritative entities receive zero AI citations — regardless of their Google search position.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Checklist */}
            <div>
              <h2 className="text-2xl font-bold text-heading mb-4">AI Trust Checklist: 7 Requirements for Citation Eligibility</h2>
              <div className="space-y-3">
                {[
                  "Content depth exceeds 2,000 words with specific data, examples, and subtopic coverage",
                  "Author profiles link to verifiable credentials across LinkedIn, YouTube, and industry platforms",
                  "Brand entity appears on 5+ authoritative external platforms with consistent information",
                  "Every page targets a single macro context with complete semantic coverage",
                  "Content provides answers upfront — no filler introductions or delayed responses",
                  "Zero AI-generated template patterns — each article contains original analysis and expert perspective",
                  "Topical map covers 50+ interlinked pages within one consistent niche",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-body">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-bold text-heading mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqSchema.mainEntity.map((faq) => (
                  <details key={faq.name} className="group metric-card">
                    <summary className="cursor-pointer font-semibold text-heading list-none flex items-center justify-between">
                      {faq.name}
                      <span className="ml-4 text-primary text-xl group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="mt-3 text-sm text-body">{faq.acceptedAnswer.text}</p>
                  </details>
                ))}
              </div>
            </div>

            {/* Author + Links */}
            <div className="flex flex-wrap gap-4">
              <a href="https://youtube.com/shorts/_jLgM5atupw" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                <ExternalLink className="h-4 w-4" /> Watch on YouTube
              </a>
              <a href="https://www.youtube.com/@naveedganatra" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                <ExternalLink className="h-4 w-4" /> YouTube Channel
              </a>
              <a href="https://pk.linkedin.com/in/naveed-ganatra-search-engine-optimization-specialist" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                <ExternalLink className="h-4 w-4" /> LinkedIn Profile
              </a>
            </div>

            {/* Topical Bridge → CTA */}
            <div>
              <h2 className="text-2xl font-bold text-heading mb-4">Building AI Trust Is a Multi-Layer Process</h2>
              <p className="text-body mb-4">
                Fixing these 5 trust failures requires coordinated work across content depth, entity signals, author authority, and topical architecture. Each layer reinforces the others — fixing one without addressing the rest produces minimal improvement.
              </p>
              <p className="text-body mb-4">
                Most businesses lack the internal expertise to diagnose which trust signals are missing and in what order to address them. An experienced SEO consultant identifies the exact gaps, prioritizes fixes by impact, and builds the entity infrastructure AI requires for citation eligibility.
              </p>
            </div>

            {/* CTA */}
            <div className="metric-card bg-primary/5 border-primary/20">
              <h2 className="text-2xl font-bold text-heading mb-3">Is AI Overview Ignoring Your Website?</h2>
              <p className="text-body mb-6">Get a free AI trust audit to identify exactly which entity signals and topical gaps prevent your site from earning AI citations.</p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                  Get Free AI Trust Audit →
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">
                  Hire Naveed Ganatra
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <CtaBanner />
    </main>
  </Layout>
);

export default BlogAIOverviewIgnores;
