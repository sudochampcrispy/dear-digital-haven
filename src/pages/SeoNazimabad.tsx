import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import LeadGenForm from "@/components/LeadGenForm";
import { CheckCircle2, MapPin, ArrowRight } from "lucide-react";

const BASE = "https://seoexpertinkarachi.com";
const SLUG = "/nazimabad";
const TITLE = "SEO Expert in Nazimabad, Karachi — Naveed Ganatra";
const DESC = "Looking for an SEO expert in Nazimabad, Karachi? Naveed Ganatra helps businesses in Nazimabad No. 1–5, Golimaar, and surrounding commercial areas rank higher on Google and attract more local customers.";

const breadcrumb = buildBreadcrumb([{ name: "Home", url: BASE + "/" }, { name: "Local SEO Karachi", url: BASE + "/local-seo-karachi" }, { name: "Nazimabad", url: BASE + SLUG }]);
const webPage = buildWebPage({ name: TITLE, description: DESC, url: BASE + SLUG });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: { "@type": "Place", name: "Nazimabad, Karachi", containedInPlace: { "@type": "City", name: "Karachi" } }, serviceType: "Search Engine Optimization", description: DESC };

const faqData = [
  { q: "Why do Nazimabad businesses need local SEO?", a: "Nazimabad is one of Karachi's oldest and most established residential areas with a loyal local customer base. Residents search for services by numbered area (Nazimabad No. 1 through 5) and local landmarks. Businesses that optimize for these searches capture customers who are ready to buy from someone nearby." },
  { q: "Which areas in Nazimabad do you cover?", a: "Nazimabad No. 1 through No. 5, Golimaar, Paposh Nagar, Usmanabad, and surrounding commercial zones. Each area has its own markets and search patterns." },
  { q: "How competitive is SEO in Nazimabad?", a: "Low to moderate. Nazimabad has strong search demand driven by population density, but relatively few businesses invest in local SEO. This makes it an excellent opportunity for businesses ready to establish Google dominance in their category." },
  { q: "How long does it take to see results?", a: "Specific Nazimabad queries can improve within 4–8 weeks. Broader terms take 3–5 months. Monthly reports keep you informed of progress." },
  { q: "What does a Nazimabad SEO campaign cost?", a: "Campaigns range from PKR 20,000–80,000 per month. Free initial audit available so you know exactly what's needed before committing." },
];
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const SeoNazimabad = () => (
  <Layout>
    <SeoHead title={TITLE} description={DESC} canonical={BASE + SLUG} />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken" aria-label="Hero">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">SEO Expert · Nazimabad, Karachi</p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">SEO Expert in Nazimabad, Karachi</h1>
              <p className="text-lg text-body mb-4">Nazimabad is one of Karachi's oldest and most established residential neighbourhoods — a densely populated area spanning Nazimabad No. 1 through No. 5, with a loyal community that strongly prefers shopping and services within their neighbourhood. When Nazimabad residents need a doctor, restaurant, or any service, they search Google first.</p>
              <p className="text-base text-body mb-4">I help Nazimabad businesses show up on Google for the exact searches residents make. "Best bakery Nazimabad No. 3," "doctor near Golimaar," "tuition centre Nazimabad" — these are real, everyday searches happening in your neighbourhood. I build your SEO around these patterns to bring you customers who live right around the corner.</p>
              <p className="text-base text-body mb-8">Nazimabad has strong customer loyalty — once people find a good business locally, they stick with it. SEO helps you be the first business they discover. And with low SEO competition in the area, investing now gives you an advantage that competitors will struggle to match.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Get a Free SEO Audit <ArrowRight className="h-4 w-4" /></a>
                <Link to="/case-studies" className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">View Case Studies</Link>
              </div>
            </div>
            <LeadGenForm />
          </div>
        </div>
      </section>

      <section className="section-padding" aria-label="Why Nazimabad needs SEO">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Why Local SEO Matters in Nazimabad</h2>
            <p className="text-body">Nazimabad's loyal community creates repeat business potential that few areas can match. But first, customers need to find you. With high population density and low SEO competition, Nazimabad businesses that invest in Google visibility now will reap long-term rewards.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="metric-card text-center"><p className="stat-number text-3xl">5</p><p className="text-xs text-subtle mt-1">Nazimabad numbered areas</p></div>
            <div className="metric-card text-center"><p className="stat-number text-3xl">High</p><p className="text-xs text-subtle mt-1">Population density</p></div>
            <div className="metric-card text-center"><p className="stat-number text-3xl">Low</p><p className="text-xs text-subtle mt-1">SEO competition</p></div>
            <div className="metric-card text-center"><p className="stat-number text-3xl">Strong</p><p className="text-xs text-subtle mt-1">Customer loyalty potential</p></div>
          </div>
        </div>
      </section>

      <section className="section-padding surface-sunken" aria-label="Areas in Nazimabad">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Areas in Nazimabad I Cover</h2>
            <p className="text-body">Each numbered area in Nazimabad has its own markets and customer patterns. I target the specific zones where your customers search.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Nazimabad No. 1 & 2", desc: "Core commercial areas with established markets serving daily needs. Restaurants, clinics, and retail shops draw steady neighbourhood search traffic." },
              { name: "Nazimabad No. 3 & 4", desc: "Residential zones with active block markets. Grocery, pharmacy, salon, and everyday service searches are consistent and reliable." },
              { name: "Nazimabad No. 5", desc: "Connecting area to North Nazimabad with growing commercial activity. Mixed residential and commercial searches create diverse keyword opportunities." },
              { name: "Golimaar", desc: "Busy commercial junction with high foot traffic and strong search demand for food, shopping, and services. Competition for attention is high, but SEO competition is low." },
              { name: "Paposh Nagar", desc: "Adjacent area with neighbourhood market serving local residents. Consistent demand for basic services with minimal SEO competition." },
              { name: "Usmanabad", desc: "Connecting residential area with growing search interest. Businesses here can establish Google authority quickly due to minimal existing optimization." },
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
            <p className="text-body">Every campaign is built around making your Nazimabad business the first result customers see when they search.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {["Keyword research focused on Nazimabad-specific searches — by number, landmark, and service", "Google Business Profile setup and optimization with local photos and regular updates", "Content pages targeting how Nazimabad residents search for your services", "Listings on Pakistani business directories with accurate address and contact details", "A strategy to build genuine Google reviews from your neighbourhood customers", "Technical improvements to make your website faster and mobile-friendly", "Competitor analysis to identify gaps you can exploit", "Monthly reports showing ranking improvements and traffic growth"].map((item) => (
              <div key={item} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /><p className="text-sm text-body">{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding surface-sunken" aria-label="Industries in Nazimabad">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Industries I Can Help in Nazimabad</h2>
            <p className="text-body">Nazimabad's established community supports a wide range of local businesses. Here's how SEO can bring more of your neighbours through your door.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { title: "Restaurants & Bakeries", desc: "Nazimabad has legendary food spots. When someone searches 'best biryani Nazimabad' or 'bakery near Golimaar,' your business should be the top result." },
              { title: "Doctors & Medical Clinics", desc: "Residents prefer nearby healthcare. Ranking for 'doctor Nazimabad No. 2' or 'clinic near Golimaar' brings patients who become long-term regulars." },
              { title: "Coaching Centres & Tuition", desc: "Education is valued in Nazimabad. Parents search for tutors by area and subject — SEO fills your classrooms with neighbourhood students." },
              { title: "Salons & Beauty Services", desc: "Personal grooming searches are highly local. Being the first result for 'salon Nazimabad' means a steady stream of regular clients." },
              { title: "Pharmacies & Medical Stores", desc: "Health-related searches are urgent and local. Showing up on Google means capturing customers who need something right now." },
              { title: "Retail & Shopping", desc: "Nazimabad shoppers prefer buying locally. Product searches with area names bring ready buyers to your shop." },
            ].map((ind) => (
              <div key={ind.title} className="metric-card"><h3 className="font-semibold text-heading mb-2">{ind.title}</h3><p className="text-sm text-body">{ind.desc}</p></div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-heading mb-4">Also Serving</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Grocery & General Stores", "Tailors & Clothing Shops", "Auto Workshops", "Mobile Phone Shops", "Hardware Stores", "Dental Clinics", "Gyms & Fitness", "Real Estate", "Plumbers & Electricians", "Stationery & Bookshops", "Wedding Services", "Pet Shops"].map((name) => (
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
            {[{ name: "North Nazimabad", link: "/north-nazimabad" }, { name: "FB Area", link: "/fb-area" }, { name: "Gulshan-e-Iqbal", link: "/gulshan-e-iqbal" }, { name: "Saddar", link: "/saddar" }].map((a) => (
              <Link key={a.name} to={a.link} className="inline-flex items-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-heading hover:text-primary transition-colors"><MapPin className="h-3.5 w-3.5 text-primary mr-2" /> SEO Expert in {a.name}</Link>
            ))}
          </div>
        </div>
      </aside>
      <CtaBanner heading="Want More Customers From Google in Nazimabad?" text="Get a free SEO audit for your Nazimabad business. I'll show you exactly where you're losing traffic and how to fix it." />
    </main>
  </Layout>
);
export default SeoNazimabad;
