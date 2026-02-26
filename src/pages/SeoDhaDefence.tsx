import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import LeadGenForm from "@/components/LeadGenForm";
import { CheckCircle2, MapPin, ArrowRight } from "lucide-react";

const BASE = "https://seoexpertinkarachi.com";
const SLUG = "/dha-defence";
const TITLE = "SEO Expert in DHA Defence, Karachi — Naveed Ganatra";
const DESC =
  "Looking for an SEO expert in DHA Defence, Karachi? Naveed Ganatra delivers hyperlocal search optimization for businesses in DHA Phase 1–8, Bukhari Commercial, Khayaban-e-Shahbaz, and Zamzama. Get top Google rankings in Defence.";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: BASE + "/" },
  { name: "Local SEO Karachi", url: BASE + "/local-seo-karachi" },
  { name: "DHA Defence", url: BASE + SLUG },
]);

const webPage = buildWebPage({ name: TITLE, description: DESC, url: BASE + SLUG });

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "Person", name: "Naveed Ganatra" },
  areaServed: {
    "@type": "Place",
    name: "DHA Defence, Karachi",
    containedInPlace: { "@type": "City", name: "Karachi" },
  },
  serviceType: "Search Engine Optimization",
  description: DESC,
};

const faqData = [
  {
    q: "Why do DHA Defence businesses need a dedicated SEO strategy?",
    a: "DHA Defence is Karachi's most competitive commercial corridor. Businesses along Bukhari Commercial, Khayaban-e-Shahbaz, and Zamzama face intense competition from both established brands and new entrants. A hyperlocal SEO strategy targets the exact search queries residents and visitors use — like 'best restaurant DHA Karachi' or 'dentist near Zamzama' — ensuring your business appears before competitors who rely on generic city-level targeting.",
  },
  {
    q: "Which DHA phases do you cover for SEO optimization?",
    a: "I optimize businesses across all DHA phases — Phase 1 through Phase 8, including DHA City, Bukhari Commercial, Sehar Commercial, Khayaban-e-Shahbaz, Khayaban-e-Ittehad, Zamzama, and the surrounding residential lanes. Each phase has distinct search patterns and commercial density that require tailored keyword strategies.",
  },
  {
    q: "How long does it take to rank for DHA Defence keywords?",
    a: "For long-tail hyperlocal queries like 'physiotherapist DHA Phase 5 Karachi,' rankings can improve within 4–8 weeks. More competitive terms like 'best gym in DHA Karachi' typically take 3–5 months depending on your domain authority and existing local signals.",
  },
  {
    q: "Do you optimize Google Business Profiles for DHA businesses?",
    a: "Yes. Google Business Profile optimization is central to local SEO in DHA. I optimize your categories, attributes, photos with geo-tags, weekly posts featuring DHA-specific content, and implement a review generation strategy targeting your DHA customer base.",
  },
  {
    q: "What industries do you serve in DHA Defence?",
    a: "I serve all industries active in DHA including restaurants, cafés, dental clinics, dermatologists, gyms, salons, real estate agencies, law firms, IT companies, tutoring centers, boutiques, and automotive services. Each industry gets a customized keyword map and content strategy.",
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

const SeoDhaDefence = () => (
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
                Hyperlocal SEO · DHA Defence, Karachi
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                SEO Expert in DHA Defence, Karachi
              </h1>
              <p className="text-lg text-body mb-4">
                DHA Defence is Karachi's premium business hub — home to thousands of restaurants, clinics, retail stores, and professional services competing for the same local search traffic. Without a neighbourhood-level SEO strategy, your business gets buried under competitors who rank for the exact queries your customers type every day.
              </p>
              <p className="text-base text-body mb-4">
                I specialize in hyperlocal search optimization for DHA businesses. From Bukhari Commercial to Zamzama, Khayaban-e-Shahbaz to Sehar Commercial — I build entity-rich, geo-targeted content that connects your brand with high-intent searchers in Defence. My approach covers Google Business Profile optimization, neighbourhood-specific landing pages, local citation building on Pakistani directories, and structured data implementation that earns rich snippets for DHA-specific queries.
              </p>
              <p className="text-base text-body mb-8">
                Whether you run a café on Khayaban-e-Ittehad, a clinic in Phase 6, or an IT firm in DHA City — I deliver measurable ranking improvements backed by transparent monthly reporting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                  Get Free DHA SEO Audit <ArrowRight className="h-4 w-4" />
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

      {/* Why DHA Needs Local SEO */}
      <section className="section-padding" aria-label="Why DHA Defence needs local SEO">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Why DHA Defence Businesses Need Hyperlocal SEO</h2>
          <p className="text-body max-w-3xl mb-6">
            DHA Defence concentrates Karachi's highest per-capita spending power. Residents here actively search for premium services, dining, healthcare, and lifestyle businesses on Google. But the commercial density across Phase 1–8 means dozens of businesses compete for the same local keywords. Generic "Karachi SEO" campaigns miss the granular, neighbourhood-level queries that DHA residents actually use.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">8</p>
              <p className="text-xs text-subtle mt-1">DHA phases with unique search patterns</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">5,000+</p>
              <p className="text-xs text-subtle mt-1">Registered businesses in DHA</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">72%</p>
              <p className="text-xs text-subtle mt-1">DHA searches include phase or street name</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">3x</p>
              <p className="text-xs text-subtle mt-1">Higher conversion from hyperlocal queries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Micro-Areas We Target */}
      <section className="section-padding surface-sunken" aria-label="DHA micro-areas">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Micro-Areas & Commercial Zones We Target</h2>
          <p className="text-body max-w-3xl mb-8">
            Every commercial lane in DHA generates distinct search demand. I create neighbourhood-specific content optimized for the exact streets, markets, and landmarks your customers reference when searching.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Bukhari Commercial", desc: "High-density restaurant and retail hub in Phase 6. Intense competition for dining, fashion, and salon keywords with significant 'near me' search volume." },
              { name: "Khayaban-e-Shahbaz", desc: "Premium commercial strip spanning multiple phases. Healthcare clinics, banks, and corporate offices drive professional service queries." },
              { name: "Zamzama", desc: "Karachi's iconic shopping and dining street. Boutique, café, and lifestyle brand searches dominate — requires brand-differentiated content." },
              { name: "Khayaban-e-Ittehad", desc: "The arterial road connecting DHA phases. Auto workshops, pharmacies, and mixed-use commercial queries show high local intent." },
              { name: "Sehar Commercial", desc: "Growing commercial zone in Phase 7 with increasing search demand for grocery, fitness, and medical services." },
              { name: "DHA City", desc: "Emerging residential mega-project with rapidly growing search interest for construction, interior design, and new business services." },
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
      <section className="section-padding" aria-label="SEO services for DHA">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">What My DHA Defence SEO Strategy Includes</h2>
          <p className="text-body max-w-3xl mb-8">
            Every campaign is built around the commercial reality of DHA — high competition, affluent audience, and service-oriented search intent. Here's what you get:
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Hyperlocal keyword research targeting DHA phase and street-level queries",
              "Google Business Profile optimization with DHA-specific categories and geo-tagged photos",
              "Neighbourhood landing pages targeting 'best [service] in DHA Karachi' patterns",
              "Local citation building across Pakistani directories with DHA-accurate NAP data",
              "Review generation strategy focused on DHA customer base",
              "Schema markup implementation — LocalBusiness, Service, and FAQPage for rich results",
              "Competitor gap analysis against top-ranking DHA businesses in your industry",
              "Monthly ranking reports with DHA-specific keyword tracking",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-body">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries in DHA */}
      <section className="section-padding surface-sunken" aria-label="Industries served in DHA">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Industries I Serve in DHA Defence</h2>
          <p className="text-body max-w-3xl mb-8">
            DHA's commercial ecosystem spans virtually every service category. My SEO strategies are tailored to each industry's unique keyword landscape and search intent patterns within Defence.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Restaurants & Cafés", desc: "Menu optimization, Google Maps dominance, and review strategy for DHA's saturated food scene — from Bukhari Commercial to Zamzama." },
              { title: "Healthcare & Clinics", desc: "YMYL-compliant content for dermatologists, dentists, physiotherapists, and specialist clinics on Khayaban-e-Shahbaz and surrounding areas." },
              { title: "Real Estate", desc: "Property listing optimization for DHA plots, houses, and apartments. Targeting phase-specific buying and rental queries." },
              { title: "Gyms & Fitness", desc: "Local pack optimization and class-based content strategy for fitness studios, CrossFit boxes, and personal trainers in DHA." },
              { title: "Salons & Beauty", desc: "Service page optimization and Google Business Profile management for DHA's competitive beauty and grooming market." },
              { title: "IT & Software", desc: "B2B lead generation SEO for DHA-based tech companies, digital agencies, and software houses targeting local and international clients." },
            ].map((ind) => (
              <div key={ind.title} className="metric-card">
                <h3 className="font-semibold text-heading mb-2">{ind.title}</h3>
                <p className="text-sm text-body">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" aria-label="DHA Defence SEO FAQs">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-10">DHA Defence SEO — Frequently Asked Questions</h2>
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
      <aside className="section-padding surface-sunken" aria-label="Explore nearby areas">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold mb-4">SEO Services in Nearby Areas</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Clifton", link: "/clifton" },
              { name: "PECHS", link: "/pechs" },
              { name: "Bahadurabad", link: "/bahadurabad" },
              { name: "Shahrah-e-Faisal", link: "/shahrah-e-faisal" },
            ].map((a) => (
              <Link key={a.name} to={a.link} className="inline-flex items-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-heading hover:text-primary transition-colors">
                <MapPin className="h-3.5 w-3.5 text-primary mr-2" /> SEO Expert in {a.name}
              </Link>
            ))}
          </div>
        </div>
      </aside>

      <CtaBanner heading="Ready to Dominate Local Search in DHA Defence?" text="Get a free hyperlocal SEO audit for your DHA business and start outranking competitors in your phase." />
    </main>
  </Layout>
);

export default SeoDhaDefence;
