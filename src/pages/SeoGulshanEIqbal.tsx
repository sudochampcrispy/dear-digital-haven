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
  "Need an SEO expert in Gulshan-e-Iqbal, Karachi? Naveed Ganatra delivers hyperlocal search optimization for businesses in Gulshan Block 1–16, Rashid Minhas Road, University Road, and surrounding commercial areas.";

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
    q: "Why is Gulshan-e-Iqbal important for local SEO?",
    a: "Gulshan-e-Iqbal is one of Karachi's most populated residential areas with 16+ blocks spanning a massive geographic footprint. It hosts major educational institutions (NED University, Sir Syed University), hospitals (Liaquat National, Ziauddin), and commercial centres along Rashid Minhas Road and University Road. The sheer density of businesses and population means high search volume — but also fierce competition for local visibility.",
  },
  {
    q: "Which blocks and areas in Gulshan do you target?",
    a: "I optimize for all 16 blocks of Gulshan-e-Iqbal, plus key commercial zones including Rashid Minhas Road, University Road, Gulshan Chowrangi, NIPA Chowrangi, Millennium Mall area, and the commercial lanes in Blocks 4, 7, 10, and 13-A.",
  },
  {
    q: "How does Gulshan SEO differ from DHA or Clifton SEO?",
    a: "Gulshan has a higher volume of middle-income, price-sensitive searches compared to DHA and Clifton. Keywords often include 'affordable,' 'best value,' and 'near [university/hospital]' modifiers. Content strategy must address price transparency and practical value propositions rather than premium positioning.",
  },
  {
    q: "Can you help medical clinics near Liaquat National Hospital rank locally?",
    a: "Yes. Medical SEO near major Gulshan hospitals requires YMYL-compliant content, MedicalBusiness schema, appointment-focused landing pages, and proximity-optimized Google Business Profile management. I've helped clinics achieve local pack rankings for 'specialist near Liaquat National' queries.",
  },
  {
    q: "What results can I expect from Gulshan-e-Iqbal SEO?",
    a: "Typical results include 150–300% organic traffic growth within 4–6 months, local pack rankings for block-specific queries, and measurable increases in phone calls and WhatsApp inquiries from Google. All campaigns include monthly reporting with Gulshan-specific keyword tracking.",
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
                Hyperlocal SEO · Gulshan-e-Iqbal, Karachi
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                SEO Expert in Gulshan-e-Iqbal, Karachi
              </h1>
              <p className="text-lg text-body mb-4">
                Gulshan-e-Iqbal is Karachi's largest residential neighbourhood — a sprawling 16-block area home to millions of residents, major universities, leading hospitals, and thousands of businesses fighting for Google visibility. The search demand here is massive, but so is the competition.
              </p>
              <p className="text-base text-body mb-4">
                My hyperlocal SEO strategy for Gulshan goes beyond block numbers. I map the commercial zones along Rashid Minhas Road, University Road, and the internal block markets to identify the exact search queries your potential customers use. From "tuition centre Gulshan Block 13-A" to "cardiologist near NED University" — I build content that captures high-intent, neighbourhood-specific traffic that converts.
              </p>
              <p className="text-base text-body mb-8">
                Whether you're a coaching academy, medical clinic, restaurant, or retail store in Gulshan — I deliver data-driven SEO with transparent monthly reporting and measurable ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                  Get Free Gulshan SEO Audit <ArrowRight className="h-4 w-4" />
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
      <section className="section-padding" aria-label="Why Gulshan needs SEO">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Why Gulshan-e-Iqbal Businesses Need Hyperlocal SEO</h2>
          <p className="text-body max-w-3xl mb-6">
            Gulshan-e-Iqbal generates some of the highest local search volumes in Karachi. Its proximity to NED University, Sir Syed University, and major hospitals like Liaquat National creates constant search demand for educational, medical, and daily-life services. But with thousands of businesses competing within 16 blocks, only those with neighbourhood-optimized content win the local pack.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">16</p>
              <p className="text-xs text-subtle mt-1">Blocks with unique search patterns</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">3M+</p>
              <p className="text-xs text-subtle mt-1">Estimated population in Gulshan</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">85%</p>
              <p className="text-xs text-subtle mt-1">Searches include block or road name</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">2x</p>
              <p className="text-xs text-subtle mt-1">Higher search volume vs similar areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Micro-Areas */}
      <section className="section-padding surface-sunken" aria-label="Gulshan micro-areas">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Key Commercial Zones in Gulshan-e-Iqbal</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              { name: "Rashid Minhas Road", desc: "Major arterial road with high commercial density — banks, showrooms, restaurants, and corporate offices driving constant search traffic." },
              { name: "University Road", desc: "Education corridor connecting NED and Sir Syed universities. Coaching centres, bookstores, hostels, and student-oriented businesses dominate queries." },
              { name: "Gulshan Chowrangi", desc: "Central commercial hub with intense competition for food, retail, and service queries. Google Maps visibility here is highly contested." },
              { name: "NIPA Chowrangi", desc: "Junction area connecting Gulshan to other neighbourhoods. Mixed commercial queries for automotive, electronics, and household services." },
              { name: "Block 7 & 10 Markets", desc: "Residential block markets with grocery, pharmacy, salon, and tutoring searches — the daily-life queries that drive consistent local traffic." },
              { name: "Millennium Mall Area", desc: "Shopping and entertainment hub generating retail, fashion, and dining queries with distinct weekend search spikes." },
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
          <h2 className="text-3xl font-bold mb-4">What My Gulshan-e-Iqbal SEO Strategy Includes</h2>
          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            {[
              "Block-level keyword research covering all 16 Gulshan blocks and major roads",
              "Google Business Profile optimization with Gulshan-specific geo-tagged content",
              "Neighbourhood landing pages for 'best [service] in Gulshan' and block-level queries",
              "University-adjacent keyword targeting for student and faculty search patterns",
              "Hospital-proximity SEO for medical clinics near Liaquat National and Ziauddin",
              "Local citation building with Gulshan-accurate NAP on 75+ directories",
              "Schema markup — LocalBusiness, EducationalOrganization, MedicalBusiness",
              "Monthly ranking reports with Gulshan-specific keyword position tracking",
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
          <h2 className="text-3xl font-bold mb-10">Gulshan-e-Iqbal SEO — Frequently Asked Questions</h2>
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

      <CtaBanner heading="Ready to Dominate Local Search in Gulshan-e-Iqbal?" text="Get a free hyperlocal SEO audit for your Gulshan business and outrank competitors in your block." />
    </main>
  </Layout>
);

export default SeoGulshanEIqbal;
