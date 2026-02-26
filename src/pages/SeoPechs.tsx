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
  "Looking for an SEO expert in PECHS, Karachi? Naveed Ganatra helps businesses in PECHS Block 1–6, Tariq Road, Shahrah-e-Quaideen, and Khalid Bin Waleed Road rank higher on Google and attract more local customers.";

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
    a: "PECHS sits at Karachi's geographic centre, connecting Clifton, Gulshan, and Saddar. Its central location and established commercial infrastructure — especially Tariq Road and Shahrah-e-Quaideen — generate high search volume for shopping, dining, healthcare, and professional services. Businesses here naturally draw customers from multiple surrounding neighbourhoods.",
  },
  {
    q: "Which parts of PECHS do you cover?",
    a: "All six PECHS blocks plus the major commercial roads — Tariq Road, Shahrah-e-Quaideen, Khalid Bin Waleed Road, Main PECHS Boulevard, and the commercial areas in Block 2 and Block 6. Each zone has unique search patterns that need different keyword strategies.",
  },
  {
    q: "How competitive is Tariq Road for SEO?",
    a: "Very competitive. Tariq Road is one of Pakistan's busiest shopping streets with hundreds of retail stores. Standing out requires product-category content, an active Google Business Profile with regular posts, genuine reviews, and a website that loads fast on mobile — where most shoppers search.",
  },
  {
    q: "Can you help law firms and corporate offices in PECHS?",
    a: "Yes. PECHS has a high concentration of law firms and chartered accountancy practices. I build service-area pages, implement professional service schema, and create authority content that positions your firm as the trusted choice when potential clients search for legal or financial help in the area.",
  },
  {
    q: "What does a PECHS SEO campaign typically cost?",
    a: "Campaigns for PECHS businesses typically range from PKR 35,000–120,000 per month depending on your industry, competition, and goals. I offer a free initial audit so you can see exactly what's needed before committing.",
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
                SEO Expert · PECHS, Karachi
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                SEO Expert in PECHS, Karachi
              </h1>
              <p className="text-lg text-body mb-4">
                PECHS is Karachi's central commercial hub — home to Tariq Road (one of Pakistan's busiest shopping streets), a dense concentration of law firms and corporate offices, and a thriving healthcare sector. Its location means businesses here draw customers from Clifton, Gulshan, Saddar, and beyond.
              </p>
              <p className="text-base text-body mb-4">
                But centrality also means competition. Hundreds of businesses across six PECHS blocks fight for the same customers on Google. I help PECHS businesses stand out by targeting the specific roads, blocks, and landmarks that people actually search for — "shoes Tariq Road Karachi," "dentist PECHS Block 2," "lawyer Shahrah-e-Quaideen." These precise, high-intent searches are where the real customers come from.
              </p>
              <p className="text-base text-body mb-8">
                From optimizing your Google Business Profile and building content that matches how PECHS residents search, to earning your spot in the local map pack — everything I do is focused on measurable results with transparent monthly reporting.
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

      {/* Why PECHS */}
      <section className="section-padding" aria-label="Why PECHS businesses struggle on Google">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Why Most PECHS Businesses Struggle on Google</h2>
            <p className="text-body">
              PECHS combines residential density with Karachi's most iconic shopping district. Tariq Road alone generates thousands of daily searches for clothing, electronics, and retail. Add the professional services in Blocks 2 and 6, healthcare along Shahrah-e-Quaideen, and dining on Khalid Bin Waleed Road — and you have a neighbourhood where generic SEO simply doesn't cut it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">6</p>
              <p className="text-xs text-subtle mt-1">PECHS blocks with distinct markets</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">High</p>
              <p className="text-xs text-subtle mt-1">Tariq Road daily search volume</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">Central</p>
              <p className="text-xs text-subtle mt-1">Location draws from all sides</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">65%</p>
              <p className="text-xs text-subtle mt-1">Searches include a road or block</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas I Cover */}
      <section className="section-padding surface-sunken" aria-label="Areas in PECHS">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Areas in PECHS I Cover</h2>
            <p className="text-body">
              Each commercial zone in PECHS has its own customer base and search patterns. I build your SEO strategy around the specific locations where your business operates.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Tariq Road", desc: "Karachi's premier shopping street. Clothing, jewellery, and electronics retailers face intense competition — standing out on Google is the difference between a packed shop and an empty one." },
              { name: "Shahrah-e-Quaideen", desc: "Healthcare and professional services corridor. Medical clinics, diagnostic labs, and law firms draw patients and clients from across the city." },
              { name: "Khalid Bin Waleed Road", desc: "Connecting PECHS to Saddar with diverse commercial activity — electronics markets, restaurants, and service businesses serving a wide catchment area." },
              { name: "Block 2 Commercial", desc: "Professional services hub with law firms, CA offices, and consultancies. People searching here are looking for trusted professionals, not window shopping." },
              { name: "Block 6 Market", desc: "Residential market with everyday service queries — grocery, pharmacy, salon, maintenance. Consistent year-round demand with low SEO competition." },
              { name: "Main PECHS Boulevard", desc: "Internal connecting road with cafés, tuition centres, and small businesses serving the residential blocks. Growing search interest with room to dominate." },
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
              Every campaign is built around getting your PECHS business in front of the people who are actively searching for what you offer. Here's what's included:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Keyword research focused on PECHS-specific searches — by block, road, and landmark",
              "Google Business Profile setup and optimization with local photos and regular updates",
              "Content pages built around how PECHS residents and shoppers actually search",
              "Listings on Pakistani business directories with accurate PECHS address and contact details",
              "A strategy to get more genuine Google reviews from your PECHS customers",
              "Technical improvements to make your website faster and easier for Google to understand",
              "Analysis of what your top-ranking PECHS competitors are doing — and how to beat them",
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
      <section className="section-padding surface-sunken" aria-label="Industries in PECHS">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Industries I Can Help in PECHS</h2>
            <p className="text-body">
              PECHS has one of the most diverse commercial landscapes in Karachi — from high-street retail to professional services. Here's how SEO can bring more customers to businesses like yours.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { title: "Retail & Fashion (Tariq Road)", desc: "Tariq Road shoppers search by product category — 'bridal lehenga Tariq Road,' 'men's shoes PECHS.' Product-focused content and shopping intent optimization bring them to your store." },
              { title: "Law Firms & Legal Services", desc: "Corporate law, property disputes, family matters — PECHS has a high concentration of legal professionals. Professional content and trust signals build credibility before clients call." },
              { title: "Doctors & Medical Clinics", desc: "Patients search for specialists along Shahrah-e-Quaideen by speciality and proximity. Strong Google profiles and trustworthy content bring them to your clinic." },
              { title: "Chartered Accountants & Finance", desc: "Tax season drives massive search spikes for CA firms in PECHS. Year-round content keeps you visible for business accounting, audit, and financial advisory searches." },
              { title: "Restaurants & Cafés", desc: "PECHS dining options compete with Clifton and DHA. When someone searches 'lunch near Tariq Road' or 'café PECHS,' your restaurant needs to be the answer." },
              { title: "Jewellery & Bridal Shops", desc: "Tariq Road is synonymous with bridal shopping. Ranking for 'gold jewellery Tariq Road' or 'bridal sets PECHS' connects you with high-value customers." },
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
                "Electronics & Mobile Shops",
                "Salons & Beauty Studios",
                "Coaching Centres & Academies",
                "Pharmacies & Diagnostic Labs",
                "Real Estate Agencies",
                "Tailors & Alteration Shops",
                "IT Companies & Startups",
                "Dental Clinics",
                "Event & Wedding Planners",
                "Gyms & Fitness Centres",
                "Travel Agencies",
                "Furniture & Home Décor",
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

      <CtaBanner heading="Want More Customers From Google in PECHS?" text="Get a free SEO audit for your PECHS business. I'll show you exactly where you're losing traffic and how to fix it." />
    </main>
  </Layout>
);

export default SeoPechs;
