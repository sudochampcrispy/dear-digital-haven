import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import LeadGenForm from "@/components/LeadGenForm";
import { CheckCircle2, MapPin, ArrowRight } from "lucide-react";

const BASE = "https://seoexpertinkarachi.com";
const SLUG = "/malir";
const TITLE = "SEO Expert in Malir, Karachi — Naveed Ganatra";
const DESC = "Looking for an SEO expert in Malir, Karachi? Naveed Ganatra helps businesses in Malir Cantt, Malir Town, Model Colony, and surrounding areas rank higher on Google and attract more local customers.";

const breadcrumb = buildBreadcrumb([{ name: "Home", url: BASE + "/" }, { name: "Local SEO Karachi", url: BASE + "/local-seo-karachi" }, { name: "Malir", url: BASE + SLUG }]);
const webPage = buildWebPage({ name: TITLE, description: DESC, url: BASE + SLUG });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: { "@type": "Place", name: "Malir, Karachi", containedInPlace: { "@type": "City", name: "Karachi" } }, serviceType: "Search Engine Optimization", description: DESC };

const faqData = [
  { q: "Why do Malir businesses need SEO?", a: "Malir is one of Karachi's fastest-developing areas with new housing schemes, growing population, and increasing commercial activity. Residents are searching for local services on Google, but very few Malir businesses have invested in SEO — creating a massive first-mover advantage." },
  { q: "Which areas in Malir do you cover?", a: "Malir Cantt, Malir Town, Model Colony, Jinnah International Airport vicinity, Malir Halt, Saudabad, and connecting areas. Each has its own commercial character and search patterns." },
  { q: "Is SEO worth it for businesses in developing areas like Malir?", a: "Especially so. Developing areas have growing search demand and almost no SEO competition. Businesses that establish Google authority now will be extremely hard for competitors to displace later." },
  { q: "How long does it take to see results?", a: "Due to low competition, Malir businesses often see improvements faster than in central Karachi. Specific queries can improve within 3–6 weeks, with broader terms taking 2–4 months." },
  { q: "What does a Malir SEO campaign cost?", a: "Campaigns range from PKR 20,000–80,000 per month. Lower competition means you can achieve strong results with a more modest investment. Free initial audit available." },
];
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const SeoMalir = () => (
  <Layout>
    <SeoHead title={TITLE} description={DESC} canonical={BASE + SLUG} />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken" aria-label="Hero">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">SEO Expert · Malir, Karachi</p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">SEO Expert in Malir, Karachi</h1>
              <p className="text-lg text-body mb-4">Malir is one of Karachi's most rapidly developing areas — new housing schemes, a growing population, and commercial activity that's expanding every month. From Malir Cantt to Model Colony to the neighbourhoods around Jinnah International Airport, this area is full of businesses that have customers searching for them on Google right now.</p>
              <p className="text-base text-body mb-4">I help Malir businesses get found on Google by the people who are actively looking for their services. Whether you run a clinic in Model Colony, a restaurant near Malir Cantt, or a construction business serving the new housing schemes — I build your SEO strategy around the exact searches your customers make.</p>
              <p className="text-base text-body mb-8">The best part about Malir? Almost nobody here is doing SEO properly. That means businesses that invest now can establish dominant Google positions before the competition even starts. The earlier you move, the harder it is for competitors to catch up.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Get a Free SEO Audit <ArrowRight className="h-4 w-4" /></a>
                <Link to="/case-studies" className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">View Case Studies</Link>
              </div>
            </div>
            <LeadGenForm />
          </div>
        </div>
      </section>

      <section className="section-padding" aria-label="Why Malir needs SEO">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Why Local SEO Matters in Malir</h2>
            <p className="text-body">Malir's rapid development means growing search demand and minimal competition. New residents moving into housing schemes are searching for everything — doctors, schools, restaurants, groceries. The businesses that show up on Google are the ones that win their loyalty from day one.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="metric-card text-center"><p className="stat-number text-3xl">Fast</p><p className="text-xs text-subtle mt-1">Area development & population growth</p></div>
            <div className="metric-card text-center"><p className="stat-number text-3xl">Growing</p><p className="text-xs text-subtle mt-1">Search demand for local services</p></div>
            <div className="metric-card text-center"><p className="stat-number text-3xl">Very Low</p><p className="text-xs text-subtle mt-1">SEO competition</p></div>
            <div className="metric-card text-center"><p className="stat-number text-3xl">Early</p><p className="text-xs text-subtle mt-1">Best time to invest in SEO</p></div>
          </div>
        </div>
      </section>

      <section className="section-padding surface-sunken" aria-label="Areas in Malir">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Areas in Malir I Cover</h2>
            <p className="text-body">Malir is a large district with diverse commercial zones. I target the specific areas where your customers are searching.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Malir Cantt", desc: "Established commercial area with steady search demand for everyday services, restaurants, and professional businesses. Good foundation for local SEO." },
              { name: "Model Colony", desc: "Dense residential area with strong search demand for healthcare, education, and daily services. Low competition means fast results." },
              { name: "Jinnah Airport Vicinity", desc: "Hotels, car rentals, restaurants, and services near the airport draw searches from travellers and locals alike." },
              { name: "Malir Town", desc: "Growing residential area with expanding commercial activity. New businesses opening regularly create fresh search demand." },
              { name: "Saudabad", desc: "Residential neighbourhood with neighbourhood market searches. Consistent demand for pharmacies, clinics, and grocery services." },
              { name: "New Housing Schemes", desc: "Bahria Town Karachi, DHA City, and other developments bring affluent new residents searching for everything from contractors to restaurants." },
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
            <p className="text-body">Every campaign is designed to establish your Malir business as the dominant local presence on Google.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {["Keyword research focused on Malir-specific searches and emerging housing scheme queries", "Google Business Profile setup and optimization with accurate Malir location data", "Content pages targeting how Malir residents search for your services", "Listings on Pakistani business directories with accurate address and contact details", "A strategy to build genuine Google reviews from your local customers", "Technical improvements to make your website faster and mobile-friendly", "Competitor analysis to find gaps you can exploit", "Monthly reports showing ranking improvements and traffic growth"].map((item) => (
              <div key={item} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /><p className="text-sm text-body">{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding surface-sunken" aria-label="Industries in Malir">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Industries I Can Help in Malir</h2>
            <p className="text-body">Malir's developing economy serves both established residents and new arrivals. Here's how SEO can bring more customers to different business types.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { title: "Construction & Contractors", desc: "With housing schemes expanding, searches for contractors, builders, and construction services in Malir are growing fast. Being visible now builds long-term authority." },
              { title: "Doctors & Medical Clinics", desc: "New and existing residents search for healthcare by area. Establishing a strong Google presence early means patients become long-term loyalists." },
              { title: "Real Estate & Property", desc: "Malir property is in demand. Searches for plots, houses, and rentals by scheme and sector connect agents with serious buyers." },
              { title: "Restaurants & Catering", desc: "Growing population means growing food demand. Ranking for 'restaurant near Malir Cantt' or 'catering Bahria Town Karachi' brings steady orders." },
              { title: "Schools & Coaching Centres", desc: "Parents in new housing schemes actively search for schools and tuition. Early Google visibility captures families as they settle in." },
              { title: "Car Rentals & Transport", desc: "Airport proximity drives searches for car rental and transport services. Tourism and business travel create consistent demand." },
            ].map((ind) => (
              <div key={ind.title} className="metric-card"><h3 className="font-semibold text-heading mb-2">{ind.title}</h3><p className="text-sm text-body">{ind.desc}</p></div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-heading mb-4">Also Serving</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Pharmacies", "Grocery & Supermarkets", "Salons & Barber Shops", "Hardware & Building Materials", "Interior Design", "Plumbers & Electricians", "Mobile Phone Shops", "Auto Workshops", "Security Services", "Nurseries & Plant Shops", "Pet Shops", "Courier Services"].map((name) => (
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
            {[{ name: "Korangi", link: "/korangi" }, { name: "Gulistan-e-Johar", link: "/gulistan-e-johar" }, { name: "Scheme 33", link: "/scheme-33" }, { name: "Shahrah-e-Faisal", link: "/shahrah-e-faisal" }].map((a) => (
              <Link key={a.name} to={a.link} className="inline-flex items-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-heading hover:text-primary transition-colors"><MapPin className="h-3.5 w-3.5 text-primary mr-2" /> SEO Expert in {a.name}</Link>
            ))}
          </div>
        </div>
      </aside>
      <CtaBanner heading="Want More Customers From Google in Malir?" text="Get a free SEO audit for your Malir business. I'll show you exactly where you're losing traffic and how to fix it." />
    </main>
  </Layout>
);
export default SeoMalir;
