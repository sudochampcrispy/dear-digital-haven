import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, ShoppingCart, Zap, Layers, FileText, Tag, Settings } from "lucide-react";

const breadcrumb = buildBreadcrumb([{ name: "Home", url: "https://seoexpertinkarachi.com/" }, { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" }, { name: "WooCommerce SEO", url: "https://seoexpertinkarachi.com/woocommerce-seo" }]);
const webPage = buildWebPage({ name: "WooCommerce SEO Services — WordPress E-commerce Optimization", description: "WooCommerce SEO services covering product page optimization, category architecture, variable product handling, speed optimization, and Product schema for WooCommerce stores.", url: "https://seoexpertinkarachi.com/woocommerce-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "WooCommerce SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "WooCommerce SEO", description: "WooCommerce SEO services covering product and category optimization, variable product handling, WordPress+WooCommerce performance tuning, and structured data for WooCommerce e-commerce stores." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "What makes WooCommerce SEO different from regular WordPress SEO?", acceptedAnswer: { "@type": "Answer", text: "WooCommerce adds e-commerce-specific SEO challenges to WordPress: product and variation URL management, category/attribute taxonomy architecture, cart and checkout page noindexing, product feed generation, and Product schema markup. WooCommerce also significantly increases database queries per page — a product page with variations, related products, and reviews generates 100-300 database queries compared to 20-50 for a standard WordPress post." }},
  { "@type": "Question", name: "How do I handle WooCommerce variable products for SEO?", acceptedAnswer: { "@type": "Answer", text: "WooCommerce variable products create a single parent URL with variation options. This is SEO-efficient — all link equity concentrates on one URL. However, if variations represent substantially different products (e.g., different shoe models sold as 'variations'), creating separate simple products with unique content is better. The rule: use variations for attribute differences (size, color) and separate products for functionally different items that deserve unique ranking opportunities." }},
  { "@type": "Question", name: "Which WooCommerce SEO plugin is best?", acceptedAnswer: { "@type": "Answer", text: "For WooCommerce SEO: Rank Math provides the best WooCommerce integration — automatic Product schema, WooCommerce-specific sitemaps, and breadcrumb support. Yoast WooCommerce SEO (premium add-on) provides similar features with Yoast's interface. Both handle WooCommerce-specific SEO requirements: product schema, OpenGraph product tags, and breadcrumb navigation. The critical factor is proper configuration — not plugin choice." }},
]};

const pillars = [
  { icon: ShoppingCart, title: "WooCommerce Product & Category Optimization", desc: "WooCommerce product and category pages are the primary revenue generators. Each requires unique content, proper schema, and strategic keyword targeting to rank for commercial search queries.", items: ["Product page optimization — unique descriptions, specifications, and use case content for each product", "Category page content — SEO descriptions with category-specific keywords above and below product grids", "Variable product strategy — proper variation handling without creating duplicate content issues", "Product tag management — consolidating or noindexing product tags that create thin archive pages", "Attribute archive optimization — configuring or blocking attribute pages based on search demand", "Cross-sell and upsell configuration — related products that serve both conversion and internal linking"] },
  { icon: Zap, title: "WooCommerce Speed Optimization", desc: "WooCommerce stores add 100-300 database queries per product page on top of WordPress's baseline. Without aggressive performance optimization, WooCommerce stores fail Core Web Vitals thresholds consistently.", items: ["Object caching with Redis — reducing database query load by 60-80% through persistent caching", "WooCommerce-specific fragment caching — caching cart, mini-cart, and dynamic pricing elements", "Image optimization for product galleries — WebP, lazy loading, and responsive srcset", "Cart and checkout page optimization — minimizing JavaScript for critical conversion pages", "Plugin audit — replacing heavy WooCommerce extensions with performance-optimized alternatives", "Database optimization — cleaning WooCommerce transients, expired sessions, and orphaned variation data"] },
  { icon: Tag, title: "WooCommerce Schema & Rich Results", desc: "WooCommerce with Rank Math or Yoast generates basic Product schema. Enhanced schema with reviews, offers, shipping, and brand data enables rich results that increase click-through rates by 20-35%.", items: ["Product schema enhancement — adding brand, GTIN, MPN, and detailed offer data", "AggregateRating schema from WooCommerce product reviews for star ratings in SERPs", "Offer schema with shipping costs, return policies, and payment methods", "BreadcrumbList schema reflecting WooCommerce's category hierarchy", "Organization schema with e-commerce-specific business information", "FAQ schema on product category pages for expanded SERP presence"] },
  { icon: Layers, title: "WooCommerce Architecture & Internal Linking", desc: "WooCommerce's category, tag, and attribute taxonomies create the site architecture that search engines use to understand your product catalog. Proper architecture prevents crawl budget waste and content cannibalization.", items: ["Category hierarchy design — creating SEO-optimized product silos through WooCommerce categories", "Breadcrumb navigation with proper BreadcrumbList structured data", "Internal linking through related products, category descriptions, and blog content", "Pagination SEO for large product categories with hundreds of products", "Search and filter SEO — preventing WooCommerce's product search from creating indexable URLs", "Archive page management — noindexing low-value date, author, and tag archives"] },
];

const WooCommerceSeo = () => (
  <Layout>
    <SeoHead title="WooCommerce SEO Services — WordPress E-commerce Optimization | Naveed Ganatra" description="WooCommerce SEO services covering product optimization, category architecture, speed tuning, and structured data for WooCommerce stores." canonical="https://seoexpertinkarachi.com/woocommerce-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">WooCommerce SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">WooCommerce SEO Services in Karachi</h1>
        <p className="text-lg text-body mb-4">WooCommerce powers 36.7% of all e-commerce stores worldwide. Built on WordPress, it combines WordPress's SEO flexibility with e-commerce-specific challenges — variable product handling, high database query loads, and complex taxonomy architecture that requires platform-specific optimization.</p>
        <p className="text-body mb-8">Our WooCommerce SEO services address product and category optimization, database-level performance tuning, structured data enhancement, and catalog architecture — building on WordPress SEO foundations with e-commerce-specific strategies that drive organic revenue growth.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get WooCommerce SEO Audit</a>
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
          <Link to="/ecommerce-seo-karachi" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">E-commerce SEO</Link>
          <Link to="/shopify-ecommerce-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Shopify E-commerce SEO</Link>
          <Link to="/seo-services" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">All SEO Services</Link>
        </div>
      </div></section>

      <CtaBanner heading="Ready to Optimize Your WooCommerce Store?" text="Get a free WooCommerce SEO audit covering speed, product pages, schema, and revenue opportunities." />
    </main>
  </Layout>
);

export default WooCommerceSeo;
