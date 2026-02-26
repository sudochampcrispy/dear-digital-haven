import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import LeadGenForm from "@/components/LeadGenForm";
import { CheckCircle2, MapPin, ArrowRight } from "lucide-react";

const BASE = "https://seoexpertinkarachi.com";
const SLUG = "/pechs";
const TITLE = "SEO Expert in PECHS, Karachi — Naveed Ganatra";
const DESC =
  "Hire an SEO expert in PECHS (Pakistan Employees Cooperative Housing Society), Karachi. Naveed Ganatra provides hyperlocal SEO for businesses on Tariq Road, Shahrah-e-Quaideen, and PECHS Block 1–6 — driving qualified local traffic and top Google rankings.";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: BASE + "/" },
  { name: "Local SEO Karachi", url: BASE + "/local-seo-karachi" },
  { name: "PECHS", url: BASE + SLUG },
]);

const webPage = buildWebPage({ name: TITLE, description: DESC, url: BASE + SLUG });

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "Person", name: "Naveed Ganatra" },
  areaServed: {
    "@type": "Place",
    name: "PECHS, Karachi",
    containedInPlace: { "@type": "City", name: "Karachi" },
  },
  serviceType: "Search Engine Optimization",
  description: DESC,
};

const faqData = [
  {
    q: "What makes PECHS a strong market for local SEO?",
    a: "PECHS sits at the geographic heart of Karachi, connecting Clifton, Gulshan, and Saddar. Its central location and established commercial infrastructure — especially along Tariq Road and Shahrah-e-Quaideen — generate high search volume for shopping, dining, healthcare, and professional services. Businesses here capture traffic from multiple surrounding neighbourhoods.",
  },
  {
    q: "Which PECHS blocks and roads do you optimize for?",
    a: "I cover all six PECHS blocks plus the major commercial arteries: Tariq Road, Shahrah-e-Quaideen, Main PECHS Boulevard, Khalid Bin Waleed Road, and the commercial lanes in Block 2 and Block 6. Each zone has unique search patterns that require tailored keyword strategies.",
  },
  {
    q: "How do you handle Tariq Road's competitive search landscape?",
    a: "Tariq Road is one of Karachi's busiest shopping streets with hundreds of retail stores competing for visibility. My approach combines product-category landing pages, Google Shopping-optimized content, aggressive GBP posting schedules, and structured data for retail to differentiate your store from competitors.",
  },
  {
    q: "Can you help law firms and corporate offices in PECHS with SEO?",
    a: "Absolutely. PECHS hosts a high concentration of law firms, chartered accountancy practices, and corporate offices. I implement ProfessionalService schema, practice-area landing pages, and authority-building content strategies specifically designed for professional service providers in PECHS.",
  },
  {
    q: "What's the typical timeline for PECHS SEO results?",
    a: "Long-tail hyperlocal queries like 'tailor PECHS Block 2 Karachi' can rank within 4–6 weeks. Competitive commercial terms like 'best shopping Tariq Road' typically take 3–5 months. All campaigns include monthly reporting with PECHS-specific keyword tracking.",
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

const SeoPechs = () => (
  <Layout>
    <SeoHead title={TITLE} description={DESC} canonical={BASE + SLUG} />
    <JsonLd data={serviceSchema} />
    <JsonLd data={organizationSchema} />
    <JsonLd data={breadcrumb} />
    <JsonLd data={webPage} />
    <JsonLd data={faqSchema} />

    <main>
      {/* Hero */}
      <section className="section-padding surface-sunken" aria-label="Hero">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">
                Hyperlocal SEO · PECHS, Karachi
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                SEO Expert in PECHS, Karachi
              </h1>
              <p className="text-lg text-body mb-4">
                PECHS is Karachi's central commercial powerhouse — home to Tariq Road (one of Pakistan's busiest shopping streets), a dense concentration of law firms and corporate offices, and a thriving healthcare sector. The area's geographic centrality means businesses here draw customers from Clifton, Gulshan, Saddar, and beyond.
              </p>
              <p className="text-base text-body mb-4">
                But centrality also means competition. Hundreds of businesses across six PECHS blocks compete for the same Google real estate. My hyperlocal SEO strategy targets the specific roads, blocks, and landmarks that PECHS searchers reference — "shoes Tariq Road Karachi," "dentist PECHS Block 2," "lawyer near Shahrah-e-Quaideen." This precision targeting captures the high-intent queries that generic city-level campaigns completely miss.
              </p>
              <p className="text-base text-body mb-8">
                From entity-based content architecture to local citation building and Core Web Vitals optimization — I deliver sustainable organic growth for PECHS businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                  Get Free PECHS SEO Audit <ArrowRight className="h-4 w-4" />
                </a>
                <Link to="/case-studies" className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
                  View Case Studies
                </Link>
              </div>
            </div>
            <LeadGenForm />
          </div>
        </div>
      </section>

      {/* Why PECHS */}
      <section className="section-padding" aria-label="Why PECHS needs local SEO">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Why PECHS Businesses Need Neighbourhood-Level SEO</h2>
          <p className="text-body max-w-3xl mb-6">
            PECHS combines residential density with Karachi's most iconic shopping district. Tariq Road alone generates thousands of daily search queries for clothing, electronics, and retail. Add the professional services in Blocks 2 and 6, healthcare facilities along Shahrah-e-Quaideen, and the dining scene on Khalid Bin Waleed Road — and you have a neighbourhood with extraordinary search demand that rewards precision targeting.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">6</p>
              <p className="text-xs text-subtle mt-1">PECHS blocks with distinct markets</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">10K+</p>
              <p className="text-xs text-subtle mt-1">Tariq Road daily search queries</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">4x</p>
              <p className="text-xs text-subtle mt-1">Retail conversion from local SEO</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">65%</p>
              <p className="text-xs text-subtle mt-1">PECHS searches include road or block</p>
            </div>
          </div>
        </div>
      </section>

      {/* Micro-Areas */}
      <section className="section-padding surface-sunken" aria-label="PECHS commercial zones">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Commercial Zones I Target in PECHS</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              { name: "Tariq Road", desc: "Karachi's premier shopping street. Clothing, jewellery, and electronics retailers need product-focused landing pages and aggressive local pack strategies." },
              { name: "Shahrah-e-Quaideen", desc: "Healthcare and professional services corridor. Medical clinics, diagnostic labs, and law firms dominate the search landscape here." },
              { name: "Khalid Bin Waleed Road", desc: "Connecting PECHS to Saddar with diverse commercial activity — electronics markets, restaurants, and service businesses." },
              { name: "Block 2 Commercial", desc: "Professional services hub with chartered accountant offices, law firms, and consultancies. B2B keyword targeting is essential." },
              { name: "Block 6 Market", desc: "Residential block market with everyday service queries — grocery, pharmacy, salon, and maintenance services." },
              { name: "Main PECHS Boulevard", desc: "The internal connecting road with cafés, tuition centres, and small businesses serving the residential blocks." },
            ].map((area) => (
              <div key={area.name} className="metric-card">
                <h3 className="font-semibold text-heading mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" /> {area.name}
                </h3>
                <p className="text-sm text-body">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding" aria-label="PECHS SEO deliverables">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">My PECHS SEO Strategy — What's Included</h2>
          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            {[
              "Block-level and road-level keyword research for all PECHS zones",
              "Google Business Profile optimization with PECHS-specific categories and photos",
              "Landing pages targeting 'best [service] PECHS' and Tariq Road queries",
              "Retail SEO for Tariq Road stores — product categories and shopping intent",
              "Professional services SEO for law firms and CA offices in PECHS",
              "Local citation building with PECHS-accurate NAP data across directories",
              "Schema markup — LocalBusiness, Store, LegalService, MedicalBusiness",
              "Monthly reporting with PECHS-specific keyword position tracking",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-body">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding surface-sunken" aria-label="PECHS SEO FAQs">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-10">PECHS SEO — Frequently Asked Questions</h2>
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

      {/* Internal Links */}
      <aside className="section-padding" aria-label="Nearby areas">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold mb-4">SEO Services in Nearby Areas</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Tariq Road", link: "/tariq-road" },
              { name: "Bahadurabad", link: "/bahadurabad" },
              { name: "Clifton", link: "/clifton" },
              { name: "Saddar", link: "/saddar" },
            ].map((a) => (
              <Link key={a.name} to={a.link} className="inline-flex items-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-heading hover:text-primary transition-colors">
                <MapPin className="h-3.5 w-3.5 text-primary mr-2" /> SEO Expert in {a.name}
              </Link>
            ))}
          </div>
        </div>
      </aside>

      <CtaBanner heading="Ready to Dominate Local Search in PECHS?" text="Get a free hyperlocal SEO audit for your PECHS business and start outranking competitors on Tariq Road and beyond." />
    </main>
  </Layout>
);

export default SeoPechs;
