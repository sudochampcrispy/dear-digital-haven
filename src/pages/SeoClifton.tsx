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
  "Looking for an SEO expert in Clifton, Karachi? Naveed Ganatra helps businesses in Clifton Block 1–9, Boat Basin, Do Darya, Sea View, and Teen Talwar rank higher on Google and attract more local customers.";

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
    q: "What makes Clifton different from other areas when it comes to SEO?",
    a: "Clifton has a unique commercial layout — Boat Basin, Do Darya, Sea View, and block-wise markets each create their own search patterns. Residents don't just search 'restaurant Karachi' — they search 'restaurant near Boat Basin' or 'dentist Clifton Block 5.' A Clifton-specific SEO strategy targets these exact searches instead of wasting effort on broad city-level keywords.",
  },
  {
    q: "Which parts of Clifton do you cover?",
    a: "All nine Clifton blocks plus the major commercial areas — Boat Basin, Do Darya, Sea View, Teen Talwar, Clifton Beach, Abdullah Shah Ghazi Road, Khayaban-e-Roomi, and the block markets in Block 4 and Block 5.",
  },
  {
    q: "How competitive is it to rank on Google in Clifton?",
    a: "Very competitive. Clifton has one of Karachi's highest concentrations of premium restaurants, clinics, and lifestyle businesses — and many of them already have some online presence. Standing out requires content built specifically around Clifton's geography and a technically fast website that Google favours.",
  },
  {
    q: "Can you help restaurants near Boat Basin or Do Darya get more customers?",
    a: "Yes. Restaurant SEO in Clifton's dining corridors means optimizing your menu pages, keeping your Google Business Profile active with weekly posts, building a steady flow of genuine reviews, and making sure your restaurant shows up when someone searches 'seafood near Do Darya' or 'best BBQ Boat Basin.'",
  },
  {
    q: "What does a Clifton SEO campaign typically cost?",
    a: "It depends on your industry, competition, and goals. Campaigns for Clifton businesses typically range from PKR 35,000–120,000 per month. I offer a free initial audit so you can see exactly what needs to be done before committing to anything.",
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
                SEO Expert · Clifton, Karachi
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                SEO Expert in Clifton, Karachi
              </h1>
              <p className="text-lg text-body mb-4">
                Clifton is where Karachi's affluent residents live, dine, and shop. From the seafood restaurants lining Do Darya to the boutique clinics in Block 2 and the high-end salons near Boat Basin — this area is packed with businesses competing for the same customers. And most of those customers start their search on Google.
              </p>
              <p className="text-base text-body mb-4">
                I help Clifton businesses show up on Google when it matters most. Not for generic "Karachi" searches — but for the specific queries Clifton residents actually type: "dermatologist Clifton Block 5," "best biryani near Boat Basin," "gym near Sea View." That's where the real customers are, and that's where I focus.
              </p>
              <p className="text-base text-body mb-8">
                My approach is straightforward — optimize your Google Business Profile, build content around how people in Clifton actually search, earn your spot in the local map pack, and track everything with transparent monthly reports. No jargon, no guesswork. Just more customers finding your business on Google.
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

      {/* Why Clifton */}
      <section className="section-padding" aria-label="Why Clifton businesses struggle on Google">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Why Most Clifton Businesses Struggle on Google</h2>
            <p className="text-body">
              Clifton has nine blocks and some of Karachi's most iconic commercial landmarks — each with its own search patterns. A restaurant in Block 8 and a clinic near Teen Talwar face completely different competitors and different customer queries. One-size-fits-all SEO doesn't work here. You need a strategy built around the specific part of Clifton where your customers are.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">9</p>
              <p className="text-xs text-subtle mt-1">Clifton blocks, each with its own market</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">68%</p>
              <p className="text-xs text-subtle mt-1">Clifton searches include a block or landmark</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">4x</p>
              <p className="text-xs text-subtle mt-1">Higher spending power than city average</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">High</p>
              <p className="text-xs text-subtle mt-1">Competition across all service categories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas I Cover */}
      <section className="section-padding surface-sunken" aria-label="Areas in Clifton">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Areas in Clifton I Cover</h2>
            <p className="text-body">
              Each part of Clifton has its own commercial character and its own set of customer searches. I build your SEO strategy around the specific locations where your business operates.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Boat Basin", desc: "Karachi's original food street and one of the most searched dining destinations. Restaurants here need to stand out in a sea of competitors — both on the street and on Google." },
              { name: "Do Darya", desc: "The premium seafood and dining strip along the coast. Evening dining searches spike here, and Google Maps visibility can make or break a restaurant's weeknight traffic." },
              { name: "Sea View & Clifton Beach", desc: "A family and leisure destination with seasonal search spikes. Beach-adjacent businesses, water sports operators, and weekend dining spots benefit from timely content." },
              { name: "Teen Talwar", desc: "One of Clifton's most recognizable landmarks and a busy commercial junction. Medical clinics, banks, and professional services draw significant search traffic here." },
              { name: "Block 4 & 5 Markets", desc: "Everyday residential commercial strips where people search for groceries, pharmacies, salons, and household services — consistent, year-round local demand." },
              { name: "Khayaban-e-Roomi", desc: "A growing commercial road with IT offices, educational centres, and mixed-use developments. Search demand here is rising fast, with less competition than established areas." },
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
              Every campaign is built around getting your Clifton business in front of the people who are actively searching for what you offer. Here's what's included:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Keyword research focused on Clifton-specific searches — by block, landmark, and commercial zone",
              "Google Business Profile setup and optimization with local photos and regular updates",
              "Content pages built around how Clifton residents actually search for your services",
              "Listings on Pakistani business directories with accurate Clifton address and contact details",
              "A strategy to get more genuine Google reviews from your Clifton customers",
              "Technical improvements to make your website faster and easier for Google to understand",
              "Analysis of what your top-ranking Clifton competitors are doing — and how to beat them",
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
      <section className="section-padding surface-sunken" aria-label="Industries in Clifton">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Industries I Can Help in Clifton</h2>
            <p className="text-body">
              Clifton's commercial landscape is diverse — from fine dining to specialist healthcare. Here's how SEO can bring more customers to businesses like yours.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { title: "Restaurants & Fine Dining", desc: "Boat Basin, Do Darya, Sea View — Clifton's dining scene is legendary. When someone searches 'best seafood Clifton' or 'café near Boat Basin,' your restaurant needs to be the top result." },
              { title: "Specialist Doctors & Clinics", desc: "Patients in Clifton search for dermatologists, dentists, and specialists by block and landmark. Trustworthy content and a strong Google profile bring them to your clinic." },
              { title: "Real Estate & Property", desc: "Clifton property is premium. Buyers and renters search by block number, sea-facing status, and property type. Ranking for these searches connects you with serious prospects." },
              { title: "Law Firms & Legal Services", desc: "Corporate law, property disputes, family matters — Clifton residents search for lawyers they can trust. Professional online presence builds credibility before they even call." },
              { title: "Luxury Retail & Boutiques", desc: "Clifton's shopping streets attract high-spending customers. Being visible on Google means turning online searches into in-store visits — especially during seasonal peaks." },
              { title: "Interior Design & Architecture", desc: "Clifton homeowners invest heavily in renovation and design. Searches like 'interior designer Clifton Karachi' are high-intent with significant project values." },
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
                "Private Schools & Academies",
                "Gyms & Fitness Studios",
                "Salons & Beauty Studios",
                "Car Dealerships & Auto Services",
                "IT Companies & Software Houses",
                "Pharmacies & Diagnostic Labs",
                "Event Planners & Wedding Services",
                "Pet Care & Veterinary",
                "Hotels & Guest Houses",
                "Jewellery & Watch Stores",
                "Art Galleries & Creative Studios",
                "Travel & Tourism Agencies",
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

      <CtaBanner heading="Want More Customers From Google in Clifton?" text="Get a free SEO audit for your Clifton business. I'll show you exactly where you're losing traffic and how to fix it." />
    </main>
  </Layout>
);

export default SeoClifton;
