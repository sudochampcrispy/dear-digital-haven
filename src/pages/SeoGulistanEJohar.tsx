import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import LeadGenForm from "@/components/LeadGenForm";
import { CheckCircle2, MapPin, ArrowRight } from "lucide-react";

const BASE = "https://seoexpertinkarachi.com";
const SLUG = "/gulistan-e-johar";
const TITLE = "SEO Expert in Gulistan-e-Johar, Karachi — Naveed Ganatra";
const DESC =
  "Looking for an SEO expert in Gulistan-e-Johar, Karachi? Naveed Ganatra helps businesses in Johar Block 1–19, Perfume Chowk, Samama Shopping Centre, and surrounding areas rank higher on Google and attract more local customers.";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: BASE + "/" },
  { name: "Local SEO Karachi", url: BASE + "/local-seo-karachi" },
  { name: "Gulistan-e-Johar", url: BASE + SLUG },
]);

const webPage = buildWebPage({ name: TITLE, description: DESC, url: BASE + SLUG });

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "Person", name: "Naveed Ganatra" },
  areaServed: {
    "@type": "Place",
    name: "Gulistan-e-Johar, Karachi",
    containedInPlace: { "@type": "City", name: "Karachi" },
  },
  serviceType: "Search Engine Optimization",
  description: DESC,
};

const faqData = [
  {
    q: "Why do Gulistan-e-Johar businesses need local SEO?",
    a: "Gulistan-e-Johar is one of Karachi's fastest-growing residential areas with 19 blocks and a rapidly expanding population. Residents search for services by block number and local landmarks like Perfume Chowk and Samama. Businesses that optimize for these specific searches capture customers that generic Karachi-level campaigns completely miss.",
  },
  {
    q: "Which blocks and areas do you cover?",
    a: "All 19 Johar blocks plus the major commercial zones — Perfume Chowk, Samama Shopping Centre, Johar Chowrangi, Dalmia area, and the block markets in Block 7, 13, and 14. Each area has different customer patterns.",
  },
  {
    q: "Is Johar a good area for SEO investment?",
    a: "Excellent. Johar has high population density, growing commercial activity, and very low SEO competition. Most businesses here haven't invested in local SEO yet, so early movers can dominate search results with relatively modest effort.",
  },
  {
    q: "How long does it take to see results?",
    a: "For specific queries like 'pharmacy Johar Block 14 Karachi,' improvements come within 4–8 weeks. More competitive terms typically take 3–5 months. Monthly reports keep you informed of progress throughout.",
  },
  {
    q: "What does a Johar SEO campaign cost?",
    a: "Campaigns typically range from PKR 25,000–90,000 per month depending on your industry and goals. I offer a free initial audit so you can see what's needed before making any commitment.",
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

const SeoGulistanEJohar = () => (
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
                SEO Expert · Gulistan-e-Johar, Karachi
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                SEO Expert in Gulistan-e-Johar, Karachi
              </h1>
              <p className="text-lg text-body mb-4">
                Gulistan-e-Johar is one of Karachi's fastest-growing neighbourhoods — 19 blocks with a rapidly expanding population and a commercial scene that's developing fast. New restaurants, clinics, coaching centres, and retail shops are opening regularly, and the competition for local customers is intensifying. The businesses that show up on Google are the ones that win.
              </p>
              <p className="text-base text-body mb-4">
                I help Johar businesses get found on Google for the searches that matter most. Residents here search by block number and landmark — "dentist Johar Block 14," "restaurant near Perfume Chowk," "gym Gulistan-e-Johar." I build your SEO strategy around these exact patterns so your business shows up when it counts.
              </p>
              <p className="text-base text-body mb-8">
                The good news? Most businesses in Johar haven't invested in proper SEO yet. That means there's a genuine first-mover advantage for those who start now. I'll optimize your Google presence, build the right content, and give you clear monthly reports showing exactly what's working.
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

      {/* Why Johar */}
      <section className="section-padding" aria-label="Why Johar businesses need SEO">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Why Local SEO Matters in Gulistan-e-Johar</h2>
            <p className="text-body">
              Johar's rapid growth means more businesses opening and more residents searching for services online. The area's 19 blocks and expanding population create massive search demand — but most businesses here rely on word-of-mouth alone. Those that invest in local SEO now will establish themselves as the go-to options before competitors catch on.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">19</p>
              <p className="text-xs text-subtle mt-1">Blocks with growing markets</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">Fast</p>
              <p className="text-xs text-subtle mt-1">Population & commercial growth</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">Low</p>
              <p className="text-xs text-subtle mt-1">Current SEO competition</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">Big</p>
              <p className="text-xs text-subtle mt-1">First-mover advantage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas I Cover */}
      <section className="section-padding surface-sunken" aria-label="Areas in Johar">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Areas in Gulistan-e-Johar I Cover</h2>
            <p className="text-body">
              Johar's commercial landscape is spread across multiple hubs, each with its own search patterns. I target the specific areas where your customers are searching.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Perfume Chowk", desc: "Johar's busiest commercial landmark with restaurants, retail shops, and service businesses. Being visible when someone searches 'near Perfume Chowk' is essential for any business here." },
              { name: "Samama Shopping Centre", desc: "Major shopping destination drawing customers from across Johar. Retail and dining businesses near Samama benefit from landmark-based searches." },
              { name: "Johar Chowrangi", desc: "Central junction connecting multiple Johar blocks. Mixed commercial activity with restaurants, banks, and everyday services generating steady search traffic." },
              { name: "Block 7 & Block 13 Markets", desc: "Active residential markets with consistent demand for groceries, pharmacies, salons, and daily services — reliable year-round search volume." },
              { name: "Dalmia Area", desc: "Connecting zone between Johar and surrounding neighbourhoods. Growing commercial development means increasing search interest with low competition." },
              { name: "Block 14–19 (New Blocks)", desc: "Johar's newest and fastest-growing blocks. Commercial activity is ramping up quickly — businesses here can establish Google dominance early." },
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
              Every campaign is built around getting your Johar business in front of the right customers at the right time. Here's what's included:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Keyword research focused on Johar-specific searches — by block, chowk, and landmark",
              "Google Business Profile setup and optimization with local photos and regular updates",
              "Content pages built around how Johar residents actually search for your services",
              "Listings on Pakistani business directories with accurate Johar address and contact details",
              "A strategy to get more genuine Google reviews from your local customers",
              "Technical improvements to make your website faster and easier for Google to understand",
              "Analysis of what your Johar competitors are doing on Google — and how to outrank them",
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
      <section className="section-padding surface-sunken" aria-label="Industries in Johar">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Industries I Can Help in Gulistan-e-Johar</h2>
            <p className="text-body">
              Johar's commercial landscape is growing fast. Whether you're an established business or just opened, here's how SEO can bring more customers to your door.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { title: "Restaurants & Fast Food", desc: "Johar's dining scene is expanding rapidly. When someone searches 'best pizza Gulistan-e-Johar' or 'restaurant near Perfume Chowk,' your business needs to be the top result." },
              { title: "Doctors & Medical Clinics", desc: "Residents search for healthcare by block and speciality. A strong Google presence means patients choose your clinic over the competition." },
              { title: "Coaching Centres & Academies", desc: "Education demand is massive in Johar. Parents search for tuition by subject, level, and block — ranking for these searches fills your classrooms." },
              { title: "Real Estate & Property", desc: "Johar property is moving fast, especially in newer blocks. Buyers search by block number and property type — being visible connects you with ready buyers." },
              { title: "Gyms & Fitness Studios", desc: "Health-conscious Johar residents search for fitness options near their block. Local SEO puts your gym in front of people ready to sign up." },
              { title: "Retail & Shopping", desc: "From Samama Shopping Centre to block markets, Johar shoppers search before they visit. Product-focused content helps them find your store." },
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
                "Pharmacies & Medical Stores",
                "Salons & Beauty Studios",
                "Car Workshops & Auto Services",
                "Mobile Phone Shops",
                "Grocery & Supermarkets",
                "Dental Clinics",
                "Tailors & Clothing Shops",
                "Electronics Repair",
                "Wedding & Event Services",
                "Plumbers & Electricians",
                "Furniture Shops",
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
              { name: "Gulshan-e-Iqbal", link: "/gulshan-e-iqbal" },
              { name: "Scheme 33", link: "/scheme-33" },
              { name: "Malir", link: "/malir" },
              { name: "Korangi", link: "/korangi" },
            ].map((a) => (
              <Link key={a.name} to={a.link} className="inline-flex items-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-heading hover:text-primary transition-colors">
                <MapPin className="h-3.5 w-3.5 text-primary mr-2" /> SEO Expert in {a.name}
              </Link>
            ))}
          </div>
        </div>
      </aside>

      <CtaBanner heading="Want More Customers From Google in Johar?" text="Get a free SEO audit for your Gulistan-e-Johar business. I'll show you exactly where you're losing traffic and how to fix it." />
    </main>
  </Layout>
);

export default SeoGulistanEJohar;
