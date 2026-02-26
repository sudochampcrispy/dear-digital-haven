import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, Heart, MapPin, FileText, Star, Search, Camera } from "lucide-react";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "Dental SEO", url: "https://seoexpertinkarachi.com/dental-seo" },
]);
const webPage = buildWebPage({ name: "Dental SEO Services — Patient Acquisition Through Organic Search", description: "Dental SEO services covering service page optimization, local search dominance, patient review management, dental content strategy, and Google Business Profile optimization for dental practices.", url: "https://seoexpertinkarachi.com/dental-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Dental SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "Dental SEO", description: "Dental SEO services covering service page optimization, local map pack dominance, patient review strategy, dental content marketing, before-after gallery SEO, and Google Business Profile optimization for dental clinics and practices." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Why is SEO important for dental practices?", acceptedAnswer: { "@type": "Answer", text: "86% of patients search online before choosing a dentist. Dental SEO ensures your practice appears when potential patients search for dental services in your area. The average dental patient has a lifetime value of $15,000-$25,000, making each new patient acquisition highly valuable. Practices ranking in Google's local map pack for 'dentist near me' receive 5-10 new patient calls daily, while those not visible lose these patients to competitors." }},
  { "@type": "Question", name: "What dental keywords should I target?", acceptedAnswer: { "@type": "Answer", text: "The highest-converting dental keywords combine service type with location: 'teeth whitening [city]', 'dental implants near me', 'emergency dentist [area]'. Service-specific pages convert better than generic 'dentist' pages because they match the specific intent of patients who already know what treatment they need. Emergency dental keywords convert at the highest rate because patients need immediate care and choose the first visible result." }},
  { "@type": "Question", name: "How important are patient reviews for dental SEO?", acceptedAnswer: { "@type": "Answer", text: "Patient reviews are the single most influential local ranking factor for dental practices. Google explicitly uses review quantity, quality, and recency in local ranking algorithms. Practices with 100+ Google reviews and a 4.5+ star rating dominate the local map pack. Beyond rankings, 88% of patients trust online reviews as much as personal recommendations. A systematic review request process after appointments is essential for sustained dental SEO success." }},
  { "@type": "Question", name: "How long does dental SEO take to attract new patients?", acceptedAnswer: { "@type": "Answer", text: "Dental SEO typically produces measurable results within 3-4 months: Google Business Profile improvements show within 4-6 weeks, long-tail service keywords rank by month 2-3, and competitive terms like 'dentist in [city]' improve by month 4-6. Most dental practices see a 30-50% increase in new patient inquiries from organic search within 6 months of consistent SEO investment." }},
]};

const pillars = [
  { icon: Heart, title: "Dental Service Page Optimization", desc: "Each dental service represents a distinct search opportunity. Patients search for specific treatments — not just 'dentist'. Dedicated service pages capture these high-intent searches and convert visitors into booked appointments.", items: ["Individual service pages — dedicated pages for implants, whitening, veneers, orthodontics, and every treatment offered", "Emergency dental pages — high-converting pages targeting 'emergency dentist' queries with after-hours information", "Cosmetic dentistry content — before-after focused pages for smile makeovers, veneers, and aesthetic treatments", "Pediatric dental pages — content targeting parents searching for children's dentistry services", "Treatment comparison content — 'implants vs dentures', 'Invisalign vs braces' pages capturing evaluation searches", "Insurance and pricing content — pages addressing cost concerns that influence patient decision-making"] },
  { icon: MapPin, title: "Local SEO for Dental Practices", desc: "Dental search is hyperlocal — patients choose dentists within a 10-15 minute drive. Local SEO determines whether your practice appears in the map pack when patients search for dental services nearby.", items: ["Google Business Profile optimization — complete profile with services, office photos, team photos, and regular posts", "Patient review strategy — automated review requests via SMS/email after appointments with compliant follow-up", "Local citation building — consistent practice information across healthcare directories and local listings", "Neighborhood-specific pages — targeting surrounding areas and neighborhoods within your service radius", "Map pack optimization — strategies for dominating the local 3-pack for dental service queries", "Competitor displacement — analyzing and outperforming competing practices in your immediate service area"] },
  { icon: Camera, title: "Visual Content & Gallery SEO", desc: "Dental is inherently visual. Before-after galleries, procedure videos, and office tour content serve both patient trust and search visibility — especially for cosmetic and elective procedures.", items: ["Before-after gallery optimization — image alt text, schema markup, and page structure for treatment galleries", "Procedure video content — VideoObject schema for treatment explanation videos on YouTube and your website", "Office tour and team content — visual content that builds patient comfort and trust before their first visit", "Image SEO — optimized dental photography with descriptive filenames, alt text, and compression", "Social proof visuals — patient testimonial videos and smile transformation stories for search and social", "Virtual consultation content — video-based content supporting telehealth dental consultations"] },
  { icon: FileText, title: "Dental Content Marketing", desc: "Educational dental content builds patient trust and captures searches from people researching symptoms, treatments, and oral health topics. This positions your practice as the trusted local authority.", items: ["Oral health guides — comprehensive resources on dental hygiene, prevention, and common conditions", "Treatment explainers — detailed content covering procedures, recovery, costs, and expected outcomes", "Symptom-based content — pages targeting 'tooth pain', 'bleeding gums', 'cracked tooth' searches", "Dental myth content — debunking common misconceptions that drive engagement and backlinks", "Seasonal dental content — back-to-school checkups, holiday emergency guides, and timely topics", "Patient education resources — printable guides and resources that earn links from health websites"] },
];

const DentalSeo = () => (
  <Layout>
    <SeoHead title="Dental SEO Services — Patient Acquisition & Local Search Dominance | Naveed Ganatra" description="Dental SEO services covering service page optimization, local search dominance, patient review strategy, dental content marketing, and Google Business Profile for dental practices." canonical="https://seoexpertinkarachi.com/dental-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Dental SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Dental SEO Services</h1>
        <p className="text-lg text-body mb-4">86% of patients search online before choosing a dentist. In Karachi, practices that rank for service-specific keywords and dominate the local map pack capture the majority of new patient appointments.</p>
        <p className="text-body mb-8">Our dental SEO services combine service page optimization, local search strategy, patient review management, and dental content marketing — designed to fill your appointment book with qualified patients from organic search.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Dental SEO Consultation</a>
          <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link>
        </div>
      </div></div></section>

      <section className="section-padding"><div className="section-container">
        <h2 className="text-3xl font-bold mb-4">Why Dental Practices Need Specialized SEO</h2>
        <p className="text-body max-w-3xl">Dental SEO operates at the intersection of <Link to="/local-seo-karachi" className="text-primary hover:underline">local SEO</Link> and healthcare search behavior. Patients search by treatment type, making <Link to="/on-page-seo" className="text-primary hover:underline">on-page optimization</Link> for each service critical. A strong <Link to="/keyword-research" className="text-primary hover:underline">keyword research</Link> foundation ensures you target the exact phrases patients use when looking for dental care.</p>
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
          <Link to="/content-strategy-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Content Strategy</Link>
          <Link to="/on-page-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">On-Page SEO</Link>
        </div>
      </div></section>

      <section className="section-padding"><div className="section-container max-w-3xl">
        <div className="metric-card bg-primary/5 border-primary/20">
          <h2 className="text-2xl font-bold text-heading mb-3">Ready to Fill Your Dental Practice With New Patients?</h2>
          <p className="text-body mb-6">Get a free dental SEO assessment covering your local search visibility, service page optimization gaps, and a strategy for attracting more patients from organic search.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Dental SEO Assessment →</a>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">Hire Naveed Ganatra</Link>
          </div>
        </div>
      </div></section>
      <CtaBanner />
    </main>
  </Layout>
);

export default DentalSeo;
