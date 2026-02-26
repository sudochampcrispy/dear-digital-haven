import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import {
  CheckCircle,
  AlertTriangle,
  FileText,
  Heading1,
  Link2,
  Image,
  Tag,
  Layers,
  Target,
  PenTool,
} from "lucide-react";

/* ── Schema ── */
const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "On-Page SEO", url: "https://seoexpertinkarachi.com/on-page-seo" },
]);

const webPage = buildWebPage({
  name: "On-Page SEO Services — Content, Structure & Intent Optimization",
  description: "On-page SEO services covering title tags, heading hierarchy, content optimization, internal linking, semantic HTML, and search intent alignment for maximum ranking potential.",
  url: "https://seoexpertinkarachi.com/on-page-seo",
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "On-Page SEO Services",
  provider: { "@type": "Person", name: "Naveed Ganatra" },
  areaServed: [
    { "@type": "City", name: "Karachi" },
    { "@type": "Country", name: "Pakistan" },
  ],
  serviceType: "On-Page Search Engine Optimization",
  description: "On-page SEO services covering content optimization, HTML structure, heading hierarchy, title tags, meta descriptions, internal linking architecture, image optimization, and semantic markup for maximum search visibility.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is on-page SEO and how is it different from technical SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On-page SEO optimizes the visible content and HTML elements of individual pages — title tags, headings, body content, internal links, images, and meta descriptions. Technical SEO focuses on the infrastructure layer — crawlability, indexing, site speed, and server configuration. On-page SEO determines relevance and intent alignment; technical SEO determines whether search engines can access and process the page at all.",
      },
    },
    {
      "@type": "Question",
      name: "How important is heading hierarchy (H1-H6) for SEO in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Heading hierarchy is critical in 2026 because both search engines and AI systems use it to understand content structure and topical flow. A single H1 establishes the page's primary topic. H2 headings define major subtopics. H3 headings add detail within subtopics. Proper hierarchy helps search engines extract featured snippets and helps AI systems identify which sections answer specific queries.",
      },
    },
    {
      "@type": "Question",
      name: "What is search intent optimization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Search intent optimization ensures your page content matches what users actually want when they search a query. Google classifies intent into informational, navigational, commercial, and transactional categories. Pages that misalign with search intent — for example, a product page ranking for an informational query — face ranking suppression regardless of content quality or backlink strength.",
      },
    },
    {
      "@type": "Question",
      name: "How does internal linking affect page rankings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Internal links distribute PageRank (link equity) across your site, signal topical relationships between pages, and help search engines discover content. Pages with more internal links pointing to them receive higher crawl priority and ranking signals. Strategic internal linking from high-authority pages to target pages can improve rankings within 2-4 weeks without any external link building.",
      },
    },
    {
      "@type": "Question",
      name: "Should I optimize for keywords or topics in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Optimize for topics, not individual keywords. Google's algorithms evaluate topical completeness — whether a page comprehensively covers all semantically related aspects of a subject. A page targeting 'on-page SEO' must also cover heading structure, content optimization, internal linking, and intent alignment to demonstrate topical authority. Keyword-focused pages without topical depth rank for fewer queries and receive less traffic.",
      },
    },
  ],
};

/* ── Data ── */
const pillars = [
  {
    icon: FileText,
    title: "Content Optimization & Topical Depth",
    desc: "Content optimization in 2026 means covering every semantically relevant aspect of a topic — not just inserting keywords. Search engines evaluate whether your page provides the most complete answer available.",
    items: [
      "Topical completeness analysis — identifying every subtopic your content must cover to satisfy search intent",
      "Content gap analysis against top 10 ranking competitors — finding what they cover that you don't",
      "Semantic keyword integration — using contextually relevant terms that reinforce topical authority naturally",
      "Answer-upfront content structure — placing the core answer in the first paragraph for AI extractability",
      "Information gain optimization — adding unique data, expert perspectives, and original insights competitors lack",
      "Content freshness signals — updating statistics, examples, and references to reflect current data",
    ],
  },
  {
    icon: Heading1,
    title: "Heading Hierarchy & Semantic Structure",
    desc: "Heading tags create the structural skeleton of your content. AI systems and search engines parse H1-H6 hierarchy to understand topical flow, section relationships, and answer boundaries.",
    items: [
      "Single H1 optimization — one clear, keyword-relevant H1 that establishes the page's primary topic",
      "H2 subtopic mapping — each H2 covers a major aspect of the topic, creating clear content sections",
      "H3 detail layering — adding specificity within H2 sections without creating topical dilution",
      "Heading-to-content alignment — ensuring each heading accurately describes the content that follows",
      "Featured snippet targeting — structuring headings as questions that match 'People Also Ask' queries",
      "Semantic HTML elements — using <article>, <section>, <main>, <aside> for additional structural context",
    ],
  },
  {
    icon: Tag,
    title: "Title Tags & Meta Descriptions",
    desc: "Title tags are the single strongest on-page ranking signal. Meta descriptions control click-through rate from search results. Both directly impact rankings and traffic volume.",
    items: [
      "Title tag optimization — under 60 characters, primary keyword front-loaded, clear value proposition",
      "Meta description crafting — under 160 characters, action-oriented, including secondary keywords",
      "Title uniqueness audit — ensuring no two pages compete for the same title tag signals",
      "SERP click-through rate optimization — testing title variations that maximize clicks from search results",
      "Open Graph and Twitter Card meta tags for social sharing visibility",
      "Canonical tag implementation — preventing duplicate content issues across URL variations",
    ],
  },
  {
    icon: Link2,
    title: "Internal Linking Architecture",
    desc: "Internal links are the most underutilized on-page ranking lever. They distribute link equity, signal topical relationships, and determine how quickly search engines discover and prioritize your content.",
    items: [
      "Internal link audit — mapping current link flow and identifying pages with insufficient internal links",
      "Link equity redistribution — directing internal links from high-authority pages to underperforming target pages",
      "Contextual anchor text optimization — using descriptive, keyword-relevant anchor text instead of generic 'click here'",
      "Topic cluster linking — connecting pillar pages to supporting content within the same topical silo",
      "Orphan page elimination — ensuring every page receives at least 3 internal links from relevant content",
      "Link depth optimization — keeping target pages within 3 clicks of the homepage through strategic linking",
    ],
  },
  {
    icon: Image,
    title: "Image & Media Optimization",
    desc: "Images account for 20-30% of page weight. Unoptimized images destroy Core Web Vitals, waste crawl budget, and miss Google Image Search traffic opportunities.",
    items: [
      "Alt text optimization — descriptive, keyword-relevant alt attributes for every image on the page",
      "Image compression and format conversion — WebP/AVIF for 40-60% smaller file sizes without quality loss",
      "Responsive image implementation — srcset attributes serving appropriate sizes for each device",
      "Lazy loading — deferring below-fold image loading to improve initial page speed",
      "Image sitemap inclusion — ensuring all important images are discoverable through XML sitemaps",
      "Video embedding optimization — proper VideoObject schema and thumbnail configuration for video content",
    ],
  },
  {
    icon: Target,
    title: "Search Intent Alignment",
    desc: "Search intent is the filter Google applies before evaluating content quality. Pages that misalign with intent — a product page for an informational query — are filtered out before content signals are even considered.",
    items: [
      "Intent classification — categorizing target queries as informational, navigational, commercial, or transactional",
      "SERP analysis — studying the content types Google currently ranks to understand what intent it assigns",
      "Content format alignment — matching your page format (guide, list, comparison, product) to the dominant SERP format",
      "Multi-intent optimization — addressing primary, secondary, and implicit intent layers within a single page",
      "Intent drift monitoring — tracking whether Google's intent classification for your target queries changes over time",
      "User engagement signals — ensuring content depth and structure reduce bounce rate and increase dwell time",
    ],
  },
];

const commonMistakes = [
  { title: "Keyword Stuffing Instead of Topical Coverage", desc: "Repeating the same keyword 50 times signals spam, not relevance. Search engines evaluate semantic coverage — how many related concepts you address — not keyword density." },
  { title: "Missing or Duplicate Title Tags", desc: "Pages without unique title tags compete with each other for rankings. Every page needs a distinct title that clearly communicates its unique topic and value." },
  { title: "Flat Heading Structure", desc: "Using only H2 tags or skipping heading levels (H1 → H3) breaks structural hierarchy. Search engines and AI systems cannot determine topical relationships without proper H1 → H2 → H3 flow." },
  { title: "Generic Internal Linking", desc: "Anchor text like 'click here' or 'read more' provides zero topical signal. Contextual anchor text tells search engines what the linked page is about — directly influencing its rankings." },
  { title: "Ignoring Search Intent", desc: "Publishing a sales page for an informational query guarantees failure. Check what Google currently ranks for your target query before deciding your content format." },
  { title: "Thin Content on Important Pages", desc: "Pages with 300-500 words of generic content cannot demonstrate topical authority. Comprehensive coverage (1,500-3,000+ words) with unique insights is required for competitive queries." },
];

const OnPageSeo = () => (
  <Layout>
    <SeoHead
      title="On-Page SEO Services — Content, Structure & Intent Optimization | Naveed Ganatra"
      description="On-page SEO services covering title tags, heading hierarchy, content optimization, internal linking, semantic HTML, and search intent alignment for maximum ranking potential."
      canonical="https://seoexpertinkarachi.com/on-page-seo"
    />
    <JsonLd data={serviceSchema} />
    <JsonLd data={organizationSchema} />
    <JsonLd data={breadcrumb} />
    <JsonLd data={webPage} />
    <JsonLd data={faqSchema} />

    <main>
      {/* Hero */}
      <section className="section-padding surface-sunken">
        <div className="section-container">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">On-Page SEO</p>
             <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              On-Page SEO Services in Karachi
            </h1>
            <p className="text-lg text-body mb-4">
               On-page SEO determines whether search engines understand your content's topic, relevance, and value. Every element — from the title tag to the last internal link — sends signals that influence rankings. It works hand-in-hand with technical SEO to maximize your search visibility.
             </p>
             <p className="text-body mb-8">
               Our on-page SEO services in Karachi optimize content depth, heading structure, title tags, meta descriptions, internal linking, image optimization, and search intent alignment — informed by thorough keyword research and semantic content strategy.
             </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                Get Free On-Page SEO Audit
              </a>
              <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why On-Page SEO Matters */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Why On-Page SEO Drives Rankings More Than Any Other Factor</h2>
          <p className="text-body max-w-3xl mb-6">
            On-page SEO is the only ranking factor you control completely. <Link to="/technical-seo" className="text-primary hover:underline">Technical SEO</Link> ensures access. Backlinks build authority. But on-page optimization determines <strong className="text-heading">what your page ranks for, how relevant it appears, and whether it satisfies user intent</strong>. Combined with thorough <Link to="/keyword-research" className="text-primary hover:underline">keyword research</Link>, on-page optimization turns search demand into traffic.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { v: "#1", l: "Ranking signal: title tag relevance" },
              { v: "3x", l: "More traffic from topical coverage vs. keyword focus" },
              { v: "36%", l: "CTR increase from optimized meta descriptions" },
              { v: "2-4 wks", l: "Rankings improve after internal link optimization" },
            ].map((s) => (
              <div key={s.l} className="metric-card text-center">
                <p className="stat-number text-3xl">{s.v}</p>
                <p className="text-xs text-subtle mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Pillars */}
      {pillars.map((pillar, i) => (
        <section key={pillar.title} className={`section-padding ${i % 2 !== 0 ? "surface-sunken" : ""}`}>
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <pillar.icon className="h-6 w-6 text-primary shrink-0" />
                  <h2 className="text-3xl font-bold">{pillar.title}</h2>
                </div>
                <p className="text-body">{pillar.desc}</p>
              </div>
              <ul className="space-y-3">
                {pillar.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-body">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* Common Mistakes */}
      <section className="section-padding surface-sunken">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">6 On-Page SEO Mistakes That Silently Kill Rankings</h2>
          <p className="text-body max-w-3xl mb-10">
            These mistakes are common because they don't trigger visible errors. Your pages load fine, your content reads well — but search engines see structural problems that prevent ranking.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {commonMistakes.map((mistake) => (
              <div key={mistake.title} className="metric-card">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-heading mb-1">{mistake.title}</h3>
                    <p className="text-sm text-body">{mistake.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
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
      </section>

       {/* Related Services */}
       <section className="section-padding surface-sunken">
         <div className="section-container">
           <h2 className="text-2xl font-bold mb-4 text-center">Related SEO Services</h2>
           <div className="flex flex-wrap gap-4 justify-center">
             <Link to="/seo-services" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">All SEO Services</Link>
             <Link to="/technical-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Technical SEO</Link>
             <Link to="/off-page-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Off-Page SEO</Link>
             <Link to="/seo-audit" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">SEO Audit</Link>
             <Link to="/keyword-research" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Keyword Research</Link>
             <Link to="/content-strategy-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Content Strategy</Link>
             <Link to="/local-seo-karachi" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Local SEO</Link>
           </div>
         </div>
       </section>

      {/* Topical Bridge → CTA */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
           <h2 className="text-2xl font-bold text-heading mb-4">On-Page Optimization Requires Semantic Expertise</h2>
           <p className="text-body mb-4">
            On-page SEO in 2026 requires understanding search intent classification, <Link to="/content-strategy-seo" className="text-primary hover:text-primary/80">semantic topic modeling</Link>, and heading hierarchy that <Link to="/ai-search-optimization" className="text-primary hover:text-primary/80">AI systems</Link> parse for citation extraction. For Karachi businesses competing locally, on-page signals combined with <Link to="/local-seo-karachi" className="text-primary hover:text-primary/80">local SEO optimization</Link> create a powerful ranking advantage.
           </p>
           <p className="text-body mb-4">
            Start with a comprehensive <Link to="/seo-audit" className="text-primary hover:text-primary/80">SEO audit</Link> to identify on-page gaps, then combine with <Link to="/off-page-seo" className="text-primary hover:text-primary/80">off-page authority building</Link> for maximum impact. Our <Link to="/seo-consulting" className="text-primary hover:text-primary/80">SEO consulting</Link> ensures your team can maintain on-page excellence long-term.
           </p>

          <div className="metric-card bg-primary/5 border-primary/20 mt-6">
            <h2 className="text-2xl font-bold text-heading mb-3">Are Your Pages Optimized for Maximum Ranking Potential?</h2>
            <p className="text-body mb-6">Get a free on-page SEO audit covering title tags, heading structure, content depth, internal linking, and search intent alignment across your most important pages.</p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                Get Free On-Page SEO Audit →
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">
                Hire Naveed Ganatra
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  </Layout>
);

export default OnPageSeo;
