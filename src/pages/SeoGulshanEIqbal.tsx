import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import LeadGenForm from "@/components/LeadGenForm";
import { CheckCircle2, MapPin, ArrowRight } from "lucide-react";

const BASE = "https://seoexpertinkarachi.com";
const SLUG = "/gulshan-e-iqbal";
const TITLE = "SEO Expert in Gulshan-e-Iqbal, Karachi — Naveed Ganatra";
const DESC =
  "Looking for an SEO expert in Gulshan-e-Iqbal, Karachi? Naveed Ganatra helps businesses in Gulshan Block 1–16, Rashid Minhas Road, University Road, and Gulshan Chowrangi rank higher on Google and attract more local customers.";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: BASE + "/" },
  { name: "Local SEO Karachi", url: BASE + "/local-seo-karachi" },
  { name: "Gulshan-e-Iqbal", url: BASE + SLUG },
]);

const webPage = buildWebPage({ name: TITLE, description: DESC, url: BASE + SLUG });

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "Person", name: "Naveed Ganatra" },
  areaServed: {
    "@type": "Place",
    name: "Gulshan-e-Iqbal, Karachi",
    containedInPlace: { "@type": "City", name: "Karachi" },
  },
  serviceType: "Search Engine Optimization",
  description: DESC,
};

const faqData = [
  {
    q: "Why do Gulshan-e-Iqbal businesses need local SEO?",
    a: "Gulshan-e-Iqbal is one of Karachi's most populated areas with 16 blocks and major commercial corridors along Rashid Minhas Road and University Road. Residents search by block number, nearby university, or landmark — like 'tuition centre Gulshan Block 13' or 'dentist near NED University.' A Gulshan-specific SEO strategy targets these exact searches instead of wasting effort on generic city-wide keywords.",
  },
  {
    q: "Which parts of Gulshan-e-Iqbal do you cover?",
    a: "All 16 Gulshan blocks plus the major commercial zones — Rashid Minhas Road, University Road, Gulshan Chowrangi, NIPA Chowrangi, Millennium Mall area, and the commercial lanes in Blocks 4, 7, 10, and 13-A. Each zone has its own customer base and search behaviour.",
  },
  {
    q: "How long does it take to see results in Gulshan?",
    a: "For specific queries like 'pharmacy Gulshan Block 7 Karachi,' you can expect improvements within 4–8 weeks. More competitive terms like 'best coaching centre Gulshan' typically take 3–5 months depending on your website's current strength and the competition in your industry.",
  },
  {
    q: "How does Gulshan SEO differ from DHA or Clifton?",
    a: "Gulshan has a higher volume of value-conscious searches compared to DHA and Clifton. Keywords often include 'affordable,' 'best value,' and 'near [university/hospital]' modifiers. The content strategy focuses on practical value and accessibility rather than premium positioning.",
  },
  {
    q: "What does a Gulshan SEO campaign typically cost?",
    a: "It depends on your industry, competition, and goals. Campaigns for Gulshan businesses typically range from PKR 30,000–100,000 per month. I offer a free initial audit so you can see exactly what needs to be done before committing to anything.",
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

const SeoGulshanEIqbal = () => (
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
                SEO Expert · Gulshan-e-Iqbal, Karachi
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                SEO Expert in Gulshan-e-Iqbal, Karachi
              </h1>
              <p className="text-lg text-body mb-4">
                Gulshan-e-Iqbal is one of Karachi's largest and most densely populated neighbourhoods — 16 blocks home to millions of residents, two major universities, leading hospitals, and thousands of businesses all competing for attention on Google. If you run a business here and your customers can't find you when they search, they're finding your competitors instead.
              </p>
              <p className="text-base text-body mb-4">
                I help Gulshan businesses show up on Google for the searches that actually matter. Not generic "Karachi" keywords — but the specific queries residents type every day: "tuition centre Gulshan Block 13," "dentist near NED University," "best biryani Rashid Minhas Road." That's where the real customers are, and that's exactly where I focus your SEO.
              </p>
              <p className="text-base text-body mb-8">
                My approach is practical and transparent. I optimize your Google Business Profile, build content around how people in Gulshan actually search, earn your spot in local map pack results, and track everything with clear monthly reports. No technical jargon, no empty promises — just more customers finding your business online.
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

      {/* Why Gulshan */}
      <section className="section-padding" aria-label="Why Gulshan businesses struggle on Google">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Why Most Gulshan Businesses Struggle on Google</h2>
            <p className="text-body">
              Gulshan-e-Iqbal has one of Karachi's highest concentrations of everyday businesses — from coaching academies to medical clinics to restaurants. The area's proximity to NED University, Sir Syed University, and hospitals like Liaquat National creates massive search demand. But with so many businesses packed into 16 blocks, only those with neighbourhood-optimized content show up when it counts.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">16</p>
              <p className="text-xs text-subtle mt-1">Blocks, each with its own market</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">High</p>
              <p className="text-xs text-subtle mt-1">Population density & search demand</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">80%</p>
              <p className="text-xs text-subtle mt-1">Searches mention a block or road</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">Low</p>
              <p className="text-xs text-subtle mt-1">Businesses investing in proper SEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas I Cover */}
      <section className="section-padding surface-sunken" aria-label="Areas in Gulshan">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Areas in Gulshan-e-Iqbal I Cover</h2>
            <p className="text-body">
              Every commercial zone in Gulshan has different customer patterns and different search behaviour. I build your SEO strategy around the specific areas where your customers are searching.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Rashid Minhas Road", desc: "One of Gulshan's busiest commercial roads with banks, showrooms, restaurants, and offices. Competition is high, but so is the search volume — showing up here means serious customer traffic." },
              { name: "University Road", desc: "The education corridor connecting NED and Sir Syed universities. Coaching centres, bookstores, hostels, and student-focused businesses thrive here when visible on Google." },
              { name: "Gulshan Chowrangi", desc: "Central commercial hub with intense foot traffic and even more intense Google competition. Restaurants, retail stores, and service businesses all fight for the same customers." },
              { name: "NIPA Chowrangi", desc: "A major junction connecting Gulshan to surrounding areas. Electronics shops, automotive services, and household businesses draw steady search traffic from a wide catchment." },
              { name: "Block 7 & Block 10 Markets", desc: "Residential block markets with consistent, year-round demand for groceries, pharmacies, salons, tutoring, and everyday services — the bread and butter of local SEO." },
              { name: "Millennium Mall Area", desc: "Shopping and entertainment hub generating retail and dining searches with clear weekend spikes. Businesses near the mall benefit from landmark-based search queries." },
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
              Every campaign is built around getting your Gulshan business in front of the people who are actively searching for what you offer. Here's what's included:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Keyword research focused on Gulshan-specific searches — by block, road, and landmark",
              "Google Business Profile setup and optimization with local photos and regular updates",
              "Content pages built around how Gulshan residents actually search for your services",
              "Listings on Pakistani business directories with accurate Gulshan address and contact details",
              "A strategy to get more genuine Google reviews from your Gulshan customers",
              "Technical improvements to make your website faster and easier for Google to understand",
              "Analysis of what your top-ranking Gulshan competitors are doing — and how to beat them",
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
      <section className="section-padding surface-sunken" aria-label="Industries in Gulshan">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Industries I Can Help in Gulshan-e-Iqbal</h2>
            <p className="text-body">
              Gulshan's commercial landscape is driven by education, healthcare, and everyday services. Whether you're just starting out or already established, here's how SEO can bring more customers to your business.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { title: "Coaching Centres & Academies", desc: "Parents and students in Gulshan actively search for tuition by block, subject, and level. Ranking for 'O-level tuition Gulshan Block 13' connects you with families ready to enrol." },
              { title: "Doctors & Medical Clinics", desc: "Patients near Liaquat National and Ziauddin search for specialists by area. Trustworthy content and a strong Google profile bring them to your clinic instead of the competition." },
              { title: "Restaurants & Food Businesses", desc: "From Gulshan Chowrangi to Rashid Minhas Road, the dining scene is packed. When someone searches 'best BBQ Gulshan Karachi,' your restaurant needs to show up first." },
              { title: "Real Estate & Property", desc: "Property buyers search by block number, plot size, and property type. Ranking for these queries connects you with serious buyers and renters looking specifically in Gulshan." },
              { title: "Retail & Electronics Shops", desc: "NIPA Chowrangi and surrounding markets drive significant electronics and retail searches. Product-focused content helps shoppers find your store before they visit." },
              { title: "Gyms & Fitness Studios", desc: "Health-conscious Gulshan residents search for gyms and fitness options near their block. Local SEO puts your gym in front of people ready to sign up." },
            ].map((ind) => (
              <div key={ind.title} className="metric-card">
                <h3 className="font-semibold text-heading mb-2">{ind.title}</h3>
                <p className="text-sm text-body">{ind.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-heading mb-4">Also Serving</p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Pharmacies & Diagnostic Labs",
                "Salons & Beauty Studios",
                "Car Workshops & Auto Services",
                "Bookstores & Stationery Shops",
                "IT Companies & Freelancers",
                "Tailors & Clothing Shops",
                "Event & Wedding Services",
                "Dental Clinics",
                "Grocery & Supermarkets",
                "Mobile Phone Shops",
                "Furniture & Home Décor",
                "Travel Agencies",
              ].map((name) => (
                <span key={name} className="inline-flex items-center rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-heading">
                  {name}
                </span>
              ))}
            </div>
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
              { name: "Gulistan-e-Johar", link: "/gulistan-e-johar" },
              { name: "North Nazimabad", link: "/north-nazimabad" },
              { name: "Scheme 33", link: "/scheme-33" },
              { name: "Malir", link: "/malir" },
            ].map((a) => (
              <Link key={a.name} to={a.link} className="inline-flex items-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-heading hover:text-primary transition-colors">
                <MapPin className="h-3.5 w-3.5 text-primary mr-2" /> SEO Expert in {a.name}
              </Link>
            ))}
          </div>
        </div>
      </aside>

      <CtaBanner heading="Want More Customers From Google in Gulshan?" text="Get a free SEO audit for your Gulshan business. I'll show you exactly where you're losing traffic and how to fix it." />
    </main>
  </Layout>
);

export default SeoGulshanEIqbal;
