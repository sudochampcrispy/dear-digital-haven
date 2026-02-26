import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, Fuel, MapPin, FileText, Shield, Search, Users } from "lucide-react";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "Oil & Gas Services SEO", url: "https://seoexpertinkarachi.com/oil-gas-services-seo" },
]);
const webPage = buildWebPage({ name: "Oil & Gas Services SEO — Contract Acquisition Through Organic Search", description: "Oil & gas services SEO covering service capability pages, upstream/downstream targeting, technical content strategy, and authority building for oilfield service companies.", url: "https://seoexpertinkarachi.com/oil-gas-services-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Oil & Gas Services SEO", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "Oil & Gas Services SEO", description: "Oil & gas services SEO covering upstream/downstream service pages, HSE content, technical capability optimization, and authority building for oilfield service and energy companies." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Why do oil & gas service companies need SEO?", acceptedAnswer: { "@type": "Answer", text: "Oil & gas operators and procurement teams increasingly research service providers online before issuing tenders. SEO positions your company in front of E&P companies, refineries, and pipeline operators searching for specific oilfield services — drilling, well services, pipeline maintenance, HSE consulting. With Pakistan's energy sector expanding through new exploration blocks and refinery projects, organic visibility is critical for contract acquisition." }},
  { "@type": "Question", name: "What oil & gas keywords generate contract leads?", acceptedAnswer: { "@type": "Answer", text: "High-value oil & gas keywords combine service type with sector: 'drilling services Pakistan', 'pipeline inspection company', 'well testing services Sindh'. Technical keywords like 'NDT inspection oil gas', 'SCADA system services', and 'process safety management consulting' attract operators with specific technical requirements. HSE keywords — 'safety training oilfield', 'environmental compliance oil gas' — capture regulatory-driven demand." }},
  { "@type": "Question", name: "How important is technical content for oil & gas SEO?", acceptedAnswer: { "@type": "Answer", text: "Technical content is critical because oil & gas procurement decisions are made by engineers and technical managers. White papers, case studies, and technical articles on oilfield methodologies demonstrate the expertise operators require. Companies publishing consistent technical content see 3-5x more organic traffic than competitors relying on basic service pages. This content also supports pre-qualification submissions and tender responses." }},
  { "@type": "Question", name: "How long does oil & gas services SEO take?", acceptedAnswer: { "@type": "Answer", text: "Oil & gas services SEO shows measurable improvements within 3-4 months for service-specific keywords. The B2B nature of oil & gas means longer sales cycles, but organic leads have higher conversion rates because they come from operators actively searching for specific capabilities. Within 12 months, well-optimized oilfield service companies report organic search as a top-3 lead source alongside industry events and referrals." }},
]};

const pillars = [
  { icon: Fuel, title: "Service Capability Page Optimization", desc: "Each oilfield service represents a distinct procurement category. Drilling, well services, pipeline, HSE — each requires dedicated pages demonstrating technical capability and project experience.", items: ["Upstream service pages — drilling, well testing, completion, workover, and production services", "Midstream service pages — pipeline construction, inspection, maintenance, and integrity management", "Downstream service pages — refinery maintenance, turnaround, and process optimization services", "HSE consulting pages — safety management, environmental compliance, and risk assessment services", "Equipment and rental pages — oilfield equipment supply, rental, and maintenance services", "Technical support pages — engineering consulting, FEED studies, and project management services"] },
  { icon: MapPin, title: "Regional & Basin-Specific SEO", desc: "Oil & gas operations are concentrated in specific basins and industrial zones. Regional SEO ensures your company appears when operators search for service providers near their project locations.", items: ["Basin and field targeting — Sindh, Balochistan, KPK, and Punjab exploration area pages", "Industrial zone presence — Karachi refinery area, Hub, and Badin field service location pages", "Google Business Profile optimization — equipment photos, certifications, and client reviews", "Operator-adjacent targeting — content optimized for proximity to major E&P company operations", "Regional directory listings — PPEPCA, OGDCL vendor lists, and energy sector directories", "International project targeting — Middle East, Central Asia, and African market service pages"] },
  { icon: FileText, title: "Technical Content Strategy", desc: "Oil & gas content must demonstrate deep technical expertise. White papers, technical case studies, and methodology articles attract engineers and procurement managers evaluating service capabilities.", items: ["Technical case studies — detailed project write-ups with specifications, challenges, and outcomes", "HSE and compliance content — safety procedures, regulatory compliance, and best practice articles", "Technology and innovation content — new techniques, equipment capabilities, and R&D developments", "Standards and code content — API, ASME, and industry standard compliance documentation", "Training and competency content — workforce development, certification, and safety training articles", "Market analysis content — energy sector trends, exploration updates, and industry outlook articles"] },
  { icon: Shield, title: "Industry Authority & Compliance Building", desc: "Oil & gas is a heavily regulated industry where safety records, certifications, and compliance history determine contractor pre-qualification.", items: ["Certification and licensing pages — ISO 9001, ISO 14001, OHSAS 18001, API certification displays", "Safety record and HSE performance — TRIR, LTI records, and safety milestone documentation", "Pre-qualification support content — content supporting vendor registration and pre-qualification submissions", "Insurance and liability pages — professional indemnity, public liability, and project insurance information", "Equipment and technology showcase — fleet, equipment inventory, and technology capability pages", "Industry association membership — SPE, PPEPCA, and professional body membership displays"] },
];

const OilGasServicesSeo = () => (
  <Layout>
    <SeoHead title="Oil & Gas Services SEO — Contract Acquisition & Technical Authority | Naveed Ganatra" description="Oil & gas services SEO covering service capability pages, upstream/downstream targeting, technical content strategy, and authority building for oilfield service companies." canonical="https://seoexpertinkarachi.com/oil-gas-services-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Oil & Gas Services SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Oil & Gas Services SEO</h1>
        <p className="text-lg text-body mb-4">Oil & gas operators increasingly research service providers online before issuing tenders. With Pakistan's energy sector expanding through new exploration blocks and refinery projects, organic visibility is critical for oilfield service companies competing for contracts.</p>
        <p className="text-body mb-8">Our oil & gas SEO services combine service capability optimization, basin-specific targeting, technical content strategy, and compliance authority building — designed to position your company in front of operators and procurement teams evaluating oilfield service providers.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Oil & Gas SEO Consultation</a>
          <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link>
        </div>
      </div></div></section>

      <section className="section-padding"><div className="section-container">
        <h2 className="text-3xl font-bold mb-4">Why Oil & Gas Companies Need Specialized SEO</h2>
        <p className="text-body max-w-3xl">Oil & gas SEO requires deep <Link to="/technical-seo" className="text-primary hover:underline">technical optimization</Link> for complex service pages, <Link to="/content-strategy-seo" className="text-primary hover:underline">content strategy</Link> built around engineering expertise and safety records, and strong <Link to="/off-page-seo" className="text-primary hover:underline">off-page authority</Link> from industry associations and technical publications.</p>
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
          <Link to="/technical-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Technical SEO</Link>
          <Link to="/content-strategy-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Content Strategy</Link>
          <Link to="/off-page-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Off-Page SEO</Link>
        </div>
      </div></section>
      <CtaBanner />
    </main>
  </Layout>
);

export default OilGasServicesSeo;
