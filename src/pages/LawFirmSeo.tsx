import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, Scale, FileText, MapPin, Star, Search, Users } from "lucide-react";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "Law Firm SEO", url: "https://seoexpertinkarachi.com/law-firm-seo" },
]);
const webPage = buildWebPage({ name: "Law Firm SEO Services — Client Acquisition Through Organic Search", description: "Law firm SEO services covering practice area pages, local search dominance, attorney profiles, legal content strategy, and ethical link building for lawyers and legal practices.", url: "https://seoexpertinkarachi.com/law-firm-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Law Firm SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "Law Firm SEO", description: "Law firm SEO services covering practice area page optimization, local search dominance, attorney profile SEO, legal content strategy, Google Business Profile for lawyers, and ethical authority building for legal practices." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Why is SEO important for law firms?", acceptedAnswer: { "@type": "Answer", text: "96% of people seeking legal advice use a search engine. Law firm SEO ensures your practice appears when potential clients search for attorneys in your area and practice specialization. Unlike paid ads where cost-per-click for legal keywords averages $50-$150, organic rankings generate sustained client inquiries without per-click costs. Firms ranking in the top 3 organic results capture 75% of clicks for legal service queries." }},
  { "@type": "Question", name: "How do practice area pages affect law firm SEO?", acceptedAnswer: { "@type": "Answer", text: "Practice area pages are the most important pages on a law firm website. Each page must target specific legal queries — 'personal injury lawyer in Karachi' or 'divorce attorney near me'. Well-optimized practice area pages with unique content covering the legal process, case types handled, potential outcomes, and relevant laws rank for dozens of related keywords. Thin practice area pages with generic descriptions fail to rank because they don't satisfy search intent." }},
  { "@type": "Question", name: "How long does law firm SEO take to generate clients?", acceptedAnswer: { "@type": "Answer", text: "Law firm SEO typically produces initial ranking improvements within 2-3 months, with client inquiries starting by month 3-4 for long-tail practice area keywords. Competitive terms like 'personal injury lawyer [city]' take 6-12 months. Firms that invest consistently see cost per client acquisition from organic search drop 60-70% below paid channels within 12 months." }},
  { "@type": "Question", name: "What is the role of Google Business Profile for lawyers?", acceptedAnswer: { "@type": "Answer", text: "Google Business Profile is critical for law firms because local map pack results appear above organic results for queries like 'lawyer near me' and '[practice area] attorney [city]'. An optimized profile with accurate practice areas, office photos, client reviews, and regular posts generates 30-50% of total client inquiries for many law firms. Reviews are especially impactful — firms with 50+ positive reviews dominate local legal search results." }},
]};

const pillars = [
  { icon: Scale, title: "Practice Area Page Optimization", desc: "Each practice area is a distinct search market. Personal injury, family law, criminal defense, corporate law — each requires dedicated, comprehensive pages that demonstrate expertise and match searcher intent.", items: ["Individual practice area pages — dedicated landing pages for each legal service with unique, in-depth content", "Sub-practice pages — granular pages like 'car accident lawyer', 'slip and fall attorney' under personal injury", "Legal process explanations — step-by-step content covering how cases are handled, building client confidence", "Case type content — specific pages for each case type you handle with relevant statutes and outcomes", "Jurisdiction-specific content — pages targeting the specific courts, laws, and regulations in your service area", "Attorney-client FAQ content — answering the exact questions potential clients ask during consultations"] },
  { icon: MapPin, title: "Local SEO for Law Firms", desc: "Legal services are inherently local. Clients search for lawyers in their city, district, and neighborhood. Local SEO determines which firms appear in the map pack and local organic results.", items: ["Google Business Profile optimization — complete profile with practice areas, office photos, and attorney bios", "Review generation strategy — systematic approach to requesting reviews from satisfied clients post-case", "Local citation building — consistent firm information across legal directories, bar associations, and local listings", "Area-specific landing pages — targeting neighborhoods and districts within your service area", "Map pack optimization — strategies for appearing in the local 3-pack for '[practice area] lawyer near me'", "Multi-location SEO — optimizing for branch offices or satellite locations serving different jurisdictions"] },
  { icon: FileText, title: "Legal Content Strategy", desc: "Educational legal content builds trust and captures top-of-funnel searches from people researching their legal situation. This content positions your firm as the authoritative resource before they're ready to hire.", items: ["Legal guides — comprehensive resources covering specific legal processes, rights, and procedures", "Case study content — anonymized case outcomes demonstrating your firm's track record and expertise", "Legal news and updates — commentary on new laws, court rulings, and regulatory changes in your practice areas", "FAQ content clusters — answering common legal questions that potential clients search for", "Video content — attorney explanations of legal concepts targeting YouTube and video search results", "Statute and regulation explainers — plain-language breakdowns of complex legal requirements"] },
  { icon: Users, title: "Attorney Profile & Authority Building", desc: "Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is critical for legal content. Attorney profiles and authority signals directly impact rankings for YMYL legal queries.", items: ["Attorney bio optimization — detailed profiles with credentials, bar admissions, case experience, and publications", "Legal directory presence — optimized profiles on Avvo, Justia, FindLaw, and jurisdiction-specific directories", "Speaking and publication signals — leveraging conference appearances, legal publications, and media mentions", "Bar association and professional memberships — structured data for professional affiliations", "Peer endorsements and awards — schema markup for professional recognition and legal honors", "Author authority — connecting published legal content to verified attorney profiles for E-E-A-T signals"] },
];

const LawFirmSeo = () => (
  <Layout>
    <SeoHead title="Law Firm SEO Services — Client Acquisition & Local Dominance | Naveed Ganatra" description="Law firm SEO services covering practice area optimization, local search dominance, attorney profiles, legal content strategy, and ethical authority building for legal practices." canonical="https://seoexpertinkarachi.com/law-firm-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Law Firm SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Law Firm SEO Services</h1>
        <p className="text-lg text-body mb-4">96% of people seeking legal advice start with a search engine. In Karachi's competitive legal market, firms that rank for practice-area keywords and dominate local search results capture the majority of new client inquiries.</p>
        <p className="text-body mb-8">Our law firm SEO services combine practice area page optimization, local search strategy, legal content development, and attorney authority building — designed to reduce client acquisition costs and generate sustained organic leads.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Law Firm SEO Consultation</a>
          <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link>
        </div>
      </div></div></section>

      <section className="section-padding"><div className="section-container">
        <h2 className="text-3xl font-bold mb-4">Why Law Firms Need Specialized SEO</h2>
        <p className="text-body max-w-3xl">Legal search is highly competitive and YMYL-regulated by Google. Effective law firm SEO requires strong <Link to="/local-seo-karachi" className="text-primary hover:underline">local SEO</Link> for map pack dominance, comprehensive <Link to="/on-page-seo" className="text-primary hover:underline">on-page optimization</Link> for practice area pages, and a structured <Link to="/content-strategy-seo" className="text-primary hover:underline">content strategy</Link> that satisfies E-E-A-T requirements for legal topics.</p>
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
          <Link to="/on-page-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">On-Page SEO</Link>
        </div>
      </div></section>

      <section className="section-padding"><div className="section-container max-w-3xl">
        <div className="metric-card bg-primary/5 border-primary/20">
          <h2 className="text-2xl font-bold text-heading mb-3">Ready to Grow Your Law Firm's Client Pipeline?</h2>
          <p className="text-body mb-6">Get a free law firm SEO assessment covering your local search visibility, practice area page optimization gaps, and a strategy for generating more client inquiries from organic search.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Law Firm SEO Assessment →</a>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">Hire Naveed Ganatra</Link>
          </div>
        </div>
      </div></section>
      <CtaBanner />
    </main>
  </Layout>
);

export default LawFirmSeo;
