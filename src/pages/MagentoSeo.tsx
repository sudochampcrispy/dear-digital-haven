import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, Zap, Layers, ShoppingCart, FileText, Settings, Search } from "lucide-react";

const breadcrumb = buildBreadcrumb([{ name: "Home", url: "https://seoexpertinkarachi.com/" }, { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" }, { name: "Magento SEO", url: "https://seoexpertinkarachi.com/magento-seo" }]);
const webPage = buildWebPage({ name: "Magento SEO Services — Enterprise E-commerce Optimization", description: "Magento SEO services covering layered navigation, catalog optimization, URL rewriting, performance tuning, and structured data for Magento/Adobe Commerce stores.", url: "https://seoexpertinkarachi.com/magento-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Magento SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "Magento SEO", description: "Magento SEO services covering layered navigation SEO, catalog URL optimization, faceted search handling, full-page caching, and Product schema implementation for Magento and Adobe Commerce stores." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Why is Magento SEO complex?", acceptedAnswer: { "@type": "Answer", text: "Magento creates massive crawl budget challenges through layered navigation (faceted filters generating thousands of parameter URLs), configurable products (each variation potentially creating a separate URL), CMS page duplication, and category product URL duplication. A 5,000-product Magento store can generate 500,000+ indexable URLs without proper SEO configuration — overwhelming crawl budget and creating severe duplicate content problems." }},
  { "@type": "Question", name: "How do I handle Magento layered navigation for SEO?", acceptedAnswer: { "@type": "Answer", text: "Magento's layered navigation creates parameter-based URLs for every filter combination — size, color, price range. These URLs waste crawl budget and create thin duplicate content. Solutions include: adding noindex,follow meta robots to filtered pages, using canonical tags pointing to the parent category, blocking filter parameters in robots.txt, implementing AJAX-based filtering that doesn't create new URLs, or selectively indexing only high-value filter combinations with search demand." }},
  { "@type": "Question", name: "What is the difference between Magento Open Source and Adobe Commerce for SEO?", acceptedAnswer: { "@type": "Answer", text: "Adobe Commerce (formerly Magento Commerce) includes built-in features that improve SEO: content staging and scheduling, advanced product recommendations, Elasticsearch integration, and B2B functionality. Magento Open Source requires extensions for these capabilities. Both platforms share the same core SEO challenges — layered navigation, URL management, and performance. The SEO optimization approach is identical; Adobe Commerce simply includes more features out of the box." }},
]};

const pillars = [
  { icon: Layers, title: "Magento URL & Catalog Architecture", desc: "Magento's catalog generates complex URL structures through categories, products, and configurable items. Proper URL management prevents the crawl budget waste and duplicate content that cripple large Magento stores.", items: ["Category URL structure — clean, flat paths without unnecessary nesting or ID parameters", "Product URL canonicalization — resolving duplicate URLs from products in multiple categories", "Configurable product SEO — handling parent/child product URLs and canonical relationships", "URL rewrite management — cleaning Magento's URL rewrite table to prevent redirect chains", "Layered navigation SEO — noindex, canonical, or AJAX solutions for filter parameter URLs", "Pagination handling — proper canonical, prev/next, and noindex configuration for paginated listings"] },
  { icon: Zap, title: "Magento Performance & Speed", desc: "Magento stores average 5-8 seconds page load without optimization. The platform's heavy PHP processing, database queries, and unoptimized assets require aggressive performance tuning for Core Web Vitals compliance.", items: ["Full-page cache configuration — Varnish or built-in FPC for sub-second page delivery", "Elasticsearch/OpenSearch optimization for fast, relevant on-site search results", "Image optimization — WebP conversion, lazy loading, and responsive images through Magento's media gallery", "JavaScript bundling and minification — reducing render-blocking scripts that delay LCP", "Database query optimization — indexer configuration and query caching for faster page generation", "CDN configuration — offloading static assets to global edge nodes for faster delivery"] },
  { icon: FileText, title: "Magento Content & On-Page SEO", desc: "Magento's product and category pages are the primary SEO targets for e-commerce stores. Each page type requires specific optimization strategies to rank for commercial and transactional search queries.", items: ["Product page optimization — unique descriptions, specifications, and comparison data for each product", "Category page content — SEO descriptions above and below product grids with category-specific keywords", "CMS page strategy — creating informational content pages for top-of-funnel organic traffic", "Meta tag templates — dynamic title and description patterns using product/category attributes", "Internal linking through related products, cross-sells, and up-sells configured for SEO value", "Review and UGC optimization — leveraging customer reviews for long-tail keyword coverage"] },
  { icon: ShoppingCart, title: "Magento Schema & Rich Results", desc: "E-commerce schema markup enables rich results in search — product prices, ratings, availability, and shipping information displayed directly in search results. These rich snippets increase click-through rates by 20-35%.", items: ["Product schema with price, availability, brand, SKU, and review aggregate data", "BreadcrumbList schema for category and product page navigation context", "Organization schema with business information and contact details", "Offer schema with shipping, return policy, and payment method information", "AggregateRating schema from verified customer reviews for star ratings in search results", "FAQ schema on category and product pages for expanded SERP presence"] },
];

const MagentoSeo = () => (
  <Layout>
    <SeoHead title="Magento SEO Services — Enterprise E-commerce Optimization | Naveed Ganatra" description="Magento SEO services covering layered navigation, catalog optimization, URL management, performance tuning, and structured data for Magento and Adobe Commerce stores." canonical="https://seoexpertinkarachi.com/magento-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Magento SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Magento SEO Services in Karachi</h1>
        <p className="text-lg text-body mb-4">Magento (Adobe Commerce) powers 7.3% of the top 1 million e-commerce stores. Its enterprise-grade catalog management creates SEO complexity — layered navigation generates thousands of parameter URLs, configurable products create duplicate content, and heavy PHP processing degrades page speed.</p>
        <p className="text-body mb-8">Our Magento SEO services address catalog URL architecture, layered navigation handling, full-page cache configuration, product schema implementation, and performance optimization — resolving the platform-specific challenges that prevent Magento stores from achieving competitive organic rankings.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Magento SEO Audit</a>
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
          <Link to="/ecommerce-seo-karachi" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">E-commerce SEO</Link>
          <Link to="/woocommerce-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">WooCommerce SEO</Link>
          <Link to="/technical-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Technical SEO</Link>
          <Link to="/seo-services" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">All SEO Services</Link>
        </div>
      </div></section>

      <CtaBanner heading="Need Magento SEO Expertise?" text="Get a free Magento SEO audit covering catalog architecture, layered navigation, speed, and structured data." />
    </main>
  </Layout>
);

export default MagentoSeo;
