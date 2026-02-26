import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, AlertTriangle, ArrowRight, Server, Shield, Search, FileText, Link2, BarChart3 } from "lucide-react";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "Website Migration SEO", url: "https://seoexpertinkarachi.com/website-migration-seo" },
]);
const webPage = buildWebPage({ name: "Website Migration SEO Services — Zero Traffic Loss Migration Strategy", description: "Website migration SEO services covering pre-migration audits, URL mapping, redirect strategies, content preservation, and post-migration monitoring to prevent traffic loss during site moves.", url: "https://seoexpertinkarachi.com/website-migration-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Website Migration SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "Website Migration SEO", description: "Website migration SEO services covering domain migrations, CMS platform changes, URL restructuring, HTTPS migrations, and site redesigns with comprehensive redirect mapping and traffic preservation strategies." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "What is website migration SEO?", acceptedAnswer: { "@type": "Answer", text: "Website migration SEO is the process of preserving search rankings and organic traffic during any major website change — domain moves, CMS platform changes, URL restructuring, HTTPS migration, or complete site redesigns. Without proper SEO migration planning, sites commonly lose 20-60% of organic traffic that takes 6-12 months to recover." }},
  { "@type": "Question", name: "How long does it take to recover traffic after a migration?", acceptedAnswer: { "@type": "Answer", text: "With proper SEO migration planning, traffic recovery takes 2-4 weeks. Without it, recovery can take 6-12 months — or traffic may never fully recover. The difference is comprehensive URL mapping, proper 301 redirects, content preservation, and post-migration monitoring. Sites that skip migration SEO planning typically lose 20-60% of organic traffic." }},
  { "@type": "Question", name: "What types of website changes require migration SEO?", acceptedAnswer: { "@type": "Answer", text: "Any change that affects URLs, site structure, or content requires migration SEO: domain name changes, CMS platform switches (WordPress to Shopify, etc.), URL restructuring, HTTP to HTTPS migration, site redesigns that change page templates, subdomain to subdirectory moves, domain consolidation (merging multiple sites), and international expansion with new country domains." }},
  { "@type": "Question", name: "What is the biggest mistake during website migrations?", acceptedAnswer: { "@type": "Answer", text: "The biggest mistake is not creating comprehensive 301 redirect maps before the migration. Every old URL must redirect to its most relevant new URL. Broken redirects, redirect chains, and missing redirects cause immediate ranking drops. The second biggest mistake is changing content during migration — URLs AND content should never change simultaneously, as Google can't determine whether ranking changes are due to URL changes or content changes." }},
]};

const pillars = [
  { icon: FileText, title: "Pre-Migration Audit & Planning", desc: "Every successful migration starts with a comprehensive audit of your current site's SEO assets — rankings, backlinks, indexed pages, and internal link structure. This baseline determines what must be preserved.", items: ["Complete crawl of current site — cataloguing every URL, its rankings, traffic, and backlinks", "Content inventory — mapping every page's content, metadata, and structured data for preservation", "Backlink audit — identifying which pages receive external links that must be properly redirected", "Internal link structure documentation — mapping the current link graph for reconstruction", "Baseline ranking and traffic snapshots — establishing benchmarks for post-migration comparison", "Risk assessment — identifying the specific migration risks based on your site's size and complexity"] },
  { icon: Link2, title: "URL Mapping & Redirect Strategy", desc: "URL mapping is the most critical migration task. Every old URL must map to the most relevant new URL with a proper 301 redirect. Missing or incorrect redirects are the primary cause of post-migration traffic loss.", items: ["1:1 URL mapping — matching every old URL to its new equivalent with no orphaned redirects", "301 redirect implementation — permanent redirects that transfer 90-99% of link equity", "Redirect chain prevention — ensuring no redirect passes through more than one hop", "Pattern-based redirect rules for large sites with thousands of URLs", "404 error monitoring setup — catching any URLs that slip through redirect mapping", "Legacy URL preservation — maintaining redirects for at least 12 months post-migration"] },
  { icon: Server, title: "Technical Migration Execution", desc: "The technical implementation phase requires precise coordination between developers, SEO, and hosting to ensure zero downtime and proper search engine communication.", items: ["Staging environment testing — verifying all redirects, content, and metadata before going live", "DNS propagation management — minimizing downtime during domain changes", "XML sitemap submission — immediate sitemap update in Google Search Console post-migration", "Robots.txt verification — ensuring no critical pages are blocked on the new site", "Canonical tag audit — verifying all canonical tags point to correct new URLs", "HTTPS and security configuration — SSL certificates, HSTS headers, mixed content checks"] },
  { icon: BarChart3, title: "Post-Migration Monitoring & Recovery", desc: "The first 30 days after migration are critical. Active monitoring detects issues before they cause permanent traffic loss, enabling rapid fixes that prevent ranking deterioration.", items: ["Daily crawl monitoring — detecting new 404 errors, redirect failures, and indexing issues", "Search Console monitoring — tracking index coverage, crawl stats, and manual actions", "Ranking tracking — comparing post-migration rankings against pre-migration baselines", "Traffic analysis — monitoring organic traffic patterns for unexpected drops by page or section", "Backlink verification — confirming external links properly reach redirected destinations", "30/60/90 day recovery reports — documenting migration success and remaining optimization opportunities"] },
];

const WebsiteMigrationSeo = () => (
  <Layout>
    <SeoHead title="Website Migration SEO — Zero Traffic Loss Migration Strategy | Naveed Ganatra" description="Website migration SEO services covering pre-migration audits, URL mapping, redirect strategies, content preservation, and post-migration monitoring to prevent traffic loss." canonical="https://seoexpertinkarachi.com/website-migration-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken">
        <div className="section-container"><div className="max-w-4xl">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Website Migration SEO</p>
           <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Website Migration SEO Services</h1>
           <p className="text-lg text-body mb-4">Website migrations are the highest-risk SEO events. For Karachi businesses, a domain change, CMS switch, or URL restructuring can destroy years of ranking progress — unless every URL, redirect, and technical element is meticulously preserved.</p>
           <p className="text-body mb-8">Our migration SEO services start with a comprehensive SEO audit, followed by URL mapping, redirect implementation, and 90-day post-migration monitoring — preserving your on-page signals and backlink equity through the transition.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Migration SEO Consultation</a>
            <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link>
          </div>
        </div></div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Why Migrations Fail Without SEO Planning</h2>
          <p className="text-body max-w-3xl mb-6">Sites that migrate without SEO planning lose <strong className="text-heading">20-60% of organic traffic</strong>. Proper migration SEO — informed by a thorough <Link to="/seo-audit" className="text-primary hover:underline">SEO audit</Link> — preserves rankings, backlink equity, and indexing status through comprehensive redirect mapping and post-migration <Link to="/technical-seo" className="text-primary hover:underline">technical monitoring</Link>.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[{ v: "20-60%", l: "Traffic loss without migration SEO" }, { v: "2-4 wks", l: "Recovery with proper planning" }, { v: "6-12 mo", l: "Recovery without planning" }, { v: "90 days", l: "Post-migration monitoring period" }].map((s) => (
              <div key={s.l} className="metric-card text-center"><p className="stat-number text-3xl">{s.v}</p><p className="text-xs text-subtle mt-1">{s.l}</p></div>
            ))}
          </div>
        </div>
      </section>

      {pillars.map((pillar, i) => (
        <section key={pillar.title} className={`section-padding ${i % 2 !== 0 ? "surface-sunken" : ""}`}>
          <div className="section-container"><div className="grid lg:grid-cols-2 gap-8 items-start">
            <div><div className="flex items-center gap-3 mb-4"><pillar.icon className="h-6 w-6 text-primary shrink-0" /><h2 className="text-3xl font-bold">{pillar.title}</h2></div><p className="text-body">{pillar.desc}</p></div>
            <ul className="space-y-3">{pillar.items.map((item) => (<li key={item} className="flex gap-3 text-sm text-body"><CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />{item}</li>))}</ul>
          </div></div>
        </section>
      ))}

      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <h2 className="text-2xl font-bold text-heading mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">{faqSchema.mainEntity.map((faq) => (
            <details key={faq.name} className="group metric-card"><summary className="cursor-pointer font-semibold text-heading list-none flex items-center justify-between">{faq.name}<span className="ml-4 text-primary text-xl group-open:rotate-45 transition-transform">+</span></summary><p className="mt-3 text-sm text-body">{faq.acceptedAnswer.text}</p></details>
          ))}</div>
        </div>
      </section>

       <section className="section-padding surface-sunken">
         <div className="section-container"><h2 className="text-2xl font-bold mb-4 text-center">Related SEO Services</h2>
           <div className="flex flex-wrap gap-4 justify-center">
             <Link to="/technical-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Technical SEO</Link>
             <Link to="/seo-audit" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">SEO Audit</Link>
             <Link to="/on-page-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">On-Page SEO</Link>
             <Link to="/international-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">International SEO</Link>
             <Link to="/seo-services" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">All SEO Services</Link>
           </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <div className="metric-card bg-primary/5 border-primary/20">
            <h2 className="text-2xl font-bold text-heading mb-3">Planning a Website Migration?</h2>
            <p className="text-body mb-6">Get a free migration risk assessment covering your current SEO assets, redirect requirements, and a migration timeline that preserves your organic traffic.</p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Migration Assessment →</a>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">Hire Naveed Ganatra</Link>
            </div>
          </div>
        </div>
      </section>
      <CtaBanner />
    </main>
  </Layout>
);

export default WebsiteMigrationSeo;
