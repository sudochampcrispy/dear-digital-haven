import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";

const breadcrumb = buildBreadcrumb([{ name: "Home", url: "https://seoexpertinkarachi.com/" }, { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" }, { name: "SEO Agency Peshawar", url: "https://seoexpertinkarachi.com/seo-agency-peshawar" }]);
const webPage = buildWebPage({ name: "SEO Agency Peshawar — Naveed Ganatra SEO Agency", description: "Expert SEO services for Peshawar businesses — the historic gateway of KPK.", url: "https://seoexpertinkarachi.com/seo-agency-peshawar" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "SEO Agency Peshawar", description: "Professional SEO services for Peshawar businesses.", provider: { "@type": "Organization", name: "Naveed Ganatra SEO Agency" }, areaServed: { "@type": "City", name: "Peshawar" }, serviceType: "Search Engine Optimization" };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Why do Peshawar businesses need SEO?", acceptedAnswer: { "@type": "Answer", text: "Peshawar is KPK's largest city and economic hub with 2+ million residents. The growing digital consumer base, combined with traditional trading heritage, creates a unique opportunity for businesses that invest in organic search visibility." } },
  { "@type": "Question", name: "What industries benefit from SEO in Peshawar?", acceptedAnswer: { "@type": "Answer", text: "Peshawar's key industries for SEO include gemstone and marble traders, dry fruit exporters, healthcare providers, educational institutions, real estate developers, hospitality businesses, and traditional craftsmen." } },
  { "@type": "Question", name: "How competitive is SEO in Peshawar?", acceptedAnswer: { "@type": "Answer", text: "Peshawar's digital market is still developing, creating significant first-mover advantages for businesses that invest in SEO now. Competition is lower than Karachi, Lahore, and Islamabad." } },
  { "@type": "Question", name: "Can you handle Pashto and Urdu SEO for Peshawar?", acceptedAnswer: { "@type": "Answer", text: "Yes. Our multilingual content strategies target both Urdu and Pashto search queries relevant to Peshawar's market. We also optimize for English keywords for export-oriented businesses." } },
]};

const SeoAgencyPeshawar = () => (
  <Layout>
    <SeoHead title="SEO Agency Peshawar — Expert SEO Services | Naveed Ganatra" description="Leading SEO agency for Peshawar businesses. Naveed Ganatra SEO Agency delivers proven organic growth strategies for KPK's capital city." canonical="https://seoexpertinkarachi.com/seo-agency-peshawar" />
    <JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={serviceSchema} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl"><p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">SEO Agency in Peshawar</p><h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Peshawar's Expert SEO Agency for Business Growth</h1><p className="text-lg text-body mb-8">Naveed Ganatra SEO Agency helps Peshawar businesses leverage organic search to reach customers across KPK and beyond. Our strategies combine modern SEO techniques with deep understanding of Peshawar's unique commercial landscape and cultural dynamics.</p><div className="flex flex-col sm:flex-row gap-4"><a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Free SEO Consultation</a><Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link></div></div></div></section>

      <section className="section-padding"><div className="section-container"><h2 className="text-3xl font-bold mb-4">Why Peshawar Businesses Need Professional SEO</h2><p className="text-body max-w-3xl mb-4">Peshawar is one of the world's oldest living cities and KPK's economic capital with over 2 million residents. The city's economy spans gemstone trading, dry fruit exports, marble processing, healthcare, education, and a growing IT sector. As digital adoption accelerates across KPK, our <Link to="/seo-services" className="text-primary hover:underline">SEO services</Link> help Peshawar businesses capture this online demand.</p><p className="text-body max-w-3xl mb-6">For export businesses, our <Link to="/international-seo" className="text-primary hover:underline">international SEO</Link> connects Peshawar traders with global buyers. For local services, <Link to="/local-seo-karachi" className="text-primary hover:underline">local SEO</Link> ensures visibility in Google Maps and "near me" searches. Our <Link to="/content-strategy-seo" className="text-primary hover:underline">content strategies</Link> are adapted for Peshawar's multilingual search environment.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{[{ v: "2M+", l: "Peshawar population" }, { v: "KPK", l: "Provincial capital" }, { v: "Emerging", l: "Digital market" }, { v: "Multi-lingual", l: "Pashto, Urdu, English" }].map((s) => (<div key={s.l} className="metric-card text-center"><p className="stat-number text-3xl">{s.v}</p><p className="text-xs text-subtle mt-1">{s.l}</p></div>))}</div></div></section>

      <section className="section-padding surface-sunken"><div className="section-container"><h2 className="text-3xl font-bold mb-4">SEO Services for Peshawar</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{[
        { title: "Local SEO", desc: "Google Business Profile optimization and local visibility for Saddar, University Road, Hayatabad, and GT Road businesses.", link: "/local-seo-karachi" },
        { title: "Export & Trade SEO", desc: "International visibility for Peshawar's gemstone, dry fruit, and marble export businesses.", link: "/international-seo" },
        { title: "Technical SEO", desc: "Website speed, mobile optimization, and crawlability for Peshawar business websites.", link: "/technical-seo" },
        { title: "Content Strategy", desc: "Multilingual content targeting Pashto, Urdu, and English search queries in the KPK market.", link: "/content-strategy-seo" },
        { title: "On-Page SEO", desc: "Keyword optimization, semantic markup, and internal linking for maximum visibility.", link: "/on-page-seo" },
        { title: "E-commerce SEO", desc: "Online store optimization for Peshawar retailers and traders expanding to digital channels.", link: "/ecommerce-seo" },
      ].map((s) => (<div key={s.title} className="metric-card"><h3 className="font-semibold text-heading mb-2">{s.title}</h3><p className="text-sm text-body mb-3">{s.desc}</p><Link to={s.link} className="text-sm text-primary hover:underline">Learn more →</Link></div>))}</div></div></section>

      <section className="section-padding"><div className="section-container"><h2 className="text-3xl font-bold mb-4">Peshawar Areas We Optimize For</h2><p className="text-body max-w-3xl mb-10">Our <Link to="/keyword-research" className="text-primary hover:underline">keyword research</Link> covers all major Peshawar commercial zones and surrounding areas.</p><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{[
        { name: "Saddar & Qissa Khwani", desc: "Historic commercial center with diverse retail and wholesale businesses." },
        { name: "Hayatabad", desc: "Modern planned township with healthcare, education, and professional services." },
        { name: "University Road & Town", desc: "Educational corridor with institutions and student-focused businesses." },
        { name: "GT Road & Cantt", desc: "Major commercial corridor connecting to Islamabad with diverse businesses." },
        { name: "Dalazak Road", desc: "Growing commercial area with retail and service businesses." },
        { name: "Ring Road & Suburbs", desc: "Developing areas with new housing societies and emerging business opportunities." },
      ].map((n) => (<div key={n.name} className="metric-card"><h3 className="font-semibold text-heading mb-2">{n.name}</h3><p className="text-sm text-body">{n.desc}</p></div>))}</div></div></section>

      <section className="section-padding surface-sunken"><div className="section-container max-w-3xl"><h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>{faqSchema.mainEntity.map((faq) => (<details key={faq.name} className="group border-b py-4"><summary className="cursor-pointer font-medium text-heading flex items-center justify-between">{faq.name}<ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180 text-muted-foreground" /></summary><p className="mt-3 text-body text-sm">{faq.acceptedAnswer.text}</p></details>))}</div></section>

      <CtaBanner heading="Ready to Grow Your Peshawar Business with SEO?" text="Contact Naveed Ganatra SEO Agency for a free consultation tailored to Peshawar and KPK's market." />
    </main>
  </Layout>
);

export default SeoAgencyPeshawar;
