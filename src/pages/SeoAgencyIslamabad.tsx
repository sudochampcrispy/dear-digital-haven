import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";

const breadcrumb = buildBreadcrumb([{ name: "Home", url: "https://seoexpertinkarachi.com/" }, { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" }, { name: "SEO Agency Islamabad", url: "https://seoexpertinkarachi.com/seo-agency-islamabad" }]);
const webPage = buildWebPage({ name: "SEO Agency Islamabad — Naveed Ganatra SEO Agency", description: "Professional SEO agency serving Islamabad businesses with proven organic growth strategies.", url: "https://seoexpertinkarachi.com/seo-agency-islamabad" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "SEO Agency Islamabad", description: "Expert SEO services for Islamabad businesses including technical SEO, content strategy, and local optimization.", provider: { "@type": "Organization", name: "Naveed Ganatra SEO Agency" }, areaServed: { "@type": "City", name: "Islamabad" }, serviceType: "Search Engine Optimization" };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Why choose Naveed Ganatra SEO Agency for Islamabad?", acceptedAnswer: { "@type": "Answer", text: "Our agency combines 10+ years of Pakistan-wide SEO expertise with understanding of Islamabad's unique market — a city dominated by government, IT, and corporate sectors where search intent differs significantly from other Pakistani cities." } },
  { "@type": "Question", name: "How competitive is SEO in Islamabad?", acceptedAnswer: { "@type": "Answer", text: "Islamabad has Pakistan's highest per-capita internet usage and a highly educated, digitally savvy population. Competition is intense in IT services, real estate, education, and healthcare, making professional SEO essential for visibility." } },
  { "@type": "Question", name: "Do you serve Rawalpindi as well?", acceptedAnswer: { "@type": "Answer", text: "Yes. Islamabad and Rawalpindi form a twin-city metro area. Our SEO strategies cover both cities, including area-specific optimization for sectors in Rawalpindi's commercial zones." } },
  { "@type": "Question", name: "What results can Islamabad businesses expect?", acceptedAnswer: { "@type": "Answer", text: "Most Islamabad businesses see measurable ranking improvements within 90-120 days, with significant organic traffic growth by month 6. Results vary based on competition level and current website authority." } },
]};

const SeoAgencyIslamabad = () => (
  <Layout>
    <SeoHead title="SEO Agency Islamabad — Expert SEO Services | Naveed Ganatra" description="Leading SEO agency for Islamabad businesses. Naveed Ganatra SEO Agency delivers data-driven organic growth with 10+ years of proven results across Pakistan." canonical="https://seoexpertinkarachi.com/seo-agency-islamabad" />
    <JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={serviceSchema} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl"><p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">SEO Agency in Islamabad</p><h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Islamabad's Trusted SEO Agency for Sustainable Growth</h1><p className="text-lg text-body mb-8">Naveed Ganatra SEO Agency helps Islamabad businesses achieve dominant organic visibility in Pakistan's capital city. Our strategies are built for the corporate, IT, and government-adjacent sectors that define Islamabad's digital economy.</p><div className="flex flex-col sm:flex-row gap-4"><a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Free SEO Consultation</a><Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link></div></div></div></section>

      <section className="section-padding"><div className="section-container"><h2 className="text-3xl font-bold mb-4">Why Islamabad Businesses Need Expert SEO</h2><p className="text-body max-w-3xl mb-4">Islamabad is Pakistan's most connected city with the highest broadband penetration and per-capita internet usage. The capital's economy is driven by IT companies, government institutions, embassies, corporate headquarters, and a rapidly growing startup ecosystem. Our <Link to="/seo-services" className="text-primary hover:underline">SEO services</Link> are calibrated for this high-intent, educated market.</p><p className="text-body max-w-3xl mb-6">The twin-city dynamic with <Link to="/seo-agency-rawalpindi" className="text-primary hover:underline">Rawalpindi</Link> creates unique search patterns. Our <Link to="/keyword-research" className="text-primary hover:underline">keyword research</Link> captures demand across both cities, while <Link to="/technical-seo" className="text-primary hover:underline">technical SEO</Link> ensures your site meets the expectations of Islamabad's quality-conscious audience.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{[{ v: "1.2M+", l: "Islamabad metro population" }, { v: "#1", l: "Highest internet penetration" }, { v: "280%", l: "Average traffic increase" }, { v: "50+", l: "Islamabad businesses ranked" }].map((s) => (<div key={s.l} className="metric-card text-center"><p className="stat-number text-3xl">{s.v}</p><p className="text-xs text-subtle mt-1">{s.l}</p></div>))}</div></div></section>

      <section className="section-padding surface-sunken"><div className="section-container"><h2 className="text-3xl font-bold mb-4">SEO Services for Islamabad</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{[
        { title: "Technical SEO", desc: "Core Web Vitals optimization, mobile performance, and structured data for Islamabad corporate and IT sector websites.", link: "/technical-seo" },
        { title: "Local SEO", desc: "Google Business Profile optimization and local visibility for Blue Area, F-sectors, G-sectors, and DHA Islamabad.", link: "/local-seo-karachi" },
        { title: "Content Strategy", desc: "Authority-building content for IT, corporate, and professional services sectors that dominate Islamabad's economy.", link: "/content-strategy-seo" },
        { title: "On-Page SEO", desc: "Semantic optimization, entity mapping, and internal linking tailored to Islamabad's high-intent search audience.", link: "/on-page-seo" },
        { title: "Link Building", desc: "Strategic authority building through Pakistani media, tech publications, and industry-specific placements.", link: "/off-page-seo" },
        { title: "SaaS & Startup SEO", desc: "Growth-focused SEO strategies for Islamabad's thriving tech startup ecosystem.", link: "/saas-seo" },
      ].map((s) => (<div key={s.title} className="metric-card"><h3 className="font-semibold text-heading mb-2">{s.title}</h3><p className="text-sm text-body mb-3">{s.desc}</p><Link to={s.link} className="text-sm text-primary hover:underline">Learn more →</Link></div>))}</div></div></section>

      <section className="section-padding"><div className="section-container"><h2 className="text-3xl font-bold mb-4">Islamabad Areas We Optimize For</h2><p className="text-body max-w-3xl mb-10">Each Islamabad sector has distinct commercial characteristics. We use <Link to="/seo-audit" className="text-primary hover:underline">SEO audits</Link> and granular local strategies to match.</p><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{[
        { name: "Blue Area & F-6/F-7", desc: "Islamabad's central business district with corporate offices, banks, and professional service firms." },
        { name: "DHA Islamabad", desc: "Premium residential and commercial zone with high-value businesses and educated consumer base." },
        { name: "I-8 & I-10", desc: "Growing commercial areas with IT companies, retail, and healthcare facilities." },
        { name: "Bahria Town Islamabad", desc: "Large planned community with concentrated demand for local services and retail." },
        { name: "G-Sectors (G-9, G-11)", desc: "Mixed residential-commercial zones with diverse local business competition." },
        { name: "E-11 & Margalla", desc: "Upscale areas near Margalla Hills with premium hospitality and real estate businesses." },
      ].map((n) => (<div key={n.name} className="metric-card"><h3 className="font-semibold text-heading mb-2">{n.name}</h3><p className="text-sm text-body">{n.desc}</p></div>))}</div></div></section>

      <section className="section-padding surface-sunken"><div className="section-container max-w-3xl"><h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>{faqSchema.mainEntity.map((faq) => (<details key={faq.name} className="group border-b py-4"><summary className="cursor-pointer font-medium text-heading flex items-center justify-between">{faq.name}<ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180 text-muted-foreground" /></summary><p className="mt-3 text-body text-sm">{faq.acceptedAnswer.text}</p></details>))}</div></section>

      <CtaBanner heading="Ready to Grow Your Islamabad Business with SEO?" text="Contact Naveed Ganatra SEO Agency for a free consultation and detailed SEO roadmap for your Islamabad business." />
    </main>
  </Layout>
);

export default SeoAgencyIslamabad;
