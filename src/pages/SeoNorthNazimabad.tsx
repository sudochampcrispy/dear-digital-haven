import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import LeadGenForm from "@/components/LeadGenForm";
import { CheckCircle2, MapPin, ArrowRight } from "lucide-react";

const BASE = "https://seoexpertinkarachi.com";
const SLUG = "/north-nazimabad";
const TITLE = "SEO Expert in North Nazimabad, Karachi — Naveed Ganatra";
const DESC =
  "Looking for an SEO expert in North Nazimabad, Karachi? Naveed Ganatra delivers hyperlocal search optimization for businesses in North Nazimabad Block A–N, Sakhi Hassan, Hyderi, and surrounding commercial areas — driving top Google rankings.";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: BASE + "/" },
  { name: "Local SEO Karachi", url: BASE + "/local-seo-karachi" },
  { name: "North Nazimabad", url: BASE + SLUG },
]);

const webPage = buildWebPage({ name: TITLE, description: DESC, url: BASE + SLUG });

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "Person", name: "Naveed Ganatra" },
  areaServed: {
    "@type": "Place",
    name: "North Nazimabad, Karachi",
    containedInPlace: { "@type": "City", name: "Karachi" },
  },
  serviceType: "Search Engine Optimization",
  description: DESC,
};

const faqData = [
  {
    q: "Why do North Nazimabad businesses need hyperlocal SEO?",
    a: "North Nazimabad is one of Karachi's most densely populated areas with a strong middle-class consumer base. Residents actively search for local services using block letters, road names, and landmarks like Sakhi Hassan and Hyderi Market. Businesses that optimize for these neighbourhood-specific queries capture high-intent traffic that generic Karachi campaigns miss entirely.",
  },
  {
    q: "Which blocks and areas in North Nazimabad do you cover?",
    a: "I optimize for all North Nazimabad blocks (A through N), plus the major commercial zones including Sakhi Hassan Chowrangi, Hyderi Market, Five Star Chowrangi, Power House Chowrangi, and the commercial strips along Abul Hasan Isphahani Road and main internal roads.",
  },
  {
    q: "How competitive is local search in North Nazimabad?",
    a: "North Nazimabad has moderate-to-high local search competition. The area's density means multiple businesses offer similar services within close proximity. However, very few invest in proper hyperlocal SEO — creating significant opportunities for businesses that implement block-level optimization and structured data.",
  },
  {
    q: "What industries do you serve in North Nazimabad?",
    a: "I serve all industries active in North Nazimabad including restaurants, bakeries, medical clinics, dental practices, pharmacies, tuition academies, coaching centres, gyms, salons, real estate agents, tailors, and automotive workshops. Each industry receives a customized keyword map.",
  },
  {
    q: "What results can I expect from North Nazimabad SEO?",
    a: "Typical results include local pack rankings within 6–10 weeks for long-tail queries, 150–250% organic traffic growth within 4–6 months, and measurable increases in phone calls and walk-ins from Google. All campaigns include monthly reporting with North Nazimabad-specific metrics.",
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

const SeoNorthNazimabad = () => (
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
                Hyperlocal SEO · North Nazimabad, Karachi
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                SEO Expert in North Nazimabad, Karachi
              </h1>
              <p className="text-lg text-body mb-4">
                North Nazimabad is Karachi's densely populated residential heartland — a well-established neighbourhood spanning blocks A through N with a vibrant middle-class consumer base. From the bustling commercial energy of Sakhi Hassan Chowrangi to the neighbourhood markets of Hyderi, this area generates consistent search demand for everyday services, healthcare, education, and dining.
              </p>
              <p className="text-base text-body mb-4">
                My hyperlocal SEO strategy for North Nazimabad maps the unique search behaviour of residents who reference block letters, chowrangis, and local landmarks in their queries. "Best biryani near Sakhi Hassan," "dentist North Nazimabad Block H," "tuition centre near Five Star Chowrangi" — these are the exact queries I optimize your business to rank for.
              </p>
              <p className="text-base text-body mb-8">
                With entity-based content, Google Business Profile management, local citation building, and monthly performance reporting, I deliver transparent, measurable results for North Nazimabad businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                  Get Free SEO Audit <ArrowRight className="h-4 w-4" />
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

      {/* Why North Nazimabad */}
      <section className="section-padding" aria-label="Why North Nazimabad needs SEO">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Why North Nazimabad Businesses Need Hyperlocal SEO</h2>
          <p className="text-body max-w-3xl mb-6">
            North Nazimabad's population density and established commercial infrastructure create a market where hundreds of similar businesses serve the same residential catchment. Without hyperlocal SEO targeting specific blocks and landmarks, your business is invisible to customers searching for services right in your vicinity. The opportunity is significant — few businesses here invest in proper neighbourhood-level optimization.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">14</p>
              <p className="text-xs text-subtle mt-1">Blocks (A–N) with local markets</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">2M+</p>
              <p className="text-xs text-subtle mt-1">Estimated neighbourhood population</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">Low</p>
              <p className="text-xs text-subtle mt-1">Current SEO competition level</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">High</p>
              <p className="text-xs text-subtle mt-1">Opportunity for early movers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Micro-Areas */}
      <section className="section-padding surface-sunken" aria-label="North Nazimabad micro-areas">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Key Commercial Zones in North Nazimabad</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              { name: "Sakhi Hassan Chowrangi", desc: "Major commercial junction with high foot traffic. Restaurants, bakeries, electronics shops, and service businesses create intense but poorly-optimized competition." },
              { name: "Hyderi Market", desc: "Traditional neighbourhood market with strong daily-need search queries — grocery, butcher, pharmacy, and household services." },
              { name: "Five Star Chowrangi", desc: "Secondary commercial node connecting to Buffer Zone. Food, automotive, and retail queries dominate local search here." },
              { name: "Power House Chowrangi", desc: "Junction area with growing commercial activity. Medical clinics, coaching centres, and service-based businesses drive queries." },
              { name: "Abul Hasan Isphahani Road", desc: "Connecting artery with bank branches, schools, and mixed commercial development. Professional service queries are on the rise." },
              { name: "Block D & J Markets", desc: "Internal residential commercial hubs serving day-to-day needs. Low competition makes these quick wins for local SEO." },
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
      <section className="section-padding" aria-label="SEO deliverables">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">What My North Nazimabad SEO Strategy Includes</h2>
          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            {[
              "Block-level keyword research covering Blocks A–N and all chowrangis",
              "Google Business Profile optimization with North Nazimabad geo-tagged content",
              "Landing pages for 'best [service] in North Nazimabad' and landmark queries",
              "Competitor gap analysis against existing ranked businesses in your niche",
              "Local citation building on 75+ directories with North Nazimabad-accurate NAP",
              "Review generation strategy targeting your neighbourhood customer base",
              "Schema markup — LocalBusiness, FAQPage, and industry-specific types",
              "Monthly ranking reports with North Nazimabad keyword position tracking",
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
      <section className="section-padding surface-sunken" aria-label="FAQs">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-10">North Nazimabad SEO — Frequently Asked Questions</h2>
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
              { name: "Nazimabad", link: "/nazimabad" },
              { name: "FB Area", link: "/fb-area" },
              { name: "Gulshan-e-Iqbal", link: "/gulshan-e-iqbal" },
              { name: "Gulistan-e-Johar", link: "/gulistan-e-johar" },
            ].map((a) => (
              <Link key={a.name} to={a.link} className="inline-flex items-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-heading hover:text-primary transition-colors">
                <MapPin className="h-3.5 w-3.5 text-primary mr-2" /> SEO Expert in {a.name}
              </Link>
            ))}
          </div>
        </div>
      </aside>

      <CtaBanner heading="Ready to Dominate Local Search in North Nazimabad?" text="Get a free hyperlocal SEO audit for your North Nazimabad business and capture the local traffic your competitors are missing." />
    </main>
  </Layout>
);

export default SeoNorthNazimabad;
