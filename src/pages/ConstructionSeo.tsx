import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, HardHat, MapPin, FileText, Building2, Search, Users } from "lucide-react";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "Construction Company SEO", url: "https://seoexpertinkarachi.com/construction-company-seo" },
]);
const webPage = buildWebPage({ name: "Construction Company SEO Services — Lead Generation Through Organic Search", description: "Construction company SEO services covering project portfolio optimization, local contractor search dominance, service area targeting, and authority building for construction businesses.", url: "https://seoexpertinkarachi.com/construction-company-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Construction Company SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "Construction Company SEO", description: "Construction company SEO services covering project portfolio optimization, local contractor search dominance, service page targeting, bid-winning content strategy, and authority building for construction firms and contractors." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Why do construction companies need SEO?", acceptedAnswer: { "@type": "Answer", text: "78% of commercial and residential construction clients research contractors online before requesting quotes. Construction SEO ensures your company appears when property developers, homeowners, and businesses search for construction services in your area. Unlike paid ads where construction keywords cost $15-$40 per click, organic rankings generate sustained project inquiries without per-click costs. Construction firms ranking in the top 3 results capture the majority of high-value project leads." }},
  { "@type": "Question", name: "What keywords should construction companies target?", acceptedAnswer: { "@type": "Answer", text: "High-converting construction keywords combine service type with intent: 'commercial construction company [city]', 'residential contractors near me', 'building renovation contractor'. Service-specific pages like 'warehouse construction', 'office building contractor', and 'home addition builder' capture clients who know exactly what they need. Project-type keywords convert better than generic 'construction company' terms because they match the specific intent of clients with defined project requirements." }},
  { "@type": "Question", name: "How does project portfolio content help SEO?", acceptedAnswer: { "@type": "Answer", text: "Completed project case studies serve as powerful SEO assets. Each project page targets specific search queries — 'commercial plaza construction Karachi', 'factory building contractor'. Project portfolios with high-quality images, specifications, timelines, and client testimonials rank for long-tail construction searches and build trust with potential clients evaluating your capabilities. Google values this real-world expertise signal heavily under E-E-A-T guidelines." }},
  { "@type": "Question", name: "How long does construction company SEO take to generate leads?", acceptedAnswer: { "@type": "Answer", text: "Construction SEO typically produces ranking improvements within 2-3 months, with qualified project inquiries starting by month 3-4 for service-specific keywords. Competitive terms like 'construction company [city]' take 6-9 months. Construction firms that invest consistently see cost per lead from organic search drop 50-65% below paid channels within 12 months, with significantly higher lead quality due to intent-based targeting." }},
]};

const pillars = [
  { icon: Building2, title: "Service Page Optimization", desc: "Each construction service represents a distinct search market. Commercial, residential, industrial, renovation — each requires dedicated pages that demonstrate project capability and match client search intent.", items: ["Commercial construction pages — offices, retail spaces, plazas, warehouses with project specifications", "Residential construction content — homes, apartments, villas with floor plan and design detail pages", "Renovation and remodeling pages — interior renovation, structural modification, facade upgrades", "Industrial construction content — factories, plants, cold storage with technical specification pages", "Infrastructure project pages — roads, bridges, foundations targeting government and corporate searches", "Green building and sustainable construction — LEED, energy-efficient construction service pages"] },
  { icon: MapPin, title: "Local SEO for Construction Companies", desc: "Construction search is location-driven — clients hire contractors operating in their area. Local SEO determines which firms appear when developers and homeowners search for construction services nearby.", items: ["Google Business Profile optimization — project photos, service areas, certifications, and client reviews", "Service area targeting — pages for each city, district, and zone where you operate", "Local citation building — consistent company information across construction directories and listings", "Review generation strategy — systematic approach to collecting reviews from completed project clients", "Map pack optimization — strategies for dominating local results for contractor queries", "Competitor analysis — identifying and outranking competing construction firms in your service areas"] },
  { icon: FileText, title: "Construction Content Strategy", desc: "Educational construction content captures searches from property owners, developers, and businesses researching projects. This content positions your company as the authoritative construction resource.", items: ["Project planning guides — comprehensive resources on construction timelines, budgeting, and permitting", "Material and method explainers — content covering construction techniques, materials, and best practices", "Cost estimation content — pricing guides for different construction types that attract qualified leads", "Regulatory and compliance content — building codes, permits, and inspection process explanations", "Case study content — detailed completed project stories with specifications, challenges, and outcomes", "Industry trend content — construction technology, sustainable building, and market update articles"] },
  { icon: Users, title: "Authority & Trust Building", desc: "Construction is a high-trust industry — clients invest millions in projects. Online authority signals directly impact which contractors get shortlisted for project bids.", items: ["Portfolio optimization — structured project galleries with schema markup for completed works", "Certification and licensing pages — displaying PMI, PEC, ISO certifications with structured data", "Team and leadership profiles — showcasing engineers, architects, and project managers with credentials", "Safety record content — pages demonstrating safety standards, records, and compliance history", "Industry association presence — memberships in construction and engineering professional bodies", "Supplier and partner signals — relationships with material suppliers and subcontractor networks"] },
];

const ConstructionSeo = () => (
  <Layout>
    <SeoHead title="Construction Company SEO Services — Lead Generation & Local Dominance | Naveed Ganatra" description="Construction company SEO services covering service page optimization, local search dominance, project portfolio SEO, content strategy, and authority building for contractors." canonical="https://seoexpertinkarachi.com/construction-company-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Construction Company SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Construction Company SEO Services</h1>
        <p className="text-lg text-body mb-4">78% of commercial and residential construction clients research contractors online before requesting quotes. In Pakistan's booming construction market, firms that rank for service-specific keywords and dominate local search capture the highest-value project leads.</p>
        <p className="text-body mb-8">Our construction SEO services combine service page optimization, local search strategy, project portfolio content, and authority building — designed to generate consistent project inquiries from organic search.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Construction SEO Consultation</a>
          <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link>
        </div>
      </div></div></section>

      <section className="section-padding"><div className="section-container">
        <h2 className="text-3xl font-bold mb-4">Why Construction Companies Need Specialized SEO</h2>
        <p className="text-body max-w-3xl">Construction search behavior is driven by project type and location. Effective construction SEO requires strong <Link to="/local-seo-karachi" className="text-primary hover:underline">local SEO</Link> for service area dominance, comprehensive <Link to="/on-page-seo" className="text-primary hover:underline">on-page optimization</Link> for each service type, and a structured <Link to="/content-strategy-seo" className="text-primary hover:underline">content strategy</Link> that demonstrates project expertise and builds client confidence.</p>
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
          <Link to="/technical-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Technical SEO</Link>
        </div>
      </div></section>
      <CtaBanner />
    </main>
  </Layout>
);

export default ConstructionSeo;
