import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "SEO Agency Karachi", url: "https://seoexpertinkarachi.com/seo-agency-karachi" },
]);
const webPage = buildWebPage({ name: "SEO Agency Karachi — Naveed Ganatra SEO Agency", description: "Leading SEO agency in Karachi providing data-driven organic growth strategies for businesses of all sizes.", url: "https://seoexpertinkarachi.com/seo-agency-karachi" });

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Agency Karachi",
  description: "Full-service SEO agency in Karachi delivering technical optimization, content strategy, and link building for measurable organic growth.",
  provider: { "@type": "Organization", name: "Naveed Ganatra SEO Agency" },
  areaServed: { "@type": "City", name: "Karachi", containedInPlace: { "@type": "Country", name: "Pakistan" } },
  serviceType: "Search Engine Optimization",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Why choose Naveed Ganatra SEO Agency in Karachi?", acceptedAnswer: { "@type": "Answer", text: "With over 10 years of hands-on SEO experience in Karachi, our agency combines deep local market knowledge with proven technical expertise. We have helped 200+ Karachi businesses achieve first-page rankings and measurable revenue growth." } },
    { "@type": "Question", name: "How long does SEO take to show results in Karachi?", acceptedAnswer: { "@type": "Answer", text: "Most Karachi businesses see measurable ranking improvements within 90-120 days. Competitive industries like real estate, healthcare, and e-commerce may take 4-6 months for significant organic traffic gains." } },
    { "@type": "Question", name: "What SEO services does your Karachi agency provide?", acceptedAnswer: { "@type": "Answer", text: "Our Karachi SEO agency provides technical SEO audits, on-page optimization, content strategy, link building, local SEO with Google Business Profile optimization, e-commerce SEO, and AI search optimization." } },
    { "@type": "Question", name: "How much does SEO cost in Karachi?", acceptedAnswer: { "@type": "Answer", text: "SEO investment in Karachi ranges from PKR 50,000 to PKR 300,000+ per month depending on competition level, number of target keywords, and scope of services. We provide custom quotes based on your specific business goals." } },
  ],
};

const SeoAgencyKarachi = () => (
  <Layout>
    <SeoHead title="SEO Agency Karachi — #1 Ranked SEO Services | Naveed Ganatra" description="Karachi's leading SEO agency with 10+ years of experience. Naveed Ganatra SEO Agency delivers measurable organic growth through technical SEO, content strategy, and link building." canonical="https://seoexpertinkarachi.com/seo-agency-karachi" />
    <JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={serviceSchema} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl"><p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">SEO Agency in Karachi</p><h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Karachi's Most Results-Driven SEO Agency</h1><p className="text-lg text-body mb-8">Naveed Ganatra SEO Agency helps Karachi businesses dominate organic search with proven strategies built on 10+ years of local market expertise and 200+ successful campaigns.</p><div className="flex flex-col sm:flex-row gap-4"><a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Free SEO Consultation</a><Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Our Results</Link></div></div></div></section>

      <section className="section-padding"><div className="section-container"><h2 className="text-3xl font-bold mb-4">Why Karachi Businesses Need a Specialized SEO Agency</h2><p className="text-body max-w-3xl mb-4">Karachi is Pakistan's economic engine with over 16 million residents and the highest concentration of digital consumers in the country. With thousands of businesses competing for visibility across DHA, Gulshan-e-Iqbal, Clifton, PECHS, and North Nazimabad, organic search has become the most cost-effective customer acquisition channel. Our <Link to="/seo-services" className="text-primary hover:underline">SEO services</Link> are specifically designed for the competitive Karachi market.</p><p className="text-body max-w-3xl mb-6">As a full-service SEO agency, we combine <Link to="/technical-seo" className="text-primary hover:underline">technical SEO</Link>, <Link to="/content-strategy-seo" className="text-primary hover:underline">content strategy</Link>, and <Link to="/off-page-seo" className="text-primary hover:underline">link building</Link> into unified campaigns that deliver compounding returns.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{[{ v: "200+", l: "Karachi businesses ranked" }, { v: "10+", l: "Years of SEO experience" }, { v: "350%", l: "Average traffic increase" }, { v: "16M+", l: "Karachi population online" }].map((s) => (<div key={s.l} className="metric-card text-center"><p className="stat-number text-3xl">{s.v}</p><p className="text-xs text-subtle mt-1">{s.l}</p></div>))}</div></div></section>

      <section className="section-padding surface-sunken"><div className="section-container"><h2 className="text-3xl font-bold mb-4">Complete SEO Services for Karachi Businesses</h2><p className="text-body max-w-3xl mb-10">Our agency delivers end-to-end SEO solutions tailored to Karachi's competitive digital landscape.</p><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{[
        { title: "Technical SEO Audits", desc: "Complete crawlability, indexation, Core Web Vitals, and site architecture analysis for Karachi business websites.", link: "/technical-seo" },
        { title: "Local SEO & GBP", desc: "Google Business Profile optimization and neighborhood-specific strategies across all Karachi areas.", link: "/local-seo-karachi" },
        { title: "On-Page SEO", desc: "Entity-based content optimization, semantic markup, and internal linking architecture.", link: "/on-page-seo" },
        { title: "Content Strategy", desc: "Topical authority building through comprehensive content clusters and long-form guides.", link: "/content-strategy-seo" },
        { title: "Link Building", desc: "White-hat link acquisition from relevant Pakistani and international publications.", link: "/off-page-seo" },
        { title: "E-commerce SEO", desc: "Product page optimization and structured data for Karachi-based online stores.", link: "/ecommerce-seo-karachi" },
      ].map((s) => (<div key={s.title} className="metric-card"><h3 className="font-semibold text-heading mb-2">{s.title}</h3><p className="text-sm text-body mb-3">{s.desc}</p><Link to={s.link} className="text-sm text-primary hover:underline">Learn more →</Link></div>))}</div></div></section>

      <section className="section-padding"><div className="section-container"><h2 className="text-3xl font-bold mb-4">Industries We Serve in Karachi</h2><p className="text-body max-w-3xl mb-6">Our SEO agency has deep experience across Karachi's most competitive industries. Whether you're a <Link to="/law-firm-seo" className="text-primary hover:underline">law firm in Clifton</Link>, a <Link to="/dental-seo" className="text-primary hover:underline">dental clinic in DHA</Link>, or a <Link to="/restaurant-seo" className="text-primary hover:underline">restaurant chain</Link> expanding across the city, we build industry-specific strategies.</p><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{["Real Estate Agencies", "Healthcare & Clinics", "Legal Practices", "Restaurants & Food", "E-commerce Stores", "Manufacturing & Export", "Education & Training", "Professional Services"].map((ind) => (<div key={ind} className="metric-card text-center py-4"><p className="text-sm font-medium text-heading">{ind}</p></div>))}</div></div></section>

      <section className="section-padding surface-sunken"><div className="section-container"><h2 className="text-3xl font-bold mb-4">Hyperlocal SEO Across Karachi</h2><p className="text-body max-w-3xl mb-10">We create neighborhood-specific strategies. Our <Link to="/keyword-research" className="text-primary hover:underline">keyword research</Link> maps search intent at the locality level.</p><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{[
        { name: "DHA & Clifton", desc: "Premium service businesses competing for high-value local visibility." },
        { name: "Gulshan-e-Iqbal", desc: "Dense competition in healthcare, education, and retail." },
        { name: "PECHS & Bahadurabad", desc: "Strong demand for restaurants, salons, and professional services." },
        { name: "North Nazimabad", desc: "Established area with growing online search adoption." },
        { name: "Korangi & S.I.T.E", desc: "Industrial zones where B2B businesses need targeted SEO." },
        { name: "Gulistan-e-Jauhar", desc: "Rapidly growing population with increasing local search demand." },
      ].map((n) => (<div key={n.name} className="metric-card"><h3 className="font-semibold text-heading mb-2">{n.name}</h3><p className="text-sm text-body">{n.desc}</p></div>))}</div></div></section>

      <section className="section-padding"><div className="section-container"><h2 className="text-3xl font-bold mb-4">Our Proven SEO Process</h2><p className="text-body max-w-3xl mb-10">Every campaign starts with a comprehensive <Link to="/seo-audit" className="text-primary hover:underline">SEO audit</Link>.</p><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{[
        { step: "01", title: "Discovery & Audit", desc: "Complete technical audit, competitor analysis, and keyword opportunity mapping." },
        { step: "02", title: "Strategy Design", desc: "Custom SEO roadmap with prioritized actions and measurable KPIs." },
        { step: "03", title: "Implementation", desc: "On-page optimization, content creation, technical fixes, and link building." },
        { step: "04", title: "Monitor & Scale", desc: "Monthly reporting, ranking tracking, and continuous optimization." },
      ].map((p) => (<div key={p.step} className="metric-card"><p className="text-2xl font-bold text-primary mb-2">{p.step}</p><h3 className="font-semibold text-heading mb-2">{p.title}</h3><p className="text-sm text-body">{p.desc}</p></div>))}</div></div></section>

      <section className="section-padding surface-sunken"><div className="section-container max-w-3xl"><h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>{faqSchema.mainEntity.map((faq) => (<details key={faq.name} className="group border-b py-4"><summary className="cursor-pointer font-medium text-heading flex items-center justify-between">{faq.name}<ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180 text-muted-foreground" /></summary><p className="mt-3 text-body text-sm">{faq.acceptedAnswer.text}</p></details>))}</div></section>

      <CtaBanner heading="Ready to Grow Your Karachi Business with SEO?" text="Get a free SEO consultation from Naveed Ganatra SEO Agency." />
    </main>
  </Layout>
);

export default SeoAgencyKarachi;
