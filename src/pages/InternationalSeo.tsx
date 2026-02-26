import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, Globe, Languages, Map, Server, FileText, BarChart3 } from "lucide-react";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "International SEO", url: "https://seoexpertinkarachi.com/international-seo" },
]);
const webPage = buildWebPage({ name: "International SEO Services — Multilingual & Multi-Regional Optimization", description: "International SEO services covering hreflang implementation, geo-targeting, multilingual content strategy, international site architecture, and multi-regional search visibility optimization.", url: "https://seoexpertinkarachi.com/international-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "International SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: { "@type": "Country", name: "Pakistan" }, serviceType: "International SEO", description: "International SEO services covering hreflang implementation, geo-targeting strategies, multilingual content optimization, ccTLD and subdirectory architecture, and multi-regional search visibility for global market expansion." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "What is international SEO?", acceptedAnswer: { "@type": "Answer", text: "International SEO optimizes your website for multiple countries, languages, or regions. It includes hreflang tag implementation, geo-targeting configuration, multilingual content strategy, and international site architecture decisions (ccTLDs, subdomains, or subdirectories). The goal is ensuring search engines serve the right version of your content to users in each target market." }},
  { "@type": "Question", name: "What is hreflang and why is it important?", acceptedAnswer: { "@type": "Answer", text: "Hreflang is an HTML attribute that tells search engines which language and regional version of a page to show users in different locations. Without proper hreflang implementation, Google may show your English page to Spanish-speaking users, or your US content to UK users. Incorrect hreflang causes duplicate content issues, ranking cannibalization between language versions, and poor user experience." }},
  { "@type": "Question", name: "Should I use ccTLDs, subdomains, or subdirectories for international sites?", acceptedAnswer: { "@type": "Answer", text: "Subdirectories (example.com/fr/) are recommended for most businesses — they consolidate domain authority, are easiest to maintain, and pass link equity across all language versions. ccTLDs (example.fr) provide the strongest geo-targeting signal but split domain authority. Subdomains (fr.example.com) offer a middle ground but are treated as separate sites by Google. Choose based on your resources, number of target markets, and existing domain authority." }},
  { "@type": "Question", name: "How do I handle multilingual content — translate or create unique content?", acceptedAnswer: { "@type": "Answer", text: "Both. Direct translation covers your existing content for new language markets. But each market also needs locally relevant content addressing region-specific queries, cultural references, and local competition. Machine translation alone is insufficient — content must be localized by native speakers who understand local search behavior, idioms, and cultural context." }},
]};

const pillars = [
  { icon: Languages, title: "Hreflang Implementation & Management", desc: "Hreflang tags are the technical foundation of international SEO. Incorrect implementation causes ranking cannibalization, wrong content serving, and wasted crawl budget across language versions.", items: ["Hreflang audit — detecting errors, missing tags, and conflicting signals across language versions", "Self-referencing hreflang tags — ensuring every page references itself in the hreflang set", "X-default implementation — configuring fallback pages for users outside target regions", "Hreflang in XML sitemaps — scalable implementation for large multi-language sites", "Bi-directional confirmation — verifying every hreflang tag has a matching return tag", "Ongoing monitoring — detecting hreflang errors as new content is published across versions"] },
  { icon: Globe, title: "International Site Architecture", desc: "Your site structure determines how Google associates content with specific countries and languages. The architecture decision (ccTLD, subdomain, or subdirectory) has long-term implications for authority consolidation and maintenance.", items: ["Architecture evaluation — recommending ccTLD, subdomain, or subdirectory based on your specific situation", "Geo-targeting configuration in Google Search Console for each country version", "International URL structure design — clean, consistent paths across language versions", "Cross-language internal linking — connecting related content between language versions", "International XML sitemap structure — per-language sitemaps with proper hreflang references", "CDN and server location optimization for target market page speed performance"] },
  { icon: Map, title: "Multilingual Content Strategy", desc: "International content strategy goes beyond translation. Each market has unique search behavior, competitive landscape, and content expectations that require localized keyword research and content creation.", items: ["Per-market keyword research — identifying search demand specific to each target language and region", "Content localization — adapting content for cultural context, not just language translation", "Local competitor analysis per market — understanding what ranks in each target country", "Regional content gap identification — topics relevant to specific markets that don't apply globally", "Local link building strategy per market — building authority from regionally relevant sources", "Market-specific SERP feature optimization — adapting for local search features in each country"] },
  { icon: BarChart3, title: "International Performance Tracking", desc: "Multi-market SEO requires tracking performance separately for each country and language version to identify which markets are growing, which need attention, and where new opportunities exist.", items: ["Per-country ranking tracking — monitoring positions in each target market's search results", "Market-specific traffic analysis — segmenting organic traffic by country and language", "Cross-market conversion comparison — identifying which markets produce the best ROI", "Crawl behavior monitoring per language version — ensuring proper crawl budget allocation", "Hreflang error tracking — catching implementation issues before they affect rankings", "Market expansion opportunity analysis — identifying new countries worth targeting based on demand data"] },
];

const InternationalSeo = () => (
  <Layout>
    <SeoHead title="International SEO Services — Multilingual & Multi-Regional Optimization | Naveed Ganatra" description="International SEO services covering hreflang implementation, geo-targeting, multilingual content strategy, international site architecture, and global search visibility optimization." canonical="https://seoexpertinkarachi.com/international-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">International SEO</p>
         <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">International SEO Services</h1>
         <p className="text-lg text-body mb-4">Based in Karachi, we help businesses expand into international markets with proper SEO planning. International SEO ensures search engines serve the right version of your content to the right users in every target market — building on your technical SEO foundations.</p>
         <p className="text-body mb-8">Our international SEO services cover hreflang implementation, geo-targeting, multilingual content strategy, site architecture decisions, and per-market performance tracking — informed by thorough keyword research for each target market.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get International SEO Consultation</a>
          <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link>
        </div>
      </div></div></section>

      <section className="section-padding"><div className="section-container">
        <h2 className="text-3xl font-bold mb-4">How International SEO Connects to Your Overall Strategy</h2>
        <p className="text-body max-w-3xl">International expansion requires your <Link to="/technical-seo" className="text-primary hover:underline">technical SEO</Link> to support multiple language versions cleanly. Hreflang errors compound with existing crawlability issues, making a solid <Link to="/seo-audit" className="text-primary hover:underline">SEO audit</Link> essential before any multi-market rollout. Each target market also needs dedicated <Link to="/keyword-research" className="text-primary hover:underline">keyword research</Link> to uncover local search demand.</p>
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
           <Link to="/technical-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Technical SEO</Link>
           <Link to="/content-strategy-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Content Strategy</Link>
           <Link to="/website-migration-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Website Migration</Link>
           <Link to="/keyword-research" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Keyword Research</Link>
           <Link to="/ecommerce-seo-karachi" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">E-commerce SEO</Link>
         </div>
       </div></section>

      <section className="section-padding"><div className="section-container max-w-3xl">
        <div className="metric-card bg-primary/5 border-primary/20">
          <h2 className="text-2xl font-bold text-heading mb-3">Ready to Expand Into International Markets?</h2>
          <p className="text-body mb-6">Get a free international SEO assessment covering your current multi-language setup, hreflang implementation, and geo-targeting opportunities for your target markets.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get International SEO Assessment →</a>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">Hire Naveed Ganatra</Link>
          </div>
        </div>
      </div></section>
      <CtaBanner />
    </main>
  </Layout>
);

export default InternationalSeo;
