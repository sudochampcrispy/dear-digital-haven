import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, ShoppingCart, Zap, Layers, FileText, Shield, Settings } from "lucide-react";

const breadcrumb = buildBreadcrumb([{ name: "Home", url: "https://seoexpertinkarachi.com/" }, { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" }, { name: "OpenCart SEO", url: "https://seoexpertinkarachi.com/opencart-seo" }]);
const webPage = buildWebPage({ name: "OpenCart SEO Services — E-commerce Optimization for OpenCart Stores", description: "OpenCart SEO services covering SEF URL configuration, extension setup, duplicate content resolution, speed optimization, and structured data for OpenCart e-commerce stores.", url: "https://seoexpertinkarachi.com/opencart-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "OpenCart SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "OpenCart SEO", description: "OpenCart SEO services covering SEF URL configuration, SEO extension installation, duplicate content resolution, server performance optimization, and Product schema implementation for OpenCart stores." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Does OpenCart have good SEO features?", acceptedAnswer: { "@type": "Answer", text: "OpenCart's default SEO features are minimal compared to Shopify or BigCommerce. Out of the box, OpenCart provides basic SEO URL support, meta title and description fields, and H1 tag configuration. Advanced SEO features — XML sitemaps, canonical tags, structured data, robots.txt management, and redirect handling — require third-party extensions. OpenCart stores need significant SEO extension investment and configuration to compete with platforms that include these features natively." }},
  { "@type": "Question", name: "What are the biggest OpenCart SEO problems?", acceptedAnswer: { "@type": "Answer", text: "OpenCart's primary SEO challenges: duplicate content from products in multiple categories (same content, different URLs), lack of native canonical tag support, no built-in XML sitemap generation, SEF URLs requiring manual configuration and .htaccess modification, limited built-in schema markup, and performance issues from unoptimized themes and extensions. These issues compound — a 1,000-product OpenCart store can have 5,000+ duplicate URLs without proper SEO configuration." }},
  { "@type": "Question", name: "Should I migrate from OpenCart to another platform?", acceptedAnswer: { "@type": "Answer", text: "Migration depends on your specific situation. If your OpenCart store is profitable and functional, optimizing the existing installation is often faster and less risky than migration. If you need features OpenCart lacks (advanced marketing automation, headless commerce, extensive app ecosystems), migration to Shopify or WooCommerce may be justified. Any migration requires comprehensive SEO planning to preserve rankings and traffic." }},
]};

const pillars = [
  { icon: Settings, title: "OpenCart SEO Configuration & Extensions", desc: "OpenCart requires explicit SEO extension installation for features that other platforms include by default. Proper extension selection and configuration creates the SEO foundation that OpenCart's core lacks.", items: ["SEF URL activation and .htaccess configuration for clean, keyword-friendly product URLs", "SEO extension installation — canonical tags, XML sitemaps, and meta tag management", "Duplicate URL resolution — preventing products from creating multiple indexable URLs across categories", "Robots.txt configuration — blocking admin, checkout, and parameter-based URLs from crawling", "301 redirect management through extensions for changed or deleted product and category URLs", "Multilingual SEO setup — hreflang and language-specific URL configuration for multi-language stores"] },
  { icon: Layers, title: "OpenCart Catalog Architecture", desc: "OpenCart's category system creates the URL structure and navigation hierarchy. Strategic category planning prevents the duplicate content and crawl budget waste that plague unoptimized OpenCart installations.", items: ["Category hierarchy design — logical product organization with SEO-optimized URL paths", "Product URL canonicalization — ensuring each product has one authoritative URL regardless of category access", "Manufacturer and brand page optimization — creating additional ranking opportunities for brand searches", "Product filter SEO — configuring or blocking filter-generated URLs that create thin duplicate pages", "Breadcrumb implementation with proper structured data for navigation context in search results", "Internal linking through related products, category descriptions, and information pages"] },
  { icon: Zap, title: "OpenCart Performance Optimization", desc: "OpenCart's PHP-based architecture requires server-level optimization for competitive page speeds. Default OpenCart installations average 4-6 seconds LCP without caching and optimization.", items: ["Server-side caching — OPcache, Varnish, or LiteSpeed Cache for sub-second page delivery", "Database optimization — query caching, index optimization, and session table cleanup", "Image optimization — compression, lazy loading, and responsive delivery for product images", "Theme performance audit — replacing heavy themes with lightweight, speed-optimized alternatives", "Extension audit — removing unused extensions that add database queries and script loading", "CDN configuration for global static asset delivery with proper cache headers"] },
  { icon: ShoppingCart, title: "OpenCart Schema & Rich Results", desc: "OpenCart does not include native structured data. Schema markup implementation through extensions or template modification enables rich results that increase product visibility in search results.", items: ["Product schema with price, availability, brand, SKU, and condition data", "AggregateRating schema from customer reviews for star ratings in search results", "Organization schema with business contact and location information", "BreadcrumbList schema for improved navigation display in search results", "Offer schema with shipping, return policy, and payment information", "FAQ schema on category and information pages for expanded SERP presence"] },
];

const OpenCartSeo = () => (
  <Layout>
    <SeoHead title="OpenCart SEO Services — E-commerce Optimization for OpenCart | Naveed Ganatra" description="OpenCart SEO services covering URL configuration, extension setup, duplicate content resolution, speed optimization, and structured data for OpenCart stores." canonical="https://seoexpertinkarachi.com/opencart-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">OpenCart SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">OpenCart SEO Services in Karachi</h1>
        <p className="text-lg text-body mb-4">OpenCart is a free, open-source e-commerce platform used by over 400,000 stores worldwide. Its minimal default SEO features require significant extension investment and manual configuration — but properly optimized OpenCart stores can achieve competitive organic rankings without platform migration.</p>
        <p className="text-body mb-8">Our OpenCart SEO services cover SEF URL configuration, essential extension installation, duplicate content resolution, server performance optimization, and Product schema implementation — building the SEO infrastructure that OpenCart's core does not provide.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get OpenCart SEO Audit</a>
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
          <Link to="/magento-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Magento SEO</Link>
          <Link to="/woocommerce-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">WooCommerce SEO</Link>
          <Link to="/ecommerce-seo-karachi" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">E-commerce SEO</Link>
          <Link to="/seo-services" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">All SEO Services</Link>
        </div>
      </div></section>

      <CtaBanner heading="Need OpenCart SEO Help?" text="Get a free OpenCart SEO audit covering URL structure, duplicate content, speed, and ranking opportunities." />
    </main>
  </Layout>
);

export default OpenCartSeo;
