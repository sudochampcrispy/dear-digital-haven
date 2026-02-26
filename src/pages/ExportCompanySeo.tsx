import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, Globe, MapPin, FileText, Package, Search, Users } from "lucide-react";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "Export Company SEO", url: "https://seoexpertinkarachi.com/export-company-seo" },
]);
const webPage = buildWebPage({ name: "Export Company SEO Services — International Buyer Acquisition Through Organic Search", description: "Export company SEO services covering product catalog optimization, international buyer targeting, trade content strategy, and authority building for Pakistani exporters.", url: "https://seoexpertinkarachi.com/export-company-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Export Company SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "Export Company SEO", description: "Export company SEO services covering product catalog optimization, international buyer targeting, trade content strategy, B2B marketplace visibility, and authority building for Pakistani exporters." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Why do export companies need SEO?", acceptedAnswer: { "@type": "Answer", text: "International buyers increasingly search Google for suppliers rather than relying solely on trade shows and B2B marketplaces. Export company SEO positions your products in front of global buyers searching for 'Pakistan textile exporters', 'rice suppliers Pakistan', or 'surgical instruments manufacturer Sialkot'. Exporters with strong organic visibility receive direct buyer inquiries, bypassing expensive marketplace commissions and building higher-margin direct relationships." }},
  { "@type": "Question", name: "What export keywords attract international buyers?", acceptedAnswer: { "@type": "Answer", text: "High-value export keywords combine product type with origin and buyer intent: 'buy Pakistani cotton fabric wholesale', 'surgical instruments manufacturer Pakistan', 'Basmati rice exporter Karachi'. Product specification keywords — 'organic cotton supplier', 'CE certified medical devices Pakistan' — attract qualified buyers with defined requirements. Targeting buyer-country languages and search patterns further captures international demand." }},
  { "@type": "Question", name: "How does international SEO help export companies?", acceptedAnswer: { "@type": "Answer", text: "International SEO ensures your export company appears in search results across target markets. This includes hreflang implementation for multi-language content, country-specific landing pages targeting key buyer markets (UAE, China, Europe, USA), and structured data helping Google understand your product catalog, certifications, and export capabilities. Exporters with international SEO capture buyers across multiple markets simultaneously." }},
  { "@type": "Question", name: "How long does export company SEO take to generate buyer leads?", acceptedAnswer: { "@type": "Answer", text: "Export company SEO shows results within 3-4 months for product-specific keywords, with international buyer inquiries starting by month 4-6. Competitive product categories take 6-12 months. The ROI is significant — a single international buyer relationship secured through organic search can generate recurring orders worth millions in annual revenue, making SEO the highest-ROI channel for export businesses." }},
]};

const pillars = [
  { icon: Package, title: "Product Catalog Optimization", desc: "Each export product category represents a distinct international search market. Your product pages must target the exact queries global buyers use when sourcing from Pakistan.", items: ["Product category pages — dedicated pages for each export product line with specifications and certifications", "Product specification content — detailed technical specs, quality standards, and testing certificates", "Packaging and MOQ pages — minimum order quantities, packaging options, and private labeling services", "Certification pages — ISO, CE, FDA, Halal, and industry-specific certification display pages", "Sample and testing content — sample request processes, quality testing procedures, and lab reports", "Custom manufacturing pages — OEM, ODM, and custom product development service content"] },
  { icon: Globe, title: "International Buyer Targeting", desc: "Export SEO requires reaching buyers across multiple countries and languages. International targeting ensures your products appear when procurement teams worldwide search for Pakistani suppliers.", items: ["Country-specific landing pages — targeted pages for UAE, China, Europe, USA, and key buyer markets", "Multi-language content strategy — product pages in English, Arabic, Chinese for key markets", "International keyword research — identifying buyer search patterns in each target market", "B2B marketplace SEO — optimizing Alibaba, TradeIndia, and marketplace store profiles", "International directory presence — TDAP, export promotion, and trade directory listings", "Trade show and exhibition content — leveraging event participation for international visibility"] },
  { icon: FileText, title: "Export Content Strategy", desc: "Educational export content positions your company as a reliable, knowledgeable supplier. This content captures searches from international buyers researching Pakistani products and trade procedures.", items: ["Product sourcing guides — comprehensive guides for buyers sourcing specific products from Pakistan", "Quality and compliance content — articles on manufacturing standards, testing, and quality assurance", "Shipping and logistics content — export packaging, shipping terms, and delivery timeline guides", "Trade regulation content — export documentation, customs procedures, and trade compliance articles", "Industry overview content — Pakistan's manufacturing capabilities, capacity, and competitive advantages", "Buyer education resources — import procedures, payment terms, and supplier evaluation guides"] },
  { icon: Users, title: "Export Authority Building", desc: "International buyers need confidence in your reliability and capability. Authority signals from certifications, trade associations, and buyer testimonials directly impact conversion.", items: ["TDAP and chamber membership — Trade Development Authority and chamber of commerce displays", "Factory and facility showcase — manufacturing facility tours, capacity information, and quality systems", "Client testimonial and reference content — buyer testimonials from international clients with metrics", "Certification and compliance pages — all quality and compliance certifications with structured data", "Export track record content — export history, market coverage, and annual volume information", "Media and publication mentions — leveraging trade publications and industry media coverage"] },
];

const ExportCompanySeo = () => (
  <Layout>
    <SeoHead title="Export Company SEO Services — International Buyer Acquisition & Product Visibility | Naveed Ganatra" description="Export company SEO services covering product catalog optimization, international buyer targeting, trade content strategy, and authority building for Pakistani exporters." canonical="https://seoexpertinkarachi.com/export-company-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Export Company SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Export Company SEO Services</h1>
        <p className="text-lg text-body mb-4">International buyers increasingly search Google for suppliers rather than relying solely on trade shows. Pakistani exporters with strong organic visibility receive direct buyer inquiries, bypassing expensive marketplace commissions and building higher-margin relationships.</p>
        <p className="text-body mb-8">Our export company SEO services combine product catalog optimization, international buyer targeting, trade content strategy, and export authority building — designed to position your products in front of global buyers actively searching for Pakistani suppliers.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Export SEO Consultation</a>
          <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link>
        </div>
      </div></div></section>

      <section className="section-padding"><div className="section-container">
        <h2 className="text-3xl font-bold mb-4">Why Export Companies Need Specialized SEO</h2>
        <p className="text-body max-w-3xl">Export SEO is fundamentally different from domestic business SEO. It requires <Link to="/international-seo" className="text-primary hover:underline">international SEO</Link> for multi-market targeting, <Link to="/keyword-research" className="text-primary hover:underline">keyword research</Link> in buyer-country search patterns, and deep <Link to="/content-strategy-seo" className="text-primary hover:underline">content strategy</Link> covering product specifications, certifications, and trade procedures.</p>
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
          <Link to="/international-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">International SEO</Link>
          <Link to="/ecommerce-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">E-commerce SEO</Link>
          <Link to="/content-strategy-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Content Strategy</Link>
        </div>
      </div></section>
      <CtaBanner />
    </main>
  </Layout>
);

export default ExportCompanySeo;
