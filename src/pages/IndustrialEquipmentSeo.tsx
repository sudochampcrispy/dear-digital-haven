import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, Cog, MapPin, FileText, Globe, Search, Users } from "lucide-react";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "Industrial Equipment Supplier SEO", url: "https://seoexpertinkarachi.com/industrial-equipment-supplier-seo" },
]);
const webPage = buildWebPage({ name: "Industrial Equipment Supplier SEO Services — Buyer Acquisition Through Organic Search", description: "Industrial equipment supplier SEO services covering product catalog optimization, technical specification pages, B2B buyer targeting, and authority building for equipment suppliers and distributors.", url: "https://seoexpertinkarachi.com/industrial-equipment-supplier-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Industrial Equipment Supplier SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "Industrial Equipment Supplier SEO", description: "Industrial equipment supplier SEO covering product catalog optimization, technical spec pages, B2B buyer targeting, and authority building for equipment suppliers, distributors, and dealers." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Why do industrial equipment suppliers need SEO?", acceptedAnswer: { "@type": "Answer", text: "70% of B2B buyers research equipment suppliers online before contacting sales teams. Industrial equipment SEO ensures your products appear when procurement managers, plant engineers, and operations teams search for specific machinery, spare parts, and technical equipment. Suppliers ranking on page one for equipment-specific queries receive 3-8 qualified inquiries daily from buyers with immediate purchase intent." }},
  { "@type": "Question", name: "What industrial equipment keywords convert best?", acceptedAnswer: { "@type": "Answer", text: "High-converting keywords combine equipment type with buyer intent: 'industrial compressor supplier Pakistan', 'CNC machine dealer Karachi', 'hydraulic pump distributor'. Part number and model-specific keywords — 'Siemens PLC 6ES7', 'Grundfos pump CR series' — capture buyers with exact product needs. Application keywords like 'food processing equipment' and 'packaging machinery supplier' attract buyers by industry vertical." }},
  { "@type": "Question", name: "How does product catalog SEO work for equipment suppliers?", acceptedAnswer: { "@type": "Answer", text: "Product catalog SEO transforms your equipment inventory into a search-visible asset. Each product category, brand, and model gets optimized pages with technical specifications, applications, and documentation. Well-structured catalogs with proper schema markup, filterable specifications, and downloadable datasheets rank for thousands of equipment-specific queries, generating qualified buyer leads around the clock." }},
  { "@type": "Question", name: "How long does industrial equipment SEO take?", acceptedAnswer: { "@type": "Answer", text: "Industrial equipment SEO shows results within 2-3 months for product-specific and brand keywords. Competitive category terms take 5-8 months. Equipment suppliers with consistent SEO see organic search become their primary lead source within 12 months, with significantly higher average order values from organic leads compared to marketplace-generated inquiries." }},
]};

const pillars = [
  { icon: Cog, title: "Product Catalog Optimization", desc: "Each equipment category and product line represents a distinct B2B search market. Your product pages must contain the technical detail and specifications that procurement teams evaluate when sourcing.", items: ["Equipment category pages — pumps, compressors, motors, generators, valves by type and application", "Brand and manufacturer pages — authorized dealer and distributor pages for each brand carried", "Technical specification content — detailed spec sheets, performance curves, and application guides", "Spare parts and consumables pages — replacement parts, consumables, and maintenance kit listings", "Application-specific pages — industry-specific equipment solutions for food, pharma, manufacturing", "Comparison and selection content — equipment comparison guides helping buyers choose the right model"] },
  { icon: MapPin, title: "Local & Regional B2B SEO", desc: "Industrial equipment procurement often requires local support, installation, and after-sales service. Local SEO ensures buyers find suppliers who can provide on-ground technical support.", items: ["Google Business Profile optimization — showroom photos, equipment displays, and service capabilities", "Industrial area targeting — SITE, Korangi, Port Qasim, and other industrial zone-specific pages", "Service center pages — installation, maintenance, and after-sales service location content", "Territory and coverage pages — regions and cities served with technical support availability", "Industrial directory listings — engineering, manufacturing, and equipment supplier directories", "Map pack optimization — dominating local results for equipment supplier queries"] },
  { icon: FileText, title: "Technical Content Strategy", desc: "Industrial buyers rely on technical content to evaluate equipment capabilities. Educational content positions your company as a knowledgeable equipment partner beyond just product supply.", items: ["Equipment selection guides — comprehensive guides helping buyers choose the right specifications", "Application case studies — equipment installation stories with performance data and ROI metrics", "Maintenance and troubleshooting content — preventive maintenance guides and common issue solutions", "Technology comparison articles — comparing equipment technologies, features, and capabilities", "Industry standards content — compliance with ISI, ISO, and industry-specific equipment standards", "Training and operation content — equipment operation guides, safety procedures, and best practices"] },
  { icon: Users, title: "Supplier Authority Building", desc: "B2B equipment buyers need confidence in your product authenticity, technical support capability, and after-sales reliability before placing large orders.", items: ["Authorized dealer and distributor pages — brand authorization documentation and partnership details", "Technical team profiles — engineers, application specialists, and service technician credentials", "Installation and project reference pages — completed installation projects with specifications", "Warranty and support documentation — warranty terms, AMC packages, and support SLA information", "Training and certification content — product training, operator certification, and capability building", "Inventory and availability pages — stock availability, delivery timelines, and logistics capabilities"] },
];

const IndustrialEquipmentSeo = () => (
  <Layout>
    <SeoHead title="Industrial Equipment Supplier SEO Services — Buyer Acquisition & Product Visibility | Naveed Ganatra" description="Industrial equipment supplier SEO services covering product catalog optimization, technical specification pages, B2B buyer targeting, and authority building for equipment suppliers." canonical="https://seoexpertinkarachi.com/industrial-equipment-supplier-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Industrial Equipment Supplier SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Industrial Equipment Supplier SEO Services</h1>
        <p className="text-lg text-body mb-4">70% of B2B buyers research equipment suppliers online before contacting sales teams. Suppliers with strong organic visibility for equipment-specific searches capture the highest-value procurement leads from plant engineers and operations managers.</p>
        <p className="text-body mb-8">Our industrial equipment SEO services combine product catalog optimization, technical specification pages, B2B buyer targeting, and supplier authority building — designed to generate qualified equipment inquiries from procurement teams actively searching for suppliers.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Equipment SEO Consultation</a>
          <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link>
        </div>
      </div></div></section>

      <section className="section-padding"><div className="section-container">
        <h2 className="text-3xl font-bold mb-4">Why Equipment Suppliers Need Specialized SEO</h2>
        <p className="text-body max-w-3xl">Industrial equipment SEO requires detailed <Link to="/on-page-seo" className="text-primary hover:underline">on-page optimization</Link> for product specification pages, strong <Link to="/local-seo-karachi" className="text-primary hover:underline">local SEO</Link> for industrial area targeting, and comprehensive <Link to="/content-strategy-seo" className="text-primary hover:underline">content strategy</Link> covering equipment selection, applications, and technical support.</p>
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
          <Link to="/ecommerce-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">E-commerce SEO</Link>
          <Link to="/local-seo-karachi" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Local SEO</Link>
          <Link to="/content-strategy-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Content Strategy</Link>
        </div>
      </div></section>
      <CtaBanner />
    </main>
  </Layout>
);

export default IndustrialEquipmentSeo;
