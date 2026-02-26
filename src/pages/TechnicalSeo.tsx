import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import {
  CheckCircle,
  AlertTriangle,
  Zap,
  Search,
  Shield,
  Smartphone,
  BarChart3,
  Layers,
  ExternalLink,
  Server,
  Globe,
  Code,
} from "lucide-react";

/* ── Schema ── */
const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "Technical SEO", url: "https://seoexpertinkarachi.com/technical-seo" },
]);

const webPage = buildWebPage({
  name: "Technical SEO Services — Crawlability, Indexing & Core Web Vitals",
  description:
    "Technical SEO services that fix crawlability issues, optimize Core Web Vitals, resolve indexing problems, and build search-engine-friendly site architecture. Expert audits and implementation by Naveed Ganatra.",
  url: "https://seoexpertinkarachi.com/technical-seo",
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Technical SEO Services",
  provider: { "@type": "Person", name: "Naveed Ganatra" },
  areaServed: [
    { "@type": "City", name: "Karachi" },
    { "@type": "Country", name: "Pakistan" },
  ],
  serviceType: "Technical Search Engine Optimization",
  description:
    "Comprehensive technical SEO services covering crawlability optimization, Core Web Vitals improvement, indexing issue resolution, site architecture restructuring, structured data implementation, and mobile-first compliance.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is technical SEO and why does it matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Technical SEO ensures search engines can crawl, render, and index your website efficiently. Without proper technical foundations — fast load times, clean site architecture, proper canonicalization, and structured data — even the best content cannot rank. Technical SEO is the infrastructure layer that makes all other SEO efforts effective.",
      },
    },
    {
      "@type": "Question",
      name: "How often should a technical SEO audit be performed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A comprehensive technical SEO audit should be performed quarterly for active websites and immediately after any site migration, redesign, CMS update, or major content restructuring. Continuous monitoring of Core Web Vitals, crawl errors, and indexing status should happen weekly through Google Search Console and server log analysis.",
      },
    },
    {
      "@type": "Question",
      name: "What are the most critical Core Web Vitals thresholds for 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google's Core Web Vitals thresholds for 2026: Largest Contentful Paint (LCP) under 2.5 seconds (ideal under 1.0s), Interaction to Next Paint (INP) under 200 milliseconds, and Cumulative Layout Shift (CLS) under 0.1. Sites exceeding these thresholds face ranking suppression, particularly on mobile-first index evaluations.",
      },
    },
    {
      "@type": "Question",
      name: "What is crawl budget and how does it affect SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Crawl budget is the number of pages Googlebot crawls on your site within a given timeframe. Wasting crawl budget on low-value pages (duplicate content, faceted navigation, parameter URLs) means important pages get crawled less frequently. For sites with 1,000+ pages, crawl budget optimization directly impacts how quickly new content gets indexed and ranked.",
      },
    },
    {
      "@type": "Question",
      name: "How does site architecture affect search rankings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Site architecture determines how link equity flows between pages, how efficiently search engines discover content, and how clearly topical relationships are communicated. A flat, logical architecture where important pages are within 3 clicks of the homepage receives 20–40% more organic traffic than deep, poorly linked structures. Proper architecture also supports topical authority by grouping related content into clear silos.",
      },
    },
  ],
};

/* ── Data ── */
const pillars = [
  {
    icon: Search,
    title: "Crawlability & Indexing",
    desc: "Search engines must be able to discover, crawl, and index every important page on your site. Crawlability issues are the #1 reason technically sound content fails to rank.",
    items: [
      "XML sitemap generation, validation, and dynamic update configuration",
      "Robots.txt audit — ensuring critical pages are not blocked from crawling",
      "Crawl budget optimization — eliminating parameter URLs, faceted navigation waste, and duplicate paths",
      "Server log analysis to identify Googlebot crawl patterns and frequency gaps",
      "Orphan page detection — finding pages with zero internal links that search engines cannot discover",
      "Index bloat removal — deindexing thin, duplicate, and low-value pages that dilute authority",
    ],
  },
  {
    icon: Zap,
    title: "Core Web Vitals & Page Speed",
    desc: "Google uses Core Web Vitals as a direct ranking signal. Sites failing LCP, INP, or CLS thresholds face ranking suppression — especially on mobile.",
    items: [
      "Largest Contentful Paint (LCP) optimization — targeting under 1.0 second through image compression, CDN configuration, and critical CSS inlining",
      "Interaction to Next Paint (INP) reduction — minimizing JavaScript execution time and main thread blocking",
      "Cumulative Layout Shift (CLS) elimination — reserving space for dynamic elements, fonts, and ads",
      "Server response time (TTFB) optimization — server configuration, caching layers, and regional CDN deployment",
      "Render-blocking resource elimination — deferring non-critical JavaScript and CSS",
      "Image optimization pipeline — WebP/AVIF conversion, responsive srcset, and lazy loading implementation",
    ],
  },
  {
    icon: Layers,
    title: "Site Architecture & Internal Linking",
    desc: "Architecture determines how link equity flows, how search engines understand topical relationships, and how efficiently content gets discovered. A clean architecture delivers 20–40% more organic traffic than content or backlink improvements alone.",
    items: [
      "Flat architecture design — keeping important pages within 3 clicks of the homepage",
      "Topic cluster and content silo implementation — grouping semantically related pages for topical authority",
      "Internal link audit — redistributing link equity from high-authority pages to underperforming target pages",
      "Breadcrumb navigation with BreadcrumbList schema markup",
      "URL structure optimization — short, descriptive, keyword-relevant paths without unnecessary parameters",
      "Pagination and infinite scroll SEO — ensuring all paginated content is discoverable and indexable",
    ],
  },
  {
    icon: Code,
    title: "Structured Data & Schema Markup",
    desc: "Structured data helps search engines understand content context, enables rich results, and provides entity signals that AI search systems use for citation eligibility.",
    items: [
      "Organization, LocalBusiness, and Person schema implementation",
      "Product, Review, and AggregateRating schema for e-commerce pages",
      "Article, BlogPosting, and FAQPage schema for content pages",
      "BreadcrumbList and SiteNavigationElement for navigation context",
      "HowTo and VideoObject schema for instructional content",
      "Schema validation, testing, and monitoring through Google's Rich Results Test",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile-First Indexing Compliance",
    desc: "Google exclusively uses the mobile version of your site for indexing and ranking. Mobile-first compliance is not optional — it determines whether your content enters Google's index at all.",
    items: [
      "Responsive design audit — ensuring all content, images, and structured data render identically on mobile",
      "Mobile viewport and font size optimization for readability without pinch-zooming",
      "Touch target sizing — ensuring all interactive elements meet the 48x48px minimum tap target",
      "Mobile page speed optimization — separate performance budget for 3G/4G connections",
      "Lazy loading and intersection observer implementation for below-fold content",
      "Mobile-specific crawl testing using Google's Mobile-Friendly Test and Search Console mobile reports",
    ],
  },
  {
    icon: Shield,
    title: "Security & HTTPS Configuration",
    desc: "HTTPS is a confirmed ranking signal. Security misconfigurations — mixed content, expired certificates, insecure redirects — erode both rankings and user trust.",
    items: [
      "SSL/TLS certificate installation, renewal automation, and HSTS header implementation",
      "Mixed content audit — identifying and fixing HTTP resources loaded on HTTPS pages",
      "HTTP to HTTPS migration with proper 301 redirect chains",
      "Security header implementation — Content-Security-Policy, X-Frame-Options, X-Content-Type-Options",
      "Malware and spam injection monitoring",
      "GDPR and privacy compliance for cookie consent and data collection",
    ],
  },
];

const auditPoints = [
  { category: "Crawlability", count: "25+", items: "Robots.txt, sitemaps, crawl errors, orphan pages, redirect chains, canonical tags" },
  { category: "Performance", count: "20+", items: "LCP, INP, CLS, TTFB, render-blocking resources, image optimization" },
  { category: "Architecture", count: "15+", items: "URL structure, internal linking, click depth, breadcrumbs, pagination" },
  { category: "Structured Data", count: "15+", items: "Schema validation, rich results eligibility, entity markup coverage" },
  { category: "Mobile & Security", count: "15+", items: "Mobile rendering, HTTPS, security headers, mixed content" },
  { category: "Indexing", count: "10+", items: "Index coverage, duplicate content, thin pages, noindex directives" },
];

const TechnicalSeo = () => (
  <Layout>
    <SeoHead
      title="Technical SEO Services — Crawlability, Indexing & Core Web Vitals | Naveed Ganatra"
      description="Technical SEO services that fix crawlability issues, optimize Core Web Vitals, resolve indexing problems, and build search-engine-friendly site architecture. Expert audits and implementation."
      canonical="https://seoexpertinkarachi.com/technical-seo"
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
            <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Technical SEO</p>
             <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Technical SEO Services in Karachi
            </h1>
            <p className="text-lg text-body mb-4">
               Technical SEO is the infrastructure layer that determines whether search engines can crawl, render, and index your website. Without it, on-page optimization, backlinks, and content quality produce zero ranking value.
             </p>
             <p className="text-body mb-8">
               Our technical SEO services in Karachi cover 100+ audit checkpoints across crawlability, Core Web Vitals, site architecture, structured data, mobile-first compliance, and security — ensuring your website meets every requirement search engines evaluate before ranking a page.
             </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/923232877850"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Get Free Technical SEO Audit
              </a>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Technical SEO Matters */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Why Technical SEO Is the Foundation of Every Ranking</h2>
          <p className="text-body max-w-3xl mb-6">
            Google processes over 8.5 billion searches daily. Before evaluating content quality, relevance, or authority, search engines must first be able to access, crawl, and understand your pages. Technical failures at this stage prevent everything else from working — your <Link to="/on-page-seo" className="text-primary hover:underline">on-page optimization</Link> and <Link to="/off-page-seo" className="text-primary hover:underline">link building efforts</Link> produce zero results if crawlability is broken. A thorough <Link to="/seo-audit" className="text-primary hover:underline">SEO audit</Link> identifies these hidden technical blockers.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { v: "100+", l: "Technical checkpoints in our audit" },
              { v: "<1.0s", l: "Target LCP for competitive rankings" },
              { v: "20–40%", l: "Traffic lift from architecture fixes alone" },
              { v: "3 clicks", l: "Max depth for important pages" },
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
        <section
          key={pillar.title}
          className={`section-padding ${i % 2 !== 0 ? "surface-sunken" : ""}`}
        >
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

      {/* Audit Breakdown */}
      <section className="section-padding surface-sunken">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Our 100+ Point Technical SEO Audit</h2>
          <p className="text-body max-w-3xl mb-10">
            Every technical SEO engagement starts with a comprehensive audit that identifies exactly what is preventing your site from achieving maximum crawl efficiency, indexing coverage, and ranking potential.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditPoints.map((point) => (
              <div key={point.category} className="metric-card">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm">
                    {point.count}
                  </span>
                  <h3 className="font-bold text-heading">{point.category}</h3>
                </div>
                <p className="text-sm text-body">{point.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Technical SEO Issues That Silently Kill Rankings</h2>
          <p className="text-body max-w-3xl mb-10">
            These issues often go undetected because they don't produce visible errors. Your site looks fine to visitors — but search engines see a different story.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Redirect Chains & Loops",
                desc: "Multiple redirects between pages waste crawl budget and dilute link equity. A 3-hop redirect chain passes only ~70% of PageRank compared to a direct link.",
              },
              {
                title: "Orphan Pages",
                desc: "Pages with zero internal links are invisible to crawlers. If Googlebot can't discover a page through your site's link structure, it relies solely on sitemap entries — which are lower priority.",
              },
              {
                title: "Duplicate Content Without Canonicalization",
                desc: "Multiple URLs serving identical content split ranking signals across all versions. Without canonical tags, search engines must guess which version to index — and often guess wrong.",
              },
              {
                title: "JavaScript Rendering Dependencies",
                desc: "Content loaded exclusively through client-side JavaScript may not be indexed. Googlebot renders JavaScript, but with delays and resource limitations that cause content to be missed.",
              },
              {
                title: "Crawl Budget Waste on Low-Value Pages",
                desc: "Parameter URLs, session IDs, internal search result pages, and faceted navigation generate thousands of low-value URLs that consume crawl budget meant for important content.",
              },
              {
                title: "Missing or Incorrect Hreflang Tags",
                desc: "For multi-language or multi-region sites, incorrect hreflang implementation causes the wrong language version to rank in the wrong country — losing both traffic and user trust.",
              },
            ].map((issue) => (
              <div key={issue.title} className="metric-card">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-heading mb-1">{issue.title}</h3>
                    <p className="text-sm text-body">{issue.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools We Use */}
      <section className="section-padding surface-sunken">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Tools & Platforms We Use</h2>
          <p className="text-body max-w-3xl mb-10">
            Technical SEO requires specialized tools for crawling, log analysis, performance monitoring, and structured data validation. We use industry-standard platforms to ensure nothing is missed.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Search, name: "Google Search Console", use: "Index coverage, Core Web Vitals, crawl stats" },
              { icon: Server, name: "Screaming Frog", use: "Site crawling, redirect mapping, duplicate detection" },
              { icon: BarChart3, name: "Semrush / Ahrefs", use: "Technical audit, backlink analysis, competitor benchmarking" },
              { icon: Globe, name: "PageSpeed Insights", use: "Core Web Vitals field & lab data analysis" },
              { icon: Code, name: "Schema Markup Validator", use: "Structured data testing and rich results eligibility" },
              { icon: Server, name: "Log File Analyzers", use: "Server log parsing for Googlebot crawl behavior" },
              { icon: Zap, name: "GTmetrix / WebPageTest", use: "Waterfall analysis, render timing, resource loading" },
              { icon: Shield, name: "Security Scanners", use: "Mixed content detection, malware monitoring, SSL validation" },
            ].map((tool) => (
              <div key={tool.name} className="metric-card text-center">
                <tool.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-heading text-sm">{tool.name}</h3>
                <p className="text-xs text-subtle mt-1">{tool.use}</p>
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
             <Link to="/on-page-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">On-Page SEO</Link>
             <Link to="/off-page-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Off-Page SEO</Link>
             <Link to="/seo-audit" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">SEO Audit</Link>
             <Link to="/keyword-research" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Keyword Research</Link>
             <Link to="/content-strategy-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Content Strategy</Link>
             <Link to="/ecommerce-seo-karachi" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">E-commerce SEO</Link>
             <Link to="/website-migration-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Website Migration</Link>
           </div>
         </div>
       </section>

      {/* Topical Bridge → CTA */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
           <h2 className="text-2xl font-bold text-heading mb-4">Technical SEO Requires Specialized Expertise</h2>
           <p className="text-body mb-4">
            Technical SEO operates at the intersection of web development, server infrastructure, and search engine algorithms. For businesses in Karachi competing in both local and international markets, technical foundations determine whether your <Link to="/on-page-seo" className="text-primary hover:text-primary/80">on-page optimization</Link> and <Link to="/content-strategy-seo" className="text-primary hover:text-primary/80">content strategy</Link> can actually produce results.
           </p>
           <p className="text-body mb-4">
            A comprehensive <Link to="/seo-audit" className="text-primary hover:text-primary/80">SEO audit</Link> diagnoses the exact infrastructure issues limiting your rankings. Combined with strategic <Link to="/keyword-research" className="text-primary hover:text-primary/80">keyword research</Link> and proper <Link to="/off-page-seo" className="text-primary hover:text-primary/80">off-page authority building</Link>, technical SEO creates the foundation for sustainable ranking improvements — typically within the first 30 days.
           </p>

          {/* CTA Card */}
          <div className="metric-card bg-primary/5 border-primary/20 mt-6">
            <h2 className="text-2xl font-bold text-heading mb-3">Is Your Website's Technical Foundation Holding Back Rankings?</h2>
            <p className="text-body mb-6">
              Get a free 100+ point technical SEO audit. We'll identify every crawlability, performance, and indexing issue preventing your site from reaching its ranking potential.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/923232877850"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Get Free Technical SEO Audit →
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
              >
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

export default TechnicalSeo;
