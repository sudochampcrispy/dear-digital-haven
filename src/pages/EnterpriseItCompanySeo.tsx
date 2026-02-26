import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, Server, MapPin, FileText, Shield, Search, Users } from "lucide-react";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "Enterprise IT Company SEO", url: "https://seoexpertinkarachi.com/enterprise-it-company-seo" },
]);
const webPage = buildWebPage({ name: "Enterprise IT Company SEO Services — Contract Acquisition Through Organic Search", description: "Enterprise IT company SEO services covering service portfolio optimization, technology stack content, vertical targeting, and authority building for IT services and consulting firms.", url: "https://seoexpertinkarachi.com/enterprise-it-company-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Enterprise IT Company SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "Enterprise IT Company SEO", description: "Enterprise IT company SEO services covering service portfolio optimization, technology stack content, industry vertical targeting, and authority building for IT services, consulting, and system integration firms." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Why do enterprise IT companies need SEO?", acceptedAnswer: { "@type": "Answer", text: "73% of enterprise IT procurement starts with online research. CIOs, CTOs, and IT directors search for specific technology solutions — 'managed IT services', 'network infrastructure company', 'IT consulting firm'. Enterprise IT companies with strong organic visibility enter procurement conversations early, before RFPs are finalized. This early engagement significantly increases win rates compared to responding to published tenders cold." }},
  { "@type": "Question", name: "What IT company keywords generate enterprise contracts?", acceptedAnswer: { "@type": "Answer", text: "High-value IT keywords combine service type with enterprise intent: 'managed IT services company', 'network infrastructure consulting', 'IT outsourcing firm Pakistan'. Technology-specific keywords — 'Microsoft 365 migration services', 'VMware virtualization consulting', 'Cisco network design' — attract buyers with defined technology requirements. Industry vertical keywords like 'banking IT infrastructure' capture sector-specific contracts." }},
  { "@type": "Question", name: "How does technology partner content help IT company SEO?", acceptedAnswer: { "@type": "Answer", text: "Technology partnership pages are critical for enterprise IT SEO. Pages showcasing Microsoft Gold Partner, Cisco Premier Partner, or AWS Partner status rank for vendor-specific searches — 'Microsoft partner [city]', 'certified Cisco integrator'. Enterprise buyers often search by technology vendor when looking for implementation partners, making partner pages among the highest-converting content for IT service companies." }},
  { "@type": "Question", name: "How long does enterprise IT company SEO take?", acceptedAnswer: { "@type": "Answer", text: "Enterprise IT SEO shows results within 3-4 months for service-specific keywords. Technology partner and vendor-specific keywords rank faster due to lower competition. Enterprise IT contracts have long sales cycles (3-12 months), so SEO investments compound over time — companies with 12+ months of consistent SEO report organic search as their top lead source for enterprise contracts." }},
]};

const pillars = [
  { icon: Server, title: "Service Portfolio Optimization", desc: "Each IT service line represents a distinct enterprise procurement category. Infrastructure, cloud, security, development — each requires dedicated pages targeting the specific terminology procurement teams use.", items: ["Managed IT services pages — infrastructure management, helpdesk, monitoring, and NOC service content", "Cloud services content — migration, management, hybrid cloud, and multi-cloud strategy pages", "Network and infrastructure pages — LAN/WAN design, data center, and network security services", "Software development pages — custom application development, integration, and modernization services", "IT consulting content — digital transformation, IT strategy, and technology assessment services", "Cybersecurity service pages — security operations, compliance, and risk management services"] },
  { icon: MapPin, title: "Industry Vertical & Regional SEO", desc: "Enterprise IT needs vary dramatically by industry. Banking requires PCI compliance, healthcare needs HIPAA, government demands specific security clearances. Vertical targeting captures the highest-value contracts.", items: ["Industry vertical pages — banking, healthcare, government, telecom, manufacturing IT service pages", "Google Business Profile optimization — office photos, certifications, and enterprise client reviews", "Regional enterprise targeting — corporate hub and business district-specific content", "Government and public sector pages — PPRA-compliant service descriptions and capability statements", "Enterprise directory listings — IT industry directories, Gartner, and analyst firm presence", "Multi-location pages — branch offices and service delivery centers across Pakistan"] },
  { icon: FileText, title: "Technology Content Strategy", desc: "Enterprise IT buyers consume technical content before engaging vendors. Technology guides, migration playbooks, and TCO analyses position your company as a knowledgeable technology partner.", items: ["Technology guide content — comprehensive guides on infrastructure, cloud, and security technologies", "Migration and modernization content — legacy system migration playbooks and modernization roadmaps", "TCO and ROI content — total cost of ownership analyses and return on investment calculators", "Best practice articles — IT operations best practices, ITIL frameworks, and optimization guides", "Case study content — enterprise project stories with scope, challenges, and measurable outcomes", "Technology trend content — emerging technology analyses, vendor updates, and market insights"] },
  { icon: Shield, title: "Enterprise Authority Building", desc: "Enterprise buyers evaluate IT companies based on certifications, partnerships, and proven capability. Authority signals determine which vendors make the shortlist for major contracts.", items: ["Technology partnership pages — Microsoft, Cisco, AWS, VMware partner certifications and tiers", "Industry certification pages — ISO 20000, ISO 27001, CMMI, and quality certification displays", "Team and leadership profiles — CTO, architect, and project manager credentials and experience", "Enterprise case study portfolio — major project references with client testimonials and metrics", "Award and recognition content — IT industry awards, partner of the year, and analyst rankings", "Training and certification content — team certifications, training programs, and expertise development"] },
];

const EnterpriseItCompanySeo = () => (
  <Layout>
    <SeoHead title="Enterprise IT Company SEO Services — Contract Acquisition & Technology Authority | Naveed Ganatra" description="Enterprise IT company SEO services covering service portfolio optimization, technology content strategy, vertical targeting, and authority building for IT firms." canonical="https://seoexpertinkarachi.com/enterprise-it-company-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Enterprise IT Company SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Enterprise IT Company SEO Services</h1>
        <p className="text-lg text-body mb-4">73% of enterprise IT procurement starts with online research. CIOs and IT directors search for specific technology solutions and service providers — and companies with strong organic visibility enter procurement conversations before RFPs are finalized.</p>
        <p className="text-body mb-8">Our enterprise IT SEO services combine service portfolio optimization, technology content strategy, industry vertical targeting, and enterprise authority building — designed to capture high-value IT contracts through organic search visibility.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Enterprise IT SEO Consultation</a>
          <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link>
        </div>
      </div></div></section>

      <section className="section-padding"><div className="section-container">
        <h2 className="text-3xl font-bold mb-4">Why Enterprise IT Companies Need Specialized SEO</h2>
        <p className="text-body max-w-3xl">Enterprise IT SEO requires comprehensive <Link to="/on-page-seo" className="text-primary hover:underline">on-page optimization</Link> for complex service portfolios, deep <Link to="/content-strategy-seo" className="text-primary hover:underline">content strategy</Link> covering technology solutions and industry verticals, and strong <Link to="/off-page-seo" className="text-primary hover:underline">off-page authority</Link> from technology partnerships and industry certifications.</p>
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
          <Link to="/saas-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">SaaS SEO</Link>
          <Link to="/content-strategy-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Content Strategy</Link>
          <Link to="/off-page-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Off-Page SEO</Link>
        </div>
      </div></section>
      <CtaBanner />
    </main>
  </Layout>
);

export default EnterpriseItCompanySeo;
