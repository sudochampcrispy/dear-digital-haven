import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, Ruler, MapPin, FileText, Eye, Search, Users } from "lucide-react";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "Architecture Firm SEO", url: "https://seoexpertinkarachi.com/architecture-firm-seo" },
]);
const webPage = buildWebPage({ name: "Architecture Firm SEO Services — Client Acquisition Through Organic Search", description: "Architecture firm SEO services covering portfolio optimization, project showcase pages, local search dominance, and design authority building for architects and architecture practices.", url: "https://seoexpertinkarachi.com/architecture-firm-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Architecture Firm SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "Architecture Firm SEO", description: "Architecture firm SEO services covering portfolio optimization, project showcase pages, local search dominance, design content strategy, and authority building for architects and architecture practices." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Why do architecture firms need SEO?", acceptedAnswer: { "@type": "Answer", text: "72% of clients searching for architects start with Google. Architecture firms that rank for design-specific and location-based keywords capture high-value residential and commercial project leads. Unlike referrals which are inconsistent, organic search delivers a predictable pipeline of clients actively looking for architectural services. Firms ranking on page one for 'architect [city]' queries receive 3-5 qualified project inquiries per week." }},
  { "@type": "Question", name: "How does portfolio content affect architecture firm SEO?", acceptedAnswer: { "@type": "Answer", text: "Project portfolio pages are the most powerful SEO asset for architecture firms. Each completed project page targets specific searches — 'modern house design Karachi', 'commercial office interior architect'. Portfolio pages with professional photography, project narratives, floor plans, and design rationale rank for dozens of long-tail architecture queries. Google's image search also drives significant traffic to well-optimized architecture portfolios." }},
  { "@type": "Question", name: "What keywords should architects target?", acceptedAnswer: { "@type": "Answer", text: "High-converting architecture keywords combine specialization with location: 'residential architect [city]', 'commercial building design firm', 'interior design architect near me'. Service-specific pages for house design, office interiors, renovation architecture, and landscape design capture clients with defined project needs. Style-specific keywords like 'modern minimalist architect' or 'traditional home designer' attract clients seeking particular design philosophies." }},
  { "@type": "Question", name: "How long does architecture firm SEO take?", acceptedAnswer: { "@type": "Answer", text: "Architecture firm SEO shows initial results in 2-3 months, with project inquiries beginning by month 3-4 for niche design keywords. Competitive terms like 'architect in [major city]' take 6-9 months. Architecture firms that invest consistently see a 40-60% reduction in client acquisition costs compared to paid advertising within 12 months, with higher quality leads from intent-driven organic search." }},
]};

const pillars = [
  { icon: Eye, title: "Portfolio & Project Showcase SEO", desc: "Your completed projects are your strongest SEO asset. Each project page can rank for specific design queries, building type searches, and location-based architecture keywords.", items: ["Project case study pages — detailed write-ups with design rationale, challenges, and solutions", "Image SEO optimization — professional photography with descriptive alt text and schema markup", "Building type categorization — residential, commercial, institutional, hospitality project sections", "Design style pages — modern, minimalist, traditional, contemporary style-specific landing pages", "Floor plan and rendering content — visual content optimized for Google image search traffic", "Before-after renovation showcases — transformation content that drives engagement and backlinks"] },
  { icon: MapPin, title: "Local SEO for Architecture Firms", desc: "Architecture search is location-driven — clients hire architects who understand local building codes, climate, and design culture. Local SEO determines visibility when property owners search for architects nearby.", items: ["Google Business Profile optimization — portfolio images, service categories, and client reviews", "Service area targeting — pages for each city and district where you accept projects", "Local citation building — consistent firm information across architecture directories and listings", "Review generation strategy — systematic approach to collecting reviews from project clients", "Map pack optimization — dominating local results for architecture service queries", "Neighborhood and district pages — targeting specific areas known for development activity"] },
  { icon: FileText, title: "Architecture Content Strategy", desc: "Design-focused content positions your firm as a thought leader and captures searches from clients in the research phase of their building or renovation project.", items: ["Design trend articles — covering architectural movements, material innovations, and style evolution", "Building process guides — comprehensive resources on project phases, timelines, and budgeting", "Material and technique explainers — content on sustainable materials, smart home integration, passive design", "Regulatory content — building code explanations, approval processes, and compliance guides", "Client education resources — what to expect when hiring an architect, project brief templates", "Award and recognition content — competition entries, design awards, and professional achievements"] },
  { icon: Users, title: "Authority & Credential Building", desc: "Architecture is a trust-intensive profession. Online authority signals influence which firms get shortlisted for major projects and high-net-worth residential clients.", items: ["Principal and team profiles — credentials, education, design philosophy, and portfolio for each architect", "Professional registration pages — PCATP, RIBA, AIA registrations with structured data markup", "Publication and media features — leveraging press coverage, magazine features, and design publications", "Speaking and jury participation — conference appearances and design competition jury roles", "Academic and teaching credentials — university affiliations and guest lectures for authority signals", "Industry partnership signals — material supplier partnerships and construction firm collaborations"] },
];

const ArchitectureFirmSeo = () => (
  <Layout>
    <SeoHead title="Architecture Firm SEO Services — Client Acquisition & Portfolio Visibility | Naveed Ganatra" description="Architecture firm SEO services covering portfolio optimization, local search dominance, design content strategy, and authority building for architects and architecture practices." canonical="https://seoexpertinkarachi.com/architecture-firm-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Architecture Firm SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Architecture Firm SEO Services</h1>
        <p className="text-lg text-body mb-4">72% of clients searching for architects start with Google. Firms that showcase their portfolio effectively online and rank for design-specific keywords capture the highest-value residential and commercial project leads.</p>
        <p className="text-body mb-8">Our architecture firm SEO services combine portfolio optimization, local search strategy, design content marketing, and professional authority building — designed to generate consistent project inquiries from clients who value quality design.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Architecture SEO Consultation</a>
          <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link>
        </div>
      </div></div></section>

      <section className="section-padding"><div className="section-container">
        <h2 className="text-3xl font-bold mb-4">Why Architecture Firms Need Specialized SEO</h2>
        <p className="text-body max-w-3xl">Architecture firm SEO is inherently visual and portfolio-driven. Effective architect SEO requires <Link to="/technical-seo" className="text-primary hover:underline">technical optimization</Link> for image-heavy portfolios, strong <Link to="/local-seo-karachi" className="text-primary hover:underline">local SEO</Link> for geographic targeting, and a structured <Link to="/content-strategy-seo" className="text-primary hover:underline">content strategy</Link> that demonstrates design expertise and project experience.</p>
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

export default ArchitectureFirmSeo;
