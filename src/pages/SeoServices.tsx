import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";

const servicesBreadcrumb = buildBreadcrumb([{ name: "Home", url: "https://seoexpertinkarachi.com/" }, { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" }]);
const servicesWebPage = buildWebPage({ name: "SEO Services in Karachi", description: "Comprehensive SEO services in Karachi by Naveed Ganatra.", url: "https://seoexpertinkarachi.com/seo-services" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: { "@type": "City", name: "Karachi" }, serviceType: "Search Engine Optimization" };

const sections = [
  { id: "technical-seo", title: "Technical SEO", desc: "We enhance website performance with fast load times, secure protocols, and crawl-friendly structures optimized for Karachi's mobile-first users.", items: ["Core Web Vitals optimization: LCP under 0.9s, CLS under 0.03", "Local hosting for 320ms TTFB on Pakistani networks", "HTTPS implementation and GDPR compliance", "Crawl issue resolution: XML sitemaps, canonical tags, robots.txt", "Structured data implementation for rich SERP features", "Mobile-first indexing compliance and responsive optimization"], alt: false },
  { id: "on-page-seo", title: "On-Page SEO", desc: "Precision optimization of every on-page element aligned with search intent and semantic relevance.", items: ["Intent-aligned title tags, meta descriptions, and heading structures", "Content gap analysis against ranking competitors", "Semantic HTML with proper entity markup and context vectors", "Image optimization with descriptive alt text and lazy loading", "Internal linking architecture reinforcing topical clusters"], alt: true },
  { id: "link-building", title: "Off-Page SEO & Link Building", desc: "We strengthen your site's authority with high-quality, contextually relevant backlinks.", items: ["25+ high-DR .pk links from outlets like Dawn.com", "Guest posts on industry-relevant platforms", "Toxic link identification and disavow file management", "Digital PR and brand mention acquisition", "Contextual, niche-relevant blog and resource links"], alt: false },
  { id: "local-seo", title: "Local SEO for Karachi", desc: "We help you dominate hyperlocal search results across Karachi's neighborhoods.", items: ["Google Business Profile optimization with weekly posts and Q&A", "Location-specific landing pages for each target neighborhood", "NAP citation building across 75+ Pakistani directories", "Review management and local trust signal optimization", "Bilingual optimization for Urdu and English searches"], alt: true },
  { id: "ecommerce-seo", title: "E-commerce SEO", desc: "We drive product visibility and conversions with optimized category architecture and Product schema.", items: ["Product page optimization with schema markup", "Category hierarchy and faceted navigation SEO", "Duplicate content resolution for variant pages", "Shopping feed optimization for Google Merchant Center"], alt: false },
  { id: "seo-audits", title: "SEO Audits", desc: "Our comprehensive 100+ point SEO audits cover technical health, content quality, and competitive positioning.", items: ["Site speed analysis: LCP, FID, CLS benchmarking", "Crawlability audit: indexation, sitemaps, robots directives", "Content quality and topical coverage assessment", "Backlink profile health check and toxic link analysis", "Competitor gap analysis with actionable recommendations"], alt: true },
  { id: "migration-seo", title: "Website Migration SEO", desc: "Zero-regression platform migrations with proper 301 redirect mapping.", items: ["Pre-migration crawl benchmarking and URL inventory", "301 redirect mapping for all existing indexed URLs", "Metadata, schema, and internal link preservation", "Post-migration monitoring and indexation verification"], alt: false },
  { id: "semantic-content", title: "Semantic Content Strategy", desc: "We build topical authority with entity-based content covering every facet of your niche.", items: ["Topic cluster development with pillar and spoke architecture", "Entity-attribute-relation modeling for deep topical coverage", "Search intent layering: dominant, secondary, implicit", "Information gain analysis versus ranking competitors", "Schema (Article, FAQPage, HowTo) aligned with content entities"], alt: true },
];

const SeoServices = () => (
  <Layout>
    <SeoHead title="SEO Services in Karachi - Technical, Local, Semantic | Naveed Ganatra" description="Comprehensive SEO services in Karachi by Naveed Ganatra." canonical="https://seoexpertinkarachi.com/seo-services" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={servicesBreadcrumb} /><JsonLd data={servicesWebPage} />
    <main>
      <section className="section-padding surface-sunken" aria-label="Services hero">
        <div className="section-container"><div className="max-w-4xl"><p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Services</p><h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">SEO Services in Karachi</h1><p className="text-lg text-body">Comprehensive, semantic SEO strategies tailored for Karachi's bilingual and mobile-first search ecosystem.</p></div></div>
      </section>
       {sections.map((s) => (
         <section key={s.id} id={s.id} className={`section-padding ${s.alt ? "surface-sunken" : ""}`} aria-label={s.title}>
           <div className="section-container"><div className="grid lg:grid-cols-2 gap-8 items-start"><div><h2 className="text-3xl font-bold mb-4">{s.title}</h2><p className="text-body mb-6">{s.desc}</p>
           {s.id === "technical-seo" && <Link to="/technical-seo" className="text-sm font-semibold text-primary hover:text-primary/80">Learn more about Technical SEO →</Link>}
           {s.id === "on-page-seo" && <Link to="/on-page-seo" className="text-sm font-semibold text-primary hover:text-primary/80">Learn more about On-Page SEO →</Link>}
           {s.id === "link-building" && <Link to="/off-page-seo" className="text-sm font-semibold text-primary hover:text-primary/80">Learn more about Off-Page SEO →</Link>}
           {s.id === "local-seo" && <Link to="/local-seo-karachi" className="text-sm font-semibold text-primary hover:text-primary/80">Learn more about Local SEO →</Link>}
           {s.id === "ecommerce-seo" && <Link to="/ecommerce-seo-karachi" className="text-sm font-semibold text-primary hover:text-primary/80">Learn more about E-commerce SEO →</Link>}
           {s.id === "seo-audits" && <Link to="/seo-audit" className="text-sm font-semibold text-primary hover:text-primary/80">Learn more about SEO Audits →</Link>}
           {s.id === "migration-seo" && <Link to="/website-migration-seo" className="text-sm font-semibold text-primary hover:text-primary/80">Learn more about Migration SEO →</Link>}
           {s.id === "semantic-content" && <Link to="/content-strategy-seo" className="text-sm font-semibold text-primary hover:text-primary/80">Learn more about Content Strategy →</Link>}
           </div><ul className="space-y-3">{s.items.map((item) => (<li key={item} className="flex gap-3 text-sm text-body"><span className="text-primary font-bold">→</span> {item}</li>))}</ul></div></div>
         </section>
       ))}
       <section className="section-padding surface-sunken" aria-label="More services">
         <div className="section-container"><h2 className="text-2xl font-bold mb-4 text-center">Explore More Services</h2>
           <div className="flex flex-wrap gap-4 justify-center">
             <Link to="/keyword-research" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Keyword Research</Link>
             <Link to="/international-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">International SEO</Link>
             <Link to="/youtube-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">YouTube SEO</Link>
             <Link to="/ai-search-optimization" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">AI Search (GEO)</Link>
             <Link to="/seo-for-startups" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">SEO for Startups</Link>
             <Link to="/saas-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">SaaS SEO</Link>
             <Link to="/real-estate-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Real Estate SEO</Link>
             <Link to="/seo-consulting" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">SEO Consulting</Link>
             <Link to="/white-label-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">White Label SEO</Link>
           </div>
         </div>
       </section>
       <aside className="section-padding" aria-label="Related pages">
         <div className="section-container text-center"><h2 className="text-2xl font-bold mb-4">Learn More</h2><div className="flex flex-col sm:flex-row gap-4 justify-center"><Link to="/seo-packages" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">View SEO Packages</Link><Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors">View Case Studies</Link></div></div>
       </aside>
      <CtaBanner />
    </main>
  </Layout>
);

export default SeoServices;
