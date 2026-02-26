import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, Truck, MapPin, FileText, Globe, Search, Users } from "lucide-react";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "Logistics Company SEO", url: "https://seoexpertinkarachi.com/logistics-company-seo" },
]);
const webPage = buildWebPage({ name: "Logistics Company SEO Services — Lead Generation Through Organic Search", description: "Logistics company SEO services covering service route optimization, freight search dominance, supply chain content strategy, and authority building for logistics and transportation businesses.", url: "https://seoexpertinkarachi.com/logistics-company-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Logistics Company SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "Logistics Company SEO", description: "Logistics company SEO services covering service route pages, freight search dominance, supply chain content strategy, warehouse and distribution SEO, and authority building for logistics businesses." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Why do logistics companies need SEO?", acceptedAnswer: { "@type": "Answer", text: "82% of businesses research logistics providers online before requesting quotes. Logistics SEO ensures your company appears when manufacturers, e-commerce businesses, and importers search for transportation, warehousing, and supply chain services. With Pakistan's logistics sector growing rapidly driven by CPEC and e-commerce expansion, organic visibility has become the primary differentiator between logistics companies competing for corporate contracts." }},
  { "@type": "Question", name: "What logistics keywords generate the most qualified leads?", acceptedAnswer: { "@type": "Answer", text: "High-converting logistics keywords combine service type with route or location: 'freight forwarding Karachi to Dubai', 'warehouse services in SITE area', 'cold chain logistics Pakistan'. Service-specific keywords like 'LTL shipping', 'container transport', and 'last mile delivery services' capture clients with defined requirements. B2B logistics keywords typically have lower search volume but extremely high conversion rates due to contract value." }},
  { "@type": "Question", name: "How does route and service area content help logistics SEO?", acceptedAnswer: { "@type": "Answer", text: "Route-specific pages are extremely valuable for logistics SEO. Pages targeting 'Karachi to Lahore freight', 'Pakistan to Middle East shipping', or 'port-to-door delivery Karachi' capture searches from businesses looking for specific transportation solutions. Each route page becomes a dedicated landing page that ranks for dozens of related logistics queries, generating qualified leads from businesses with immediate shipping needs." }},
  { "@type": "Question", name: "How long does logistics company SEO take?", acceptedAnswer: { "@type": "Answer", text: "Logistics SEO shows measurable improvements within 2-3 months for route-specific and service-area keywords. Competitive terms like 'logistics company [city]' take 5-8 months. Logistics companies that invest consistently see organic search become their top lead source within 12 months, with cost per lead 40-60% lower than paid channels and significantly higher contract values from organic leads." }},
]};

const pillars = [
  { icon: Truck, title: "Service & Route Page Optimization", desc: "Each logistics service and transportation route represents a distinct search opportunity. Warehousing, freight, last-mile, cold chain — each requires dedicated pages that match the specific needs of businesses searching for logistics solutions.", items: ["Freight service pages — full truckload, LTL, container shipping, and express delivery service pages", "Route-specific pages — dedicated pages for major trade routes, corridors, and city-to-city logistics", "Warehousing content — storage, distribution center, and fulfillment service pages by location", "Cold chain logistics — temperature-controlled transportation and storage service pages", "Last-mile delivery content — e-commerce fulfillment and final delivery service pages", "Customs and clearance pages — import/export documentation and customs brokerage services"] },
  { icon: MapPin, title: "Local & Regional SEO for Logistics", desc: "Logistics search is heavily location-driven — businesses need providers operating on their specific routes and in their service areas. Local and regional SEO determines visibility when procurement teams search for nearby logistics partners.", items: ["Google Business Profile optimization — fleet photos, service areas, certifications, and client reviews", "Port and hub city targeting — pages for Karachi Port, Port Qasim, and key logistics hubs", "Industrial zone targeting — pages for SITE, Korangi Industrial Area, and other commercial zones", "Regional coverage pages — covering Punjab, Sindh, KPK, and Balochistan logistics services", "Directory presence — logistics industry directories, trade association listings, and freight platforms", "Map pack optimization — dominating local results for logistics and transportation queries"] },
  { icon: FileText, title: "Supply Chain Content Strategy", desc: "Educational logistics content captures searches from businesses evaluating supply chain solutions. This content positions your company as a knowledgeable logistics partner beyond basic transportation.", items: ["Supply chain guides — comprehensive resources on logistics planning, optimization, and cost reduction", "Shipping and customs content — import/export guides, documentation checklists, and regulatory updates", "Industry-specific logistics content — e-commerce fulfillment, pharmaceutical logistics, FMCG distribution", "Cost optimization articles — freight rate guides, consolidation strategies, and logistics efficiency tips", "Technology content — TMS, WMS, GPS tracking, and logistics technology adoption guides", "Regulatory and compliance content — customs regulations, dangerous goods transport, and licensing"] },
  { icon: Globe, title: "B2B Authority & Trust Building", desc: "Logistics is a trust-intensive B2B industry. Businesses need confidence in your reliability, coverage, and capabilities before signing long-term contracts.", items: ["Fleet and infrastructure showcase — vehicle fleet, warehouse facilities, and technology capability pages", "Certification and compliance pages — ISO, GDP, FIATA, and industry certification displays", "Client testimonial and case study content — contract logistics success stories with metrics", "Insurance and liability coverage — displaying cargo insurance and liability protection information", "Technology and tracking capability pages — real-time tracking, API integration, and system capabilities", "Industry partnership signals — carrier partnerships, port authority relationships, and trade memberships"] },
];

const LogisticsCompanySeo = () => (
  <Layout>
    <SeoHead title="Logistics Company SEO Services — Lead Generation & Route Visibility | Naveed Ganatra" description="Logistics company SEO services covering service route optimization, freight search dominance, supply chain content strategy, and authority building for logistics businesses." canonical="https://seoexpertinkarachi.com/logistics-company-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Logistics Company SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Logistics Company SEO Services</h1>
        <p className="text-lg text-body mb-4">82% of businesses research logistics providers online before requesting quotes. With CPEC expansion and e-commerce growth driving Pakistan's logistics boom, organic visibility has become the primary differentiator for logistics companies competing for corporate contracts.</p>
        <p className="text-body mb-8">Our logistics SEO services combine service page optimization, route-specific targeting, supply chain content strategy, and B2B authority building — designed to position your logistics company in front of businesses actively searching for transportation and warehousing solutions.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Logistics SEO Consultation</a>
          <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link>
        </div>
      </div></div></section>

      <section className="section-padding"><div className="section-container">
        <h2 className="text-3xl font-bold mb-4">Why Logistics Companies Need Specialized SEO</h2>
        <p className="text-body max-w-3xl">Logistics SEO operates in a competitive B2B landscape where search intent signals high contract value. Effective logistics SEO requires <Link to="/keyword-research" className="text-primary hover:underline">keyword research</Link> targeting route and service-specific queries, strong <Link to="/local-seo-karachi" className="text-primary hover:underline">local SEO</Link> for hub city dominance, and comprehensive <Link to="/content-strategy-seo" className="text-primary hover:underline">content strategy</Link> that demonstrates supply chain expertise.</p>
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
          <Link to="/local-seo-karachi" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Local SEO</Link>
          <Link to="/international-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">International SEO</Link>
          <Link to="/content-strategy-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Content Strategy</Link>
        </div>
      </div></section>
      <CtaBanner />
    </main>
  </Layout>
);

export default LogisticsCompanySeo;
