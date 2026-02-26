import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, UserCheck, Target, BarChart3, FileText, Layers, TrendingUp } from "lucide-react";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "SEO Consulting", url: "https://seoexpertinkarachi.com/seo-consulting" },
]);
const webPage = buildWebPage({ name: "SEO Consulting Services — Expert Strategy, Audits & Advisory", description: "SEO consulting services providing expert strategy development, technical audits, in-house team training, competitive analysis, and ongoing advisory for businesses that need strategic SEO guidance without full-service management.", url: "https://seoexpertinkarachi.com/seo-consulting" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "SEO Consulting Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "SEO Consulting", description: "SEO consulting services providing strategic guidance, technical audits, in-house team training, competitive intelligence, and ongoing advisory for businesses needing expert SEO direction." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "What does an SEO consultant do?", acceptedAnswer: { "@type": "Answer", text: "An SEO consultant provides strategic guidance and expert analysis without managing day-to-day implementation. This includes comprehensive SEO audits, strategy development, competitive analysis, in-house team training, and ongoing advisory. The consultant identifies what needs to be done and why, while your team or agency handles implementation. This model works best for companies with in-house marketing teams that need expert direction." }},
  { "@type": "Question", name: "When should I hire an SEO consultant vs. an SEO agency?", acceptedAnswer: { "@type": "Answer", text: "Hire a consultant when: you have an in-house team that needs strategic direction, you want a second opinion on your current SEO strategy, you need a comprehensive audit before selecting an agency, or you want to build internal SEO capabilities. Hire an agency when: you need full implementation services, you don't have internal resources for execution, or you need a complete managed SEO solution. Many businesses start with consulting, then transition to either in-house execution or agency management." }},
  { "@type": "Question", name: "How is SEO consulting typically structured?", acceptedAnswer: { "@type": "Answer", text: "SEO consulting typically follows one of three models: project-based (one-time audit, strategy, or training engagement), retainer-based (ongoing monthly advisory with regular strategy reviews), or hybrid (initial project phase followed by a lighter retainer for ongoing guidance). Project-based engagements work best for specific needs like audits or migration planning. Retainers suit businesses needing continuous strategic input." }},
  { "@type": "Question", name: "What should I expect from an SEO consulting engagement?", acceptedAnswer: { "@type": "Answer", text: "A quality SEO consulting engagement delivers: a comprehensive audit with prioritized findings, a documented strategy with clear objectives and timelines, regular reporting on progress and results, access to the consultant for questions and guidance, competitive intelligence and market analysis, and training for your team to build internal capabilities. You should see measurable improvements within 3-6 months when recommendations are implemented properly." }},
]};

const pillars = [
  { icon: Target, title: "Strategy Development & Roadmapping", desc: "SEO strategy development creates a documented roadmap with clear priorities, timelines, and expected outcomes. This ensures every SEO activity contributes to measurable business objectives.", items: ["Business goal alignment — connecting SEO objectives to revenue, lead generation, or market expansion targets", "Competitive landscape analysis — understanding your competitive position and identifying beatable opportunities", "Channel integration strategy — aligning SEO with content marketing, paid search, and social media efforts", "Resource allocation guidance — recommending team structure, tools, and budget allocation for SEO success", "Quarterly OKR development — setting measurable objectives and key results for SEO performance", "Risk assessment — identifying potential challenges and contingency plans for algorithm changes"] },
  { icon: BarChart3, title: "Comprehensive SEO Audits", desc: "Expert audits go beyond automated tool reports. A consultant audit includes manual analysis, competitive context, and strategic recommendations that prioritize fixes by business impact.", items: ["200+ checkpoint technical, on-page, and off-page audit with manual verification", "Competitive benchmark analysis — comparing your SEO performance against direct competitors", "Content quality assessment — evaluating topical coverage, search intent alignment, and information gain", "Backlink profile evaluation — assessing link quality, toxic link risk, and authority gaps", "Conversion path analysis — identifying where organic visitors drop off before converting", "Prioritized action plan — recommendations ordered by impact potential and implementation effort"] },
  { icon: UserCheck, title: "In-House Team Training & Enablement", desc: "Building internal SEO capabilities reduces long-term dependence on external services. Training empowers your team to execute SEO strategies independently while maintaining quality standards.", items: ["SEO fundamentals training — comprehensive workshops covering technical, on-page, and off-page SEO principles", "Content team SEO training — teaching writers to create content that ranks without compromising quality", "Developer SEO training — technical SEO requirements for engineering teams building and maintaining the site", "Tool training — hands-on guidance with Google Search Console, analytics platforms, and SEO tools", "Process documentation — creating internal SOPs and checklists for ongoing SEO maintenance", "Knowledge transfer sessions — ensuring institutional SEO knowledge stays within your organization"] },
  { icon: TrendingUp, title: "Ongoing Advisory & Performance Review", desc: "SEO is not a one-time project. Ongoing advisory provides regular strategic reviews, performance analysis, and tactical adjustments as market conditions, algorithms, and competitive landscapes evolve.", items: ["Monthly performance reviews — analyzing ranking changes, traffic trends, and conversion data", "Algorithm update impact analysis — assessing how Google updates affect your site and recommending responses", "Quarterly strategy refinement — adjusting priorities based on results, market changes, and new opportunities", "Competitive monitoring — tracking competitor SEO activities and identifying emerging threats or opportunities", "Ad hoc consultation — on-demand expert guidance for urgent SEO questions and decisions", "Annual strategy refresh — comprehensive yearly review and updated roadmap for the next 12 months"] },
];

const SeoConsulting = () => (
  <Layout>
    <SeoHead title="SEO Consulting Services — Expert Strategy & Advisory | Naveed Ganatra" description="SEO consulting services providing strategic guidance, comprehensive audits, in-house team training, competitive analysis, and ongoing advisory for businesses needing expert SEO direction." canonical="https://seoexpertinkarachi.com/seo-consulting" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">SEO Consulting</p>
         <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">SEO Consulting Services</h1>
         <p className="text-lg text-body mb-4">Not every Karachi business needs a full-service agency. Some need expert strategic guidance — covering technical SEO, content strategy, and keyword research direction for your team to execute.</p>
         <p className="text-body mb-8">Our SEO consulting services provide strategy development, comprehensive SEO audits, in-house team training, competitive intelligence, and ongoing advisory — giving your business the expert direction to make every SEO investment count.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Book SEO Consultation</a>
          <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link>
        </div>
      </div></div></section>

      <section className="section-padding"><div className="section-container">
        <h2 className="text-3xl font-bold mb-4">What SEO Consulting Covers</h2>
        <p className="text-body max-w-3xl">SEO consulting starts with a comprehensive <Link to="/seo-audit" className="text-primary hover:underline">SEO audit</Link> that identifies your biggest opportunities. From there, strategic direction spans <Link to="/technical-seo" className="text-primary hover:underline">technical optimization</Link>, <Link to="/keyword-research" className="text-primary hover:underline">keyword research</Link>, and content planning — empowering your team to execute with clarity.</p>
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
          <Link to="/seo-audit" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">SEO Audit</Link>
          <Link to="/seo-packages" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">SEO Packages</Link>
          <Link to="/white-label-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">White Label SEO</Link>
        </div>
      </div></section>

      <section className="section-padding"><div className="section-container max-w-3xl">
        <div className="metric-card bg-primary/5 border-primary/20">
          <h2 className="text-2xl font-bold text-heading mb-3">Need Expert SEO Direction for Your Team?</h2>
          <p className="text-body mb-6">Book a free consultation to discuss your SEO challenges, evaluate your current strategy, and determine whether consulting, training, or full-service support is the right fit.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Book Free Consultation →</a>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">Hire Naveed Ganatra</Link>
          </div>
        </div>
      </div></section>
      <CtaBanner />
    </main>
  </Layout>
);

export default SeoConsulting;
