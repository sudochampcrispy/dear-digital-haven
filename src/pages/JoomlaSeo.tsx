import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, Zap, Layers, FileText, Settings, Shield, Search } from "lucide-react";

const breadcrumb = buildBreadcrumb([{ name: "Home", url: "https://seoexpertinkarachi.com/" }, { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" }, { name: "Joomla SEO", url: "https://seoexpertinkarachi.com/joomla-seo" }]);
const webPage = buildWebPage({ name: "Joomla SEO Services — CMS Optimization for Joomla Websites", description: "Joomla SEO services covering URL rewriting, extension configuration, menu structure optimization, caching, and structured data for Joomla-powered websites.", url: "https://seoexpertinkarachi.com/joomla-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Joomla SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "Joomla SEO", description: "Joomla SEO services covering URL rewriting configuration, SEO extension setup, menu structure optimization, caching configuration, and structured data for Joomla CMS websites." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Does Joomla have built-in SEO features?", acceptedAnswer: { "@type": "Answer", text: "Joomla includes several built-in SEO features: Search Engine Friendly URLs, URL rewriting (mod_rewrite), metadata fields for every article and menu item, automatic canonical tags, and category-based content hierarchy. However, Joomla's built-in SEO features are less comprehensive than WordPress plugins — extensions like sh404SEF, JoomSEF, or JEXY SEO are required for advanced meta tag management, redirect handling, and structured data implementation." }},
  { "@type": "Question", name: "Is Joomla still relevant for SEO in 2026?", acceptedAnswer: { "@type": "Answer", text: "Joomla powers 1.7% of all CMS-based websites. While its market share has declined, Joomla remains relevant for organizations with existing Joomla installations — government sites, educational institutions, and multilingual organizations. Joomla 5 introduced significant performance improvements, modern PHP compatibility, and better accessibility. Migration to WordPress or another platform is not always necessary — proper SEO optimization of existing Joomla sites often produces faster results than platform migration." }},
  { "@type": "Question", name: "How do I fix Joomla duplicate content issues?", acceptedAnswer: { "@type": "Answer", text: "Joomla creates duplicate content through multiple routes: articles accessible through categories and menu items simultaneously, tag pages duplicating category content, print view pages creating alternate URLs, and parameter-based URLs from modules. Fix these by enabling canonical tags in Joomla's global configuration, using sh404SEF for advanced URL management, adding noindex directives to tag and author archive pages, and implementing proper redirect chains for legacy URLs." }},
]};

const pillars = [
  { icon: Settings, title: "Joomla SEO Configuration", desc: "Joomla's Global Configuration contains essential SEO settings that affect every page. Combined with SEO extensions, these settings control URL structure, metadata, and indexing behavior across the entire site.", items: ["Search Engine Friendly URLs — enabling mod_rewrite and URL suffix removal", "Global metadata configuration — site-wide meta description and keywords defaults", "SEO extension setup — configuring sh404SEF or JEXY SEO for advanced URL and meta management", "Canonical URL enforcement — preventing duplicate content from multiple content access paths", "XML sitemap generation using extensions with proper priority and change frequency settings", "Robots.txt optimization — blocking duplicate pages, admin paths, and low-value URLs"] },
  { icon: Layers, title: "Joomla Menu & Architecture", desc: "Joomla's menu system drives URL structure and navigation hierarchy. Each menu item creates a URL path — making menu architecture the primary determinant of site structure and crawl efficiency.", items: ["Menu structure planning — creating logical URL hierarchy through nested menu items", "Category architecture — organizing articles into SEO-optimized category trees", "Article alias optimization — clean, keyword-relevant URL slugs for every article", "Breadcrumb module configuration with proper structured data output", "Internal linking through article content, related articles modules, and custom modules", "Multi-menu strategy — using hidden menu items for SEO-specific URL paths"] },
  { icon: Zap, title: "Joomla Performance & Speed", desc: "Joomla sites frequently underperform in Core Web Vitals due to extension bloat, unoptimized templates, and database inefficiency. Platform-specific optimization targets these performance bottlenecks.", items: ["Joomla cache configuration — page caching, progressive caching, and browser cache headers", "Template optimization — replacing heavy templates with lightweight, speed-optimized alternatives", "Extension audit — removing unused extensions and replacing heavy ones with efficient alternatives", "Database optimization — cleaning expired sessions, redirect logs, and orphaned data", "Image optimization — compression, lazy loading, and responsive image delivery", "CDN integration for global asset delivery with proper Joomla cache integration"] },
  { icon: Shield, title: "Joomla Security & Maintenance", desc: "Joomla security updates are critical for maintaining search engine trust. Compromised Joomla sites receive malware warnings in search results, causing immediate organic traffic drops of 60-90%.", items: ["Joomla core and extension updates — applying security patches within 48 hours of release", "Admin panel security — changing admin URL, enabling two-factor authentication", "File permission hardening — preventing unauthorized modifications that inject spam", "Security extension configuration — Admin Tools or RSFirewall for proactive protection", "Backup automation — regular full-site backups for rapid recovery after any security incident", "SSL enforcement and security header implementation for crawl trust signals"] },
];

const JoomlaSeo = () => (
  <Layout>
    <SeoHead title="Joomla SEO Services — CMS Optimization for Joomla | Naveed Ganatra" description="Joomla SEO services covering URL rewriting, extension configuration, menu structure, caching, and structured data for Joomla-powered websites." canonical="https://seoexpertinkarachi.com/joomla-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Joomla SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Joomla SEO Services in Karachi</h1>
        <p className="text-lg text-body mb-4">Joomla powers 1.7% of all CMS-based websites, including government portals, educational institutions, and multilingual organizations. Its menu-driven architecture and extension ecosystem create SEO challenges that require platform-specific expertise.</p>
        <p className="text-body mb-8">Our Joomla SEO services cover URL configuration, extension setup, menu architecture optimization, performance tuning, and security maintenance — maximizing organic visibility for existing Joomla installations without requiring platform migration.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Joomla SEO Audit</a>
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
          <Link to="/drupal-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Drupal SEO</Link>
          <Link to="/website-migration-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Website Migration</Link>
          <Link to="/seo-services" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">All SEO Services</Link>
        </div>
      </div></section>

      <CtaBanner heading="Need Joomla SEO Help?" text="Get a free Joomla SEO audit covering configuration, architecture, and performance optimization." />
    </main>
  </Layout>
);

export default JoomlaSeo;
