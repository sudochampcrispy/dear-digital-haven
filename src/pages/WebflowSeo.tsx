import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, Zap, Layers, Code, FileText, Search, Settings } from "lucide-react";

const breadcrumb = buildBreadcrumb([{ name: "Home", url: "https://seoexpertinkarachi.com/" }, { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" }, { name: "Webflow SEO", url: "https://seoexpertinkarachi.com/webflow-seo" }]);
const webPage = buildWebPage({ name: "Webflow SEO Services — Technical Optimization for Webflow Sites", description: "Webflow SEO services covering clean code output, CMS collection optimization, custom code injection, 301 redirects, and structured data for Webflow-built websites.", url: "https://seoexpertinkarachi.com/webflow-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Webflow SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "Webflow SEO", description: "Webflow SEO services covering semantic HTML optimization, CMS collection architecture, custom code injection for schema markup, 301 redirect management, and performance tuning for Webflow websites." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Is Webflow good for SEO?", acceptedAnswer: { "@type": "Answer", text: "Webflow produces clean, semantic HTML output without the code bloat common in page builders. Its built-in hosting on AWS/Fastly CDN delivers fast server response times (TTFB under 200ms). Webflow provides direct control over meta tags, Open Graph data, robots.txt, XML sitemaps, and 301 redirects. These characteristics make Webflow one of the most SEO-friendly website builders available — outperforming Wix, Squarespace, and most WordPress page builder configurations in technical SEO metrics." }},
  { "@type": "Question", name: "What are Webflow's SEO limitations?", acceptedAnswer: { "@type": "Answer", text: "Webflow's SEO limitations include: no native structured data/schema markup (requires custom code injection), limited CMS collection relationships (single reference fields only), no server-side scripting for dynamic SEO rules, pagination limitations for large CMS collections, and hosting lock-in to Webflow's infrastructure. These limitations are manageable with custom code solutions but require Webflow-specific SEO expertise." }},
  { "@type": "Question", name: "How fast are Webflow websites compared to other platforms?", acceptedAnswer: { "@type": "Answer", text: "Webflow sites hosted on Webflow's infrastructure achieve TTFB under 200ms and average LCP between 1.2-2.0 seconds — faster than WordPress (2.5-4.2s average) and Wix (2.5-3.5s average). Webflow's clean code output, built-in lazy loading, responsive images, and CDN distribution contribute to consistently strong Core Web Vitals scores without additional optimization plugins." }},
]};

const pillars = [
  { icon: Code, title: "Webflow Clean Code Optimization", desc: "Webflow generates semantic HTML that search engines parse efficiently. Optimization focuses on leveraging Webflow's clean output while addressing areas where the visual builder creates suboptimal markup.", items: ["Semantic HTML structure — ensuring proper use of header, main, section, article, and nav elements", "CSS class optimization — reducing unused Webflow classes that increase stylesheet size", "Custom code injection — adding structured data, analytics, and advanced SEO scripts through Webflow's code areas", "Font loading optimization — using font-display:swap and limiting font file requests", "Image optimization — WebP format, responsive srcset, and lazy loading through Webflow's native tools", "Third-party script management — async/defer loading for analytics and marketing scripts"] },
  { icon: Layers, title: "Webflow CMS Collection Strategy", desc: "Webflow's CMS collections power dynamic content — blog posts, case studies, team pages, and product catalogs. Proper collection architecture determines how effectively search engines discover and index your dynamic content.", items: ["Collection page URL structure — clean, keyword-optimized slugs for every CMS item", "Collection list SEO — optimizing collection list pages with proper headings and pagination", "Reference field strategy — connecting related CMS items for contextual internal linking", "Dynamic meta tags — using CMS fields to generate unique title tags and descriptions per item", "Collection page templates — designing SEO-optimized layouts for each content type", "Conditional visibility — showing/hiding content based on CMS field values for content relevance"] },
  { icon: FileText, title: "Webflow Content & On-Page SEO", desc: "Webflow's visual editor provides granular control over heading hierarchy, text formatting, and content structure. This control enables precise on-page optimization when used strategically.", items: ["Heading hierarchy enforcement — H1 through H6 with proper nesting in the Designer", "Content block strategy — structuring pages with clear topical sections and visual hierarchy", "Blog optimization — using Webflow CMS for SEO-optimized blog content with proper categories", "Internal linking through rich text CMS fields and manually placed contextual links", "Alt text and title attributes for all images managed through Webflow's asset manager", "Open Graph and social sharing configuration for each page and CMS collection item"] },
  { icon: Settings, title: "Webflow Technical SEO Settings", desc: "Webflow provides direct access to critical technical SEO settings — robots.txt, XML sitemaps, 301 redirects, and canonical URLs. Proper configuration prevents common indexing and crawling issues.", items: ["Custom robots.txt — blocking staging subdomains and non-essential pages from crawling", "XML sitemap management — auto-generated sitemaps with manual exclusion of non-indexable pages", "301 redirect management — mapping old URLs to new paths during redesigns or restructuring", "Canonical URL configuration — preventing duplicate content across similar pages", "Custom 404 page design — creating helpful error pages that retain visitors and link equity", "SSL and domain configuration — enforcing HTTPS and proper www/non-www canonicalization"] },
];

const WebflowSeo = () => (
  <Layout>
    <SeoHead title="Webflow SEO Services — Technical Optimization for Webflow | Naveed Ganatra" description="Webflow SEO services covering clean code optimization, CMS collections, custom schema markup, redirect management, and performance tuning for Webflow websites." canonical="https://seoexpertinkarachi.com/webflow-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Webflow SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Webflow SEO Services in Karachi</h1>
        <p className="text-lg text-body mb-4">Webflow produces cleaner HTML output than any other visual website builder. Its AWS/Fastly CDN hosting delivers TTFB under 200ms, and its native responsive image handling addresses Core Web Vitals requirements at the infrastructure level.</p>
        <p className="text-body mb-8">Our Webflow SEO services leverage the platform's clean code advantages while addressing its limitations — custom schema markup through code injection, CMS collection optimization, and advanced technical configuration that maximizes Webflow's inherent SEO strengths.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Webflow SEO Audit</a>
          <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link>
        </div>
      </div></div></section>

      <section className="section-padding"><div className="section-container">
        <h2 className="text-3xl font-bold mb-4">Webflow's SEO Advantage</h2>
        <p className="text-body max-w-3xl">Webflow's clean HTML output gives it a natural <Link to="/technical-seo" className="text-primary hover:underline">technical SEO</Link> advantage over most builders. Combined with strategic <Link to="/on-page-seo" className="text-primary hover:underline">on-page optimization</Link> and a <Link to="/content-strategy-seo" className="text-primary hover:underline">content strategy</Link> built on Webflow's CMS, sites can achieve competitive rankings even in challenging niches.</p>
      </div></section>

      {pillars.map((pillar, i) => (
        <section key={pillar.title} className={`section-padding ${i % 2 === 0 ? "" : "surface-sunken"}`}><div className="section-container"><div className="grid lg:grid-cols-2 gap-8 items-start">
          <div><div className="flex items-center gap-3 mb-4"><pillar.icon className="h-6 w-6 text-primary shrink-0" /><h2 className="text-3xl font-bold">{pillar.title}</h2></div><p className="text-body">{pillar.desc}</p></div>
          <ul className="space-y-3">{pillar.items.map((item) => (<li key={item} className="flex gap-3 text-sm text-body"><CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />{item}</li>))}</ul>
        </div></div></section>
      ))}

      <section className="section-padding"><div className="section-container max-w-3xl">
        <h2 className="text-2xl font-bold text-heading mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">{faqSchema.mainEntity.map((faq) => (
          <details key={faq.name} className="group metric-card"><summary className="cursor-pointer font-semibold text-heading list-none flex items-center justify-between">{faq.name}<span className="ml-4 text-primary text-xl group-open:rotate-45 transition-transform">+</span></summary><p className="mt-3 text-sm text-body">{faq.acceptedAnswer.text}</p></details>
        ))}</div>
      </div></section>

      <section className="section-padding surface-sunken"><div className="section-container"><h2 className="text-2xl font-bold mb-4 text-center">Related SEO Services</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/technical-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Technical SEO</Link>
          <Link to="/on-page-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">On-Page SEO</Link>
          <Link to="/content-strategy-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Content Strategy</Link>
          <Link to="/seo-services" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">All SEO Services</Link>
        </div>
      </div></section>

      <CtaBanner heading="Ready to Maximize Webflow's SEO Potential?" text="Get a free Webflow SEO audit covering your site's technical health, content optimization, and ranking opportunities." />
    </main>
  </Layout>
);

export default WebflowSeo;
