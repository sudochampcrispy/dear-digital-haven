import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import {
  CheckCircle,
  ClipboardCheck,
  Search,
  Zap,
  FileText,
  Layers,
  Shield,
  BarChart3,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

/* ── Schema ── */
const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "SEO Audit Services", url: "https://seoexpertinkarachi.com/seo-audit" },
]);

const webPage = buildWebPage({
  name: "SEO Audit Services — Comprehensive Technical, On-Page & Off-Page Analysis",
  description: "Professional SEO audit services covering 200+ checkpoints across technical health, on-page optimization, off-page authority, content gaps, and competitive analysis with prioritized action plans.",
  url: "https://seoexpertinkarachi.com/seo-audit",
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Audit Services",
  provider: { "@type": "Person", name: "Naveed Ganatra" },
  areaServed: [
    { "@type": "City", name: "Karachi" },
    { "@type": "Country", name: "Pakistan" },
  ],
  serviceType: "SEO Audit & Analysis",
  description: "Comprehensive SEO audit services covering 200+ checkpoints across technical infrastructure, on-page optimization, off-page authority, content gap analysis, and competitive benchmarking with prioritized action plans.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is included in a comprehensive SEO audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A comprehensive SEO audit covers 200+ checkpoints across five domains: technical infrastructure (crawlability, indexing, Core Web Vitals, site architecture), on-page optimization (content quality, heading hierarchy, title tags, internal linking), off-page authority (backlink profile, toxic link analysis, brand mentions), content analysis (topic coverage, search intent alignment, content gaps), and competitive benchmarking (ranking comparison, keyword gap analysis, link gap analysis). The deliverable is a prioritized action plan organized by impact and implementation effort.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I get an SEO audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full comprehensive audit should be performed annually or after major changes (site redesign, CMS migration, domain change). Quarterly mini-audits focused on technical health, indexing status, and ranking changes keep your SEO strategy aligned with algorithm updates. Continuous monitoring of Core Web Vitals, crawl errors, and ranking fluctuations should happen weekly through automated tools.",
      },
    },
    {
      "@type": "Question",
      name: "What tools are used for professional SEO audits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional SEO audits use a combination of tools: Google Search Console for indexing and performance data, Google Analytics for user behavior analysis, Screaming Frog or Sitebulb for technical crawl analysis, Ahrefs or Semrush for backlink and keyword analysis, PageSpeed Insights and Chrome DevTools for Core Web Vitals, and server log analysis tools for crawl behavior patterns. No single tool covers everything — comprehensive audits require cross-referencing data from multiple sources.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a comprehensive SEO audit take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A thorough SEO audit for a medium-sized website (100-500 pages) takes 5-10 business days. This includes technical crawl analysis, manual content review, backlink profile evaluation, competitive analysis, and creating a prioritized action plan. Larger sites (1,000+ pages) or complex e-commerce sites with thousands of product pages may require 2-3 weeks. Rushing an audit produces superficial findings that miss the issues actually suppressing your rankings.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after an SEO audit is completed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After the audit, you receive a prioritized action plan categorized by impact level (critical, high, medium, low) and implementation effort. Critical issues that actively harm rankings are addressed first. The plan includes specific recommendations with implementation instructions, expected impact timelines, and success metrics. Many businesses choose ongoing SEO retainers to implement audit recommendations systematically and maintain continuous optimization.",
      },
    },
  ],
};

/* ── Data ── */
const auditAreas = [
  {
    icon: Search,
    title: "Technical SEO Audit",
    count: "50+",
    desc: "The technical foundation determines whether search engines can access and process your content. Technical issues are the most common reason good content fails to rank.",
    items: [
      "Crawlability analysis — robots.txt, XML sitemaps, crawl errors, and orphan page detection",
      "Indexing health — index coverage, canonical tags, duplicate content, and noindex directive audit",
      "Core Web Vitals — LCP, INP, CLS measurement with specific optimization recommendations",
      "Site architecture — URL structure, click depth, internal link distribution, and breadcrumb navigation",
      "Mobile-first compliance — responsive rendering, tap targets, viewport configuration",
      "Server and security — HTTPS, redirect chains, HSTS headers, and response time analysis",
    ],
  },
  {
    icon: FileText,
    title: "On-Page SEO Audit",
    count: "40+",
    desc: "On-page elements determine what your pages rank for and how relevant they appear for target queries. Even small optimizations here can produce significant ranking improvements.",
    items: [
      "Title tag audit — uniqueness, keyword relevance, length optimization, and click-through rate potential",
      "Meta description analysis — completeness, action-oriented language, and secondary keyword inclusion",
      "Heading hierarchy review — H1-H6 structure, topical flow, and featured snippet targeting",
      "Content quality assessment — topical depth, semantic coverage, information gain, and freshness",
      "Internal linking audit — link equity distribution, contextual anchor text, and orphan page resolution",
      "Image optimization — alt text, compression, format, responsive srcset, and lazy loading",
    ],
  },
  {
    icon: Layers,
    title: "Off-Page & Authority Audit",
    count: "35+",
    desc: "Your backlink profile and brand authority signals determine how search engines evaluate your site's trustworthiness compared to competitors targeting the same keywords.",
    items: [
      "Backlink profile analysis — total links, referring domains, link quality distribution",
      "Toxic link identification — spammy, PBN, or manipulative links that risk penalties",
      "Anchor text distribution — natural variation vs. over-optimization risk assessment",
      "Competitor link gap analysis — authority sources where competitors have links but you don't",
      "Brand mention audit — unlinked mentions that can be converted to backlinks",
      "Local citation consistency — NAP accuracy across directories and platforms",
    ],
  },
  {
    icon: BarChart3,
    title: "Content & Keyword Audit",
    count: "40+",
    desc: "Content gaps and keyword opportunities represent unrealized traffic potential. This audit identifies exactly where your content falls short and what topics you should cover next.",
    items: [
      "Keyword ranking analysis — current positions, trending direction, and opportunity prioritization",
      "Content gap analysis — topics your competitors rank for that you haven't covered",
      "Search intent alignment — verifying each page matches what users want for its target queries",
      "Cannibalization detection — finding pages that compete against each other for the same keywords",
      "Thin content identification — pages that lack sufficient depth to compete for their target topics",
      "Content freshness audit — outdated statistics, broken references, and stale examples",
    ],
  },
  {
    icon: Shield,
    title: "Competitive Benchmarking",
    count: "25+",
    desc: "SEO doesn't happen in isolation. Understanding your competitors' strengths and weaknesses reveals the specific improvements that will move your rankings most effectively.",
    items: [
      "Top 5 competitor identification based on keyword overlap and SERP competition",
      "Domain authority and trust flow comparison across your competitive set",
      "Content depth benchmarking — comparing topical coverage across competing sites",
      "Technical performance comparison — Core Web Vitals and crawlability vs. competitors",
      "SERP feature analysis — which competitors capture featured snippets, PAA, and knowledge panels",
      "Link velocity comparison — competitor backlink acquisition rates and strategies",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Prioritized Action Plan",
    count: "Custom",
    desc: "The most valuable part of any audit is the action plan. Every finding is categorized by impact level and effort required, creating a clear roadmap for implementation.",
    items: [
      "Critical issues — problems actively harming rankings that need immediate attention",
      "High-impact quick wins — optimizations that require minimal effort but produce significant ranking improvements",
      "Strategic improvements — medium-effort changes that strengthen competitive positioning over 3-6 months",
      "Long-term investments — content and authority initiatives that compound over time",
      "Implementation timeline — realistic scheduling based on resource availability and priority",
      "Success metrics and KPIs — specific, measurable targets for tracking audit implementation progress",
    ],
  },
];

const auditTypes = [
  { title: "Full Comprehensive Audit", desc: "200+ checkpoints across all five audit domains. Best for new clients, post-migration assessments, or annual strategic reviews.", time: "5-10 days", ideal: "Annual or post-major changes" },
  { title: "Technical-Only Audit", desc: "Focused on crawlability, indexing, Core Web Vitals, and architecture. Best when content and authority are strong but rankings underperform.", time: "3-5 days", ideal: "After site updates or speed issues" },
  { title: "Content & Keyword Audit", desc: "Focused on content gaps, cannibalization, search intent alignment, and keyword opportunities. Best for content strategy planning.", time: "3-5 days", ideal: "Before content campaigns" },
  { title: "Backlink & Authority Audit", desc: "Focused on link profile health, toxic links, competitor link gaps, and brand authority signals. Best for penalty recovery or link strategy.", time: "2-4 days", ideal: "Penalty recovery or link campaigns" },
];

const SeoAudit = () => (
  <Layout>
    <SeoHead
      title="SEO Audit Services — 200+ Checkpoint Technical & Content Analysis | Naveed Ganatra"
      description="Professional SEO audit covering 200+ checkpoints across technical health, on-page optimization, off-page authority, content gaps, and competitive analysis with prioritized action plans."
      canonical="https://seoexpertinkarachi.com/seo-audit"
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
            <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">SEO Audit</p>
             <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              SEO Audit Services in Karachi
            </h1>
            <p className="text-lg text-body mb-4">
               An SEO audit is the diagnostic foundation of every effective optimization strategy. Without identifying what's actually preventing your site from ranking, your on-page and technical SEO efforts may be addressing the wrong problems entirely.
             </p>
             <p className="text-body mb-8">
               Our SEO audit in Karachi covers 200+ checkpoints across technical infrastructure, on-page optimization, off-page authority, content quality, and competitive positioning — delivering a prioritized action plan that feeds directly into your content strategy and keyword targeting.
             </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                Get Free SEO Audit
              </a>
              <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Audits Matter */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Why Every SEO Strategy Starts With an Audit</h2>
          <p className="text-body max-w-3xl mb-6">
            Most websites have <strong className="text-heading">10-30 issues actively suppressing rankings</strong> that aren't visible to non-specialists. An audit examines your <Link to="/technical-seo" className="text-primary hover:underline">technical infrastructure</Link>, <Link to="/on-page-seo" className="text-primary hover:underline">on-page elements</Link>, and <Link to="/off-page-seo" className="text-primary hover:underline">backlink profile</Link> — revealing hidden problems and creating a roadmap that feeds into your <Link to="/content-strategy-seo" className="text-primary hover:underline">content strategy</Link>.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { v: "200+", l: "Checkpoints across 5 audit domains" },
              { v: "10-30", l: "Hidden issues found on average sites" },
              { v: "5-10", l: "Business days for comprehensive delivery" },
              { v: "3-6 mo", l: "Timeline for measurable ranking improvements" },
            ].map((s) => (
              <div key={s.l} className="metric-card text-center">
                <p className="stat-number text-3xl">{s.v}</p>
                <p className="text-xs text-subtle mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Areas */}
      {auditAreas.map((area, i) => (
        <section key={area.title} className={`section-padding ${i % 2 !== 0 ? "surface-sunken" : ""}`}>
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm">{area.count}</span>
                  <h2 className="text-3xl font-bold">{area.title}</h2>
                </div>
                <p className="text-body">{area.desc}</p>
              </div>
              <ul className="space-y-3">
                {area.items.map((item) => (
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

      {/* Audit Types */}
      <section className="section-padding surface-sunken">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Choose the Right Audit for Your Situation</h2>
          <p className="text-body max-w-3xl mb-10">
            Not every situation requires a full 200+ point audit. We offer focused audit options that address specific concerns efficiently.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {auditTypes.map((type) => (
              <div key={type.title} className="metric-card">
                <h3 className="font-bold text-heading text-lg mb-2">{type.title}</h3>
                <p className="text-sm text-body mb-4">{type.desc}</p>
                <div className="flex flex-wrap gap-4 text-xs text-subtle">
                  <span><strong className="text-heading">Delivery:</strong> {type.time}</span>
                  <span><strong className="text-heading">Ideal:</strong> {type.ideal}</span>
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
             <Link to="/on-page-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">On-Page SEO</Link>
             <Link to="/off-page-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Off-Page SEO</Link>
             <Link to="/content-strategy-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Content Strategy</Link>
             <Link to="/keyword-research" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Keyword Research</Link>
             <Link to="/website-migration-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Website Migration</Link>
             <Link to="/local-seo-karachi" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Local SEO</Link>
           </div>
         </div>
       </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
           <h2 className="text-2xl font-bold text-heading mb-4">Stop Guessing — Start With Data</h2>
           <p className="text-body mb-4">
            For Karachi businesses, an SEO audit replaces assumptions with data — covering <Link to="/technical-seo" className="text-primary hover:text-primary/80">technical health</Link>, <Link to="/on-page-seo" className="text-primary hover:text-primary/80">on-page optimization</Link>, <Link to="/off-page-seo" className="text-primary hover:text-primary/80">backlink quality</Link>, and competitive gaps. The audit findings directly inform your <Link to="/keyword-research" className="text-primary hover:text-primary/80">keyword strategy</Link> and content roadmap.
           </p>
           <p className="text-body mb-4">
            Whether you need a <Link to="/local-seo-karachi" className="text-primary hover:text-primary/80">local SEO audit</Link> for Karachi visibility, an <Link to="/ecommerce-seo-karachi" className="text-primary hover:text-primary/80">e-commerce SEO review</Link>, or a full <Link to="/website-migration-seo" className="text-primary hover:text-primary/80">pre-migration assessment</Link> — our audits identify the specific issues preventing your ranking breakthrough.
           </p>
          <div className="metric-card bg-primary/5 border-primary/20 mt-6">
            <h2 className="text-2xl font-bold text-heading mb-3">Ready to Discover What's Holding Your Rankings Back?</h2>
            <p className="text-body mb-6">Get a free preliminary SEO audit covering your site's technical health, top ranking opportunities, and critical issues that need immediate attention.</p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                Get Free SEO Audit →
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

export default SeoAudit;
