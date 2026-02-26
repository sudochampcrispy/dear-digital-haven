import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import LeadGenForm from "@/components/LeadGenForm";
import { CheckCircle2, MapPin, ArrowRight } from "lucide-react";

const BASE = "https://seoexpertinkarachi.com";
const SLUG = "/korangi";
const TITLE = "SEO Expert in Korangi, Karachi — Naveed Ganatra";
const DESC = "Looking for an SEO expert in Korangi, Karachi? Naveed Ganatra helps businesses in Korangi Industrial Area, Korangi Crossing, and surrounding sectors rank higher on Google and attract more customers.";

const breadcrumb = buildBreadcrumb([{ name: "Home", url: BASE + "/" }, { name: "Local SEO Karachi", url: BASE + "/local-seo-karachi" }, { name: "Korangi", url: BASE + SLUG }]);
const webPage = buildWebPage({ name: TITLE, description: DESC, url: BASE + SLUG });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: { "@type": "Place", name: "Korangi, Karachi", containedInPlace: { "@type": "City", name: "Karachi" } }, serviceType: "Search Engine Optimization", description: DESC };

const faqData = [
  { q: "Why do Korangi businesses need SEO?", a: "Korangi is one of Karachi's largest industrial and residential zones. Thousands of factories, workshops, and businesses operate here, and the residential population is massive. Whether you serve local residents or B2B clients, people increasingly search Google to find Korangi suppliers, service providers, and shops." },
  { q: "Which areas in Korangi do you cover?", a: "Korangi Industrial Area, Korangi Crossing, Korangi sectors 31-A through 50, Zaman Town, Zia Colony, Ibrahim Hyderi, and connecting areas to Landhi." },
  { q: "Can SEO help industrial businesses in Korangi?", a: "Absolutely. Export-oriented manufacturers, packaging companies, and industrial suppliers benefit enormously from SEO. Buyers — both domestic and international — search for 'packaging manufacturer Karachi' or 'textile exporter Korangi.' Ranking for these queries brings serious business inquiries." },
  { q: "How long does it take to see results?", a: "Specific Korangi queries can improve within 4–8 weeks. More competitive industrial terms take 3–5 months. Monthly reports track your progress." },
  { q: "What does a Korangi SEO campaign cost?", a: "Campaigns range from PKR 25,000–100,000 per month depending on whether you're targeting local residential or B2B industrial keywords. Free initial audit available." },
];
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const SeoKorangi = () => (
  <Layout>
    <SeoHead title={TITLE} description={DESC} canonical={BASE + SLUG} />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken" aria-label="Hero">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">SEO Expert · Korangi, Karachi</p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">SEO Expert in Korangi, Karachi</h1>
              <p className="text-lg text-body mb-4">Korangi is Karachi's industrial powerhouse — home to one of the country's largest industrial zones alongside a massive residential population. Whether you run a factory looking for export clients, a workshop serving local businesses, or a shop serving Korangi's residents, getting found on Google can transform your customer pipeline.</p>
              <p className="text-base text-body mb-4">I help Korangi businesses show up on Google for the searches that drive real business. For industrial companies, that means ranking for queries like "packaging manufacturer Karachi" or "textile supplier Korangi." For local service businesses, it's "restaurant near Korangi Crossing" or "doctor Korangi sector 33." I target the exact searches your customers make.</p>
              <p className="text-base text-body mb-8">Korangi is one of Karachi's most under-optimized areas for SEO. The competition is low, the search demand is high, and businesses that invest now will establish a strong Google presence before competitors wake up.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Get a Free SEO Audit <ArrowRight className="h-4 w-4" /></a>
                <Link to="/case-studies" className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">View Case Studies</Link>
              </div>
            </div>
            <LeadGenForm />
          </div>
        </div>
      </section>

      <section className="section-padding" aria-label="Why Korangi needs SEO">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Why Local SEO Matters in Korangi</h2>
            <p className="text-body">Korangi's dual identity — industrial zone and residential area — creates two distinct search markets. Industrial buyers search for manufacturers and suppliers, while residents search for everyday services. Both markets are under-served by SEO, creating massive opportunity for businesses ready to invest.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="metric-card text-center"><p className="stat-number text-3xl">5,000+</p><p className="text-xs text-subtle mt-1">Factories & industrial units</p></div>
            <div className="metric-card text-center"><p className="stat-number text-3xl">Large</p><p className="text-xs text-subtle mt-1">Residential population</p></div>
            <div className="metric-card text-center"><p className="stat-number text-3xl">Very Low</p><p className="text-xs text-subtle mt-1">SEO competition</p></div>
            <div className="metric-card text-center"><p className="stat-number text-3xl">High</p><p className="text-xs text-subtle mt-1">B2B search potential</p></div>
          </div>
        </div>
      </section>

      <section className="section-padding surface-sunken" aria-label="Areas in Korangi">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Areas in Korangi I Cover</h2>
            <p className="text-body">From the industrial zones to the residential sectors, I target the specific areas where your customers and clients are searching.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Korangi Industrial Area", desc: "Pakistan's largest industrial zone. Manufacturers, exporters, and B2B service providers can capture domestic and international buyer searches with proper SEO." },
              { name: "Korangi Crossing", desc: "Major commercial junction serving both industrial and residential populations. Restaurants, banks, and services draw steady search traffic." },
              { name: "Sectors 31-A to 50", desc: "Residential sectors with growing commercial activity. Everyday service searches — clinics, groceries, tuition — are consistent and under-optimized." },
              { name: "Zaman Town", desc: "Residential area with neighbourhood markets serving daily needs. Low competition means quick wins for local businesses investing in SEO." },
              { name: "Ibrahim Hyderi", desc: "Coastal area with fishing industry and residential searches. Unique keyword opportunities around seafood, coastal services, and local commerce." },
              { name: "Landhi Connection", desc: "Connecting area between Korangi and Landhi with mixed industrial and residential search patterns. Growing commercial development." },
            ].map((area) => (
              <div key={area.name} className="metric-card"><h3 className="font-semibold text-heading mb-2 flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> {area.name}</h3><p className="text-sm text-body">{area.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" aria-label="What you get">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">What You Get When You Work With Me</h2>
            <p className="text-body">Whether you're targeting local customers or international buyers, every campaign is customized for your specific Korangi market.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {["Keyword research for both B2B industrial and local residential searches", "Google Business Profile setup and optimization with accurate Korangi location data", "Content pages targeting how your customers or buyers search for your products/services", "Listings on Pakistani and international business directories", "A strategy to build genuine Google reviews from your customers or clients", "Technical improvements to make your website faster and mobile-friendly", "Competitor analysis — what's working for others in your industry", "Monthly reports showing ranking improvements and traffic growth"].map((item) => (
              <div key={item} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /><p className="text-sm text-body">{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding surface-sunken" aria-label="Industries in Korangi">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Industries I Can Help in Korangi</h2>
            <p className="text-body">Korangi's unique mix of industrial and residential makes it one of the most interesting areas for SEO in Karachi. Here's how I can help different business types.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { title: "Manufacturers & Exporters", desc: "Korangi manufacturers can reach international buyers searching for Pakistani suppliers. SEO brings inquiries from buyers who are ready to place orders." },
              { title: "Packaging & Printing", desc: "Karachi's packaging industry is concentrated in Korangi. Ranking for 'packaging company Karachi' or 'custom printing Korangi' captures high-value B2B leads." },
              { title: "Textile & Garment Factories", desc: "Export-oriented textile businesses can reach global buyers through SEO. Product pages and supplier profiles bring serious business inquiries." },
              { title: "Restaurants & Food Businesses", desc: "Korangi's working population searches for lunch spots and delivery daily. Being visible on Google means steady orders from nearby offices and factories." },
              { title: "Medical Clinics & Pharmacies", desc: "Both industrial workers and residents need healthcare. Ranking for 'clinic near Korangi Crossing' brings patients to your practice." },
              { title: "Auto Workshops & Parts", desc: "Industrial vehicle maintenance and parts are big in Korangi. Searches for specific services bring customers who need work done now." },
            ].map((ind) => (
              <div key={ind.title} className="metric-card"><h3 className="font-semibold text-heading mb-2">{ind.title}</h3><p className="text-sm text-body">{ind.desc}</p></div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-heading mb-4">Also Serving</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Chemical Suppliers", "Logistics & Transport", "Steel & Metal Works", "Grocery & General Stores", "Salons & Barber Shops", "Coaching Centres", "Mobile Phone Shops", "Hardware Stores", "Welding & Fabrication", "Fish & Seafood Markets", "Electrical Supplies", "Courier Services"].map((name) => (
                <span key={name} className="inline-flex items-center rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-heading">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" aria-label="FAQs">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqData.map((f) => (<details key={f.q} className="group metric-card"><summary className="cursor-pointer font-semibold text-heading list-none flex items-center justify-between">{f.q}<span className="ml-4 text-primary text-xl group-open:rotate-45 transition-transform">+</span></summary><p className="mt-3 text-sm text-body">{f.a}</p></details>))}
          </div>
        </div>
      </section>

      <aside className="section-padding surface-sunken" aria-label="Nearby areas">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold mb-4">Also Serving Nearby Areas</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[{ name: "Malir", link: "/malir" }, { name: "Gulistan-e-Johar", link: "/gulistan-e-johar" }, { name: "Shahrah-e-Faisal", link: "/shahrah-e-faisal" }, { name: "Scheme 33", link: "/scheme-33" }].map((a) => (
              <Link key={a.name} to={a.link} className="inline-flex items-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-heading hover:text-primary transition-colors"><MapPin className="h-3.5 w-3.5 text-primary mr-2" /> SEO Expert in {a.name}</Link>
            ))}
          </div>
        </div>
      </aside>
      <CtaBanner heading="Want More Customers From Google in Korangi?" text="Get a free SEO audit for your Korangi business. I'll show you exactly where you're losing traffic and how to fix it." />
    </main>
  </Layout>
);
export default SeoKorangi;
