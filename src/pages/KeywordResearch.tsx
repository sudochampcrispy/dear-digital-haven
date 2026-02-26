import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import {
  CheckCircle,
  AlertTriangle,
  Search,
  Target,
  BarChart3,
  TrendingUp,
  Filter,
  Map,
} from "lucide-react";

/* ── Schema ── */
const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "Keyword & Topic Research", url: "https://seoexpertinkarachi.com/keyword-research" },
]);

const webPage = buildWebPage({
  name: "Keyword & Topic Research Services — Search Intent, Opportunity Mapping & Competitive Analysis",
  description: "Professional keyword and topic research services covering search intent classification, opportunity mapping, competitor keyword gap analysis, long-tail discovery, and semantic keyword clustering for data-driven SEO strategies.",
  url: "https://seoexpertinkarachi.com/keyword-research",
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Keyword & Topic Research Services",
  provider: { "@type": "Person", name: "Naveed Ganatra" },
  areaServed: [
    { "@type": "City", name: "Karachi" },
    { "@type": "Country", name: "Pakistan" },
  ],
  serviceType: "Keyword Research & Topic Analysis",
  description: "Professional keyword and topic research services covering search intent mapping, competitive keyword gap analysis, long-tail opportunity discovery, semantic clustering, search volume analysis, and content prioritization for data-driven SEO strategies.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between keyword research and topic research?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Keyword research identifies specific search phrases people use and their volume/competition metrics. Topic research maps the broader subject areas, subtopics, and semantic relationships between concepts. Modern SEO requires both: topic research defines your content strategy and topical map, while keyword research identifies the specific queries to target within each topic. Doing keyword research without topic research produces disconnected content that fails to build topical authority.",
      },
    },
    {
      "@type": "Question",
      name: "How do you determine keyword difficulty accurately?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We evaluate keyword difficulty through multiple factors beyond tool-generated scores: analyzing the domain authority and topical relevance of current top-10 results, assessing their content depth and quality, evaluating their backlink profiles, examining SERP features present (featured snippets, PAA, local packs), and estimating the content investment required to outperform them. Tool scores like Ahrefs KD or Semrush difficulty are starting points, not definitive measures.",
      },
    },
    {
      "@type": "Question",
      name: "Should I target high-volume or low-competition keywords?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Neither exclusively. The optimal strategy targets keywords based on business value, search intent alignment, and competitive feasibility. A low-volume keyword with strong commercial intent and low competition (e.g., 'enterprise SEO audit pricing') often produces more revenue than a high-volume informational keyword. We prioritize keywords by mapping search volume, intent, difficulty, and business relevance into a scoring matrix.",
      },
    },
    {
      "@type": "Question",
      name: "What is semantic keyword clustering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Semantic keyword clustering groups keywords that share the same search intent and can be targeted by a single page. Instead of creating separate pages for 'SEO audit', 'SEO audit checklist', and 'website SEO analysis', clustering identifies these as the same intent — served by one comprehensive page. This prevents keyword cannibalization and focuses content depth on comprehensive topical coverage rather than spreading thin across duplicate intent pages.",
      },
    },
    {
      "@type": "Question",
      name: "How often should keyword research be updated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Full keyword research should be refreshed every 6-12 months as search behavior, competition, and market conditions evolve. Quarterly reviews of ranking data and search trends identify emerging opportunities or shifting intent. Seasonal businesses should research and prepare content 2-3 months before peak search periods. Continuous monitoring of Search Console data reveals new query opportunities that didn't exist in the original research.",
      },
    },
  ],
};

/* ── Data ── */
const pillars = [
  {
    icon: Search,
    title: "Search Intent Classification",
    desc: "Every keyword has an intent. Targeting a keyword without understanding its intent leads to content that Google won't rank — regardless of quality. Intent classification is the first step in effective keyword research.",
    items: [
      "Intent categorization — classifying every keyword as informational, navigational, commercial, or transactional",
      "SERP intent analysis — studying what Google currently ranks to verify intent classification",
      "Mixed-intent identification — detecting keywords where Google serves multiple content types",
      "Intent-to-content format mapping — matching the right content format (guide, comparison, product page) to each intent",
      "Intent shift monitoring — tracking when Google changes its intent classification for important queries",
      "Micro-intent analysis — identifying the specific sub-questions and needs within each search query",
    ],
  },
  {
    icon: Target,
    title: "Opportunity Mapping & Prioritization",
    desc: "Not all keywords deserve equal attention. Opportunity mapping scores every keyword by search volume, business value, competitive difficulty, and intent alignment — producing a prioritized target list that maximizes ROI.",
    items: [
      "Multi-factor scoring matrix — volume × intent × business value × competitive feasibility",
      "Quick-win identification — keywords where minor improvements produce immediate ranking gains",
      "Striking distance keywords — terms ranking positions 5-20 that can be pushed to page one with targeted optimization",
      "Commercial intent prioritization — weighting keywords that drive revenue over pure traffic volume",
      "Seasonal opportunity calendar — mapping keyword volume patterns to content publication timing",
      "Market gap identification — queries with high demand but poor existing content from competitors",
    ],
  },
  {
    icon: BarChart3,
    title: "Competitor Keyword Gap Analysis",
    desc: "Your competitors have already done keyword research — by analyzing their rankings, you discover opportunities they've found that you're missing, and weaknesses where you can outperform them.",
    items: [
      "Competitor identification — finding the 5-10 sites that compete most directly for your target topics",
      "Keyword overlap analysis — identifying queries where multiple competitors rank but you don't",
      "Competitor content weaknesses — finding high-volume keywords where competitor content is outdated or thin",
      "Authority gap assessment — evaluating whether competitor rankings are beatable based on your domain strength",
      "Content format gap analysis — identifying topics where competitors use inferior content formats",
      "SERP feature opportunities — finding featured snippets and PAA boxes where competitor content can be outperformed",
    ],
  },
  {
    icon: Filter,
    title: "Semantic Keyword Clustering",
    desc: "Keyword clustering groups related queries by shared search intent, preventing cannibalization and focusing content production on comprehensive pages rather than thin, overlapping articles.",
    items: [
      "SERP-based clustering — grouping keywords that share the same top-ranking URLs (same intent)",
      "Semantic similarity analysis — identifying conceptually related keywords that belong on the same page",
      "Cannibalization detection — finding existing pages that compete against each other for the same queries",
      "Cluster-to-page mapping — assigning each keyword cluster to a specific page (existing or new)",
      "Primary/secondary keyword assignment — identifying the main target keyword and supporting terms per page",
      "Long-tail integration — mapping long-tail variations into clusters for natural content inclusion",
    ],
  },
  {
    icon: Map,
    title: "Long-Tail & Question Keyword Discovery",
    desc: "Long-tail keywords account for 70% of all search queries. They have lower individual volume but higher specificity, less competition, and often stronger commercial intent than head terms.",
    items: [
      "Autocomplete and related search mining — extracting Google's own keyword suggestions for your topics",
      "People Also Ask (PAA) extraction — identifying questions Google associates with your target topics",
      "Forum and community mining — discovering real questions from Reddit, Quora, and industry forums",
      "Voice search query patterns — identifying conversational, question-based queries for voice search optimization",
      "Search Console query analysis — finding actual queries your site already appears for but doesn't rank well",
      "Customer journey keyword mapping — targeting queries at awareness, consideration, and decision stages",
    ],
  },
  {
    icon: TrendingUp,
    title: "Keyword Tracking & Performance Analysis",
    desc: "Keyword research isn't a one-time deliverable. Ongoing tracking reveals which keywords improve, which need additional optimization, and which new opportunities emerge from changing search behavior.",
    items: [
      "Rank tracking setup — monitoring positions for all target keywords across desktop and mobile SERPs",
      "SERP feature monitoring — tracking featured snippet, PAA, and knowledge panel appearances",
      "Search volume trend analysis — identifying growing and declining search demand for your topics",
      "Ranking correlation analysis — connecting ranking changes to specific optimization actions",
      "New keyword discovery — identifying emerging queries from Search Console data and industry trends",
      "Conversion attribution — tracking which keywords drive actual business outcomes, not just traffic",
    ],
  },
];

const commonMistakes = [
  { title: "Obsessing Over Search Volume", desc: "A keyword with 10,000 monthly searches and 0.1% conversion rate produces less revenue than a 500-search keyword with 5% conversion. Business value matters more than raw volume." },
  { title: "Ignoring Search Intent", desc: "Targeting 'best SEO tools' with a product page fails because Google ranks comparison articles. Always check what Google currently ranks to understand the intent before creating content." },
  { title: "One Keyword Per Page Thinking", desc: "Modern pages should target a cluster of semantically related keywords, not a single phrase. A comprehensive page can rank for hundreds of related queries when content covers the full topic." },
  { title: "Skipping Competitor Analysis", desc: "Building keyword lists from scratch ignores the intelligence your competitors have already gathered. Their rankings reveal proven keyword opportunities with validated search demand." },
  { title: "No Prioritization Framework", desc: "A list of 500 keywords without scoring and prioritization is overwhelming and leads to random content production. Every keyword needs a priority score based on impact and feasibility." },
  { title: "Set-and-Forget Research", desc: "Search behavior evolves. Keywords that had no volume two years ago may have thousands of searches now. Quarterly research updates ensure your strategy adapts to changing demand." },
];

const KeywordResearch = () => (
  <Layout>
    <SeoHead
      title="Keyword & Topic Research Services — Intent Mapping & Competitive Analysis | Naveed Ganatra"
      description="Professional keyword and topic research covering search intent classification, competitive gap analysis, semantic clustering, long-tail discovery, and prioritized opportunity mapping for data-driven SEO."
      canonical="https://seoexpertinkarachi.com/keyword-research"
    />
    <JsonLd data={serviceSchema} />
    <JsonLd data={organizationSchema} />
    <JsonLd data={breadcrumb} />
    <JsonLd data={webPage} />
    <JsonLd data={faqSchema} />

    <main>
      {/* Hero */}
      <section className="section-padding surface-sunken">
        <div className="section-container">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Keyword & Topic Research</p>
             <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Keyword & Topic Research Services
            </h1>
            <p className="text-lg text-body mb-4">
               Keyword research is the intelligence layer that drives every SEO decision — from on-page optimization to content strategy. Without understanding what your audience searches for and where competitive opportunities exist, every optimization decision is a guess.
             </p>
             <p className="text-body mb-8">
               For businesses in Karachi, our keyword and topic research goes beyond search volume lists. We deliver intent-classified, competition-analyzed strategies that inform your technical SEO priorities and tell you exactly what to target for maximum ranking and revenue impact.
             </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                Get Free Keyword Analysis
              </a>
              <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Keyword Research Matters */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Why Strategic Keyword Research Is the Foundation of SEO Success</h2>
          <p className="text-body max-w-3xl mb-6">
            Every page on your site should target a <strong className="text-heading">specific keyword cluster with validated demand, clear intent, and competitive feasibility</strong>. Without research-driven targeting, your <Link to="/content-strategy-seo" className="text-primary hover:underline">content strategy</Link> and <Link to="/on-page-seo" className="text-primary hover:underline">on-page optimization</Link> are built on guesswork.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { v: "70%", l: "Of searches are long-tail queries" },
              { v: "5-10x", l: "ROI from intent-aligned keywords vs. random targeting" },
              { v: "30%+", l: "Quick-win traffic gains from striking distance keywords" },
              { v: "6-12 mo", l: "Research refresh cycle for optimal results" },
            ].map((s) => (
              <div key={s.l} className="metric-card text-center">
                <p className="stat-number text-3xl">{s.v}</p>
                <p className="text-xs text-subtle mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      {pillars.map((pillar, i) => (
        <section key={pillar.title} className={`section-padding ${i % 2 !== 0 ? "surface-sunken" : ""}`}>
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <pillar.icon className="h-6 w-6 text-primary shrink-0" />
                  <h2 className="text-3xl font-bold">{pillar.title}</h2>
                </div>
                <p className="text-body">{pillar.desc}</p>
              </div>
              <ul className="space-y-3">
                {pillar.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-body">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* Common Mistakes */}
      <section className="section-padding surface-sunken">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">6 Keyword Research Mistakes That Waste Content Budget</h2>
          <p className="text-body max-w-3xl mb-10">
            Bad keyword research doesn't just produce bad content — it produces content that competes with your own pages, targets the wrong intent, and wastes months of effort.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {commonMistakes.map((mistake) => (
              <div key={mistake.title} className="metric-card">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-heading mb-1">{mistake.title}</h3>
                    <p className="text-sm text-body">{mistake.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <h2 className="text-2xl font-bold text-heading mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq) => (
              <details key={faq.name} className="group metric-card">
                <summary className="cursor-pointer font-semibold text-heading list-none flex items-center justify-between">
                  {faq.name}
                  <span className="ml-4 text-primary text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-body">{faq.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

       {/* Related */}
       <section className="section-padding surface-sunken">
         <div className="section-container">
           <h2 className="text-2xl font-bold mb-4 text-center">Related SEO Services</h2>
           <div className="flex flex-wrap gap-4 justify-center">
             <Link to="/seo-services" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">All SEO Services</Link>
             <Link to="/content-strategy-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Content Strategy</Link>
             <Link to="/on-page-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">On-Page SEO</Link>
             <Link to="/seo-audit" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">SEO Audit</Link>
             <Link to="/technical-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Technical SEO</Link>
             <Link to="/local-seo-karachi" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Local SEO</Link>
           </div>
         </div>
       </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
           <h2 className="text-2xl font-bold text-heading mb-4">Stop Targeting Keywords Blindly</h2>
           <p className="text-body mb-4">
            Strategic keyword research for Karachi businesses transforms SEO from guesswork into a data-driven system. Research findings feed directly into your <Link to="/content-strategy-seo" className="text-primary hover:text-primary/80">content strategy</Link>, <Link to="/on-page-seo" className="text-primary hover:text-primary/80">on-page optimization</Link>, and <Link to="/local-seo-karachi" className="text-primary hover:text-primary/80">local SEO targeting</Link> — ensuring every page targets validated demand with clear intent alignment.
           </p>
          <div className="metric-card bg-primary/5 border-primary/20 mt-6">
            <h2 className="text-2xl font-bold text-heading mb-3">What Keywords Should Your Business Target?</h2>
            <p className="text-body mb-6">Get a free keyword analysis covering your top opportunities, competitor keyword gaps, and a prioritized list of the highest-value queries for your business.</p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                Get Free Keyword Analysis →
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">
                Hire Naveed Ganatra
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  </Layout>
);

export default KeywordResearch;
