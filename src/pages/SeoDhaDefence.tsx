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
  "Looking for an SEO expert in DHA Defence, Karachi? Naveed Ganatra helps businesses in DHA Phase 1–8, Bukhari Commercial, Khayaban-e-Shahbaz, and Zamzama rank higher on Google and attract more local customers.";

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
    a: "DHA Defence is one of Karachi's most competitive commercial areas. Thousands of restaurants, clinics, salons, and service businesses are packed along Bukhari Commercial, Khayaban-e-Shahbaz, and Zamzama — all fighting for the same customers on Google. A strategy built specifically for DHA targets the exact searches your potential customers make, like 'best restaurant DHA Karachi' or 'dentist near Zamzama,' instead of relying on broad city-level keywords that rarely convert.",
  },
  {
    q: "Which DHA phases do you cover?",
    a: "I work with businesses across all DHA phases — Phase 1 through Phase 8, including DHA City, Bukhari Commercial, Sehar Commercial, Khayaban-e-Shahbaz, Khayaban-e-Ittehad, and Zamzama. Each phase has its own commercial character and customer search behaviour, so the strategy is tailored accordingly.",
  },
  {
    q: "How long does it take to see results?",
    a: "For specific queries like 'physiotherapist DHA Phase 5 Karachi,' you can expect improvements within 4–8 weeks. More competitive terms like 'best gym in DHA Karachi' typically take 3–5 months depending on your website's current strength and the competition in your industry.",
  },
  {
    q: "Do you help with Google Maps and Google Business Profile?",
    a: "Yes, that's a core part of what I do for DHA businesses. I optimize your Google Business Profile categories, attributes, photos, weekly posts with DHA-relevant content, and help you build a steady stream of genuine customer reviews — all of which directly impact your visibility on Google Maps.",
  },
  {
    q: "What types of businesses do you work with in DHA?",
    a: "I work with restaurants, cafés, dental clinics, dermatologists, gyms, salons, real estate agencies, law firms, IT companies, tutoring centres, boutiques, and automotive services in DHA. Each industry gets a strategy built around how its specific customers search.",
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
                SEO Expert · DHA Defence, Karachi
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                SEO Expert in DHA Defence, Karachi
              </h1>
              <p className="text-lg text-body mb-4">
                If you run a business in DHA Defence, you already know how competitive it is. Thousands of restaurants, clinics, retail stores, and service providers are packed into Phase 1 through Phase 8 — and most of your potential customers find businesses through Google. If your business doesn't show up when someone searches "best dentist DHA Karachi" or "restaurant near Zamzama," you're losing customers to competitors who do.
              </p>
              <p className="text-base text-body mb-4">
                I help DHA businesses get found on Google by the people who are already searching for their services. Whether your business is on Bukhari Commercial, Khayaban-e-Shahbaz, Zamzama, or in one of the residential phases — I build a search strategy around the way DHA residents actually search. That means targeting specific phases, streets, and landmarks — not just "Karachi" as a whole.
              </p>
              <p className="text-base text-body mb-8">
                From optimizing your Google Business Profile and building high-quality content to earning your spot in the local map pack — everything I do is focused on bringing real, paying customers to your door. No fluff, no vanity metrics. Just measurable results with transparent monthly reporting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                  Get a Free SEO Audit <ArrowRight className="h-4 w-4" />
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

      {/* Why DHA Needs This */}
      <section className="section-padding" aria-label="Why DHA businesses struggle on Google">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Why Most DHA Businesses Struggle on Google</h2>
            <p className="text-body">
              DHA Defence has Karachi's highest concentration of premium businesses — and the highest concentration of competition. Residents here have high spending power and search for services by phase, street name, or landmark. If your online presence isn't optimized for those specific searches, you're invisible to the exact customers who would pay the most for what you offer.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">8</p>
              <p className="text-xs text-subtle mt-1">DHA phases, each with its own market</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">5,000+</p>
              <p className="text-xs text-subtle mt-1">Businesses competing in DHA</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">72%</p>
              <p className="text-xs text-subtle mt-1">DHA searches mention a phase or street</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">3x</p>
              <p className="text-xs text-subtle mt-1">Higher conversion from area-specific searches</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas I Cover */}
      <section className="section-padding surface-sunken" aria-label="Areas in DHA">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Areas in DHA Defence I Cover</h2>
            <p className="text-body">
              Every commercial zone in DHA has a different customer base and different search patterns. I build content and optimize your presence around the specific areas where your customers are.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Bukhari Commercial", desc: "One of DHA's busiest food and retail streets in Phase 6. Restaurants, fashion outlets, and salons here face fierce competition — standing out on Google is essential." },
              { name: "Khayaban-e-Shahbaz", desc: "A major commercial strip with healthcare clinics, banks, and corporate offices. People searching here are looking for trusted professionals." },
              { name: "Zamzama", desc: "Karachi's iconic shopping and dining destination. Boutiques, cafés, and lifestyle brands need to differentiate themselves online, not just offline." },
              { name: "Khayaban-e-Ittehad", desc: "The road connecting multiple DHA phases. Auto workshops, pharmacies, and everyday service businesses thrive here when they're visible on Google." },
              { name: "Sehar Commercial", desc: "A growing commercial area in Phase 7 with rising demand for fitness, grocery, and medical services — and not much SEO competition yet." },
              { name: "DHA City", desc: "An emerging mega-project where construction, interior design, and new business services are seeing rapidly growing search interest." },
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

      {/* What You Get */}
      <section className="section-padding" aria-label="What you get">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">What You Get When You Work With Me</h2>
            <p className="text-body">
              Everything I do is built around getting your DHA business in front of the right people at the right time. Here's what's included:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Keyword research focused on DHA-specific searches — by phase, street, and landmark",
              "Google Business Profile setup and optimization with local photos and weekly updates",
              "Content pages built around how DHA residents actually search for your services",
              "Listings on Pakistani business directories with accurate address and contact details",
              "A strategy to get more genuine Google reviews from your DHA customers",
              "Technical improvements to make your website faster and easier for Google to understand",
              "Analysis of what your top-ranking DHA competitors are doing — and how to beat them",
              "Monthly reports showing exactly where you rank and how much traffic you're getting",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-body">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding surface-sunken" aria-label="Industries in DHA">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Industries I Can Help in DHA Defence</h2>
            <p className="text-body">
              DHA is home to some of Karachi's most competitive business categories. Whether you're already established or just starting out, here's how SEO can bring more customers to your door.
            </p>
          </div>
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent -mx-4 px-4">
              {[
                { title: "Real Estate Agencies", desc: "DHA property is high-value. Buyers and renters search by phase, plot size, and property type. Ranking for these queries means connecting with serious, high-ticket prospects." },
                { title: "Specialist Doctors & Clinics", desc: "Dermatologists, cardiologists, dentists — patients in DHA search for trusted specialists near their phase. The right content builds both Google trust and patient confidence." },
                { title: "Law Firms & Legal Services", desc: "Corporate law, family law, property disputes — DHA residents look for reputable lawyers online. Professional service pages and trust signals make all the difference." },
                { title: "Interior Design & Architecture", desc: "DHA homeowners invest heavily in interiors. Searches like 'interior designer DHA Karachi' are high-intent with significant project values." },
                { title: "Private Schools & Tutoring", desc: "Parents in DHA actively search for schools, O/A-level academies, and private tutors by phase. Education-focused SEO captures these high-intent family searches." },
                { title: "Restaurants & Cafés", desc: "From Bukhari Commercial to Zamzama, DHA's dining scene is massive. When someone searches 'best café near Zamzama,' your restaurant needs to be the answer." },
                { title: "Car Dealerships & Auto Services", desc: "Luxury car showrooms, workshops, and detailing services along Khayaban-e-Ittehad serve a premium market searching for trusted automotive services." },
                { title: "Gyms & Fitness Studios", desc: "DHA residents are health-conscious and search for gyms, CrossFit, yoga, and personal trainers near their phase. Google Maps visibility is key." },
                { title: "Salons & Beauty Studios", desc: "The beauty market in DHA is crowded. Standing out on Google means showing up when someone searches 'best salon DHA Phase 6' — not buried on page two." },
                { title: "IT Companies & Software Houses", desc: "DHA hosts a growing tech ecosystem. B2B lead generation through organic search helps software companies find clients locally and internationally." },
                { title: "Pharmacies & Labs", desc: "Diagnostic labs and pharmacies in DHA compete on convenience and trust. Ranking for 'lab test near DHA' or 'pharmacy Khayaban-e-Shahbaz' drives walk-ins." },
                { title: "Fashion Boutiques & Retail", desc: "DHA's shopping streets are packed with boutiques. Online visibility turns casual browsers into in-store customers — especially around seasonal collections." },
                { title: "Event Planners & Wedding Services", desc: "DHA's affluent market drives demand for premium event planning, catering, and wedding services. Ranking for these searches means high-value bookings." },
                { title: "Pet Care & Veterinary", desc: "Pet ownership in DHA is growing fast. Vet clinics, groomers, and pet stores can capture a loyal customer base through local search visibility." },
              ].map((ind) => (
                <div key={ind.title} className="metric-card min-w-[300px] sm:min-w-[340px] snap-start shrink-0">
                  <h3 className="font-semibold text-heading mb-2">{ind.title}</h3>
                  <p className="text-sm text-body">{ind.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-2 text-center text-xs text-subtle">Scroll to see more →</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" aria-label="FAQs">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
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
      <aside className="section-padding surface-sunken" aria-label="Nearby areas">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold mb-4">Also Serving Nearby Areas</h2>
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

      <CtaBanner heading="Want More Customers From Google in DHA?" text="Get a free SEO audit for your DHA business. I'll show you exactly where you're losing traffic and how to fix it." />
    </main>
  </Layout>
);

export default SeoDhaDefence;
