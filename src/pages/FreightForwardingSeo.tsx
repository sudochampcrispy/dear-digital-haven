import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, Ship, MapPin, FileText, Globe, Search, Users } from "lucide-react";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "Freight Forwarding SEO", url: "https://seoexpertinkarachi.com/freight-forwarding-seo" },
]);
const webPage = buildWebPage({ name: "Freight Forwarding SEO Services — Client Acquisition Through Organic Search", description: "Freight forwarding SEO services covering trade lane pages, customs clearance content, international shipping optimization, and authority building for freight forwarders.", url: "https://seoexpertinkarachi.com/freight-forwarding-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Freight Forwarding SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "Freight Forwarding SEO", description: "Freight forwarding SEO services covering trade lane pages, customs clearance content, ocean and air freight optimization, and authority building for freight forwarding companies." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Why do freight forwarders need SEO?", acceptedAnswer: { "@type": "Answer", text: "75% of importers and exporters research freight forwarders online before requesting rates. Freight forwarding is intensely competitive — hundreds of companies compete in major port cities. SEO positions your company in front of shippers searching for specific trade lane expertise, customs clearance capabilities, and cargo handling specializations. Freight forwarders ranking on page one for route-specific queries receive 5-10 qualified rate inquiries daily." }},
  { "@type": "Question", name: "What freight forwarding keywords convert best?", acceptedAnswer: { "@type": "Answer", text: "Trade lane keywords deliver the highest conversion rates: 'freight forwarding Pakistan to China', 'sea freight Karachi to Jebel Ali', 'air cargo Pakistan to UK'. Service-specific keywords like 'FCL shipping', 'LCL consolidation', 'project cargo forwarding' capture clients with defined shipment needs. Customs keywords — 'customs clearance Karachi', 'import duty calculator Pakistan' — attract importers and exporters at the decision stage." }},
  { "@type": "Question", name: "How do trade lane pages improve freight forwarding SEO?", acceptedAnswer: { "@type": "Answer", text: "Trade lane pages are the most valuable content for freight forwarding SEO. Each page targets a specific shipping route — Pakistan to UAE, Pakistan to Europe, Pakistan to China — and captures searches from businesses shipping on that corridor. A well-optimized trade lane page includes transit times, port pairs, customs requirements, and rate factors, ranking for dozens of related shipping queries and generating qualified leads from active shippers." }},
  { "@type": "Question", name: "How long does freight forwarding SEO take to generate leads?", acceptedAnswer: { "@type": "Answer", text: "Freight forwarding SEO produces results within 2-3 months for niche trade lane and customs keywords. Competitive terms like 'freight forwarder [major city]' take 5-8 months. Freight forwarders investing in SEO consistently see organic search become their primary lead source within 12 months, with significantly lower cost per acquisition compared to trade shows and directory advertising." }},
]};

const pillars = [
  { icon: Ship, title: "Trade Lane & Service Page Optimization", desc: "Each trade lane and service type represents a distinct search market. Ocean freight, air cargo, project cargo, customs clearance — each requires dedicated pages targeting the exact queries shippers use.", items: ["Trade lane pages — dedicated pages for each major shipping corridor with transit times and port pairs", "Ocean freight content — FCL, LCL, breakbulk, and RoRo shipping service pages", "Air cargo pages — express, standard, and charter air freight service content", "Project cargo content — oversized, heavy-lift, and specialized cargo transportation pages", "Customs clearance pages — import/export clearance, duty calculation, and documentation services", "Multimodal transport content — sea-air, rail-sea, and door-to-door logistics combination services"] },
  { icon: MapPin, title: "Port City & Regional SEO", desc: "Freight forwarding is inherently tied to port cities and trade hubs. Local SEO for key logistics centers determines which forwarders get found by importers and exporters in those markets.", items: ["Google Business Profile optimization — office photos, trade certifications, and shipper reviews", "Port city targeting — Karachi, Port Qasim, Lahore Dry Port, and Islamabad targeting pages", "Customs station pages — targeting specific customs clearance offices and free trade zones", "Industrial area targeting — SITE, Korangi, Port Qasim Free Zone, and industrial estate pages", "Directory and platform presence — FIATA, WCA, freight exchange and cargo marketplace listings", "Map pack optimization — dominating local results for freight forwarding queries in port cities"] },
  { icon: FileText, title: "Shipping & Trade Content Strategy", desc: "Educational shipping content positions your company as a knowledgeable trade partner. This content captures searches from businesses researching customs procedures, shipping options, and trade regulations.", items: ["Customs procedure guides — step-by-step import/export clearance processes for different commodities", "Shipping rate factor content — explaining how freight rates work, surcharges, and cost optimization", "Trade regulation updates — new customs duties, trade agreements, and regulatory change articles", "Commodity-specific guides — shipping requirements for textiles, chemicals, food, and electronics", "Documentation checklists — bill of lading, packing list, certificate of origin guides", "Incoterms and trade term explainers — practical guides on FOB, CIF, DDP shipping terms"] },
  { icon: Globe, title: "International Authority Building", desc: "Freight forwarding is an international business. Authority signals from global trade networks, certifications, and partnerships directly impact client confidence and search rankings.", items: ["Network membership pages — WCA, FIATA, IATA membership and agent network displays", "Certification and licensing — customs broker licenses, IATA accreditation, AEO certification pages", "Agent network content — global partner network pages showing international coverage", "Trade show and exhibition presence — leveraging industry event participation for authority", "Client case study content — successful shipment stories with routes, challenges, and solutions", "Insurance and liability pages — cargo insurance coverage, liability limits, and claims handling"] },
];

const FreightForwardingSeo = () => (
  <Layout>
    <SeoHead title="Freight Forwarding SEO Services — Shipper Acquisition & Trade Lane Visibility | Naveed Ganatra" description="Freight forwarding SEO services covering trade lane pages, customs clearance content, international shipping optimization, and authority building for freight forwarders." canonical="https://seoexpertinkarachi.com/freight-forwarding-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Freight Forwarding SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Freight Forwarding SEO Services</h1>
        <p className="text-lg text-body mb-4">75% of importers and exporters research freight forwarders online before requesting rates. In Pakistan's trade hub cities, forwarders with strong organic visibility on key trade lanes capture the highest-value shipping contracts.</p>
        <p className="text-body mb-8">Our freight forwarding SEO services combine trade lane page optimization, customs clearance content, international shipping visibility, and trade authority building — designed to generate qualified rate inquiries from active shippers and importers.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Freight SEO Consultation</a>
          <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link>
        </div>
      </div></div></section>

      <section className="section-padding"><div className="section-container">
        <h2 className="text-3xl font-bold mb-4">Why Freight Forwarders Need Specialized SEO</h2>
        <p className="text-body max-w-3xl">Freight forwarding SEO operates at the intersection of <Link to="/international-seo" className="text-primary hover:underline">international SEO</Link> for trade lane visibility, <Link to="/local-seo-karachi" className="text-primary hover:underline">local SEO</Link> for port city dominance, and deep <Link to="/content-strategy-seo" className="text-primary hover:underline">content strategy</Link> covering customs procedures, trade regulations, and shipping logistics.</p>
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
          <Link to="/local-seo-karachi" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Local SEO</Link>
          <Link to="/content-strategy-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Content Strategy</Link>
        </div>
      </div></section>
      <CtaBanner />
    </main>
  </Layout>
);

export default FreightForwardingSeo;
