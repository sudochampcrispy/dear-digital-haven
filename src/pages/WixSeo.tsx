import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, Zap, Layers, FileText, Search, Settings, Code } from "lucide-react";

const breadcrumb = buildBreadcrumb([{ name: "Home", url: "https://seoexpertinkarachi.com/" }, { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" }, { name: "Wix SEO", url: "https://seoexpertinkarachi.com/wix-seo" }]);
const webPage = buildWebPage({ name: "Wix SEO Services — Optimization for Wix Websites", description: "Wix SEO services covering Wix-specific technical limitations, JavaScript rendering, URL management, speed optimization, and structured data for Wix-powered websites.", url: "https://seoexpertinkarachi.com/wix-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Wix SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "Wix SEO", description: "Wix SEO services addressing JavaScript rendering challenges, URL structure management, Wix SEO Wiz configuration, speed optimization, and structured data implementation for Wix websites." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Can Wix websites rank well on Google?", acceptedAnswer: { "@type": "Answer", text: "Wix websites can rank competitively for low-to-medium competition keywords when properly optimized. Wix improved significantly since 2020 — server-side rendering replaced client-side JavaScript rendering, custom URLs replaced hash-based URLs, and Core Web Vitals scores improved. However, Wix sites face inherent limitations: no server access, limited code customization, and slower average page speeds compared to custom-built or WordPress sites." }},
  { "@type": "Question", name: "What are Wix's SEO limitations?", acceptedAnswer: { "@type": "Answer", text: "Wix's primary SEO limitations include: no access to .htaccess or server configuration, limited robots.txt customization, restricted structured data implementation (only through Wix's built-in tools or Velo code), larger page sizes due to Wix's platform JavaScript, and limited control over HTML output. These constraints mean Wix sites typically cannot match the technical SEO performance of WordPress or custom-built sites, but strategic optimization within Wix's tools can still achieve strong rankings." }},
  { "@type": "Question", name: "How do I improve Wix page speed for SEO?", acceptedAnswer: { "@type": "Answer", text: "Wix speed optimization includes: reducing the number of page elements and sections, compressing images before uploading, using Wix's built-in image optimization, limiting third-party embeds and apps, minimizing custom fonts (maximum 2 font families), reducing animations and visual effects, and enabling Wix's performance settings. Wix sites typically achieve LCP between 2.0-3.5 seconds with proper optimization — adequate for most non-enterprise SEO targets." }},
]};

const pillars = [
  { icon: Settings, title: "Wix SEO Configuration", desc: "Wix provides built-in SEO tools through Wix SEO Wiz and the SEO settings panel. Proper configuration of these native tools addresses 80% of Wix-specific SEO requirements without custom code.", items: ["Wix SEO Wiz setup — completing the guided SEO checklist for foundational optimization", "Custom URL slug configuration — removing auto-generated URL strings and creating clean paths", "Meta title and description optimization for every page, product, and blog post", "301 redirect management through Wix's URL redirect manager for changed or deleted pages", "XML sitemap review — verifying Wix's auto-generated sitemap includes all important pages", "Robots.txt configuration — adjusting Wix's default robots.txt through the SEO settings panel"] },
  { icon: Zap, title: "Wix Performance Optimization", desc: "Wix's platform JavaScript adds baseline page weight that cannot be removed. Optimization focuses on reducing additional weight from content, media, and third-party elements within your control.", items: ["Image optimization — compressing images before upload and using Wix's responsive image delivery", "Section and element reduction — simplifying page layouts to reduce DOM size and render time", "Font optimization — limiting font families to 2 and font weights to 3-4 for faster loading", "Third-party app audit — removing unused Wix apps that inject additional JavaScript", "Animation reduction — replacing complex scroll animations with simpler CSS transitions", "Mobile optimization — ensuring mobile layouts load efficiently with properly sized elements"] },
  { icon: FileText, title: "Wix Content & On-Page SEO", desc: "Content optimization on Wix follows the same principles as any platform — topical depth, heading hierarchy, and search intent alignment. Wix's editor provides sufficient formatting tools for comprehensive on-page optimization.", items: ["Heading hierarchy enforcement — proper H1-H6 structure using Wix's text formatting tools", "Content depth strategy — creating comprehensive pages that demonstrate topical authority", "Blog SEO using Wix's native blogging platform with category and tag optimization", "Image alt text optimization across all site images and media elements", "Internal linking strategy — connecting related pages through contextual content links", "FAQ sections with proper markup for enhanced SERP visibility"] },
  { icon: Layers, title: "Wix Structured Data & Schema", desc: "Wix supports structured data through its built-in SEO settings and Velo (custom code). Proper schema implementation enables rich results that improve click-through rates from search results.", items: ["LocalBusiness schema configuration through Wix's business info settings", "Product schema for Wix Stores with pricing, availability, and review data", "Article and BlogPosting schema for Wix Blog content", "FAQ schema implementation through Wix's SEO markup tools", "Breadcrumb schema for improved navigation display in search results", "Organization schema with consistent business information across all pages"] },
];

const WixSeo = () => (
  <Layout>
    <SeoHead title="Wix SEO Services — Optimization for Wix Websites | Naveed Ganatra" description="Wix SEO services covering technical limitations, speed optimization, URL management, and structured data for Wix-powered websites." canonical="https://seoexpertinkarachi.com/wix-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Wix SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Wix SEO Services in Karachi</h1>
        <p className="text-lg text-body mb-4">Wix hosts over 250 million websites globally. Since 2020, Wix implemented server-side rendering and improved its SEO infrastructure significantly — making competitive rankings achievable when platform-specific optimization is applied correctly.</p>
        <p className="text-body mb-8">Our Wix SEO services maximize your site's ranking potential within Wix's platform constraints — covering URL management, speed optimization, content strategy, and structured data implementation using Wix's native tools and Velo custom code capabilities.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Wix SEO Audit</a>
          <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link>
        </div>
      </div></div></section>

      <section className="section-padding"><div className="section-container">
        <h2 className="text-3xl font-bold mb-4">Wix SEO Within the Bigger Picture</h2>
        <p className="text-body max-w-3xl">Wix sites benefit from the same <Link to="/on-page-seo" className="text-primary hover:underline">on-page SEO</Link> principles as any platform — heading hierarchy, content depth, and search intent alignment. Proper <Link to="/keyword-research" className="text-primary hover:underline">keyword research</Link> identifies which queries are realistic targets given Wix's <Link to="/technical-seo" className="text-primary hover:underline">technical constraints</Link>.</p>
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
          <Link to="/technical-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Technical SEO</Link>
          <Link to="/on-page-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">On-Page SEO</Link>
          <Link to="/squarespace-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Squarespace SEO</Link>
          <Link to="/seo-services" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">All SEO Services</Link>
        </div>
      </div></section>

      <CtaBanner heading="Need Wix SEO Help?" text="Get a free Wix SEO audit covering your site's speed, structure, and ranking opportunities." />
    </main>
  </Layout>
);

export default WixSeo;
