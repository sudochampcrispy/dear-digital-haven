import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import LeadGenForm from "@/components/LeadGenForm";
import { CheckCircle2, MapPin, ArrowRight } from "lucide-react";

const BASE = "https://seoexpertinkarachi.com";
const SLUG = "/fb-area";
const TITLE = "SEO Expert in FB Area (Federal B Area), Karachi — Naveed Ganatra";
const DESC = "Looking for an SEO expert in FB Area (Federal B Area), Karachi? Naveed Ganatra helps businesses in FB Area Block 1–22, Karimabad, Ancholi, and surrounding markets rank higher on Google.";

const breadcrumb = buildBreadcrumb([{ name: "Home", url: BASE + "/" }, { name: "Local SEO Karachi", url: BASE + "/local-seo-karachi" }, { name: "FB Area", url: BASE + SLUG }]);
const webPage = buildWebPage({ name: TITLE, description: DESC, url: BASE + SLUG });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: { "@type": "Place", name: "Federal B Area, Karachi", containedInPlace: { "@type": "City", name: "Karachi" } }, serviceType: "Search Engine Optimization", description: DESC };

const faqData = [
  { q: "Why do FB Area businesses need local SEO?", a: "Federal B Area is one of Karachi's most populated residential zones with 22 blocks. Residents search for services by block number and local landmarks like Karimabad, Ancholi, and Teen Hatti. Businesses optimized for these searches capture the high-intent traffic that generic campaigns miss." },
  { q: "Which blocks and areas do you cover?", a: "All 22 FB Area blocks plus Karimabad, Ancholi, Teen Hatti, Ayesha Manzil, and surrounding commercial zones. Each has distinct search patterns." },
  { q: "How competitive is SEO in FB Area?", a: "Low. FB Area has massive search demand driven by its population density, but very few businesses invest in local SEO. Early movers can establish dominant positions quickly." },
  { q: "How long does it take to see results?", a: "Specific queries can improve within 4–8 weeks. Broader terms take 3–5 months. Monthly reports track progress." },
  { q: "What does an FB Area SEO campaign cost?", a: "Campaigns range from PKR 20,000–80,000 per month. Free initial audit available." },
];
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const SeoFBArea = () => (
  <Layout>
    <SeoHead title={TITLE} description={DESC} canonical={BASE + SLUG} />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken" aria-label="Hero">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">SEO Expert · FB Area, Karachi</p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">SEO Expert in FB Area, Karachi</h1>
              <p className="text-lg text-body mb-4">Federal B Area is one of Karachi's most densely populated neighbourhoods — 22 blocks stretching from Karimabad to Ancholi, with iconic commercial zones at Teen Hatti and Ayesha Manzil. The area is packed with restaurants, clinics, shops, and service providers, all competing for the same neighbourhood customers.</p>
              <p className="text-base text-body mb-4">I help FB Area businesses get found on Google when customers are searching for exactly what you offer. People here search by block number and landmark — "dentist FB Area Block 16," "restaurant near Karimabad," "gym Ancholi." I build your SEO around these specific search patterns to bring real customers to your door.</p>
              <p className="text-base text-body mb-8">FB Area has enormous search demand but almost no SEO competition. Businesses that invest now will establish Google dominance in their category — and once you're on top, it's very hard for competitors to displace you.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Get a Free SEO Audit <ArrowRight className="h-4 w-4" /></a>
                <Link to="/case-studies" className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">View Case Studies</Link>
              </div>
            </div>
            <LeadGenForm />
          </div>
        </div>
      </section>

      <section className="section-padding" aria-label="Why FB Area needs SEO">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Why Local SEO Matters in FB Area</h2>
            <p className="text-body">FB Area's population density means high search volume for neighbourhood services. But the vast majority of businesses here rely on foot traffic alone. Those that establish a Google presence now will capture customers that competitors don't even know are searching.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="metric-card text-center"><p className="stat-number text-3xl">22</p><p className="text-xs text-subtle mt-1">Blocks with local markets</p></div>
            <div className="metric-card text-center"><p className="stat-number text-3xl">High</p><p className="text-xs text-subtle mt-1">Population & search demand</p></div>
            <div className="metric-card text-center"><p className="stat-number text-3xl">Very Low</p><p className="text-xs text-subtle mt-1">SEO competition</p></div>
            <div className="metric-card text-center"><p className="stat-number text-3xl">Fast</p><p className="text-xs text-subtle mt-1">Expected ranking improvements</p></div>
          </div>
        </div>
      </section>

      <section className="section-padding surface-sunken" aria-label="Areas in FB Area">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Areas in FB Area I Cover</h2>
            <p className="text-body">FB Area's commercial activity is spread across iconic junctions and block markets. I target the specific locations where your customers search.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Karimabad", desc: "One of FB Area's busiest commercial zones. Restaurants, shops, and services face strong competition for customers — Google visibility gives you the edge." },
              { name: "Ancholi", desc: "Popular commercial area with restaurants, cafés, and retail. Known for its food scene, making it a hotspot for dining-related searches." },
              { name: "Teen Hatti", desc: "Major junction with high commercial density. Electronics, mobile shops, and service businesses draw customers from across the area." },
              { name: "Ayesha Manzil", desc: "Connecting junction with mixed commercial activity. Growing search interest with manageable competition — a good opportunity for early investment." },
              { name: "Block 7 & Block 16 Markets", desc: "Active residential block markets with consistent daily-need searches. Pharmacy, grocery, and salon queries are reliable and year-round." },
              { name: "Aisha Bawany Area", desc: "Educational zone near schools and colleges. Coaching centres, bookstores, and student services benefit from education-focused searches." },
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
            <p className="text-body">Every campaign is built to establish your FB Area business as the top local result on Google.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {["Keyword research focused on FB Area searches — by block, junction, and landmark", "Google Business Profile setup and optimization with local photos and updates", "Content pages targeting how FB Area residents search for your services", "Listings on Pakistani business directories with accurate address and contact details", "A strategy to build genuine Google reviews from neighbourhood customers", "Technical improvements for faster loading and better mobile experience", "Competitor analysis to find gaps you can exploit", "Monthly reports showing ranking and traffic improvements"].map((item) => (
              <div key={item} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /><p className="text-sm text-body">{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding surface-sunken" aria-label="Industries in FB Area">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Industries I Can Help in FB Area</h2>
            <p className="text-body">FB Area supports a thriving neighbourhood economy. Here's how SEO can bring more local customers to your business.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { title: "Restaurants & Food Businesses", desc: "Ancholi and Karimabad are food destinations. When someone searches 'best BBQ FB Area' or 'restaurant near Ancholi,' your business should top the results." },
              { title: "Doctors & Clinics", desc: "Residents prefer nearby healthcare. Ranking for 'doctor FB Area Block 16' or 'clinic near Teen Hatti' brings patients who become regulars." },
              { title: "Coaching Centres & Academies", desc: "Education demand is strong in FB Area. Parents search for tuition by subject and block — ranking means full classrooms." },
              { title: "Electronics & Mobile Shops", desc: "Teen Hatti and surrounding areas drive electronics searches. Product-focused SEO brings buyers who are ready to purchase." },
              { title: "Salons & Beauty Services", desc: "Personal grooming searches are intensely local. Being first for 'salon FB Area' builds a loyal client base." },
              { title: "Gyms & Fitness", desc: "Health-conscious residents search for nearby fitness options. Local SEO puts your gym in front of people ready to sign up." },
            ].map((ind) => (
              <div key={ind.title} className="metric-card"><h3 className="font-semibold text-heading mb-2">{ind.title}</h3><p className="text-sm text-body">{ind.desc}</p></div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-heading mb-4">Also Serving</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Pharmacies", "Grocery Stores", "Tailors", "Auto Workshops", "Mobile Repair", "Dental Clinics", "Real Estate", "Hardware Shops", "Plumbers & Electricians", "Stationery & Books", "Wedding Services", "Travel Agencies"].map((name) => (
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
            {[{ name: "North Nazimabad", link: "/north-nazimabad" }, { name: "Nazimabad", link: "/nazimabad" }, { name: "Gulshan-e-Iqbal", link: "/gulshan-e-iqbal" }, { name: "Bahadurabad", link: "/bahadurabad" }].map((a) => (
              <Link key={a.name} to={a.link} className="inline-flex items-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-heading hover:text-primary transition-colors"><MapPin className="h-3.5 w-3.5 text-primary mr-2" /> SEO Expert in {a.name}</Link>
            ))}
          </div>
        </div>
      </aside>
      <CtaBanner heading="Want More Customers From Google in FB Area?" text="Get a free SEO audit for your FB Area business. I'll show you exactly where you're losing traffic and how to fix it." />
    </main>
  </Layout>
);
export default SeoFBArea;
