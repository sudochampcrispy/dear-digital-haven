import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, ShoppingCart, Search, FileText, BarChart3, Layers, Globe } from "lucide-react";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "eCommerce SEO", url: "https://seoexpertinkarachi.com/ecommerce-seo" },
]);
const webPage = buildWebPage({ name: "eCommerce SEO Services — Product Rankings, Category Optimization & Revenue Growth", description: "eCommerce SEO services covering product page optimization, category architecture, faceted navigation SEO, structured data for products, and conversion-focused organic strategy for online stores.", url: "https://seoexpertinkarachi.com/ecommerce-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "eCommerce SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "eCommerce SEO", description: "eCommerce SEO services covering product page optimization, category architecture, faceted navigation management, Product schema markup, duplicate content resolution, and conversion-focused organic growth strategy for online stores across all platforms." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Why is eCommerce SEO different from regular SEO?", acceptedAnswer: { "@type": "Answer", text: "eCommerce SEO deals with unique challenges: thousands of product pages creating duplicate content risks, faceted navigation generating millions of URL combinations that waste crawl budget, product variants requiring canonical management, seasonal inventory changes causing 404 errors, and the need for Product schema markup on every listing. Regular SEO strategies fail on eCommerce sites because they don't address these platform-specific technical challenges that directly impact indexation and rankings." }},
  { "@type": "Question", name: "How do you optimize product pages for search?", acceptedAnswer: { "@type": "Answer", text: "Each product page needs a unique title tag with the product name, brand, and key attribute, a meta description highlighting USP and price point, unique product description (not manufacturer copy), optimized images with descriptive alt text, Product schema markup with price, availability, reviews, and brand, internal links to related products and parent categories, and customer review content that adds unique text and long-tail keywords. Products using manufacturer descriptions compete with every other retailer selling the same product." }},
  { "@type": "Question", name: "What is faceted navigation SEO?", acceptedAnswer: { "@type": "Answer", text: "Faceted navigation (filters for size, color, price, brand) creates unique URLs for every filter combination — potentially millions of pages that waste crawl budget and create duplicate content. eCommerce SEO manages this through canonical tags pointing filters to parent categories, noindex directives on low-value filter combinations, robots.txt rules blocking parameter-heavy URLs, and strategic indexing of high-search-volume filter combinations like 'red running shoes size 10'. Proper faceted navigation SEO can improve crawl efficiency by 60-80%." }},
  { "@type": "Question", name: "How long does eCommerce SEO take to increase revenue?", acceptedAnswer: { "@type": "Answer", text: "eCommerce SEO timelines depend on store size and competition. Technical fixes (canonicals, schema, crawl optimization) show impact within 4-8 weeks. Category page rankings improve within 2-4 months. Product page rankings for long-tail queries start within 3-5 months. Competitive category terms take 6-12 months. Stores that fix technical foundations first see the fastest compound growth — a 20% improvement in crawl efficiency plus category optimization typically produces 40-60% organic revenue growth within 6-9 months." }},
]};

const pillars = [
  { icon: ShoppingCart, title: "Product Page Optimization", desc: "Product pages are the revenue-generating pages of any eCommerce site. Each must rank for its specific product query with unique content, proper schema, and conversion-optimized structure.", items: ["Unique product descriptions — original, benefit-focused copy replacing duplicate manufacturer descriptions", "Product schema markup — price, availability, reviews, brand, and SKU structured data for rich results", "Image optimization — descriptive alt text, WebP format, lazy loading, and image sitemap inclusion", "Internal linking — related products, category breadcrumbs, and cross-sell links strengthening page authority", "Review integration — customer reviews adding unique user-generated content and long-tail keyword coverage", "Product variant management — canonical strategy for color, size, and configuration variants preventing duplication"] },
  { icon: Layers, title: "Category Architecture & Navigation", desc: "Category pages often drive more organic traffic than individual products. Proper taxonomy, breadcrumb structure, and faceted navigation management determine how much of your catalog Google indexes.", items: ["Category hierarchy optimization — logical taxonomy matching how customers search and browse products", "Faceted navigation SEO — canonical, noindex, and robots directives managing filter-generated URLs", "Breadcrumb implementation — schema-marked breadcrumbs improving both UX and search engine understanding", "Category page content — unique descriptive content on category pages beyond just product listings", "Subcategory strategy — creating intermediate pages for popular search terms within broad categories", "Pagination handling — rel=next/prev, load more, and infinite scroll SEO best practices"] },
  { icon: Search, title: "eCommerce Technical SEO", desc: "eCommerce sites face technical challenges that other websites don't — crawl budget management across thousands of pages, site speed with heavy product imagery, and constant inventory changes.", items: ["Crawl budget optimization — ensuring Google spends crawl budget on revenue pages, not filtered variations", "Site speed optimization — image compression, CDN configuration, and Core Web Vitals for product pages", "XML sitemap strategy — dynamic sitemaps reflecting current inventory with proper priority signals", "404 and redirect management — handling discontinued products with redirects to alternatives or categories", "Structured data validation — ensuring Product, Offer, and AggregateRating schema renders correctly", "JavaScript rendering — ensuring product content loads for search engines on SPA-based storefronts"] },
  { icon: BarChart3, title: "eCommerce Content & Link Strategy", desc: "eCommerce content marketing drives top-of-funnel traffic that feeds product page authority. Buying guides, comparison content, and resource pages capture research-stage shoppers.", items: ["Buying guides — 'best [product category]' and 'how to choose [product]' content capturing research intent", "Product comparison content — side-by-side comparisons ranking for '[product A] vs [product B]' queries", "Seasonal content — holiday gift guides, seasonal collections, and trend-based content capturing seasonal surges", "Link-worthy resource pages — tools, calculators, and comprehensive guides that earn editorial backlinks", "Influencer and review outreach — product seeding for reviews that generate both links and referral traffic", "User-generated content strategy — customer photos, unboxings, and reviews adding unique indexable content"] },
];

const EcommerceSeo = () => (
  <Layout>
    <SeoHead title="eCommerce SEO Services — Product Rankings & Revenue Growth | Naveed Ganatra" description="eCommerce SEO services covering product page optimization, category architecture, faceted navigation, structured data, and conversion-focused organic strategy for online stores." canonical="https://seoexpertinkarachi.com/ecommerce-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">eCommerce SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">eCommerce SEO Services</h1>
        <p className="text-lg text-body mb-4">44% of online shoppers begin their product search on Google. In Pakistan's rapidly growing eCommerce market, stores that rank for product and category keywords capture buyers with the highest purchase intent — at zero per-click cost.</p>
        <p className="text-body mb-8">Our eCommerce SEO services cover product page optimization, category architecture, faceted navigation management, structured data implementation, and conversion-focused content strategy — built for stores on every platform.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get eCommerce SEO Consultation</a>
          <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link>
        </div>
      </div></div></section>

      <section className="section-padding"><div className="section-container">
        <h2 className="text-3xl font-bold mb-4">Why eCommerce Stores Need Specialized SEO</h2>
        <p className="text-body max-w-3xl">eCommerce SEO requires advanced <Link to="/technical-seo" className="text-primary hover:underline">technical SEO</Link> to manage crawl budget across thousands of pages and faceted navigation. Every product needs proper <Link to="/on-page-seo" className="text-primary hover:underline">on-page optimization</Link> with unique content, while a data-driven <Link to="/keyword-research" className="text-primary hover:underline">keyword research</Link> approach identifies the product and category terms that drive revenue.</p>
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
          <Link to="/seo-services" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">All SEO Services</Link>
          <Link to="/shopify-ecommerce-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Shopify eCommerce</Link>
          <Link to="/woocommerce-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">WooCommerce SEO</Link>
          <Link to="/technical-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Technical SEO</Link>
        </div>
      </div></section>

      <section className="section-padding"><div className="section-container max-w-3xl">
        <div className="metric-card bg-primary/5 border-primary/20">
          <h2 className="text-2xl font-bold text-heading mb-3">Ready to Grow Your Online Store's Organic Revenue?</h2>
          <p className="text-body mb-6">Get a free eCommerce SEO assessment covering your product page optimization, category structure, technical health, and a strategy for increasing organic revenue.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get eCommerce SEO Assessment →</a>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">Hire Naveed Ganatra</Link>
          </div>
        </div>
      </div></section>
      <CtaBanner />
    </main>
  </Layout>
);

export default EcommerceSeo;
