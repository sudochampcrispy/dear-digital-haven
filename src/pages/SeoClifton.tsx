import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import LeadGenForm from "@/components/LeadGenForm";
import { CheckCircle2, MapPin, ArrowRight } from "lucide-react";

const BASE = "https://seoexpertinkarachi.com";
const SLUG = "/clifton";
const TITLE = "SEO Expert in Clifton, Karachi — Naveed Ganatra";
const DESC =
  "Hire an SEO expert in Clifton, Karachi. Naveed Ganatra provides hyperlocal search optimization for businesses in Clifton Block 1–9, Sea View, Boat Basin, and Do Darya — driving top Google rankings and qualified local traffic.";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: BASE + "/" },
  { name: "Local SEO Karachi", url: BASE + "/local-seo-karachi" },
  { name: "Clifton", url: BASE + SLUG },
]);

const webPage = buildWebPage({ name: TITLE, description: DESC, url: BASE + SLUG });

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "Person", name: "Naveed Ganatra" },
  areaServed: {
    "@type": "Place",
    name: "Clifton, Karachi",
    containedInPlace: { "@type": "City", name: "Karachi" },
  },
  serviceType: "Search Engine Optimization",
  description: DESC,
};

const faqData = [
  {
    q: "What makes Clifton SEO different from general Karachi SEO?",
    a: "Clifton has a unique commercial geography — Boat Basin, Do Darya, Sea View, and the block-wise residential layout create highly specific search patterns. Residents search for services by block number, landmark, or commercial zone rather than just 'Karachi.' A hyperlocal strategy targets these exact patterns to capture high-intent traffic that generic campaigns miss entirely.",
  },
  {
    q: "Which Clifton blocks and areas do you optimize for?",
    a: "I cover all nine Clifton blocks plus the major commercial landmarks: Boat Basin, Do Darya, Sea View, Teen Talwar, Clifton Beach, Abdullah Shah Ghazi Road, and the commercial areas along Khayaban-e-Roomi and Block 4/5 markets.",
  },
  {
    q: "How competitive is local search in Clifton?",
    a: "Extremely competitive. Clifton hosts Karachi's highest concentration of premium restaurants, clinics, and lifestyle businesses. Many already have basic SEO in place. Winning here requires neighbourhood-level content granularity, aggressive review strategies, and technically optimized pages that load under 2 seconds.",
  },
  {
    q: "Can you help restaurants near Boat Basin and Do Darya rank higher?",
    a: "Absolutely. Restaurant SEO in Clifton's dining corridors requires menu schema markup, geo-tagged food photography, Google Business Profile posts featuring Clifton-specific events, and a review generation strategy that leverages your dine-in customer base. I've helped Clifton restaurants achieve 200%+ increases in Google Maps impressions.",
  },
  {
    q: "What does a Clifton SEO campaign cost?",
    a: "Hyperlocal SEO campaigns for Clifton businesses typically range from PKR 35,000–120,000/month depending on industry competition, number of target keywords, and content requirements. Contact me for a free audit and customized quote.",
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

const SeoClifton = () => (
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
                Hyperlocal SEO · Clifton, Karachi
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                SEO Expert in Clifton, Karachi
              </h1>
              <p className="text-lg text-body mb-4">
                Clifton is where Karachi's affluent residents live, dine, and shop — making it one of the most lucrative and competitive markets for local search. From the seafood restaurants lining Do Darya to the boutique clinics in Block 2 and the high-end salons of Boat Basin, every business in Clifton competes for the same Google visibility.
              </p>
              <p className="text-base text-body mb-4">
                My hyperlocal SEO strategy for Clifton goes beyond generic city-level optimization. I target the specific blocks, landmarks, and commercial zones that Clifton residents actually reference in their searches — "dermatologist Clifton Block 5," "best biryani near Boat Basin," "gym near Sea View Karachi." This neighbourhood-level precision is what separates page-one rankings from digital invisibility.
              </p>
              <p className="text-base text-body mb-8">
                With entity-based content architecture, local citation building on Pakistani directories, and technical SEO tuned for Core Web Vitals compliance, I deliver sustainable organic growth for Clifton businesses across every industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                  Get Free Clifton SEO Audit <ArrowRight className="h-4 w-4" />
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

      {/* Why Clifton */}
      <section className="section-padding" aria-label="Why Clifton needs local SEO">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Why Clifton Businesses Need Neighbourhood-Level SEO</h2>
          <p className="text-body max-w-3xl mb-6">
            Clifton's nine blocks and iconic commercial zones create a fragmented search landscape. A restaurant in Block 8 and a clinic near Teen Talwar face completely different competitors and search queries. Cookie-cutter SEO campaigns that target "Karachi" as a single entity waste budget and miss the hyperlocal queries that actually drive footfall in Clifton.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">9</p>
              <p className="text-xs text-subtle mt-1">Clifton blocks with distinct search demand</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">200%+</p>
              <p className="text-xs text-subtle mt-1">Maps impression growth for clients</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">68%</p>
              <p className="text-xs text-subtle mt-1">Clifton searches include block or landmark</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">4x</p>
              <p className="text-xs text-subtle mt-1">Higher AOV from Clifton local traffic</p>
            </div>
          </div>
        </div>
      </section>

      {/* Micro-Areas */}
      <section className="section-padding surface-sunken" aria-label="Clifton micro-areas">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Commercial Zones & Landmarks I Target in Clifton</h2>
          <p className="text-body max-w-3xl mb-8">
            Each Clifton landmark generates its own search ecosystem. I create geo-specific content optimized for these exact locations.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Boat Basin", desc: "Karachi's original food street. Intense restaurant competition requires menu-optimized content, Google Posts, and aggressive review acquisition." },
              { name: "Do Darya", desc: "Premium seafood dining destination. Evening-specific search patterns and event-based queries require time-sensitive content strategies." },
              { name: "Sea View & Clifton Beach", desc: "Tourist and family leisure hub. Seasonal search spikes for beach-adjacent businesses, water sports, and weekend dining." },
              { name: "Teen Talwar", desc: "Iconic Clifton landmark and commercial junction. Medical clinics, banks, and professional services dominate search queries here." },
              { name: "Block 4 & 5 Markets", desc: "Residential commercial strips with grocery, pharmacy, and household service searches — the backbone of everyday local queries." },
              { name: "Khayaban-e-Roomi", desc: "Connecting artery with growing commercial development. IT companies, educational centers, and mixed-use searches are on the rise." },
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

      {/* What I Deliver */}
      <section className="section-padding" aria-label="SEO deliverables for Clifton">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">My Clifton SEO Strategy — What's Included</h2>
          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            {[
              "Block-level and landmark-level keyword research for Clifton",
              "Google Business Profile optimization with Clifton geo-tagged imagery",
              "Landing pages targeting 'best [service] in Clifton' and block-specific queries",
              "Local citation building on 75+ Pakistani directories with Clifton-accurate NAP",
              "Competitor analysis against top-ranking Clifton businesses in your niche",
              "Schema markup — LocalBusiness, Restaurant, MedicalBusiness as applicable",
              "Review generation strategy for your Clifton customer base",
              "Monthly reporting with Clifton-specific keyword position tracking",
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
      <section className="section-padding surface-sunken" aria-label="Clifton SEO FAQs">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-10">Clifton SEO — Frequently Asked Questions</h2>
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

      {/* Internal Linking */}
      <aside className="section-padding" aria-label="Explore nearby areas">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold mb-4">SEO Services in Nearby Areas</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "DHA Defence", link: "/dha-defence" },
              { name: "PECHS", link: "/pechs" },
              { name: "Saddar", link: "/saddar" },
              { name: "Bahadurabad", link: "/bahadurabad" },
            ].map((a) => (
              <Link key={a.name} to={a.link} className="inline-flex items-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-heading hover:text-primary transition-colors">
                <MapPin className="h-3.5 w-3.5 text-primary mr-2" /> SEO Expert in {a.name}
              </Link>
            ))}
          </div>
        </div>
      </aside>

      <CtaBanner heading="Ready to Dominate Local Search in Clifton?" text="Get a free hyperlocal SEO audit for your Clifton business and start outranking competitors in your block." />
    </main>
  </Layout>
);

export default SeoClifton;
