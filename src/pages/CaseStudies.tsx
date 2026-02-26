import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";

const caseStudiesBreadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "Case Studies", url: "https://seoexpertinkarachi.com/case-studies" },
]);

const caseStudiesWebPage = buildWebPage({
  name: "SEO Case Studies & Results",
  description: "Real SEO results: 420% traffic growth for logistics, 18 first-page rankings for pharma exports.",
  url: "https://seoexpertinkarachi.com/case-studies",
});

const caseStudies = [
  {
    id: "logistics-seo-karachi",
    industry: "Logistics",
    title: "Karachi Logistics Company — 420% Traffic Growth",
    challenge: "Low visibility for high-intent commercial queries like \"Karachi to Lahore cargo rates.\" The website had 150+ technical issues, no local SEO presence, and thin content across service pages.",
    strategy: [
      "Resolved 150+ technical SEO issues including crawl errors, duplicate content, and broken internal links",
      "Created a comprehensive 5,000-word \"Pakistan Customs Clearance Guide\" targeting long-tail informational queries",
      "Optimized Google Business Profile for S.I.T.E and Korangi industrial zones",
      "Built topic clusters around logistics-related entities: customs, freight, cargo, supply chain",
      "Implemented LocalBusiness and Service schema for rich SERP features",
    ],
    results: [
      { metric: "#1", label: "Ranking for \"Karachi to Lahore cargo rates\"" },
      { metric: "420%", label: "Organic traffic growth in 6 months" },
      { metric: "35%", label: "Increase in \"logistics near me\" clicks" },
      { metric: "5 mo", label: "Time to first-page rankings" },
    ],
    timeline: "6 months",
  },
  {
    id: "pharma-seo-karachi",
    industry: "Pharma Exports",
    title: "Pharma Exporter — 18 First-Page Rankings in 4 Months",
    challenge: "Zero rankings for competitive export-related queries like \"paracetamol API supplier Pakistan.\" The site had no content strategy, missing schema markup, and unoptimized product pages.",
    strategy: [
      "Created a 7,000-word \"Pharma Exports Guide\" serving as a comprehensive pillar page",
      "Optimized 45 product pages with Product schema and intent-aligned content",
      "Built semantic clusters connecting pharmaceutical entities to export and regulatory topics",
      "Targeted long-tail queries with high commercial intent across international markets",
      "Established E-E-A-T signals through expert authorship and citation-backed content",
    ],
    results: [
      { metric: "18", label: "First-page keyword rankings" },
      { metric: "17", label: "International inquiries generated" },
      { metric: "$28K", label: "Average order value per inquiry" },
      { metric: "4 mo", label: "Time to measurable results" },
    ],
    timeline: "4 months",
  },
];

const articleSchema = (cs: typeof caseStudies[0]) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: cs.title,
  author: { "@type": "Person", name: "Naveed Ganatra" },
  publisher: { "@type": "Organization", name: "Naveed Ganatra - SEO Expert in Karachi" },
  description: cs.challenge,
  about: { "@type": "Thing", name: `SEO for ${cs.industry}` },
});

const CaseStudies = () => (
  <Layout>
    <SeoHead
      title="SEO Case Studies & Results - Naveed Ganatra | Karachi SEO Expert"
      description="Real SEO results: 420% traffic growth for logistics, 18 first-page rankings for pharma exports. See how we deliver measurable organic growth in Karachi."
      canonical="https://seoexpertinkarachi.com/case-studies"
    />
    {caseStudies.map((cs) => (
      <JsonLd key={cs.id} data={articleSchema(cs)} />
    ))}
    <JsonLd data={caseStudiesBreadcrumb} />
    <JsonLd data={caseStudiesWebPage} />

    <main>
      {/* Hero */}
      <section className="section-padding surface-sunken" aria-label="Case studies hero">
        <div className="section-container">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Case Studies</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              SEO Results That Speak for Themselves
            </h1>
            <p className="text-lg text-body">
              Real metrics, real improvements, real outcomes. Every case study below is backed by Google Search Console and Analytics data — not vanity metrics.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((cs, i) => (
        <article
          key={cs.id}
          id={cs.id}
          className={`section-padding ${i % 2 === 0 ? "" : "surface-sunken"}`}
          aria-label={cs.title}
        >
          <div className="section-container">
            <p className="text-xs font-mono font-bold text-primary mb-2">{cs.industry.toUpperCase()}</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">{cs.title}</h2>

            {/* Results grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {cs.results.map((r) => (
                <div key={r.label} className="metric-card text-center">
                  <p className="stat-number text-3xl">{r.metric}</p>
                  <p className="mt-1 text-xs text-subtle">{r.label}</p>
                </div>
              ))}
            </div>

            {/* Challenge & Strategy */}
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-heading mb-2">Challenge</h3>
                <p className="text-sm text-body">{cs.challenge}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-heading mb-2">Strategy</h3>
                <ul className="space-y-2">
                  {cs.strategy.map((s) => (
                    <li key={s} className="flex gap-3 text-sm text-body">
                      <span className="text-primary font-bold">→</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-xs text-subtle">Timeline: {cs.timeline} · Data source: Google Search Console & Analytics</p>
          </div>
        </article>
      ))}

      {/* Methodology */}
      <section className="section-padding surface-sunken" aria-label="Methodology">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Our Approach to Every Campaign</h2>
          <p className="text-body max-w-3xl mb-6">
            Every case study follows the same rigorous semantic SEO methodology, adapted to the client's industry and competitive landscape.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="metric-card">
              <h3 className="font-semibold text-heading mb-1">Technical Foundation</h3>
              <p className="text-sm text-body">We fix crawl issues, optimize speed, and establish clean site architecture before any content work begins.</p>
            </div>
            <div className="metric-card">
              <h3 className="font-semibold text-heading mb-1">Entity & Intent Research</h3>
              <p className="text-sm text-body">We map every entity, attribute, and relation in the client's niche and layer search intents across the content plan.</p>
            </div>
            <div className="metric-card">
              <h3 className="font-semibold text-heading mb-1">Content & Schema</h3>
              <p className="text-sm text-body">We create comprehensive, entity-rich content with proper schema markup for maximum SERP visibility.</p>
            </div>
            <div className="metric-card">
              <h3 className="font-semibold text-heading mb-1">Authority Building</h3>
              <p className="text-sm text-body">We secure high-quality backlinks and build topical authority through semantic internal linking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <aside className="section-padding" aria-label="Related pages">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold mb-4">Ready for Results Like These?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/seo-services" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
              Explore SEO Services
            </Link>
            <Link to="/about" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
              About Naveed Ganatra
            </Link>
          </div>
        </div>
      </aside>

      <CtaBanner heading="Want Results Like These?" text="Schedule a free SEO audit and let's discuss how to grow your organic traffic." />
    </main>
  </Layout>
);

export default CaseStudies;
