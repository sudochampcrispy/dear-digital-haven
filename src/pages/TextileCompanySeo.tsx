import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, Scissors, MapPin, FileText, Globe, Search, Users } from "lucide-react";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "Textile Company SEO", url: "https://seoexpertinkarachi.com/textile-company-seo" },
]);
const webPage = buildWebPage({ name: "Textile Company SEO Services — Buyer Acquisition Through Organic Search", description: "Textile company SEO services covering fabric catalog optimization, international buyer targeting, trade content strategy, and authority building for textile manufacturers and exporters.", url: "https://seoexpertinkarachi.com/textile-company-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Textile Company SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "Textile Company SEO", description: "Textile company SEO services covering fabric catalog optimization, international buyer targeting, manufacturing capability content, and authority building for textile mills and exporters." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Why do textile companies need SEO?", acceptedAnswer: { "@type": "Answer", text: "Pakistan is the world's 4th largest cotton producer and a major textile exporter. Yet most textile companies rely on outdated trade directories and agents for buyer acquisition. International buyers increasingly search Google for 'cotton fabric supplier Pakistan', 'denim manufacturer Karachi', and 'home textile exporter'. Textile companies with strong organic visibility capture direct buyer relationships, eliminating agent commissions and building higher-margin partnerships." }},
  { "@type": "Question", name: "What textile keywords attract international buyers?", acceptedAnswer: { "@type": "Answer", text: "High-converting textile keywords combine fabric type with manufacturing capability: 'organic cotton fabric manufacturer Pakistan', 'terry towel exporter Karachi', 'knitted fabric supplier'. Product-specific keywords like 'CVC fabric 60/40', 'reactive printed fabric supplier', and 'Oeko-Tex certified textile manufacturer' attract qualified buyers with defined specifications. Buyer intent keywords drive the highest-value leads." }},
  { "@type": "Question", name: "How does product catalog SEO help textile companies?", acceptedAnswer: { "@type": "Answer", text: "A well-optimized product catalog becomes your most powerful sales tool online. Each fabric type, product category, and manufacturing capability gets a dedicated page targeting specific buyer searches. Catalog pages with technical specifications, GSM ranges, composition details, certification information, and high-quality product images rank for hundreds of long-tail textile queries, generating qualified buyer inquiries 24/7." }},
  { "@type": "Question", name: "How long does textile company SEO take?", acceptedAnswer: { "@type": "Answer", text: "Textile company SEO shows initial results within 3-4 months for product-specific keywords, with international buyer inquiries starting by month 4-6. The ROI for textile SEO is exceptional — a single international buyer secured through organic search can generate recurring orders worth hundreds of thousands of dollars annually, making SEO the highest-ROI marketing channel for textile manufacturers." }},
]};

const pillars = [
  { icon: Scissors, title: "Product Catalog Optimization", desc: "Each textile product category represents a distinct international search market. Your product pages must showcase specifications, certifications, and capabilities that global buyers evaluate when sourcing.", items: ["Fabric type pages — cotton, polyester, blended, knitted, woven with technical specifications", "Product line pages — home textiles, apparel fabrics, industrial textiles, technical textiles categories", "Specification content — GSM, width, composition, weave type, and finish details for each product", "Certification display pages — Oeko-Tex, GOTS, BCI, ISO certification pages with structured data", "MOQ and sampling content — minimum order quantities, sampling process, and lead time information", "Custom development pages — product development, R&D, and custom fabric manufacturing capabilities"] },
  { icon: Globe, title: "International Buyer Targeting", desc: "Pakistan's textile industry serves global markets. International SEO ensures your products appear when procurement teams in the US, Europe, Middle East, and Asia search for Pakistani textile suppliers.", items: ["Market-specific landing pages — dedicated pages targeting US, EU, UAE, and Asian buyer markets", "Multi-language product content — product descriptions in English, Arabic, and key buyer languages", "B2B marketplace optimization — Alibaba, TradeIndia, and textile marketplace store SEO", "International directory presence — APTMA, TDAP, and global textile directory listings", "Trade show content — leveraging Texworld, Heimtextil, and industry event participation", "Buyer country keyword research — identifying search patterns in each target market"] },
  { icon: FileText, title: "Textile Content Strategy", desc: "Educational textile content demonstrates manufacturing expertise and captures searches from buyers researching Pakistani textile capabilities, quality standards, and sourcing options.", items: ["Fabric guide content — comprehensive guides on fabric types, properties, and applications", "Manufacturing process content — spinning, weaving, dyeing, finishing process explanations", "Quality and testing content — quality control procedures, lab testing, and compliance articles", "Sustainability content — sustainable manufacturing, water usage, and environmental compliance", "Trend and forecast content — textile market trends, fashion forecast, and industry analysis", "Sourcing guide content — why source from Pakistan, industry capabilities, and competitive advantages"] },
  { icon: Users, title: "Manufacturing Authority Building", desc: "International buyers need confidence in your manufacturing capabilities, quality systems, and delivery reliability before placing large orders.", items: ["Factory tour and facility content — manufacturing facility showcase with capacity and capability details", "Quality management pages — QC procedures, lab equipment, and quality assurance system documentation", "Client and brand reference content — major brand partnerships and buyer testimonials", "Team and expertise pages — management team, technical staff, and R&D capability profiles", "Capacity and capability pages — production capacity, machinery, and technology information", "Compliance and audit content — social compliance, BSCI, SEDEX, and ethical manufacturing pages"] },
];

const TextileCompanySeo = () => (
  <Layout>
    <SeoHead title="Textile Company SEO Services — International Buyer Acquisition & Product Visibility | Naveed Ganatra" description="Textile company SEO services covering fabric catalog optimization, international buyer targeting, trade content strategy, and authority building for textile manufacturers." canonical="https://seoexpertinkarachi.com/textile-company-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Textile Company SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Textile Company SEO Services</h1>
        <p className="text-lg text-body mb-4">Pakistan is the world's 4th largest cotton producer and a major textile exporter. Yet most textile companies rely on outdated trade directories for buyer acquisition. Organic search is the new frontier for connecting with international buyers directly.</p>
        <p className="text-body mb-8">Our textile company SEO services combine product catalog optimization, international buyer targeting, manufacturing content strategy, and export authority building — designed to capture direct buyer relationships and eliminate agent dependency.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Textile SEO Consultation</a>
          <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link>
        </div>
      </div></div></section>

      <section className="section-padding"><div className="section-container">
        <h2 className="text-3xl font-bold mb-4">Why Textile Companies Need Specialized SEO</h2>
        <p className="text-body max-w-3xl">Textile SEO requires <Link to="/international-seo" className="text-primary hover:underline">international SEO</Link> for multi-market buyer targeting, detailed <Link to="/on-page-seo" className="text-primary hover:underline">on-page optimization</Link> for product specification pages, and a structured <Link to="/content-strategy-seo" className="text-primary hover:underline">content strategy</Link> that demonstrates manufacturing expertise and quality capabilities to global buyers.</p>
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

export default TextileCompanySeo;
