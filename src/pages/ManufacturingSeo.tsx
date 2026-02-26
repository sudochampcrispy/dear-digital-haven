import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, Factory, FileText, Globe, Search, Target, BarChart3 } from "lucide-react";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "Manufacturing SEO", url: "https://seoexpertinkarachi.com/manufacturing-seo" },
]);
const webPage = buildWebPage({ name: "Manufacturing Company SEO Services — Industrial Lead Generation", description: "Manufacturing SEO services covering product page optimization, industrial keyword strategy, technical content, B2B lead generation, and international visibility for manufacturing companies.", url: "https://seoexpertinkarachi.com/manufacturing-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Manufacturing Company SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "Manufacturing SEO", description: "Manufacturing SEO services covering product catalog optimization, industrial keyword targeting, technical specification content, B2B lead generation, distributor page SEO, and international visibility for manufacturing companies." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Why do manufacturing companies need SEO?", acceptedAnswer: { "@type": "Answer", text: "73% of B2B buyers use search engines during their purchasing research. Manufacturing companies with optimized websites capture procurement managers, engineers, and decision-makers actively searching for suppliers, materials, and industrial products. Unlike consumer goods, manufacturing sales cycles are long and high-value — a single B2B lead from organic search can generate contracts worth $50,000-$500,000+. SEO compounds over time, reducing cost per qualified lead below trade shows and paid advertising." }},
  { "@type": "Question", name: "What keywords should manufacturers target?", acceptedAnswer: { "@type": "Answer", text: "Manufacturing keywords fall into three categories: product-specific ('CNC machined parts supplier'), application-based ('corrosion resistant coatings for marine'), and specification-based ('304 stainless steel tubing dimensions'). Product keywords capture buyers who know what they need. Application keywords capture engineers solving specific problems. Specification keywords attract technical professionals comparing options. All three require detailed, accurate technical content that consumer-focused SEO strategies cannot provide." }},
  { "@type": "Question", name: "How does SEO help manufacturers compete with large industrial directories?", acceptedAnswer: { "@type": "Answer", text: "Industrial directories like ThomasNet and Alibaba rank for broad manufacturing terms, but manufacturers can outrank them for specific product, material, and capability keywords. Detailed product pages with specifications, certifications, case studies, and application guides provide more value than directory listings. Google increasingly favors manufacturer websites over aggregators for specific product queries because they provide authoritative, first-hand product information." }},
  { "@type": "Question", name: "How long does manufacturing SEO take to generate leads?", acceptedAnswer: { "@type": "Answer", text: "Manufacturing SEO typically shows ranking improvements within 3-4 months for long-tail product and specification keywords. Competitive terms like '[product category] manufacturer' take 6-12 months. RFQ submissions and qualified lead inquiries start within 4-6 months. The key metric is lead quality — manufacturing SEO generates fewer but significantly higher-value leads compared to consumer SEO. Companies investing consistently see organic search become their top lead source within 12-18 months." }},
]};

const pillars = [
  { icon: Factory, title: "Product & Catalog Page Optimization", desc: "Manufacturing websites often have hundreds or thousands of product pages. Each must be individually optimized with technical specifications, applications, and certifications to rank for specific product searches.", items: ["Product page SEO — unique, specification-rich content for each product with proper schema markup", "Category page optimization — structured taxonomy pages for product families and material types", "Technical specification content — detailed spec sheets optimized for engineering search queries", "Certification and compliance pages — ISO, ASTM, and industry certification pages building trust signals", "Product comparison content — side-by-side comparisons for similar products or material grades", "CAD and technical drawing pages — optimized pages for downloadable technical resources"] },
  { icon: Target, title: "Industrial Keyword Strategy", desc: "Manufacturing keywords are technical, specific, and high-value. Engineers and procurement managers search differently than consumers — using part numbers, specifications, material grades, and industry terminology.", items: ["Technical keyword research — identifying part number, specification, and material-based search queries", "Application-based keyword targeting — 'solutions for [industry problem]' content capturing problem-aware buyers", "Competitor keyword analysis — identifying product and capability keywords competitors rank for", "Long-tail specification keywords — targeting precise technical queries with low competition and high intent", "Industry terminology optimization — ensuring content matches the exact language buyers and engineers use", "Search intent mapping — aligning content with informational, evaluational, and transactional manufacturing queries"] },
  { icon: Globe, title: "International & Multi-Market SEO", desc: "Manufacturing companies often serve global markets. International SEO ensures visibility across different countries, languages, and industrial search behaviors.", items: ["Multi-language product pages — properly translated and localized content for target export markets", "Hreflang implementation — correct language and region targeting to prevent duplicate content issues", "Country-specific landing pages — dedicated pages for each market highlighting local certifications and compliance", "International directory presence — listings in country-specific industrial directories and supplier databases", "Export capability content — pages highlighting shipping, customs, and international service capabilities", "Regional keyword research — understanding how industrial terms vary across different markets and languages"] },
  { icon: FileText, title: "Technical Content & Authority Building", desc: "Manufacturing authority is built through technical depth. Engineers and procurement managers trust manufacturers who demonstrate deep material science, process expertise, and application knowledge.", items: ["Technical blog and resource center — in-depth articles on materials, processes, and industry applications", "Case study content — detailed project case studies with specifications, challenges, and outcomes", "White paper and guide creation — comprehensive resources that generate leads and earn industry backlinks", "Industry standards content — explainers on relevant standards, regulations, and compliance requirements", "Process capability content — detailed pages explaining manufacturing processes and capabilities", "Video content — facility tours, process demonstrations, and technical explainers for YouTube SEO"] },
];

const ManufacturingSeo = () => (
  <Layout>
    <SeoHead title="Manufacturing Company SEO Services — Industrial Lead Generation | Naveed Ganatra" description="Manufacturing SEO services covering product page optimization, industrial keyword strategy, technical content, B2B lead generation, and international visibility for manufacturers." canonical="https://seoexpertinkarachi.com/manufacturing-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Manufacturing SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Manufacturing Company SEO Services</h1>
        <p className="text-lg text-body mb-4">73% of B2B buyers use search engines during purchasing research. For Karachi's manufacturing sector and exporters, ranking for product-specific and specification-based keywords captures procurement managers and engineers actively looking for suppliers.</p>
        <p className="text-body mb-8">Our manufacturing SEO services combine product catalog optimization, industrial keyword strategy, technical content development, and international visibility — designed to generate high-value B2B leads from organic search.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Manufacturing SEO Consultation</a>
          <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link>
        </div>
      </div></div></section>

      <section className="section-padding"><div className="section-container">
        <h2 className="text-3xl font-bold mb-4">Why Manufacturers Need Specialized SEO</h2>
        <p className="text-body max-w-3xl">Manufacturing SEO requires deep <Link to="/keyword-research" className="text-primary hover:underline">keyword research</Link> for technical and specification-based queries. Large product catalogs need solid <Link to="/technical-seo" className="text-primary hover:underline">technical SEO</Link> for crawl efficiency, while <Link to="/international-seo" className="text-primary hover:underline">international SEO</Link> ensures visibility across export markets.</p>
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
          <Link to="/international-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">International SEO</Link>
          <Link to="/technical-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Technical SEO</Link>
          <Link to="/content-strategy-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Content Strategy</Link>
        </div>
      </div></section>

      <section className="section-padding"><div className="section-container max-w-3xl">
        <div className="metric-card bg-primary/5 border-primary/20">
          <h2 className="text-2xl font-bold text-heading mb-3">Ready to Generate More B2B Leads From Organic Search?</h2>
          <p className="text-body mb-6">Get a free manufacturing SEO assessment covering your product page optimization, industrial keyword gaps, and a strategy for capturing high-value procurement searches.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Manufacturing SEO Assessment →</a>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">Hire Naveed Ganatra</Link>
          </div>
        </div>
      </div></section>
      <CtaBanner />
    </main>
  </Layout>
);

export default ManufacturingSeo;
