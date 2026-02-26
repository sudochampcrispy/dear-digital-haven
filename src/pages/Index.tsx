import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { personSchema, organizationSchema, websiteSchema, siteNavigationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import LeadGenForm from "@/components/LeadGenForm";
import { ArrowRight, BarChart3, Search, Globe, Zap, ShieldCheck, TrendingUp } from "lucide-react";

const stats = [
  { value: "300%+", label: "Avg. Organic Traffic Growth" },
  { value: "50+", label: "SEO Campaigns Delivered" },
  { value: "10+", label: "Years of Experience" },
  { value: "27+", label: "Industries Served" },
];

const services = [
  { icon: Search, title: "Technical SEO", desc: "Core Web Vitals optimization, crawl efficiency, and site architecture for peak performance.", link: "/seo-services#technical-seo" },
  { icon: Globe, title: "Local SEO", desc: "Hyperlocal optimization for Karachi neighborhoods — Clifton, DHA, Gulshan-e-Iqbal and beyond.", link: "/seo-services#local-seo" },
  { icon: BarChart3, title: "Semantic Content", desc: "Entity-based content strategy with topical authority mapping and intent-layered optimization.", link: "/seo-services#semantic-content" },
  { icon: Zap, title: "Link Building", desc: "High-DR .pk backlinks and contextual links from authoritative Pakistani and international sources.", link: "/seo-services#link-building" },
  { icon: ShieldCheck, title: "SEO Audits", desc: "100+ point comprehensive audits covering speed, mobile, crawlability, schema, and content gaps.", link: "/seo-services#seo-audits" },
  { icon: TrendingUp, title: "E-commerce SEO", desc: "Product page optimization, category architecture, and structured data for online stores.", link: "/seo-services#ecommerce-seo" },
];

const framework = [
  { step: "01", title: "Entity Mapping", desc: "Build a knowledge graph linking your brand to services, locations, and industry entities." },
  { step: "02", title: "Intent Matching", desc: "Target dominant, secondary, and implicit search intents for comprehensive coverage." },
  { step: "03", title: "Schema Structuring", desc: "Implement LocalBusiness, FAQPage, Article, and HowTo schemas for SERP features." },
  { step: "04", title: "Internal Linking", desc: "Connect cluster pages to reinforce semantic relationships and topical authority." },
  { step: "05", title: "Content Enrichment", desc: "Use synonyms, related entities, and bilingual terms for maximum topical depth." },
  { step: "06", title: "Performance Monitoring", desc: "Track rankings, crawl rates, and Core Web Vitals with monthly reporting." },
];

const faqData = [
  { q: "What is SEO, and why is it important for Karachi businesses?", a: "SEO improves your website's visibility on Google, capturing 93% of users who stay on page 1. In Karachi, local SEO targets queries like \"SEO expert DHA Karachi\" to drive qualified leads." },
  { q: "How fast do SEO results appear in Karachi?", a: "Initial improvements (technical fixes, GBP optimization) appear in 30–45 days; significant growth (content, backlinks) takes 3–6 months." },
  { q: "What's included in a technical SEO audit?", a: "A 100+ point audit checks site speed (LCP 0.9s), mobile responsiveness, crawlability, and schema, optimized for Karachi's networks." },
  { q: "How do you handle competition in Karachi's SEO market?", a: "I analyze competitors' weaknesses (e.g., poor citations, generic content) and dominate with hyperlocal pages and .pk backlinks." },
  { q: "How to choose an SEO expert in Karachi?", a: "Look for Google certifications, proven results (e.g., 300% traffic growth), and hyperlocal expertise." },
  { q: "Where can I hire an SEO expert in Karachi?", a: "Contact Naveed Ganatra via WhatsApp (+92 323 2877850) for a free audit and personalized strategy." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const homeBreadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
]);

const homeWebPage = buildWebPage({
  name: "SEO Expert in Karachi - Naveed Ganatra",
  description: "Boost your Karachi business with Naveed Ganatra, a Google-certified SEO expert with 10+ years of experience.",
  url: "https://seoexpertinkarachi.com/",
});

const Index = () => (
  <Layout>
    <SeoHead
      title="SEO Expert in Karachi - Naveed Ganatra | 300%+ Traffic Growth"
      description="Boost your Karachi business with Naveed Ganatra, a Google-certified SEO expert with 10+ years of experience. Achieve top Google rankings and 300%+ organic traffic growth through semantic SEO and technical optimization."
      canonical="https://seoexpertinkarachi.com/"
    />
    <JsonLd data={personSchema} />
    <JsonLd data={organizationSchema} />
    <JsonLd data={websiteSchema} />
    <JsonLd data={siteNavigationSchema} />
    <JsonLd data={homeBreadcrumb} />
    <JsonLd data={homeWebPage} />
    <JsonLd data={faqSchema} />

    <main>
      {/* Hero */}
      <section className="section-padding surface-sunken" aria-label="Hero">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">
                Google-Certified SEO Consultant · Karachi
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight mb-6">
                SEO Expert in Karachi{" "}
                <span className="block mt-1">— Naveed Ganatra</span>
              </h1>
              <p className="text-lg sm:text-xl text-body mb-4">
                Achieve top Google rankings and 300%+ organic traffic growth through semantic SEO, technical optimization, and hyperlocal strategies tailored for Karachi's digital market.
              </p>
              <p className="text-base text-body mb-4">
                With over a decade of hands-on experience across 27+ industries — from e-commerce and healthcare to logistics and real estate — I bring enterprise-level SEO strategies to businesses of every size in Karachi. My data-driven approach combines entity-based optimization, Core Web Vitals tuning, and bilingual keyword targeting (English &amp; Urdu) to capture the search intent that drives real revenue.
              </p>
              <p className="text-base text-body mb-8">
                Whether you're a startup looking for your first page-one ranking or an established brand protecting visibility after a Google core update, I deliver transparent, measurable results — no generic playbooks, no junior account managers, just direct access to a Google-certified professional who understands Karachi's competitive landscape inside out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/923232877850"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Get Free SEO Audit
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
            <LeadGenForm />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding" aria-label="Key metrics">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="metric-card text-center">
                <p className="stat-number">{s.value}</p>
                <p className="mt-2 text-sm text-subtle">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding surface-sunken" aria-label="Why choose Naveed Ganatra">
        <div className="section-container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose Naveed Ganatra as Your SEO Expert in Karachi?
          </h2>
          <p className="text-body max-w-2xl mb-10">
            Personalized, data-driven SEO strategies to outrank competitors in Karachi's competitive landscape. My approach combines global expertise (USA, Dubai, Pakistan) with hyperlocal insights.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="metric-card">
              <h3 className="font-semibold text-heading mb-2">Proven Results</h3>
              <p className="text-sm text-body">
                Delivered 300%+ organic traffic growth for logistics, healthcare, and e-commerce businesses. Ranked #1 for "Karachi to Lahore cargo rates" and "Beverly Hills dental implants" in 5–7 months.
              </p>
            </div>
            <div className="metric-card">
              <h3 className="font-semibold text-heading mb-2">Personalized Service</h3>
              <p className="text-sm text-body">
                Work directly with me, a Google-certified professional, for tailored solutions — unlike generic agencies with junior account managers.
              </p>
            </div>
            <div className="metric-card">
              <h3 className="font-semibold text-heading mb-2">Advanced Tooling</h3>
              <p className="text-sm text-body">
                Leveraging Ahrefs, SEMrush, Screaming Frog, and ProSEOToolkit.com for precise audits and competitive intelligence.
              </p>
            </div>
            <div className="metric-card">
              <h3 className="font-semibold text-heading mb-2">HCU Protection</h3>
              <p className="text-sm text-body">
                Proprietary content framework ensured 94% of clients maintained rankings during Google's Helpful Content Updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding" aria-label="SEO services overview">
        <div className="section-container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">SEO Services in Karachi</h2>
          <p className="text-body max-w-2xl mb-10">
            Comprehensive SEO strategies tailored for Karachi's bilingual and mobile-first search ecosystem.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.title} to={s.link} className="metric-card group">
                <s.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-heading mb-2 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-body">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/seo-services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Framework */}
      <section className="section-padding surface-sunken" aria-label="SEO framework">
        <div className="section-container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Semantic SEO Framework</h2>
          <p className="text-body max-w-2xl mb-10">
            A proven methodology for sustainable rankings in Karachi's competitive market, built on entity-based SEO and topical authority principles.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {framework.map((f) => (
              <div key={f.step} className="metric-card">
                <span className="text-xs font-mono font-bold text-primary">{f.step}</span>
                <h3 className="font-semibold text-heading mt-2 mb-2">{f.title}</h3>
                <p className="text-sm text-body">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Teaser */}
      <section className="section-padding" aria-label="Success stories">
        <div className="section-container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-body max-w-2xl mb-10">
            Real results from businesses transformed by data-driven SEO strategies.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <article className="metric-card">
              <p className="text-xs font-mono font-bold text-primary mb-2">LOGISTICS</p>
              <h3 className="font-semibold text-heading mb-2">Karachi Logistics Company</h3>
              <p className="text-sm text-body mb-4">
                Ranked #1 for "Karachi to Lahore cargo rates" — achieved 420% traffic growth and 35% more local clicks in 6 months.
              </p>
              <Link to="/case-studies" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                Read Case Study →
              </Link>
            </article>
            <article className="metric-card">
              <p className="text-xs font-mono font-bold text-primary mb-2">PHARMA EXPORTS</p>
              <h3 className="font-semibold text-heading mb-2">Pharma Exporter in Karachi</h3>
              <p className="text-sm text-body mb-4">
                First-page rankings for 18 keywords, generating 17 international inquiries ($28,000 avg. order value) in 4 months.
              </p>
              <Link to="/case-studies" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                Read Case Study →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding surface-sunken" aria-label="Frequently asked questions">
        <div className="section-container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqData.map((f) => (
              <details key={f.q} className="group metric-card">
                <summary className="cursor-pointer font-semibold text-heading list-none flex items-center justify-between">
                  {f.q}
                  <span className="ml-4 text-primary text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-body">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </main>
  </Layout>
);

export default Index;
