import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, Home, MapPin, Image, FileText, Star, BarChart3 } from "lucide-react";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "Real Estate SEO", url: "https://seoexpertinkarachi.com/real-estate-seo" },
]);
const webPage = buildWebPage({ name: "Real Estate SEO Services — Property Listings, Local Visibility & Lead Generation", description: "Real estate SEO services covering property listing optimization, local search visibility, area-specific content, IDX SEO, schema markup for properties, and lead generation strategies for real estate businesses.", url: "https://seoexpertinkarachi.com/real-estate-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Real Estate SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "Real Estate SEO", description: "Real estate SEO services covering property listing optimization, hyperlocal content strategy, Google Business Profile optimization, IDX integration SEO, RealEstateAgent and Offer schema markup, and lead generation for agents, brokers, and property developers." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Why is SEO important for real estate businesses?", acceptedAnswer: { "@type": "Answer", text: "97% of homebuyers start their property search online. Real estate SEO ensures your listings and services appear when potential buyers and sellers search for properties, agents, and real estate services in your target areas. Unlike paid ads that stop generating leads when you stop paying, SEO produces compounding organic traffic that grows over time — reducing cost per lead while increasing lead volume." }},
  { "@type": "Question", name: "What is hyperlocal SEO for real estate?", acceptedAnswer: { "@type": "Answer", text: "Hyperlocal SEO targets searches at the neighborhood, street, and community level — not just city-level. Creating dedicated pages for specific neighborhoods, housing societies, developments, and areas (e.g., 'houses for sale in DHA Phase 6 Karachi') captures high-intent searches from buyers who know exactly where they want to live. These hyperlocal pages face less competition and convert at higher rates than city-level pages." }},
  { "@type": "Question", name: "How do I optimize property listings for search engines?", acceptedAnswer: { "@type": "Answer", text: "Each property listing should have a unique, descriptive title including location and property type, comprehensive descriptions covering features, amenities, and neighborhood information, high-quality images with descriptive alt text, RealEstateListing schema markup, and internal links to relevant area and property type pages. Avoid duplicate descriptions across similar listings — each must provide unique content for search engines to index." }},
  { "@type": "Question", name: "How does Google Business Profile help real estate agents?", acceptedAnswer: { "@type": "Answer", text: "Google Business Profile is critical for real estate agents because it appears in local map packs for searches like 'real estate agent near me' and 'property dealer in [area]'. Optimized profiles with consistent business information, client reviews, property photos, and regular posts generate significant local visibility. Agents with 50+ positive reviews and optimized profiles dominate local search results in their service areas." }},
]};

const pillars = [
  { icon: MapPin, title: "Hyperlocal Content Strategy", desc: "Real estate search is inherently local. Buyers search by neighborhood, development, and area — not just city. Hyperlocal content captures these high-intent searches with targeted, area-specific pages.", items: ["Neighborhood and area pages — dedicated content for each target area covering lifestyle, amenities, and property market", "Housing society and development pages — optimized pages for specific developments and communities", "Market report content — regular area-specific market analysis with pricing trends and inventory data", "School district and amenity guides — content that buyers use to evaluate neighborhoods", "Local event and community content — building topical authority around target geographic areas", "Area comparison content — 'DHA vs Clifton' style pages that capture evaluation-stage searches"] },
  { icon: Home, title: "Property Listing Optimization", desc: "Property listings are the core pages of any real estate website. Optimized listings rank for specific property searches and convert visitors into leads through comprehensive, well-structured content.", items: ["Unique listing descriptions — avoiding template content that creates duplicate page issues", "Property type landing pages — 'apartments for sale', 'houses for rent' category pages with filtered listings", "RealEstateListing schema markup — structured data that enables rich property results in search", "Image optimization — alt text, compression, and gallery structure for property photos", "Virtual tour and video integration — VideoObject schema for virtual property walkthroughs", "Lead capture optimization — strategically placed inquiry forms and contact CTAs on listing pages"] },
  { icon: Star, title: "Local SEO & Google Business Profile", desc: "Local search visibility determines which agents and agencies appear when buyers and sellers search for real estate services in their area. Google Business Profile is the cornerstone of real estate local SEO.", items: ["Google Business Profile optimization — complete profile with services, photos, and regular posts", "Review generation strategy — systematic approach to getting client reviews after successful transactions", "Local citation building — consistent NAP (Name, Address, Phone) across all property portals and directories", "Local keyword targeting — area-specific service pages for 'real estate agent in [location]' queries", "Map pack optimization — strategies for appearing in the local 3-pack for real estate searches", "Multi-location SEO — optimizing for multiple office locations or service areas for larger agencies"] },
  { icon: BarChart3, title: "Real Estate Content Marketing", desc: "Educational content builds trust with potential clients and captures top-of-funnel searches from people beginning their property journey. This content establishes your authority as a local market expert.", items: ["Buyer guides — step-by-step content for first-time buyers, investors, and property seekers", "Seller guides — content targeting homeowners considering selling, covering valuation, staging, and timing", "Investment analysis content — ROI calculators, rental yield guides, and investment area recommendations", "Market analysis and predictions — regular content demonstrating local market expertise", "Legal and process guides — content covering property documentation, taxes, and regulatory requirements", "FAQ content targeting common real estate questions in your market area"] },
];

const RealEstateSeo = () => (
  <Layout>
    <SeoHead title="Real Estate SEO Services — Property Listings & Local Visibility | Naveed Ganatra" description="Real estate SEO services covering property listing optimization, hyperlocal content, Google Business Profile, IDX SEO, and lead generation strategies for agents and property developers." canonical="https://seoexpertinkarachi.com/real-estate-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Real Estate SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Real Estate SEO Services</h1>
         <p className="text-lg text-body mb-4">97% of property searches start online. In Karachi, whether buyers are searching for homes in DHA, Clifton, or Gulshan — they start with Google. Combining local SEO with real estate-specific optimization is essential for visibility.</p>
         <p className="text-body mb-8">Our real estate SEO services combine hyperlocal content strategy, property listing optimization, on-page SEO, and lead generation tactics — built on thorough keyword research for your target Karachi neighborhoods.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Real Estate SEO Consultation</a>
          <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link>
        </div>
      </div></div></section>

      <section className="section-padding"><div className="section-container">
        <h2 className="text-3xl font-bold mb-4">Why Real Estate Needs a Specialized SEO Approach</h2>
        <p className="text-body max-w-3xl">Real estate SEO combines <Link to="/local-seo-karachi" className="text-primary hover:underline">local SEO</Link> dominance with hyperlocal content targeting. Strong <Link to="/on-page-seo" className="text-primary hover:underline">on-page optimization</Link> for property listings and area pages captures high-intent buyer searches, while a structured <Link to="/content-strategy-seo" className="text-primary hover:underline">content strategy</Link> builds the market expertise signals that Google rewards.</p>
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
          <Link to="/ecommerce-seo-karachi" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">E-commerce SEO</Link>
        </div>
      </div></section>

      <section className="section-padding"><div className="section-container max-w-3xl">
        <div className="metric-card bg-primary/5 border-primary/20">
          <h2 className="text-2xl font-bold text-heading mb-3">Ready to Dominate Real Estate Search in Your Market?</h2>
          <p className="text-body mb-6">Get a free real estate SEO assessment covering your local search visibility, listing optimization gaps, and a strategy for capturing more buyer and seller leads from organic search.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Real Estate SEO Assessment →</a>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">Hire Naveed Ganatra</Link>
          </div>
        </div>
      </div></section>
      <CtaBanner />
    </main>
  </Layout>
);

export default RealEstateSeo;
