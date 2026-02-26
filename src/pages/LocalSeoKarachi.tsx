import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";

const localBreadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "Local SEO Karachi", url: "https://seoexpertinkarachi.com/local-seo-karachi" },
]);

const localWebPage = buildWebPage({
  name: "Local SEO Services in Karachi",
  description: "Dominate local search in Karachi with expert Local SEO services by Naveed Ganatra.",
  url: "https://seoexpertinkarachi.com/local-seo-karachi",
});

const localSeoSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "Person", name: "Naveed Ganatra" },
  areaServed: { "@type": "City", name: "Karachi" },
  serviceType: "Local SEO",
  description:
    "Local SEO services in Karachi by Naveed Ganatra. Google Business Profile optimization, local citations, neighborhood-specific landing pages, and bilingual SEO for Karachi businesses.",
};

const faqData = [
  {
    q: "What is Local SEO and why is it important for Karachi businesses?",
    a: "Local SEO optimizes your online presence for location-based searches like 'near me' queries. In Karachi, where 78% of local searches on mobile lead to store visits within 24 hours, Local SEO helps you capture high-intent customers in your area.",
  },
  {
    q: "How long does it take to rank in Google Maps for Karachi?",
    a: "Google Business Profile optimizations show initial improvements in 2–4 weeks. Competitive map pack rankings typically take 2–4 months depending on your industry and existing local authority.",
  },
  {
    q: "Do I need a physical office to rank in Local SEO?",
    a: "A verified Google Business Profile requires a physical location or service area. For service-area businesses in Karachi, we optimize your profile to show in relevant neighborhoods without displaying your address.",
  },
  {
    q: "How much does Local SEO cost in Karachi?",
    a: "Local SEO packages start at PKR 40,000/month for basic optimization. For multi-location or competitive industries, custom packages are available. Contact us for a free audit and quote.",
  },
  {
    q: "What areas in Karachi do you cover for Local SEO?",
    a: "We optimize for all major Karachi neighborhoods including DHA, Clifton, Gulshan-e-Iqbal, Gulistan-e-Jauhar, North Nazimabad, PECHS, Korangi, S.I.T.E, and Saddar.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const neighborhoods = [
  { name: "DHA & Clifton", desc: "Premium residential and commercial hub with high-value service businesses, restaurants, and clinics competing for local visibility." },
  { name: "Gulshan-e-Iqbal", desc: "One of Karachi's largest residential areas with dense competition in healthcare, education, and retail sectors." },
  { name: "Gulistan-e-Jauhar", desc: "Rapidly growing area with increasing search demand for local services, tutoring centers, and medical professionals." },
  { name: "North Nazimabad & Nazimabad", desc: "Established neighborhoods with a mix of retail, food, and professional services targeting local family audiences." },
  { name: "PECHS & Bahadurabad", desc: "Commercial corridors with strong demand for restaurants, salons, and professional services like law firms and clinics." },
  { name: "Korangi & S.I.T.E", desc: "Industrial zones where manufacturers and B2B businesses need Local SEO to capture sourcing and supply chain queries." },
];

const LocalSeoKarachi = () => (
  <Layout>
    <SeoHead
      title="Local SEO Services Karachi - Google Maps & GBP Optimization"
      description="Dominate local search in Karachi with expert Local SEO services. Google Business Profile optimization, local citations, neighborhood-targeted pages, and bilingual SEO by Naveed Ganatra."
      canonical="https://seoexpertinkarachi.com/local-seo-karachi"
    />
    <JsonLd data={localSeoSchema} />
    <JsonLd data={organizationSchema} />
    <JsonLd data={faqSchema} />
    <JsonLd data={localBreadcrumb} />
    <JsonLd data={localWebPage} />

    <main>
      {/* Hero */}
      <section className="section-padding surface-sunken" aria-label="Local SEO hero">
        <div className="section-container">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Local SEO</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Local SEO Services in Karachi
            </h1>
            <p className="text-lg text-body mb-8">
              Dominate Google Maps, local pack results, and "near me" searches across every Karachi neighborhood. From Google Business Profile optimization to hyperlocal content strategies — built for Karachi's bilingual, mobile-first search ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/923232877850"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Get Free Local SEO Audit
              </a>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local SEO */}
      <section className="section-padding" aria-label="Why Local SEO matters">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Why Local SEO Matters in Karachi</h2>
          <p className="text-body max-w-3xl mb-6">
            Karachi is Pakistan's largest city with over 16 million residents and a rapidly growing digital economy. 46% of all Google searches have local intent, and 78% of local mobile searches result in an offline purchase within 24 hours. If your business isn't optimized for local search, you're losing customers to competitors who are.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">46%</p>
              <p className="text-xs text-subtle mt-1">Google searches have local intent</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">78%</p>
              <p className="text-xs text-subtle mt-1">Local mobile searches lead to store visits</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">16M+</p>
              <p className="text-xs text-subtle mt-1">Karachi population searching locally</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">3x</p>
              <p className="text-xs text-subtle mt-1">Growth in "near me" searches in Pakistan</p>
            </div>
          </div>
        </div>
      </section>

      {/* GBP Optimization */}
      <section className="section-padding surface-sunken" aria-label="Google Business Profile optimization">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">Google Business Profile Optimization</h2>
              <p className="text-body mb-6">
                Your Google Business Profile is the single most important ranking factor for local pack results. We optimize every element — from categories and attributes to weekly posts and Q&A — to maximize your visibility in Google Maps and local search results across Karachi.
              </p>
            </div>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-body"><span className="text-primary font-bold">→</span> Complete GBP setup with optimized business description and categories</li>
              <li className="flex gap-3 text-sm text-body"><span className="text-primary font-bold">→</span> Weekly Google Posts with local Karachi content and CTAs</li>
              <li className="flex gap-3 text-sm text-body"><span className="text-primary font-bold">→</span> Q&A seeding with high-intent local queries</li>
              <li className="flex gap-3 text-sm text-body"><span className="text-primary font-bold">→</span> Photo optimization with geo-tagged images</li>
              <li className="flex gap-3 text-sm text-body"><span className="text-primary font-bold">→</span> Review generation strategy and response templates</li>
              <li className="flex gap-3 text-sm text-body"><span className="text-primary font-bold">→</span> Service and product catalog setup for rich local results</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Local Citations */}
      <section className="section-padding" aria-label="Local citation building">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">Local Citation & NAP Consistency</h2>
              <p className="text-body mb-6">
                Consistent Name, Address, and Phone (NAP) data across the web reinforces your local authority. We build and audit citations across 75+ Pakistani directories and industry-specific platforms to strengthen your local search signals.
              </p>
            </div>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-body"><span className="text-primary font-bold">→</span> NAP audit and cleanup across all existing listings</li>
              <li className="flex gap-3 text-sm text-body"><span className="text-primary font-bold">→</span> Submissions to 75+ Pakistani business directories</li>
              <li className="flex gap-3 text-sm text-body"><span className="text-primary font-bold">→</span> Industry-specific directory listings (healthcare, legal, restaurants)</li>
              <li className="flex gap-3 text-sm text-body"><span className="text-primary font-bold">→</span> Duplicate listing removal and suppression</li>
              <li className="flex gap-3 text-sm text-body"><span className="text-primary font-bold">→</span> Structured citations with schema markup integration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Neighborhood Targeting */}
      <section className="section-padding surface-sunken" aria-label="Neighborhood targeting">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Hyperlocal SEO for Karachi Neighborhoods</h2>
          <p className="text-body max-w-3xl mb-10">
            Generic "Karachi" targeting isn't enough. We create neighborhood-specific landing pages and content strategies that capture hyperlocal searches for every area your business serves.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.map((n) => (
              <div key={n.name} className="metric-card">
                <h3 className="font-semibold text-heading mb-2">{n.name}</h3>
                <p className="text-sm text-body">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bilingual SEO */}
      <section className="section-padding" aria-label="Bilingual SEO">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">Bilingual SEO: Urdu & English</h2>
              <p className="text-body mb-6">
                Karachi's search landscape is uniquely bilingual. A significant portion of local searches happen in Urdu or Roman Urdu. Our Local SEO strategy covers both languages to maximize your reach across Karachi's diverse search behavior.
              </p>
            </div>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-body"><span className="text-primary font-bold">→</span> Urdu keyword research targeting Roman Urdu search patterns</li>
              <li className="flex gap-3 text-sm text-body"><span className="text-primary font-bold">→</span> Bilingual GBP posts and descriptions</li>
              <li className="flex gap-3 text-sm text-body"><span className="text-primary font-bold">→</span> Content localization for Karachi-specific terminology</li>
              <li className="flex gap-3 text-sm text-body"><span className="text-primary font-bold">→</span> hreflang implementation for multilingual pages</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Review Management */}
      <section className="section-padding surface-sunken" aria-label="Review management">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">Review Management & Reputation</h2>
              <p className="text-body mb-6">
                Reviews are a top-3 local ranking factor. We implement systematic review generation strategies and reputation management workflows to build trust signals that boost your local visibility.
              </p>
            </div>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-body"><span className="text-primary font-bold">→</span> Automated review request workflows via WhatsApp and email</li>
              <li className="flex gap-3 text-sm text-body"><span className="text-primary font-bold">→</span> Response templates for positive and negative reviews</li>
              <li className="flex gap-3 text-sm text-body"><span className="text-primary font-bold">→</span> Review monitoring across Google, Facebook, and industry platforms</li>
              <li className="flex gap-3 text-sm text-body"><span className="text-primary font-bold">→</span> Reputation score tracking and improvement benchmarks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" aria-label="Frequently asked questions">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-10">Local SEO FAQs</h2>
          <div className="max-w-4xl space-y-6">
            {faqData.map((f) => (
              <details key={f.q} className="group metric-card">
                <summary className="cursor-pointer font-semibold text-heading list-none flex items-center justify-between">
                  {f.q}
                  <span className="ml-4 text-primary text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-body">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal linking */}
      <aside className="section-padding surface-sunken" aria-label="Related pages">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold mb-4">Explore More Services</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/seo-services" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
              All SEO Services
            </Link>
            <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
              View Case Studies
            </Link>
          </div>
        </div>
      </aside>

      <CtaBanner heading="Ready to Dominate Local Search in Karachi?" text="Get a free Local SEO audit and start capturing high-intent customers in your area." />
    </main>
  </Layout>
);

export default LocalSeoKarachi;
