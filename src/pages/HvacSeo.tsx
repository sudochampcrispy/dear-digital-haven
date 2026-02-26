import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, Thermometer, MapPin, FileText, Star, Calendar, Wrench } from "lucide-react";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "HVAC SEO", url: "https://seoexpertinkarachi.com/hvac-seo" },
]);
const webPage = buildWebPage({ name: "HVAC SEO Services — Seasonal Leads & Local Dominance", description: "HVAC SEO services covering seasonal keyword strategy, emergency HVAC targeting, service area pages, Google Business Profile optimization, and lead generation for heating and cooling companies.", url: "https://seoexpertinkarachi.com/hvac-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "HVAC SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "HVAC SEO", description: "HVAC SEO services covering seasonal keyword strategy, emergency heating and cooling search targeting, service area page optimization, Google Business Profile management, and lead generation for HVAC contractors." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Why is SEO important for HVAC companies?", acceptedAnswer: { "@type": "Answer", text: "85% of homeowners search online when their heating or cooling system fails. HVAC SEO ensures your company appears at the exact moment customers need emergency repairs or seasonal maintenance. The average HVAC service call generates $300-$800 in revenue, while system installations range from $5,000-$15,000. Companies ranking in the top 3 local results for HVAC keywords receive 60% of all service calls from organic search." }},
  { "@type": "Question", name: "What is seasonal HVAC SEO strategy?", acceptedAnswer: { "@type": "Answer", text: "HVAC search volume fluctuates dramatically with seasons — AC keywords peak in summer, heating keywords peak in winter. Seasonal HVAC SEO means optimizing and publishing content 2-3 months before each peak season so pages are ranked when search volume surges. Companies that prepare AC content in early spring and heating content in early fall capture the seasonal wave. Without this advance preparation, you're invisible during your highest-revenue months." }},
  { "@type": "Question", name: "How do emergency HVAC keywords convert?", acceptedAnswer: { "@type": "Answer", text: "Emergency HVAC keywords like 'AC not working', 'furnace repair near me', and 'no heat emergency' have conversion rates of 15-30% — the highest in home services. When someone's AC fails in July or heat fails in December, they call the first visible, trusted result. These searchers don't comparison shop — speed and visibility determine who gets the call. Emergency HVAC pages must load instantly and feature prominent click-to-call buttons." }},
  { "@type": "Question", name: "How long does HVAC SEO take to generate leads?", acceptedAnswer: { "@type": "Answer", text: "HVAC SEO generates leads within 2-4 months for long-tail and emergency keywords. Google Business Profile improvements show within 3-6 weeks. Competitive terms like 'HVAC company [city]' take 6-9 months. The key difference with HVAC SEO is seasonal timing — rankings achieved before peak season generate dramatically more leads than the same rankings during off-season. Start SEO investment at least 4 months before your highest-revenue season." }},
]};

const pillars = [
  { icon: Calendar, title: "Seasonal HVAC Keyword Strategy", desc: "HVAC search demand is cyclical. AC keywords surge in summer, heating keywords spike in winter. A seasonal SEO strategy ensures your pages are ranked before peak demand hits — capturing revenue when it matters most.", items: ["Seasonal content calendar — publishing AC content in spring and heating content in fall for peak readiness", "Pre-season landing pages — optimized pages for seasonal services published months before demand peaks", "Seasonal service promotions — SEO-optimized seasonal offer pages for tune-ups and maintenance plans", "Weather-triggered content — content targeting weather-related searches during extreme temperature events", "Year-round maintenance content — evergreen content for HVAC maintenance that generates leads in off-season", "Seasonal keyword tracking — monitoring ranking changes aligned with seasonal search volume shifts"] },
  { icon: Thermometer, title: "Emergency HVAC SEO", desc: "Emergency HVAC searches convert at the highest rate in home services. When heating fails in winter or AC breaks in summer, homeowners call immediately — the first trusted result wins.", items: ["Emergency keyword targeting — 'AC not working', 'furnace won't start', 'emergency HVAC repair near me'", "After-hours landing pages — dedicated pages emphasizing 24/7 emergency service availability", "Mobile-optimized emergency pages — sub-2-second load times with prominent click-to-call buttons", "Emergency service schema — structured data for emergency HVAC services with response time information", "Location-specific emergency pages — emergency service pages for each city and area in your coverage zone", "Call tracking attribution — measuring which emergency keywords generate the most high-value service calls"] },
  { icon: MapPin, title: "Local SEO & Service Area Coverage", desc: "HVAC companies serve specific geographic areas. Service area pages ensure you appear in local results across your entire coverage zone — not just your office address.", items: ["Service area page creation — dedicated pages for each city, town, and area you service", "Google Business Profile optimization — complete profile with HVAC services, photos, and service area", "Review generation strategy — automated review requests after installations and service calls", "Local citation building — consistent business info across home service directories and HVAC listings", "Map pack optimization — strategies for dominating local 3-pack across your entire service territory", "Competitive territory targeting — identifying and capturing areas where competitors are weak"] },
  { icon: Wrench, title: "HVAC Service Page Optimization", desc: "Homeowners search for specific HVAC services. Dedicated pages for installations, repairs, maintenance, and each equipment type capture targeted searches and pre-qualify leads.", items: ["Individual service pages — AC repair, furnace installation, duct cleaning, heat pump, and all services offered", "Equipment brand pages — optimized pages for Carrier, Trane, Lennox, and other brands you install/service", "Commercial HVAC pages — dedicated content for commercial heating, cooling, and ventilation services", "Energy efficiency content — pages covering SEER ratings, Energy Star, and efficiency upgrade options", "Financing and pricing content — transparent cost information that builds trust and pre-qualifies leads", "Installation vs repair guides — content helping homeowners decide between repair and replacement"] },
];

const HvacSeo = () => (
  <Layout>
    <SeoHead title="HVAC SEO Services — Seasonal Leads & Local Search Dominance | Naveed Ganatra" description="HVAC SEO services covering seasonal keyword strategy, emergency HVAC targeting, service area pages, review management, and lead generation for heating and cooling companies." canonical="https://seoexpertinkarachi.com/hvac-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">HVAC SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">HVAC SEO Services</h1>
        <p className="text-lg text-body mb-4">85% of homeowners search online when their heating or cooling system fails. HVAC companies that rank for emergency and seasonal keywords before peak demand capture the highest-value service calls in home services.</p>
        <p className="text-body mb-8">Our HVAC SEO services combine seasonal keyword strategy, emergency search targeting, service area optimization, and review management — designed to generate consistent leads through every season.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get HVAC SEO Consultation</a>
          <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link>
        </div>
      </div></div></section>

      <section className="section-padding"><div className="section-container">
        <h2 className="text-3xl font-bold mb-4">Why HVAC Companies Need Specialized SEO</h2>
        <p className="text-body max-w-3xl">HVAC SEO combines <Link to="/local-seo-karachi" className="text-primary hover:underline">local search dominance</Link> with seasonal timing strategy. Fast-loading, mobile-optimized pages require solid <Link to="/technical-seo" className="text-primary hover:underline">technical SEO</Link>, while a pre-season <Link to="/content-strategy-seo" className="text-primary hover:underline">content strategy</Link> ensures your pages rank before demand peaks.</p>
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
          <Link to="/plumber-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Plumber SEO</Link>
          <Link to="/content-strategy-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Content Strategy</Link>
        </div>
      </div></section>

      <section className="section-padding"><div className="section-container max-w-3xl">
        <div className="metric-card bg-primary/5 border-primary/20">
          <h2 className="text-2xl font-bold text-heading mb-3">Ready to Generate More HVAC Service Calls?</h2>
          <p className="text-body mb-6">Get a free HVAC SEO assessment covering your local search visibility, seasonal keyword gaps, and a strategy for capturing more leads before peak season hits.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get HVAC SEO Assessment →</a>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">Hire Naveed Ganatra</Link>
          </div>
        </div>
      </div></section>
      <CtaBanner />
    </main>
  </Layout>
);

export default HvacSeo;
