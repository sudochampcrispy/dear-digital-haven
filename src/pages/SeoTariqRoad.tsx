import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import LeadGenForm from "@/components/LeadGenForm";
import { CheckCircle2, MapPin, ArrowRight } from "lucide-react";
const BASE = "https://seoexpertinkarachi.com";
const SLUG = "/tariq-road";
const TITLE = "SEO Expert for Tariq Road Businesses, Karachi — Naveed Ganatra";
const DESC = "Looking for an SEO expert for your Tariq Road business in Karachi? Naveed Ganatra helps retail shops, fashion stores, and jewellery businesses on Tariq Road rank higher on Google and attract more shoppers.";
const breadcrumb = buildBreadcrumb([{ name: "Home", url: BASE + "/" }, { name: "Local SEO Karachi", url: BASE + "/local-seo-karachi" }, { name: "Tariq Road", url: BASE + SLUG }]);
const webPage = buildWebPage({ name: TITLE, description: DESC, url: BASE + SLUG });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: { "@type": "Place", name: "Tariq Road, Karachi", containedInPlace: { "@type": "City", name: "Karachi" } }, serviceType: "Search Engine Optimization", description: DESC };
const faqData = [
  { q: "Why does a Tariq Road shop need SEO?", a: "Shoppers from all over Karachi search Google before visiting Tariq Road — comparing shops, checking reviews, and looking for specific products. If your shop doesn't show up in these searches, customers walk into your competitor's store instead." },
  { q: "What kind of searches do Tariq Road shoppers make?", a: "Product-specific searches like 'bridal lehenga Tariq Road,' 'men's shoes Tariq Road Karachi,' 'gold jewellery Tariq Road,' and 'best fabric shop Tariq Road.' These are high-intent shoppers ready to buy." },
  { q: "Can SEO really help a traditional retail shop?", a: "Absolutely. Even traditional shops benefit because modern shoppers research online before visiting. A Google Business Profile with photos, reviews, and accurate info means customers choose your shop before they leave home." },
  { q: "How long until I see more customers?", a: "Google Business Profile improvements can bring results within weeks. Ranking for competitive product keywords takes 3–5 months. Monthly reports track everything." },
  { q: "What does it cost?", a: "Tariq Road retail campaigns range from PKR 25,000–90,000/month. Free initial audit available." },
];
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
const SeoTariqRoad = () => (
  <Layout>
    <SeoHead title={TITLE} description={DESC} canonical={BASE + SLUG} />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken" aria-label="Hero"><div className="section-container"><div className="grid lg:grid-cols-2 gap-10 items-start"><div>
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">SEO Expert · Tariq Road, Karachi</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">SEO Expert for Tariq Road, Karachi</h1>
        <p className="text-lg text-body mb-4">Tariq Road is one of Pakistan's busiest shopping streets — hundreds of retail stores selling clothing, jewellery, shoes, fabrics, and electronics, drawing shoppers from across Karachi. But here's what most shop owners don't realize: today's customers search Google before they visit. They compare shops, read reviews, and decide where to go before they leave home.</p>
        <p className="text-base text-body mb-4">I help Tariq Road businesses show up on Google when shoppers are searching for exactly what you sell. "Bridal lehenga Tariq Road," "best shoe shop Tariq Road Karachi," "gold jewellery Tariq Road" — these are real searches with real buying intent. I make sure your shop is the answer.</p>
        <p className="text-base text-body mb-8">From Google Business Profile optimization with product photos and reviews, to content pages targeting specific product searches — everything I do is focused on bringing more shoppers to your store.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Get a Free SEO Audit <ArrowRight className="h-4 w-4" /></a>
          <Link to="/case-studies" className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">View Case Studies</Link>
        </div></div><LeadGenForm /></div></div></section>

      <section className="section-padding" aria-label="Why Tariq Road needs SEO"><div className="section-container"><div className="text-center max-w-4xl mx-auto mb-10">
        <h2 className="text-3xl font-bold mb-4">Why Tariq Road Shops Need Google Visibility</h2>
        <p className="text-body">Tariq Road draws shoppers from DHA, Clifton, Gulshan, and beyond — but those shoppers decide which shop to visit based on Google results. The stores with strong Google presence, good reviews, and product photos get the foot traffic. The rest rely on luck.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="metric-card text-center"><p className="stat-number text-3xl">City-Wide</p><p className="text-xs text-subtle mt-1">Shoppers from all Karachi</p></div>
        <div className="metric-card text-center"><p className="stat-number text-3xl">High</p><p className="text-xs text-subtle mt-1">Product search volume</p></div>
        <div className="metric-card text-center"><p className="stat-number text-3xl">Strong</p><p className="text-xs text-subtle mt-1">Purchase intent in searches</p></div>
        <div className="metric-card text-center"><p className="stat-number text-3xl">Low</p><p className="text-xs text-subtle mt-1">Shops with proper SEO</p></div>
      </div></div></section>

      <section className="section-padding surface-sunken" aria-label="What you get"><div className="section-container"><div className="text-center max-w-4xl mx-auto mb-10">
        <h2 className="text-3xl font-bold mb-4">What You Get When You Work With Me</h2>
        <p className="text-body">Every campaign is focused on bringing more shoppers from Google to your Tariq Road store.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {["Product-focused keyword research — what shoppers search before visiting Tariq Road", "Google Business Profile with product photos, hours, and regular posts", "Content pages targeting specific products and categories you sell", "A strategy to get genuine Google reviews from happy customers", "Listings on shopping directories and local business platforms", "Technical improvements for mobile speed — most shoppers search on phones", "Competitor analysis — what other Tariq Road shops are doing on Google", "Monthly reports showing search visibility and customer engagement"].map((item) => (
          <div key={item} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /><p className="text-sm text-body">{item}</p></div>
        ))}
      </div></div></section>

      <section className="section-padding" aria-label="Industries"><div className="section-container"><div className="text-center max-w-4xl mx-auto mb-10">
        <h2 className="text-3xl font-bold mb-4">Tariq Road Businesses I Can Help</h2>
        <p className="text-body">Tariq Road's retail diversity is its strength. Here's how SEO can bring more shoppers to different types of stores.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {[
          { title: "Bridal & Fashion Stores", desc: "Bridal shopping on Tariq Road is a Karachi tradition. Ranking for 'bridal lehenga Tariq Road' or 'designer suits PECHS' brings brides-to-be directly to your store." },
          { title: "Jewellery Shops", desc: "Gold and jewellery purchases start with online research. Being visible for 'gold jewellery Tariq Road' means customers come to you with buying intent." },
          { title: "Shoe & Footwear Stores", desc: "Tariq Road is known for shoes. Ranking for 'best shoe shop Tariq Road' brings shoppers who are ready to buy." },
          { title: "Fabric & Textile Shops", desc: "Fabric shoppers compare options online before visiting. Product photos and Google reviews help them choose your shop." },
          { title: "Electronics & Mobile", desc: "Price-conscious electronics buyers search and compare online. Being visible with accurate pricing builds trust before the visit." },
          { title: "Restaurants & Cafés", desc: "Tariq Road shoppers need to eat. Ranking for 'restaurant Tariq Road' captures hungry shoppers taking a break." },
        ].map((ind) => (
          <div key={ind.title} className="metric-card"><h3 className="font-semibold text-heading mb-2">{ind.title}</h3><p className="text-sm text-body">{ind.desc}</p></div>
        ))}
      </div>
      <div className="text-center"><p className="text-sm font-semibold text-heading mb-4">Also Serving</p><div className="flex flex-wrap justify-center gap-2">
        {["Cosmetics & Beauty Shops", "Tailors & Alteration", "Handbag & Accessories", "Kids Clothing", "Optical Shops", "Watch Stores", "Perfume Shops", "Home Décor", "Gift Shops", "Stationery"].map((name) => (
          <span key={name} className="inline-flex items-center rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-heading">{name}</span>
        ))}
      </div></div></div></section>

      <section className="section-padding surface-sunken" aria-label="FAQs"><div className="section-container">
        <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqData.map((f) => (<details key={f.q} className="group metric-card"><summary className="cursor-pointer font-semibold text-heading list-none flex items-center justify-between">{f.q}<span className="ml-4 text-primary text-xl group-open:rotate-45 transition-transform">+</span></summary><p className="mt-3 text-sm text-body">{f.a}</p></details>))}
        </div>
      </div></section>

      <aside className="section-padding" aria-label="Nearby areas"><div className="section-container text-center">
        <h2 className="text-2xl font-bold mb-4">Also Serving Nearby Areas</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {[{ name: "PECHS", link: "/pechs" }, { name: "Bahadurabad", link: "/bahadurabad" }, { name: "Saddar", link: "/saddar" }, { name: "Clifton", link: "/clifton" }].map((a) => (
            <Link key={a.name} to={a.link} className="inline-flex items-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-heading hover:text-primary transition-colors"><MapPin className="h-3.5 w-3.5 text-primary mr-2" /> SEO Expert in {a.name}</Link>
          ))}
        </div>
      </div></aside>
      <CtaBanner heading="Want More Shoppers From Google?" text="Get a free SEO audit for your Tariq Road business. I'll show you exactly how to bring more customers from Google to your store." />
    </main>
  </Layout>
);
export default SeoTariqRoad;
