import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, Calculator, MapPin, FileText, Star, TrendingUp, Users } from "lucide-react";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "Accounting Firm SEO", url: "https://seoexpertinkarachi.com/accounting-firm-seo" },
]);
const webPage = buildWebPage({ name: "Accounting Firm SEO Services — Client Acquisition for CPAs & Tax Professionals", description: "Accounting firm SEO services covering service page optimization, local search visibility, tax season content strategy, thought leadership, and lead generation for CPAs, tax professionals, and accounting practices.", url: "https://seoexpertinkarachi.com/accounting-firm-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Accounting Firm SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "Accounting Firm SEO", description: "Accounting firm SEO services covering service page optimization, local search dominance, tax season content strategy, professional authority building, and client acquisition for CPAs, bookkeepers, and accounting practices." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Why is SEO important for accounting firms?", acceptedAnswer: { "@type": "Answer", text: "76% of people looking for accounting services search online first. Accounting is a trust-based profession — clients research extensively before choosing a CPA or tax professional. SEO ensures your firm appears when business owners and individuals search for 'accountant near me', 'tax preparation services', or industry-specific accounting queries. Unlike paid ads, organic rankings compound over time, reducing cost per client acquisition while building professional credibility through search visibility." }},
  { "@type": "Question", name: "What is tax season SEO strategy for accountants?", acceptedAnswer: { "@type": "Answer", text: "Tax season SEO involves publishing and optimizing tax-related content 2-3 months before filing deadlines so pages are ranked when search volume spikes. Tax keyword searches increase 300-500% during filing season. Content covering tax deductions, filing requirements, deadline reminders, and tax law changes captures high-intent searchers actively looking for professional help. Firms that prepare content in November-December for the January-April filing season dominate when it matters most." }},
  { "@type": "Question", name: "How do accounting firms build authority through SEO?", acceptedAnswer: { "@type": "Answer", text: "Accounting falls under Google's YMYL (Your Money or Your Life) category, requiring strong E-E-A-T signals. Authority is built through detailed service pages with CPA credentials, educational content demonstrating tax and financial expertise, client testimonials and case studies, professional directory profiles, and content covering regulatory changes and compliance requirements. Author bios linking content to verified CPAs strengthen these signals significantly." }},
  { "@type": "Question", name: "How long does accounting firm SEO take to attract clients?", acceptedAnswer: { "@type": "Answer", text: "Accounting SEO typically shows ranking improvements within 3-4 months for service-specific keywords. Local map pack improvements appear within 4-6 weeks. Tax season content published 2-3 months before filing deadlines ranks in time for peak demand. Most accounting firms see measurable increases in consultation requests within 4-6 months. The compounding nature of SEO means year-over-year results improve — second-year performance typically doubles first-year results." }},
]};

const pillars = [
  { icon: Calculator, title: "Accounting Service Page Optimization", desc: "Clients search for specific accounting services — not just 'accountant'. Dedicated service pages for tax preparation, bookkeeping, auditing, and advisory services capture targeted searches and pre-qualify leads.", items: ["Individual service pages — tax preparation, bookkeeping, payroll, audit, and every service offered", "Industry-specific pages — construction accounting, healthcare accounting, nonprofit accounting niches", "Business structure pages — LLC formation, sole proprietorship, partnership accounting service pages", "Tax planning pages — content covering tax planning strategies, deductions, and savings opportunities", "Advisory service pages — CFO services, business valuation, financial planning, and consulting", "Compliance and regulatory pages — content covering tax compliance, IFRS, and reporting requirements"] },
  { icon: MapPin, title: "Local SEO for Accounting Practices", desc: "Accounting clients prefer local professionals they can meet in person. Local SEO ensures your firm appears when clients search for accounting services in your area.", items: ["Google Business Profile optimization — complete profile with services, credentials, office photos, and hours", "Review generation strategy — systematic review requests from satisfied clients after engagement completion", "Local citation building — consistent firm information across accounting directories and local listings", "Area-specific service pages — targeting neighborhoods and business districts within your service area", "Map pack optimization — strategies for appearing in the local 3-pack for accounting service queries", "Professional directory presence — optimized profiles on accounting and financial service directories"] },
  { icon: TrendingUp, title: "Tax Season Content Strategy", desc: "Tax-related searches spike 300-500% during filing season. A pre-season content strategy ensures your pages are ranked and capturing high-intent traffic when potential clients need help most.", items: ["Pre-season content calendar — publishing tax content 2-3 months before filing deadlines for ranking readiness", "Tax deadline and requirement pages — evergreen content updated annually covering filing requirements", "Tax deduction guides — comprehensive resources for business and individual deductions by category", "Tax law change content — timely articles on new regulations, rate changes, and compliance updates", "Tax calculator and tool pages — interactive content that generates engagement and qualified leads", "Seasonal FAQ content — answering common tax questions that potential clients search during filing season"] },
  { icon: Users, title: "Professional Authority & E-E-A-T", desc: "Accounting is YMYL content. Google requires strong expertise, experience, authoritativeness, and trustworthiness signals for financial content to rank. Professional authority building is non-negotiable.", items: ["CPA credential highlighting — structured data for professional certifications and qualifications", "Author profiles — connecting content to verified CPA and accounting professional profiles", "Thought leadership content — opinion pieces on financial trends, regulatory changes, and industry outlook", "Client case studies — anonymized engagement results demonstrating expertise and outcomes", "Professional association signals — memberships, awards, and recognition schema markup", "Media and publication mentions — leveraging press coverage and guest articles for authority signals"] },
];

const AccountingFirmSeo = () => (
  <Layout>
    <SeoHead title="Accounting Firm SEO Services — Client Acquisition for CPAs | Naveed Ganatra" description="Accounting firm SEO services covering service page optimization, local search dominance, tax season content strategy, professional authority building, and client acquisition for CPAs and accounting practices." canonical="https://seoexpertinkarachi.com/accounting-firm-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Accounting Firm SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Accounting Firm SEO Services</h1>
        <p className="text-lg text-body mb-4">76% of people searching for accounting services start online. In Karachi, businesses and individuals searching for CPAs, tax professionals, and bookkeepers choose firms that appear prominently in local search results and demonstrate professional authority.</p>
        <p className="text-body mb-8">Our accounting firm SEO services combine service page optimization, local search strategy, tax season content planning, and professional authority building — designed to generate a steady stream of qualified client inquiries year-round.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Accounting Firm SEO Consultation</a>
          <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link>
        </div>
      </div></div></section>

      <section className="section-padding"><div className="section-container">
        <h2 className="text-3xl font-bold mb-4">Why Accounting Firms Need Specialized SEO</h2>
        <p className="text-body max-w-3xl">Accounting SEO requires strong <Link to="/local-seo-karachi" className="text-primary hover:underline">local SEO</Link> for map pack visibility and YMYL-compliant content. Detailed <Link to="/on-page-seo" className="text-primary hover:underline">on-page optimization</Link> for each service area captures specific client searches, while a seasonal <Link to="/content-strategy-seo" className="text-primary hover:underline">content strategy</Link> ensures peak visibility during tax filing season.</p>
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
          <Link to="/law-firm-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Law Firm SEO</Link>
          <Link to="/content-strategy-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Content Strategy</Link>
        </div>
      </div></section>

      <section className="section-padding"><div className="section-container max-w-3xl">
        <div className="metric-card bg-primary/5 border-primary/20">
          <h2 className="text-2xl font-bold text-heading mb-3">Ready to Grow Your Accounting Practice?</h2>
          <p className="text-body mb-6">Get a free accounting firm SEO assessment covering your local search visibility, service page optimization, and a strategy for generating more client inquiries from organic search.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Accounting SEO Assessment →</a>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">Hire Naveed Ganatra</Link>
          </div>
        </div>
      </div></section>
      <CtaBanner />
    </main>
  </Layout>
);

export default AccountingFirmSeo;
