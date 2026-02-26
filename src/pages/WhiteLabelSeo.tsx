import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, Briefcase, Shield, BarChart3, FileText, Users, Settings } from "lucide-react";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "White Label SEO", url: "https://seoexpertinkarachi.com/white-label-seo" },
]);
const webPage = buildWebPage({ name: "White Label SEO Services — Scalable SEO for Agencies & Resellers", description: "White label SEO services for digital agencies, web developers, and marketing firms. Fully branded deliverables, transparent reporting, and scalable SEO execution under your brand name.", url: "https://seoexpertinkarachi.com/white-label-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "White Label SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "White Label SEO", description: "White label SEO services for agencies and resellers covering technical audits, on-page optimization, content creation, link building, and reporting — all delivered under your agency's brand with full confidentiality." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "What is white label SEO?", acceptedAnswer: { "@type": "Answer", text: "White label SEO means an SEO specialist performs the work — audits, optimization, content creation, link building, reporting — while your agency takes credit. All deliverables are branded with your agency's name, logo, and branding. Your clients never know a third party is involved. This allows agencies to offer comprehensive SEO services without hiring in-house SEO specialists or building internal expertise." }},
  { "@type": "Question", name: "Who benefits from white label SEO services?", acceptedAnswer: { "@type": "Answer", text: "White label SEO benefits: digital marketing agencies that want to add SEO to their service offerings, web design and development agencies whose clients request SEO, freelance marketers who need SEO expertise for client projects, and PR firms that want to offer organic search visibility alongside media services. Any business that sells services to clients and wants to include SEO without building an internal SEO team." }},
  { "@type": "Question", name: "How does white label SEO reporting work?", acceptedAnswer: { "@type": "Answer", text: "All reports are delivered with your agency's branding — logo, colors, contact information. Reports include ranking progress, traffic analysis, completed optimizations, and upcoming recommendations. You receive reports before your clients do, giving you time to review, add context, and present results as your own work. Report frequency and format are customizable to match your client communication cadence." }},
  { "@type": "Question", name: "Is white label SEO confidential?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. White label arrangements are built on complete confidentiality. No contact with your clients without your explicit approval, no branding or attribution to the SEO provider, and NDA agreements are standard. Your relationship with your clients remains fully intact — you're the expert they trust, and the work quality reinforces that trust." }},
]};

const pillars = [
  { icon: Briefcase, title: "Full-Service White Label SEO", desc: "Complete SEO execution under your brand — from audits to implementation to reporting. Your agency offers comprehensive SEO services without the overhead of building an internal team.", items: ["Technical SEO audits and implementation — crawlability, speed, architecture under your brand", "On-page optimization — content, meta tags, headings, internal linking delivered as your work", "Content creation — SEO-optimized articles, landing pages, and blog posts branded to your agency", "Link building — ethical outreach and digital PR with your client's brand, attributed to your agency", "Monthly reporting — white-labeled dashboards and PDF reports with your agency branding", "Strategy documents — client-facing roadmaps and recommendations presented as your agency's expertise"] },
  { icon: Shield, title: "Confidentiality & Brand Protection", desc: "White label partnerships only work when confidentiality is absolute. Our processes ensure your client relationships remain protected at every touchpoint.", items: ["NDA agreements — comprehensive non-disclosure covering all client information and work products", "Zero client contact — we never communicate with your clients unless explicitly authorized by you", "Branded deliverables — every document, report, and communication uses your agency's identity", "Secure file sharing — encrypted delivery of all work products and client data", "Team anonymity — our team members never appear in client-facing meetings or communications", "Referral protection — we never solicit your clients or use client information for competitive purposes"] },
  { icon: Settings, title: "Flexible Engagement Models", desc: "White label partnerships should fit your agency's workflow, not the other way around. We offer multiple engagement structures to match your client volume and service model.", items: ["Per-project engagements — one-time audits, migrations, or strategy projects for individual clients", "Monthly retainers per client — ongoing SEO management at fixed monthly rates you can mark up", "Bulk pricing tiers — volume discounts for agencies with 5+ concurrent SEO clients", "Custom service packages — mix-and-match SEO services to create packages that fit your pricing", "Overflow support — handling SEO workload during peak periods when your team is at capacity", "Dedicated account management — single point of contact for all your white label SEO projects"] },
  { icon: BarChart3, title: "Transparent Reporting & Communication", desc: "You need to understand the work being done to present it confidently to your clients. Our reporting gives you complete visibility into every activity, result, and recommendation.", items: ["Pre-delivery report review — you see all reports before your clients, with time to add your insights", "Activity logs — detailed records of all optimization activities performed each month", "Ranking and traffic dashboards — real-time data you can access anytime for client conversations", "Strategy alignment calls — regular calls to discuss strategy, results, and upcoming priorities", "Client presentation support — talking points and data summaries for your client meetings", "Escalation protocols — clear communication channels for urgent issues or client-facing emergencies"] },
];

const WhiteLabelSeo = () => (
  <Layout>
    <SeoHead title="White Label SEO Services — Scalable SEO for Agencies & Resellers | Naveed Ganatra" description="White label SEO services for agencies and resellers. Branded deliverables, transparent reporting, and complete SEO execution under your agency's name. Full confidentiality guaranteed." canonical="https://seoexpertinkarachi.com/white-label-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">White Label SEO</p>
         <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">White Label SEO Services</h1>
         <p className="text-lg text-body mb-4">Based in Karachi, we help agencies worldwide deliver expert SEO under their own brand. White label SEO covers everything from technical audits to content strategy — with complete confidentiality and professional-grade deliverables.</p>
         <p className="text-body mb-8">Our white label services include comprehensive audits, on-page optimization, link building, and branded reporting — all delivered as your agency's work. Your clients see results; you maintain the relationship.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Discuss Partnership</a>
          <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link>
        </div>
      </div></div></section>

      <section className="section-padding"><div className="section-container">
        <h2 className="text-3xl font-bold mb-4">Full-Spectrum SEO Under Your Brand</h2>
        <p className="text-body max-w-3xl">Our white label services cover every SEO discipline — from <Link to="/technical-seo" className="text-primary hover:underline">technical audits</Link> and <Link to="/on-page-seo" className="text-primary hover:underline">on-page optimization</Link> to <Link to="/off-page-seo" className="text-primary hover:underline">link building</Link> and <Link to="/content-strategy-seo" className="text-primary hover:underline">content strategy</Link>. Your clients get expert-level results; your agency gets the credit.</p>
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
          <Link to="/seo-consulting" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">SEO Consulting</Link>
          <Link to="/seo-packages" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">SEO Packages</Link>
          <Link to="/seo-audit" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">SEO Audit</Link>
        </div>
      </div></section>

      <section className="section-padding"><div className="section-container max-w-3xl">
        <div className="metric-card bg-primary/5 border-primary/20">
          <h2 className="text-2xl font-bold text-heading mb-3">Ready to Add SEO to Your Agency's Services?</h2>
          <p className="text-body mb-6">Let's discuss a white label partnership that fits your agency's needs — whether you need support for one client or twenty. Complete confidentiality, professional execution, your brand.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Discuss White Label Partnership →</a>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">Hire Naveed Ganatra</Link>
          </div>
        </div>
      </div></section>
      <CtaBanner />
    </main>
  </Layout>
);

export default WhiteLabelSeo;
