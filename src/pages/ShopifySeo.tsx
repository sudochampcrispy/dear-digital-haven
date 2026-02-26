import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, ShoppingCart, Zap, Layers, FileText, Search, Tag } from "lucide-react";

const breadcrumb = buildBreadcrumb([{ name: "Home", url: "https://seoexpertinkarachi.com/" }, { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" }, { name: "Shopify SEO", url: "https://seoexpertinkarachi.com/shopify-seo" }]);
const webPage = buildWebPage({ name: "Shopify SEO Services — Store Optimization & Search Visibility", description: "Shopify SEO services covering URL structure limitations, liquid template optimization, collection page strategy, and Shopify-specific technical fixes for higher organic rankings.", url: "https://seoexpertinkarachi.com/shopify-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Shopify SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "Shopify SEO", description: "Shopify SEO services addressing URL structure constraints, Liquid template optimization, collection page hierarchy, canonical tag management, and structured data for Shopify stores." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "What are Shopify's biggest SEO limitations?", acceptedAnswer: { "@type": "Answer", text: "Shopify has 4 primary SEO limitations: forced URL prefixes (/products/, /collections/, /pages/) that create longer URL paths, duplicate content from product URLs appearing under multiple collections, limited control over robots.txt (read-only until Shopify 2.0 themes), and restricted access to server-side configuration. These constraints require Shopify-specific workarounds that differ from standard SEO practices." }},
  { "@type": "Question", name: "How do I handle duplicate content on Shopify?", acceptedAnswer: { "@type": "Answer", text: "Shopify creates duplicate URLs when products belong to multiple collections. A product at /products/shoe also exists at /collections/running/products/shoe. Shopify handles this with canonical tags pointing to the /products/ URL, but internal links from collection pages point to the collection-prefixed URL. Fix this by modifying Liquid templates to link directly to canonical /products/ URLs and ensuring your XML sitemap only includes canonical versions." }},
  { "@type": "Question", name: "Does Shopify page speed affect SEO rankings?", acceptedAnswer: { "@type": "Answer", text: "Shopify stores average 3.8 seconds LCP due to theme bloat, app scripts, and unoptimized images. Google requires under 2.5 seconds for good Core Web Vitals scores. Shopify speed optimization includes removing unused apps, implementing lazy loading, optimizing Liquid render performance, and using Shopify's built-in image CDN with proper srcset configuration. Stores achieving good Core Web Vitals see 15-25% more organic traffic." }},
]};

const pillars = [
  { icon: Layers, title: "Shopify URL & Architecture Optimization", desc: "Shopify enforces URL prefixes (/products/, /collections/, /pages/) that cannot be removed. Effective Shopify SEO works within these constraints to build clean site architecture and logical content hierarchy.", items: ["Collection hierarchy strategy — using nested collections to create topical content silos", "Product URL canonicalization — ensuring Liquid templates link to canonical /products/ URLs, not collection-prefixed duplicates", "Navigation and menu structure optimization for crawl efficiency and user experience", "Pagination handling for large collection pages with proper canonical and meta directives", "Custom page creation strategy — building SEO landing pages beyond Shopify's default page types", "Internal linking through Liquid template modifications and metafield-driven related products"] },
  { icon: Zap, title: "Shopify Speed & Performance", desc: "Shopify's hosted infrastructure provides baseline performance, but theme code, apps, and third-party scripts degrade speed significantly. Average Shopify stores fail Core Web Vitals without optimization.", items: ["Theme performance audit — identifying render-blocking CSS/JS from theme code and Shopify apps", "App cleanup — removing unused apps and replacing heavy apps with lightweight alternatives", "Image optimization using Shopify's image_url filter with proper width, height, and format parameters", "Lazy loading implementation for below-fold images, videos, and third-party embeds", "Critical CSS extraction and font loading optimization for faster above-fold rendering", "Liquid template optimization — reducing Liquid render time through efficient loop and filter usage"] },
  { icon: FileText, title: "Shopify Content & On-Page SEO", desc: "Shopify's content editor limits formatting options compared to WordPress. Effective on-page SEO on Shopify requires Liquid template customization and strategic use of metafields for structured content.", items: ["Product description optimization with unique, keyword-rich content for each product page", "Collection page content — adding optimized descriptions above and below product grids", "Blog content strategy using Shopify's built-in blog for topical authority building", "Meta title and description templates — dynamic SEO metadata using Liquid variables", "Image alt text optimization across product images, collection images, and blog content", "Metafield-based structured content — adding custom fields for enhanced product information"] },
  { icon: Tag, title: "Shopify Schema & Structured Data", desc: "Shopify themes include basic Product schema, but most miss critical schema types that enable rich results. Comprehensive structured data implementation improves click-through rates by 20-35% in search results.", items: ["Product schema enhancement — adding offers, reviews, availability, and brand data beyond theme defaults", "BreadcrumbList schema for improved navigation display in search results", "Organization and LocalBusiness schema for brand entity recognition", "FAQ schema on product and collection pages for expanded SERP presence", "Article schema for blog posts with proper author and publisher markup", "Sitelinks search box schema for branded search enhancement"] },
];

const ShopifySeo = () => (
  <Layout>
    <SeoHead title="Shopify SEO Services — Store Optimization & Rankings | Naveed Ganatra" description="Shopify SEO services covering URL structure, Liquid template optimization, collection strategy, speed optimization, and structured data for higher organic rankings." canonical="https://seoexpertinkarachi.com/shopify-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Shopify SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Shopify SEO Services in Karachi</h1>
        <p className="text-lg text-body mb-4">Shopify powers over 4.6 million stores worldwide. Its hosted architecture provides reliability but imposes SEO constraints — forced URL structures, duplicate content from collections, and limited server-side control require platform-specific optimization strategies.</p>
        <p className="text-body mb-8">Our Shopify SEO services address URL canonicalization, Liquid template optimization, collection page architecture, speed performance, and structured data implementation — resolving the technical limitations that prevent Shopify stores from ranking competitively.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Shopify SEO Audit</a>
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
          <Link to="/shopify-ecommerce-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Shopify E-commerce SEO</Link>
          <Link to="/ecommerce-seo-karachi" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">E-commerce SEO</Link>
          <Link to="/technical-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Technical SEO</Link>
          <Link to="/seo-services" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">All SEO Services</Link>
        </div>
      </div></section>

      <CtaBanner heading="Ready to Optimize Your Shopify Store?" text="Get a free Shopify SEO audit covering speed, URL structure, duplicate content, and ranking opportunities." />
    </main>
  </Layout>
);

export default ShopifySeo;
