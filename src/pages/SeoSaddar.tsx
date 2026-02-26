import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import LeadGenForm from "@/components/LeadGenForm";
import { CheckCircle2, MapPin, ArrowRight } from "lucide-react";

const BASE = "https://seoexpertinkarachi.com";
const SLUG = "/saddar";
const TITLE = "SEO Expert in Saddar, Karachi — Naveed Ganatra";
const DESC =
  "Looking for an SEO expert in Saddar, Karachi? Naveed Ganatra helps businesses in Saddar, Empress Market, Zaibunnisa Street, and surrounding commercial areas rank higher on Google and attract more customers.";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: BASE + "/" },
  { name: "Local SEO Karachi", url: BASE + "/local-seo-karachi" },
  { name: "Saddar", url: BASE + SLUG },
]);
const webPage = buildWebPage({ name: TITLE, description: DESC, url: BASE + SLUG });
const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service",
  provider: { "@type": "Person", name: "Naveed Ganatra" },
  areaServed: { "@type": "Place", name: "Saddar, Karachi", containedInPlace: { "@type": "City", name: "Karachi" } },
  serviceType: "Search Engine Optimization", description: DESC,
};

const faqData = [
  { q: "Why does a Saddar business need SEO?", a: "Saddar is Karachi's original commercial centre — one of the most searched business districts in the city. From Empress Market to Zaibunnisa Street, thousands of people search for Saddar shops, services, and restaurants daily. If your business isn't showing up in those results, you're losing customers to competitors who are." },
  { q: "Which areas in Saddar do you cover?", a: "Empress Market, Zaibunnisa Street, Preedy Street, Saddar Bazaar, Bohri Bazaar, Abdullah Haroon Road, Regal Chowk, and all surrounding commercial lanes." },
  { q: "Is SEO worth it for traditional Saddar shops?", a: "Absolutely. Even traditional brick-and-mortar shops benefit from local SEO because customers now search on Google before visiting. 'Electronics shop Saddar,' 'tailor near Empress Market,' 'bookstore Zaibunnisa Street' — these are real searches happening every day." },
  { q: "How long does it take to see results?", a: "Specific Saddar queries can improve within 4–8 weeks. Competitive terms take 3–5 months. Monthly reports track your progress throughout." },
  { q: "What does a Saddar SEO campaign cost?", a: "Campaigns range from PKR 25,000–90,000 per month depending on your industry. I offer a free initial audit before any commitment." },
];
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const SeoSaddar = () => (
  <Layout>
    <SeoHead title={TITLE} description={DESC} canonical={BASE + SLUG} />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken" aria-label="Hero">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">SEO Expert · Saddar, Karachi</p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">SEO Expert in Saddar, Karachi</h1>
              <p className="text-lg text-body mb-4">Saddar is Karachi's original downtown — a sprawling commercial district that has been the city's shopping and business hub for decades. From the historic Empress Market to the electronics shops on Regal Chowk and the bookstores on Zaibunnisa Street, Saddar generates enormous search traffic from buyers across the entire city.</p>
              <p className="text-base text-body mb-4">I help Saddar businesses show up on Google when customers are searching for exactly what you sell. Whether your shop is on Preedy Street, Bohri Bazaar, or Abdullah Haroon Road — I build your SEO around the way people actually search for Saddar businesses: by product, landmark, and street name.</p>
              <p className="text-base text-body mb-8">Saddar's unique advantage is its draw — people come here from all over Karachi to shop. The businesses that show up on Google before the customer leaves home are the ones that get the visit. I make sure that's your business.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Get a Free SEO Audit <ArrowRight className="h-4 w-4" /></a>
                <Link to="/case-studies" className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">View Case Studies</Link>
              </div>
            </div>
            <LeadGenForm />
          </div>
        </div>
      </section>

      <section className="section-padding" aria-label="Why Saddar businesses need SEO">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Why Local SEO Matters in Saddar</h2>
            <p className="text-body">Saddar draws shoppers from across Karachi — but those shoppers research on Google before they visit. They compare shops, check reviews, and search for specific products. The businesses that dominate these searches get the foot traffic. The ones that don't have a Google presence lose customers to competitors who do.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="metric-card text-center"><p className="stat-number text-3xl">City-Wide</p><p className="text-xs text-subtle mt-1">Customer draw from all Karachi</p></div>
            <div className="metric-card text-center"><p className="stat-number text-3xl">High</p><p className="text-xs text-subtle mt-1">Daily search volume for Saddar shops</p></div>
            <div className="metric-card text-center"><p className="stat-number text-3xl">Low</p><p className="text-xs text-subtle mt-1">Businesses with proper SEO</p></div>
            <div className="metric-card text-center"><p className="stat-number text-3xl">Strong</p><p className="text-xs text-subtle mt-1">Purchase intent in searches</p></div>
          </div>
        </div>
      </section>

      <section className="section-padding surface-sunken" aria-label="Areas in Saddar">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Areas in Saddar I Cover</h2>
            <p className="text-body">Saddar's commercial zones each have their own identity and search patterns. I optimize your presence for the specific markets where your customers shop.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Empress Market", desc: "One of Karachi's most iconic landmarks. Customers search for everything from fresh produce to pets to household goods — landmark-based queries drive consistent traffic." },
              { name: "Zaibunnisa Street", desc: "Famous for bookstores, stationery, and cultural shopping. Searches by street name are common and highly specific — perfect for local SEO targeting." },
              { name: "Bohri Bazaar", desc: "Traditional wholesale and retail market. Shoppers search for specific products before visiting — clothing, fabrics, and household items drive search volume." },
              { name: "Regal Chowk", desc: "Electronics and mobile phone hub. Product-specific searches like 'mobile phone shop Regal Chowk' have strong purchase intent." },
              { name: "Preedy Street", desc: "Mixed commercial area with offices, shops, and eateries. Growing search interest makes it a good opportunity for early SEO investment." },
              { name: "Abdullah Haroon Road", desc: "Major connecting road with restaurants, banks, and hotels. Business and tourism-related searches create diverse keyword opportunities." },
            ].map((area) => (
              <div key={area.name} className="metric-card">
                <h3 className="font-semibold text-heading mb-2 flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> {area.name}</h3>
                <p className="text-sm text-body">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" aria-label="What you get">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">What You Get When You Work With Me</h2>
            <p className="text-body">Every campaign is built around getting your Saddar business in front of the shoppers who are searching before they visit. Here's what's included:</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {["Keyword research focused on Saddar-specific searches — by street, market, and product", "Google Business Profile setup and optimization with local photos and regular updates", "Content pages built around how shoppers actually search for products in Saddar", "Listings on Pakistani business directories with accurate Saddar address and contact details", "A strategy to get more genuine Google reviews from your customers", "Technical improvements to make your website faster and mobile-friendly", "Analysis of what your Saddar competitors are doing on Google — and how to outrank them", "Monthly reports showing exactly where you rank and how much traffic you're getting"].map((item) => (
              <div key={item} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /><p className="text-sm text-body">{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding surface-sunken" aria-label="Industries in Saddar">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Industries I Can Help in Saddar</h2>
            <p className="text-body">Saddar's commercial diversity is unmatched in Karachi. From traditional bazaars to modern offices, here's how SEO can bring more customers to your business.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { title: "Electronics & Mobile Shops", desc: "Regal Chowk shoppers search by product and brand before visiting. Product-focused SEO means they come to your shop specifically, not just browse." },
              { title: "Bookstores & Stationery", desc: "Zaibunnisa Street is synonymous with books. Ranking for 'bookshop Saddar' or 'stationery Zaibunnisa Street' connects you with loyal readers and students." },
              { title: "Wholesale & Retail Fashion", desc: "Bohri Bazaar and Saddar's clothing markets draw buyers from across the city. Showing up on Google before they leave home gives you the edge." },
              { title: "Restaurants & Street Food", desc: "Saddar has legendary food spots. When someone searches 'best chai Saddar' or 'nihari near Empress Market,' your restaurant should be the answer." },
              { title: "Hotels & Guest Houses", desc: "Tourists and business travelers search for accommodation near Saddar landmarks. Hotel SEO with reviews and photos drives bookings." },
              { title: "Jewellery & Traditional Crafts", desc: "Saddar's jewellery and handicraft shops serve customers city-wide. Being visible on Google expands your reach beyond foot traffic." },
            ].map((ind) => (
              <div key={ind.title} className="metric-card"><h3 className="font-semibold text-heading mb-2">{ind.title}</h3><p className="text-sm text-body">{ind.desc}</p></div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-heading mb-4">Also Serving</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Pharmacies", "Tailors & Alteration Shops", "Photography Studios", "Printing & Design", "Travel Agencies", "Car Parts & Accessories", "Optical Shops", "Musical Instrument Stores", "Office Supplies", "Sports Equipment", "Watch Repair", "Money Exchange"].map((name) => (
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
            {faqData.map((f) => (
              <details key={f.q} className="group metric-card">
                <summary className="cursor-pointer font-semibold text-heading list-none flex items-center justify-between">{f.q}<span className="ml-4 text-primary text-xl group-open:rotate-45 transition-transform">+</span></summary>
                <p className="mt-3 text-sm text-body">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <aside className="section-padding surface-sunken" aria-label="Nearby areas">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold mb-4">Also Serving Nearby Areas</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[{ name: "PECHS", link: "/pechs" }, { name: "Clifton", link: "/clifton" }, { name: "Bahadurabad", link: "/bahadurabad" }, { name: "Shahrah-e-Faisal", link: "/shahrah-e-faisal" }].map((a) => (
              <Link key={a.name} to={a.link} className="inline-flex items-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-heading hover:text-primary transition-colors"><MapPin className="h-3.5 w-3.5 text-primary mr-2" /> SEO Expert in {a.name}</Link>
            ))}
          </div>
        </div>
      </aside>
      <CtaBanner heading="Want More Customers From Google in Saddar?" text="Get a free SEO audit for your Saddar business. I'll show you exactly where you're losing traffic and how to fix it." />
    </main>
  </Layout>
);
export default SeoSaddar;
