import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, Wrench, MapPin, FileText, Star, Phone, Clock } from "lucide-react";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "Plumber SEO", url: "https://seoexpertinkarachi.com/plumber-seo" },
]);
const webPage = buildWebPage({ name: "Plumber SEO Services — Emergency Calls & Local Visibility", description: "Plumber SEO services covering emergency plumbing keywords, local map pack dominance, service area pages, Google Business Profile optimization, and lead generation for plumbing companies.", url: "https://seoexpertinkarachi.com/plumber-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Plumber SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "Plumber SEO", description: "Plumber SEO services covering emergency plumbing keyword targeting, local map pack dominance, service area page optimization, Google Business Profile management, review generation, and lead-focused SEO for plumbing businesses." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Why is SEO important for plumbers?", acceptedAnswer: { "@type": "Answer", text: "97% of consumers search online for local services, and plumbing is one of the most searched home service categories. Unlike other industries, plumbing has extremely high-intent searches — someone searching 'emergency plumber near me' needs service immediately and will call the first visible, trustworthy result. Plumbers ranking in the Google map pack receive 70% of emergency service calls. Without SEO, you're invisible during the exact moment customers need you most." }},
  { "@type": "Question", name: "What keywords should plumbers target?", acceptedAnswer: { "@type": "Answer", text: "Plumber keywords fall into three categories: emergency (highest conversion), service-specific, and informational. Emergency keywords like 'emergency plumber near me', 'burst pipe repair', and '24 hour plumber [city]' convert at 15-25% because searchers need immediate help. Service keywords like 'water heater installation [city]' and 'drain cleaning service' capture planned service needs. Informational keywords like 'how to fix a leaking faucet' build authority and capture DIY-ers who eventually call professionals." }},
  { "@type": "Question", name: "How important is Google Business Profile for plumbers?", acceptedAnswer: { "@type": "Answer", text: "Google Business Profile is the most important SEO asset for plumbing companies. Local map pack results appear above organic results for 'plumber near me' searches, and 78% of local service searches result in a call or visit within 24 hours. An optimized profile with service categories, service area, photos of completed work, and 100+ positive reviews generates more leads than any other single marketing channel for most plumbing businesses." }},
  { "@type": "Question", name: "How quickly can plumber SEO generate leads?", acceptedAnswer: { "@type": "Answer", text: "Plumber SEO generates leads faster than most industries because of high search volume and immediate intent. Google Business Profile optimizations show results within 2-4 weeks. Long-tail service keywords like 'water heater repair [neighborhood]' can rank within 6-8 weeks. Competitive terms like 'plumber [city]' take 4-8 months. Most plumbing companies see a 40-60% increase in organic calls within 3-4 months of consistent SEO work." }},
]};

const pillars = [
  { icon: Phone, title: "Emergency Plumbing SEO", desc: "Emergency searches are the highest-converting keywords in plumbing SEO. When a pipe bursts or a toilet overflows, homeowners call the first plumber they find. Ranking for emergency keywords generates immediate, high-value service calls.", items: ["Emergency keyword targeting — 'emergency plumber', 'burst pipe repair', '24/7 plumber near me' optimization", "After-hours landing pages — dedicated pages emphasizing 24/7 availability with click-to-call functionality", "Speed-optimized pages — sub-2-second load times for emergency pages where every second matters", "Mobile-first emergency pages — 80%+ of emergency plumbing searches happen on mobile devices", "Emergency service schema — structured data for emergency services with availability and response times", "Call tracking integration — measuring which emergency keywords generate the most service calls"] },
  { icon: MapPin, title: "Local SEO & Service Area Pages", desc: "Plumbing is a radius-based business. You serve specific cities, neighborhoods, and zip codes. Service area pages ensure you appear in local results across your entire coverage area, not just your office location.", items: ["Service area page creation — dedicated pages for each city, neighborhood, and area you serve", "Google Business Profile optimization — complete profile with service categories, photos, and coverage area", "Review generation strategy — automated review requests after completed service calls", "Local citation building — consistent business information across home service directories and local listings", "Map pack optimization — strategies for appearing in the local 3-pack across your service radius", "Competitor analysis — identifying and targeting areas where competitors have weak local presence"] },
  { icon: Wrench, title: "Plumbing Service Page Optimization", desc: "Homeowners search for specific plumbing services — not just 'plumber'. Dedicated service pages for each offering capture these targeted searches and pre-qualify leads before they call.", items: ["Individual service pages — drain cleaning, water heater, sewer line, fixture installation, and every service offered", "Service + location pages — 'drain cleaning in [area]' pages capturing geo-modified service searches", "Pricing and estimate content — transparent pricing pages that build trust and pre-qualify callers", "Commercial plumbing pages — dedicated content for commercial and industrial plumbing services", "Before-after project galleries — visual proof of completed work with optimized image SEO", "Seasonal service content — winterization, summer maintenance, and seasonal plumbing service pages"] },
  { icon: Star, title: "Review & Reputation Management", desc: "Reviews are the deciding factor for plumbing customers. A plumber with 200+ reviews and a 4.8 rating will always outperform one with 20 reviews — both in rankings and customer trust.", items: ["Automated review requests — SMS and email follow-up after service completion requesting Google reviews", "Review response strategy — professional responses to all reviews demonstrating customer care", "Review schema markup — AggregateRating structured data displaying star ratings in search results", "Negative review management — professional handling of complaints that protects reputation", "Review velocity monitoring — maintaining consistent review flow for sustained local ranking signals", "Multi-platform reputation — managing reviews across Google, Yelp, and home service platforms"] },
];

const PlumberSeo = () => (
  <Layout>
    <SeoHead title="Plumber SEO Services — Emergency Calls & Local Visibility | Naveed Ganatra" description="Plumber SEO services covering emergency plumbing keywords, local map pack dominance, service area pages, review management, and lead generation for plumbing companies." canonical="https://seoexpertinkarachi.com/plumber-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Plumber SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Plumber SEO Services</h1>
        <p className="text-lg text-body mb-4">97% of homeowners search online when they need a plumber. Emergency plumbing searches have the highest conversion rate of any local service — the first visible, trusted plumber gets the call.</p>
        <p className="text-body mb-8">Our plumber SEO services combine emergency keyword targeting, service area page optimization, Google Business Profile management, and review strategy — designed to make your phone ring with qualified service calls.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Plumber SEO Consultation</a>
          <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link>
        </div>
      </div></div></section>

      <section className="section-padding"><div className="section-container">
        <h2 className="text-3xl font-bold mb-4">Why Plumbing Companies Need Specialized SEO</h2>
        <p className="text-body max-w-3xl">Plumbing SEO is driven by <Link to="/local-seo-karachi" className="text-primary hover:underline">local search dominance</Link> and emergency intent. Strong <Link to="/technical-seo" className="text-primary hover:underline">technical SEO</Link> ensures your emergency pages load fast on mobile, while targeted <Link to="/keyword-research" className="text-primary hover:underline">keyword research</Link> identifies the exact service and location combinations your customers search for.</p>
      </div></section>

      {pillars.map((pillar, i) => (
        <section key={pillar.title} className={`section-padding ${i % 2 === 0 ? "" : "surface-sunken"}`}><div className="section-container"><div className="grid lg:grid-cols-2 gap-8 items-start">
          <div><div className="flex items-center gap-3 mb-4"><pillar.icon className="h-6 w-6 text-primary shrink-0" /><h2 className="text-3xl font-bold">{pillar.title}</h2></div><p className="text-body">{pillar.desc}</p></div>
          <ul className="space-y-3">{pillar.items.map((item) => (<li key={item} className="flex gap-3 text-sm text-body"><CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />{item}</li>))}</ul>
        </div></div></section>
      ))}

      <section className="section-padding"><div className="section-container max-w-3xl">
        <h2 className="text-2xl font-bold text-heading mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">{faqSchema.mainEntity.map((faq) => (
          <details key={faq.name} className="group metric-card"><summary className="cursor-pointer font-semibold text-heading list-none flex items-center justify-between">{faq.name}<span className="ml-4 text-primary text-xl group-open:rotate-45 transition-transform">+</span></summary><p className="mt-3 text-sm text-body">{faq.acceptedAnswer.text}</p></details>
        ))}</div>
      </div></section>

      <section className="section-padding surface-sunken"><div className="section-container"><h2 className="text-2xl font-bold mb-4 text-center">Related SEO Services</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/seo-services" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">All SEO Services</Link>
          <Link to="/local-seo-karachi" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Local SEO</Link>
          <Link to="/hvac-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">HVAC SEO</Link>
          <Link to="/technical-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Technical SEO</Link>
        </div>
      </div></section>

      <section className="section-padding"><div className="section-container max-w-3xl">
        <div className="metric-card bg-primary/5 border-primary/20">
          <h2 className="text-2xl font-bold text-heading mb-3">Ready to Get More Plumbing Service Calls?</h2>
          <p className="text-body mb-6">Get a free plumber SEO assessment covering your local search visibility, emergency keyword gaps, and a strategy for generating more service calls from organic search.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Plumber SEO Assessment →</a>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">Hire Naveed Ganatra</Link>
          </div>
        </div>
      </div></section>
      <CtaBanner />
    </main>
  </Layout>
);

export default PlumberSeo;
