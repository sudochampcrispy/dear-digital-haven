import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";

const breadcrumb = buildBreadcrumb([{ name: "Home", url: "https://seoexpertinkarachi.com/" }, { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" }, { name: "SEO Agency Rawalpindi", url: "https://seoexpertinkarachi.com/seo-agency-rawalpindi" }]);
const webPage = buildWebPage({ name: "SEO Agency Rawalpindi — Naveed Ganatra SEO Agency", description: "Expert SEO agency serving Rawalpindi businesses with proven organic growth strategies.", url: "https://seoexpertinkarachi.com/seo-agency-rawalpindi" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "SEO Agency Rawalpindi", description: "Professional SEO services for Rawalpindi businesses.", provider: { "@type": "Organization", name: "Naveed Ganatra SEO Agency" }, areaServed: { "@type": "City", name: "Rawalpindi" }, serviceType: "Search Engine Optimization" };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Does your SEO agency serve Rawalpindi?", acceptedAnswer: { "@type": "Answer", text: "Yes. Naveed Ganatra SEO Agency provides full SEO services to Rawalpindi businesses. As part of the Islamabad-Rawalpindi twin-city metro, we understand the unique search dynamics of both cities and optimize accordingly." } },
  { "@type": "Question", name: "What industries in Rawalpindi need SEO?", acceptedAnswer: { "@type": "Answer", text: "Rawalpindi's key industries include retail and wholesale markets (Raja Bazaar, Commercial Market), healthcare clinics, educational institutions, real estate, and military-adjacent services — all benefit significantly from local SEO." } },
  { "@type": "Question", name: "How does Rawalpindi SEO differ from Islamabad SEO?", acceptedAnswer: { "@type": "Answer", text: "Rawalpindi has a more price-conscious, Urdu-dominant search audience compared to Islamabad. Keyword intent, local directory presence, and content strategy must be adapted to match Rawalpindi's commercial culture." } },
  { "@type": "Question", name: "What results can Rawalpindi businesses expect?", acceptedAnswer: { "@type": "Answer", text: "Rawalpindi businesses typically see ranking improvements within 90 days and significant organic traffic growth by month 5-6. Local SEO with Google Business Profile optimization often shows faster results." } },
]};

const SeoAgencyRawalpindi = () => (
  <Layout>
    <SeoHead title="SEO Agency Rawalpindi — Expert SEO Services | Naveed Ganatra" description="Professional SEO agency for Rawalpindi businesses. Data-driven organic growth strategies by Naveed Ganatra SEO Agency with 10+ years of experience." canonical="https://seoexpertinkarachi.com/seo-agency-rawalpindi" />
    <JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={serviceSchema} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl"><p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">SEO Agency in Rawalpindi</p><h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Rawalpindi's Expert SEO Agency for Business Growth</h1><p className="text-lg text-body mb-8">Naveed Ganatra SEO Agency delivers data-driven SEO strategies for Rawalpindi businesses. We understand the twin-city dynamics with Islamabad and build optimization campaigns that capture search demand across both markets.</p><div className="flex flex-col sm:flex-row gap-4"><a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Free SEO Consultation</a><Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link></div></div></div></section>

      <section className="section-padding"><div className="section-container"><h2 className="text-3xl font-bold mb-4">Why Rawalpindi Businesses Need SEO</h2><p className="text-body max-w-3xl mb-4">Rawalpindi is one of Pakistan's largest cities with a population exceeding 3.5 million. Its traditional commercial centers like Raja Bazaar, Saddar, and Commercial Market are increasingly competing with online-first businesses. Our <Link to="/seo-services" className="text-primary hover:underline">SEO services</Link> help Rawalpindi businesses bridge the gap between offline reputation and online visibility.</p><p className="text-body max-w-3xl mb-6">The Rawalpindi-<Link to="/seo-agency-islamabad" className="text-primary hover:underline">Islamabad</Link> metro area creates overlapping search markets. Our <Link to="/local-seo-karachi" className="text-primary hover:underline">local SEO strategies</Link> ensure your business captures customers from both cities while our <Link to="/technical-seo" className="text-primary hover:underline">technical optimization</Link> ensures fast, mobile-friendly experiences.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{[{ v: "3.5M+", l: "Rawalpindi population" }, { v: "Twin City", l: "Islamabad-Rawalpindi metro" }, { v: "250%", l: "Average traffic increase" }, { v: "45+", l: "Rawalpindi clients served" }].map((s) => (<div key={s.l} className="metric-card text-center"><p className="stat-number text-3xl">{s.v}</p><p className="text-xs text-subtle mt-1">{s.l}</p></div>))}</div></div></section>

      <section className="section-padding surface-sunken"><div className="section-container"><h2 className="text-3xl font-bold mb-4">SEO Services for Rawalpindi</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{[
        { title: "Local SEO", desc: "Google Business Profile optimization and local visibility for Raja Bazaar, Saddar, Satellite Town, and Bahria Town.", link: "/local-seo-karachi" },
        { title: "Technical SEO", desc: "Site speed, mobile optimization, and crawlability improvements for Rawalpindi business websites.", link: "/technical-seo" },
        { title: "Content Strategy", desc: "Bilingual content strategies targeting Urdu and English search queries specific to Rawalpindi market.", link: "/content-strategy-seo" },
        { title: "On-Page SEO", desc: "Keyword optimization, meta tags, and internal linking for maximum search visibility.", link: "/on-page-seo" },
        { title: "E-commerce SEO", desc: "Online store optimization for Rawalpindi retailers expanding to digital commerce.", link: "/ecommerce-seo" },
        { title: "Link Building", desc: "Authority building through local directories, Pakistani media, and industry publications.", link: "/off-page-seo" },
      ].map((s) => (<div key={s.title} className="metric-card"><h3 className="font-semibold text-heading mb-2">{s.title}</h3><p className="text-sm text-body mb-3">{s.desc}</p><Link to={s.link} className="text-sm text-primary hover:underline">Learn more →</Link></div>))}</div></div></section>

      <section className="section-padding"><div className="section-container"><h2 className="text-3xl font-bold mb-4">Rawalpindi Areas We Optimize For</h2><p className="text-body max-w-3xl mb-10">Our <Link to="/keyword-research" className="text-primary hover:underline">keyword research</Link> covers all major Rawalpindi commercial zones.</p><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{[
        { name: "Raja Bazaar & Saddar", desc: "Rawalpindi's historic commercial heart with dense retail competition." },
        { name: "Satellite Town", desc: "Major residential-commercial area with healthcare, education, and services." },
        { name: "Bahria Town Rawalpindi", desc: "Planned community with high-value consumers and premium businesses." },
        { name: "Commercial Market", desc: "Established wholesale and retail hub transitioning to digital presence." },
        { name: "Chaklala & Cantt", desc: "Military and commercial zone with unique service provider requirements." },
        { name: "New City & Suburbs", desc: "Growing suburban areas with increasing local search demand." },
      ].map((n) => (<div key={n.name} className="metric-card"><h3 className="font-semibold text-heading mb-2">{n.name}</h3><p className="text-sm text-body">{n.desc}</p></div>))}</div></div></section>

      <section className="section-padding surface-sunken"><div className="section-container max-w-3xl"><h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>{faqSchema.mainEntity.map((faq) => (<details key={faq.name} className="group border-b py-4"><summary className="cursor-pointer font-medium text-heading flex items-center justify-between">{faq.name}<ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180 text-muted-foreground" /></summary><p className="mt-3 text-body text-sm">{faq.acceptedAnswer.text}</p></details>))}</div></section>

      <CtaBanner heading="Ready to Grow Your Rawalpindi Business?" text="Contact Naveed Ganatra SEO Agency for a free SEO consultation tailored to Rawalpindi's competitive market." />
    </main>
  </Layout>
);

export default SeoAgencyRawalpindi;
