import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, Wrench, MapPin, FileText, Shield, Search, Users } from "lucide-react";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "Engineering Consultant SEO", url: "https://seoexpertinkarachi.com/engineering-consultant-seo" },
]);
const webPage = buildWebPage({ name: "Engineering Consultant SEO Services — Project Leads Through Organic Search", description: "Engineering consultant SEO services covering discipline-specific pages, project portfolio optimization, technical content strategy, and authority building for engineering firms.", url: "https://seoexpertinkarachi.com/engineering-consultant-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Engineering Consultant SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "Engineering Consultant SEO", description: "Engineering consultant SEO services covering civil, mechanical, electrical, and structural engineering firm optimization with discipline-specific pages, project portfolios, and technical authority building." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Why do engineering consultants need SEO?", acceptedAnswer: { "@type": "Answer", text: "68% of corporate and government procurement officers research engineering consultants online before issuing RFPs. Engineering firms with strong organic visibility get invited to more bids and pre-qualification rounds. SEO positions your firm in front of decision-makers searching for specific engineering expertise — structural analysis, MEP design, environmental engineering — at the exact moment they're evaluating consultants for upcoming projects." }},
  { "@type": "Question", name: "What engineering keywords drive the most qualified leads?", acceptedAnswer: { "@type": "Answer", text: "High-value engineering keywords combine discipline with project type: 'structural engineering consultant [city]', 'MEP design services', 'environmental impact assessment firm'. Sector-specific keywords like 'oil and gas engineering consultant' or 'power plant design engineer' attract the highest-value project inquiries. Technical capability keywords such as 'FEA analysis services' or 'HVAC system design' capture clients with specific technical requirements." }},
  { "@type": "Question", name: "How important is technical content for engineering firm SEO?", acceptedAnswer: { "@type": "Answer", text: "Technical content is the cornerstone of engineering firm SEO because it demonstrates the expertise that Google's E-E-A-T framework requires for professional service queries. White papers, case studies, and technical articles on engineering methodologies rank for hundreds of long-tail queries. Engineering firms publishing consistent technical content see 3-4x more organic traffic than competitors relying solely on service pages." }},
  { "@type": "Question", name: "How long does engineering consultant SEO take?", acceptedAnswer: { "@type": "Answer", text: "Engineering consultant SEO shows measurable improvements within 3-4 months, with qualified project inquiries beginning by month 4-5 for discipline-specific keywords. Competitive terms like 'engineering consultant [major city]' take 6-12 months. The long-term ROI is significant — engineering firms with strong organic presence report 30-50% of their project pipeline originating from search-driven inquiries within 18 months." }},
]};

const pillars = [
  { icon: Wrench, title: "Discipline-Specific Page Optimization", desc: "Each engineering discipline represents a distinct search market. Civil, structural, mechanical, electrical, environmental — each requires comprehensive service pages targeting the exact terminology clients use.", items: ["Civil engineering pages — infrastructure, roads, bridges, drainage, land development services", "Structural engineering content — structural analysis, design, retrofitting, seismic assessment pages", "MEP engineering pages — mechanical, electrical, plumbing design and consultancy services", "Environmental engineering content — EIA, waste management, water treatment, compliance services", "Geotechnical engineering pages — soil testing, foundation design, slope stability analysis services", "Project management content — EPCM, construction supervision, quality assurance consulting pages"] },
  { icon: MapPin, title: "Local & Regional SEO for Engineering Firms", desc: "Engineering projects are often region-specific with local regulatory requirements. Local SEO ensures your firm appears when project managers and procurement teams search for engineering consultants in your area.", items: ["Google Business Profile optimization — project photos, certifications, specializations, and client reviews", "Service region targeting — pages for each city and industrial zone where you provide consulting", "Industry directory listings — PEC, ACEC, and sector-specific engineering directory presence", "Government procurement visibility — content targeting public sector project search patterns", "Map pack optimization — dominating local results for engineering consultant queries", "Multi-office SEO — optimizing for branch offices serving different regional markets"] },
  { icon: FileText, title: "Technical Content Strategy", desc: "Engineering content marketing requires deep technical expertise. White papers, technical articles, and project case studies attract decision-makers evaluating consultants for complex projects.", items: ["Technical white papers — in-depth analysis of engineering methodologies and project approaches", "Project case studies — detailed write-ups of completed projects with specifications and outcomes", "Standards and code compliance content — articles on building codes, safety standards, and regulations", "Engineering calculation guides — technical resources demonstrating analytical capabilities", "Industry trend analysis — content on new materials, technologies, and construction methodologies", "Webinar and presentation content — leveraging technical presentations for SEO and lead generation"] },
  { icon: Shield, title: "Professional Authority Building", desc: "Engineering is a regulated profession where credentials and experience determine client confidence. Authority signals directly impact which firms get shortlisted for major project bids.", items: ["PEC registration and licensing — displaying professional registrations with structured data", "Team credential pages — engineer profiles with PE certifications, education, and project experience", "ISO and quality certifications — ISO 9001, ISO 14001, and OHSAS 18001 certification pages", "Research and publication presence — leveraging published papers and journal contributions", "Association memberships — professional engineering society memberships and committee roles", "Award and recognition pages — industry awards, project commendations, and professional honors"] },
];

const EngineeringConsultantSeo = () => (
  <Layout>
    <SeoHead title="Engineering Consultant SEO Services — Project Leads & Authority Building | Naveed Ganatra" description="Engineering consultant SEO services covering discipline-specific optimization, project portfolio SEO, technical content strategy, and authority building for engineering firms." canonical="https://seoexpertinkarachi.com/engineering-consultant-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Engineering Consultant SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Engineering Consultant SEO Services</h1>
        <p className="text-lg text-body mb-4">68% of corporate and government procurement officers research engineering consultants online before issuing RFPs. Firms with strong organic visibility get invited to more bids and win more projects through search-driven credibility.</p>
        <p className="text-body mb-8">Our engineering consultant SEO services combine discipline-specific page optimization, technical content strategy, project portfolio SEO, and professional authority building — designed to position your firm in front of decision-makers evaluating engineering expertise.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Engineering SEO Consultation</a>
          <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link>
        </div>
      </div></div></section>

      <section className="section-padding"><div className="section-container">
        <h2 className="text-3xl font-bold mb-4">Why Engineering Firms Need Specialized SEO</h2>
        <p className="text-body max-w-3xl">Engineering firm SEO requires deep technical content and professional authority signals. Effective engineering SEO combines <Link to="/technical-seo" className="text-primary hover:underline">technical optimization</Link> for complex service pages, <Link to="/content-strategy-seo" className="text-primary hover:underline">content strategy</Link> built around engineering expertise, and strong <Link to="/off-page-seo" className="text-primary hover:underline">off-page authority</Link> from professional directories and technical publications.</p>
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
          <Link to="/content-strategy-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Content Strategy</Link>
          <Link to="/off-page-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Off-Page SEO</Link>
        </div>
      </div></section>
      <CtaBanner />
    </main>
  </Layout>
);

export default EngineeringConsultantSeo;
