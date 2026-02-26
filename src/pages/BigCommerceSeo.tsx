import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, ShoppingCart, Zap, Layers, FileText, Tag, Settings } from "lucide-react";

const breadcrumb = buildBreadcrumb([{ name: "Home", url: "https://seoexpertinkarachi.com/" }, { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" }, { name: "BigCommerce SEO", url: "https://seoexpertinkarachi.com/bigcommerce-seo" }]);
const webPage = buildWebPage({ name: "BigCommerce SEO Services — E-commerce Platform Optimization", description: "BigCommerce SEO services covering built-in SEO features, URL optimization, faceted search handling, and structured data for BigCommerce stores.", url: "https://seoexpertinkarachi.com/bigcommerce-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "BigCommerce SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "BigCommerce SEO", description: "BigCommerce SEO services leveraging the platform's built-in SEO features while addressing catalog architecture, faceted search, and performance optimization for BigCommerce stores." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Is BigCommerce better for SEO than Shopify?", acceptedAnswer: { "@type": "Answer", text: "BigCommerce provides stronger native SEO features: customizable URL structures without forced prefixes, built-in microdata/schema markup, automatic image optimization with WebP, and native faceted search SEO controls. Shopify forces /products/ and /collections/ URL prefixes and requires apps for advanced schema. However, Shopify's larger ecosystem means more SEO apps and theme options. For pure SEO capability, BigCommerce has the edge; for ecosystem and simplicity, Shopify often wins." }},
  { "@type": "Question", name: "What are BigCommerce's SEO advantages?", acceptedAnswer: { "@type": "Answer", text: "BigCommerce's key SEO advantages: fully customizable URL slugs for products, categories, and pages (no forced prefixes), built-in product schema markup with microdata, automatic 301 redirect creation when URLs change, CDN-powered image delivery with WebP conversion, native robots.txt editing, automatic XML sitemaps, and faceted search controls with canonical tag management. These features are built into the platform — no third-party apps required." }},
]};

const pillars = [
  { icon: Layers, title: "BigCommerce Catalog & URL Architecture", desc: "BigCommerce provides the most flexible URL structure of any hosted e-commerce platform. This flexibility enables SEO-optimized URL paths that match keyword targeting strategy without platform-imposed constraints.", items: ["Custom URL structure — clean product, category, and page URLs without forced prefixes", "Category hierarchy optimization — creating logical product silos with SEO-friendly nesting", "Automatic 301 redirects — leveraging BigCommerce's built-in redirect creation on URL changes", "Faceted search SEO — configuring which filter combinations create indexable URLs vs. noindex", "Product URL canonicalization — preventing duplicate content across category-product relationships", "Brand page optimization — utilizing BigCommerce's brand pages as additional ranking opportunities"] },
  { icon: Zap, title: "BigCommerce Performance", desc: "BigCommerce's infrastructure includes CDN, automatic image optimization, and server-side rendering. Optimization focuses on theme code efficiency and third-party script management.", items: ["Theme performance audit — identifying render-blocking CSS/JS from theme customizations", "Image optimization using BigCommerce's built-in WebP conversion and lazy loading", "Third-party script management — async loading for analytics, chat, and marketing scripts", "Custom CSS and JavaScript optimization — minifying and deferring non-critical assets", "AMP page configuration for mobile speed on product and category pages", "Font loading optimization — limiting font families and implementing font-display:swap"] },
  { icon: FileText, title: "BigCommerce Content & On-Page SEO", desc: "BigCommerce's content management supports product descriptions, category descriptions, blog posts, and custom pages. Strategic content across these areas builds topical authority and captures search queries at every funnel stage.", items: ["Product description optimization with unique, keyword-rich content using BigCommerce's WYSIWYG editor", "Category description strategy — above-grid and below-grid content for category keyword targeting", "Blog content strategy using BigCommerce's built-in blog for informational keyword coverage", "Custom page creation for landing pages, buying guides, and comparison content", "Meta tag optimization — unique titles and descriptions leveraging BigCommerce's per-page SEO fields", "Image alt text and file name optimization across all product and content images"] },
  { icon: Tag, title: "BigCommerce Schema & Structured Data", desc: "BigCommerce includes built-in microdata schema markup for products. Enhanced structured data implementation enables additional rich result types that improve search visibility.", items: ["Product schema verification — ensuring built-in microdata includes all required and recommended fields", "AggregateRating schema from BigCommerce product reviews for star ratings in SERPs", "BreadcrumbList schema for improved category navigation display in search results", "Organization and LocalBusiness schema through custom HTML or BigCommerce Script Manager", "FAQ schema on category and product pages for expanded search result presence", "Sitelinks search box schema for branded search queries"] },
];

const BigCommerceSeo = () => (
  <Layout>
    <SeoHead title="BigCommerce SEO Services — E-commerce Platform Optimization | Naveed Ganatra" description="BigCommerce SEO services covering URL optimization, faceted search, performance tuning, and structured data for BigCommerce stores." canonical="https://seoexpertinkarachi.com/bigcommerce-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">BigCommerce SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">BigCommerce SEO Services in Karachi</h1>
        <p className="text-lg text-body mb-4">BigCommerce provides the strongest native SEO features of any hosted e-commerce platform — fully customizable URLs, built-in Product schema, automatic 301 redirects, and faceted search controls without third-party apps. These built-in capabilities reduce SEO implementation complexity compared to Shopify or WooCommerce.</p>
        <p className="text-body mb-8">Our BigCommerce SEO services maximize the platform's native SEO advantages while addressing catalog architecture, content strategy, performance optimization, and advanced structured data implementation for competitive organic rankings.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get BigCommerce SEO Audit</a>
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
          <Link to="/shopify-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Shopify SEO</Link>
          <Link to="/ecommerce-seo-karachi" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">E-commerce SEO</Link>
          <Link to="/woocommerce-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">WooCommerce SEO</Link>
          <Link to="/seo-services" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">All SEO Services</Link>
        </div>
      </div></section>

      <CtaBanner heading="Ready to Leverage BigCommerce's SEO Advantages?" text="Get a free BigCommerce SEO audit covering your catalog architecture, URL structure, and ranking opportunities." />
    </main>
  </Layout>
);

export default BigCommerceSeo;
