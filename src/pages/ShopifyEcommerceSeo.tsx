import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, ShoppingCart, Target, TrendingUp, FileText, Tag, BarChart3 } from "lucide-react";

const breadcrumb = buildBreadcrumb([{ name: "Home", url: "https://seoexpertinkarachi.com/" }, { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" }, { name: "Shopify E-commerce SEO", url: "https://seoexpertinkarachi.com/shopify-ecommerce-seo" }]);
const webPage = buildWebPage({ name: "Shopify E-commerce SEO — Revenue-Focused Store Optimization", description: "Shopify e-commerce SEO services covering product page optimization, collection strategy, conversion-focused content, shopping feed optimization, and revenue attribution for Shopify stores.", url: "https://seoexpertinkarachi.com/shopify-ecommerce-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Shopify E-commerce SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "Shopify E-commerce SEO", description: "Shopify e-commerce SEO services focused on revenue growth through product page optimization, collection strategy, shopping feed management, conversion optimization, and organic revenue attribution." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "How is Shopify e-commerce SEO different from general Shopify SEO?", acceptedAnswer: { "@type": "Answer", text: "General Shopify SEO addresses platform-specific technical issues — URL structure, Liquid templates, canonical tags. Shopify e-commerce SEO focuses on revenue-generating strategies — product page conversion optimization, collection page ranking for commercial keywords, shopping feed management, cross-sell and upsell SEO, and organic revenue attribution. E-commerce SEO measures success in revenue and ROAS, not just traffic and rankings." }},
  { "@type": "Question", name: "How do I optimize Shopify product pages for SEO?", acceptedAnswer: { "@type": "Answer", text: "Shopify product page SEO requires: unique product descriptions (not manufacturer copy), keyword-optimized product titles, comprehensive specification details, customer reviews with Product/Review schema, high-quality images with descriptive alt text, and internal links to related products and collections. Product pages targeting commercial keywords ('buy [product]', '[product] price') should include pricing, availability, shipping information, and trust signals to satisfy transactional search intent." }},
  { "@type": "Question", name: "What is Shopify shopping feed optimization?", acceptedAnswer: { "@type": "Answer", text: "Shopping feed optimization ensures your product data appears correctly in Google Shopping, Google Merchant Center, and comparison shopping engines. This includes: accurate product titles with brand and key attributes, GTINs/MPNs for product identification, correct product categories, competitive pricing data, high-resolution product images meeting Google's requirements, and proper availability status. Optimized feeds increase product visibility in shopping carousels that appear above organic results." }},
]};

const pillars = [
  { icon: ShoppingCart, title: "Product Page Revenue Optimization", desc: "Product pages are the highest-value pages on any Shopify store. Each product page must rank for commercial keywords, convert visitors into buyers, and provide sufficient content depth for search engine relevance signals.", items: ["Unique product descriptions — original content addressing features, benefits, and use cases", "Product title optimization — brand + product name + key attribute for maximum keyword coverage", "Review integration with Product and AggregateRating schema for star ratings in search results", "Image optimization — multiple angles, lifestyle shots, with descriptive alt text containing product keywords", "Cross-sell and upsell linking — related products configured for both conversion and internal link value", "Specification and comparison data — structured product attributes that enable rich snippets and AI citations"] },
  { icon: Target, title: "Collection Page Ranking Strategy", desc: "Shopify collection pages target category-level commercial keywords — 'women's running shoes', 'organic skincare products'. These pages drive 40-60% of e-commerce organic traffic when properly optimized.", items: ["Collection page content — SEO descriptions above and below product grids with category-specific keywords", "Sub-collection hierarchy — nested collections creating topical silos for product categories", "Filter and sort SEO — preventing parameter URLs from creating duplicate indexable pages", "Collection meta tags — unique title and description for each collection targeting category keywords", "Internal linking between related collections for topical authority signals", "Seasonal and promotional collections — creating time-sensitive landing pages for seasonal search demand"] },
  { icon: Tag, title: "Shopping Feed & Merchant Center", desc: "Google Shopping results appear above organic listings for product searches. Shopping feed optimization ensures your products display with accurate data, competitive pricing, and compelling images.", items: ["Google Merchant Center setup and product feed configuration through Shopify's integration", "Product title optimization for shopping feeds — brand, product type, key attributes in optimal order", "Product category mapping — assigning correct Google product categories for feed relevance", "Image quality compliance — ensuring product images meet Google Shopping's requirements", "Price competitiveness monitoring — tracking competitor pricing for feed bid optimization", "Feed error resolution — fixing disapproved products, missing attributes, and policy violations"] },
  { icon: BarChart3, title: "E-commerce SEO Analytics & Revenue Attribution", desc: "E-commerce SEO success is measured in revenue, not traffic. Proper attribution connects organic search performance to actual sales, enabling data-driven optimization decisions.", items: ["Enhanced e-commerce tracking — transaction data connected to organic landing pages and keywords", "Product-level performance analysis — identifying which products generate the most organic revenue", "Collection performance tracking — ranking and revenue data per collection page", "Customer journey mapping — understanding multi-touch organic conversion paths", "Organic ROAS calculation — measuring return on SEO investment per product category", "Competitor organic share tracking — monitoring your product visibility vs. competitors"] },
];

const ShopifyEcommerceSeo = () => (
  <Layout>
    <SeoHead title="Shopify E-commerce SEO — Revenue-Focused Store Optimization | Naveed Ganatra" description="Shopify e-commerce SEO covering product page optimization, collection strategy, shopping feeds, and revenue attribution for Shopify stores." canonical="https://seoexpertinkarachi.com/shopify-ecommerce-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Shopify E-commerce SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Shopify SEO for E-Commerce Stores</h1>
        <p className="text-lg text-body mb-4">E-commerce SEO on Shopify generates 3-5x higher ROI than paid advertising over 12 months. Organic search delivers compound returns — each optimized product page and collection generates traffic indefinitely without per-click costs, making SEO the most cost-effective acquisition channel for Shopify stores.</p>
        <p className="text-body mb-8">Our Shopify e-commerce SEO services focus on revenue — product page conversion optimization, collection page ranking for commercial keywords, Google Shopping feed management, and organic revenue attribution that connects SEO investment to actual sales performance.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Shopify E-commerce SEO Audit</a>
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

      <CtaBanner heading="Ready to Grow Shopify Revenue Through SEO?" text="Get a free e-commerce SEO audit covering product pages, collections, shopping feeds, and revenue opportunities." />
    </main>
  </Layout>
);

export default ShopifyEcommerceSeo;
