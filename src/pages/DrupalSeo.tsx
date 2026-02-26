import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, Zap, Layers, Shield, FileText, Settings, Server } from "lucide-react";

const breadcrumb = buildBreadcrumb([{ name: "Home", url: "https://seoexpertinkarachi.com/" }, { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" }, { name: "Drupal SEO", url: "https://seoexpertinkarachi.com/drupal-seo" }]);
const webPage = buildWebPage({ name: "Drupal SEO Services — Enterprise CMS Optimization", description: "Drupal SEO services covering module configuration, taxonomy architecture, Views optimization, caching strategy, and structured data for Drupal-powered enterprise websites.", url: "https://seoexpertinkarachi.com/drupal-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Drupal SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "Drupal SEO", description: "Drupal SEO services covering SEO module configuration, taxonomy architecture, Views optimization, caching layers, multilingual SEO, and structured data for enterprise Drupal installations." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Why does Drupal need specialized SEO?", acceptedAnswer: { "@type": "Answer", text: "Drupal powers enterprise websites for organizations like NASA, Tesla, and the Australian Government. Its modular architecture requires SEO-specific module installation and configuration — unlike WordPress where SEO plugins handle most requirements automatically. Drupal's power creates complexity: taxonomy vocabularies, content types, Views, and entity references must be configured for SEO from an architectural level. Default Drupal installations have no built-in SEO features." }},
  { "@type": "Question", name: "What are the essential Drupal SEO modules?", acceptedAnswer: { "@type": "Answer", text: "Essential Drupal SEO modules include: Pathauto (automatic URL alias generation), Metatag (meta title, description, OG tags), XML Sitemap (sitemap generation), Redirect (301 redirect management), Schema.org Metatag (structured data), Simple Sitemap (alternative sitemap generator), Linkit (internal linking enhancement), and Real-time SEO for Drupal (content analysis). These modules must be installed, configured, and maintained together for comprehensive SEO coverage." }},
  { "@type": "Question", name: "How does Drupal handle multilingual SEO?", acceptedAnswer: { "@type": "Answer", text: "Drupal has the strongest native multilingual SEO capabilities of any CMS. Its core Language, Content Translation, Configuration Translation, and Interface Translation modules support proper hreflang implementation, per-language URL aliases, translated metatags, and language-specific XML sitemaps out of the box. This makes Drupal the preferred choice for international organizations requiring multilingual SEO at scale — without third-party plugins." }},
]};

const pillars = [
  { icon: Settings, title: "Drupal SEO Module Configuration", desc: "Drupal requires explicit SEO module installation and configuration. Each module handles a specific SEO function — URL management, meta tags, sitemaps, redirects — and must be configured to work together cohesively.", items: ["Pathauto configuration — URL alias patterns for each content type and taxonomy vocabulary", "Metatag module setup — default and per-content-type meta title, description, and OG tag templates", "XML Sitemap generation — configuring priority, change frequency, and inclusion rules per content type", "Redirect module — 301 redirect management and automatic redirect creation on URL changes", "Linkit module — enhancing internal linking with autocomplete link selection in the WYSIWYG editor", "Real-time SEO module — content analysis and optimization suggestions during content creation"] },
  { icon: Layers, title: "Drupal Taxonomy & Architecture", desc: "Drupal's taxonomy system creates the content architecture that search engines use to understand topical relationships. Properly configured vocabularies and entity references build semantic content silos automatically.", items: ["Taxonomy vocabulary design — creating SEO-optimized content categories with clean URL patterns", "Content type architecture — designing node types with SEO-relevant fields and display settings", "Views-based listing pages — creating SEO-optimized category and listing pages using Drupal Views", "Entity reference optimization — connecting related content types for contextual internal linking", "Breadcrumb configuration — proper breadcrumb trails reflecting content hierarchy for users and search engines", "URL structure planning — flat, keyword-relevant paths using Pathauto token patterns"] },
  { icon: Server, title: "Drupal Performance & Caching", desc: "Drupal's database-driven architecture benefits significantly from proper caching configuration. Enterprise Drupal sites serve millions of pages — caching determines whether page delivery meets Core Web Vitals thresholds.", items: ["Internal page cache and dynamic page cache configuration for authenticated and anonymous users", "Varnish or Redis reverse proxy caching for sub-100ms server response times", "BigPipe module — streaming page rendering that improves perceived load time for dynamic content", "CSS and JavaScript aggregation — combining and compressing frontend assets for faster delivery", "Image style optimization — responsive image styles with WebP conversion through ImageAPI modules", "CDN integration — configuring CDN for global asset delivery with proper cache headers"] },
  { icon: Shield, title: "Drupal Security & Maintenance SEO", desc: "Drupal's security team provides regular updates for core and contributed modules. Maintaining update currency prevents security vulnerabilities that cause search engine deindexing and malware warnings.", items: ["Core and module update management — applying security patches within 48 hours of release", "Security review module — automated security scanning for common Drupal vulnerabilities", "User permission audit — ensuring content and configuration access follows least-privilege principles", "HTTPS enforcement and security header implementation for crawl trust signals", "Backup and disaster recovery — ensuring SEO assets survive any security incident", "Update path planning — major version upgrades (Drupal 9 to 10+) with SEO migration planning"] },
];

const DrupalSeo = () => (
  <Layout>
    <SeoHead title="Drupal SEO Services — Enterprise CMS Optimization | Naveed Ganatra" description="Drupal SEO services covering module configuration, taxonomy architecture, Views optimization, caching, and structured data for enterprise Drupal websites." canonical="https://seoexpertinkarachi.com/drupal-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Drupal SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Drupal SEO Services in Karachi</h1>
        <p className="text-lg text-body mb-4">Drupal powers 2.3% of all CMS-based websites, concentrated among enterprise organizations, government agencies, and universities. Its modular architecture provides unmatched flexibility but requires explicit SEO module installation and expert configuration.</p>
        <p className="text-body mb-8">Our Drupal SEO services cover module configuration, taxonomy architecture, Views optimization, caching strategy, multilingual SEO, and structured data — addressing the platform-specific requirements that make Drupal SEO fundamentally different from WordPress or Shopify optimization.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Drupal SEO Audit</a>
          <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link>
        </div>
      </div></div></section>

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
          <Link to="/wordpress-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">WordPress SEO</Link>
          <Link to="/technical-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Technical SEO</Link>
          <Link to="/international-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">International SEO</Link>
          <Link to="/seo-services" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">All SEO Services</Link>
        </div>
      </div></section>

      <CtaBanner heading="Need Drupal SEO Expertise?" text="Get a free Drupal SEO audit covering module configuration, architecture, and performance optimization." />
    </main>
  </Layout>
);

export default DrupalSeo;
