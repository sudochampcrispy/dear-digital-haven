import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import {
  CheckCircle,
  AlertTriangle,
  ExternalLink,
  Globe,
  Users,
  Award,
  Newspaper,
  BarChart3,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

/* ── Schema ── */
const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "Off-Page SEO & Link Building", url: "https://seoexpertinkarachi.com/off-page-seo" },
]);

const webPage = buildWebPage({
  name: "Off-Page SEO & Link Building Services — Authority, Trust & Backlink Strategy",
  description: "Off-page SEO and link building services covering digital PR, content-driven outreach, brand mentions, authority building, and ethical backlink acquisition for sustainable ranking growth.",
  url: "https://seoexpertinkarachi.com/off-page-seo",
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Off-Page SEO & Link Building Services",
  provider: { "@type": "Person", name: "Naveed Ganatra" },
  areaServed: [
    { "@type": "City", name: "Karachi" },
    { "@type": "Country", name: "Pakistan" },
  ],
  serviceType: "Off-Page Search Engine Optimization & Link Building",
  description: "Off-page SEO services covering ethical link building, digital PR, content-driven outreach, brand authority development, competitor backlink analysis, and unlinked brand mention reclamation for sustainable ranking improvement.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is off-page SEO and how does it differ from on-page SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Off-page SEO covers all ranking signals that originate outside your website — backlinks, brand mentions, social signals, and digital PR coverage. On-page SEO optimizes elements within your pages (content, headings, meta tags). While on-page SEO determines relevance, off-page SEO determines authority and trustworthiness. Google uses backlinks as one of its strongest ranking signals because links from other sites act as third-party endorsements of your content quality.",
      },
    },
    {
      "@type": "Question",
      name: "Are backlinks still important for SEO in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Backlinks remain one of Google's top three ranking factors in 2026. However, the quality threshold has increased dramatically. A single link from a topically relevant, high-authority site now outweighs hundreds of links from low-quality directories or irrelevant sources. Google's algorithms evaluate link relevance, authority of the linking domain, anchor text context, and whether the link pattern appears natural or manipulated.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between link building and link earning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Link building involves proactive outreach — contacting website owners, pitching guest posts, or submitting to directories. Link earning creates content so valuable that other sites link to it naturally — original research, data studies, comprehensive guides, and free tools. In 2026, the most effective strategy combines both: create link-worthy content assets, then amplify them through targeted outreach to sites that would genuinely benefit from referencing your content.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take for link building to impact rankings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "New backlinks typically take 4-12 weeks to influence rankings. Google must crawl the linking page, evaluate the link's quality, and recalculate your site's authority metrics. High-authority links from frequently crawled sites (major publications, industry leaders) can impact rankings within 2-4 weeks. Links from smaller sites take longer because Google crawls them less frequently. Consistent link acquisition over 3-6 months produces the most sustainable ranking improvements.",
      },
    },
    {
      "@type": "Question",
      name: "What link building tactics should I avoid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Avoid link schemes that violate Google's guidelines: buying links, participating in link exchanges or link networks, using automated link building tools, mass directory submissions, PBN (Private Blog Network) links, and over-optimized anchor text patterns. Google's SpamBrain AI system can detect manipulative link patterns and penalize sites — including complete deindexing in severe cases. Focus on editorial links earned through genuine content value and real relationships.",
      },
    },
  ],
};

/* ── Data ── */
const pillars = [
  {
    icon: Award,
    title: "Content-Driven Link Acquisition",
    desc: "The most sustainable backlinks come from creating content so valuable that other sites reference it naturally. Original research, data studies, and comprehensive resources generate editorial links that Google values highest.",
    items: [
      "Original research and data studies — industry surveys, benchmarks, and trend analyses that journalists and bloggers cite",
      "Comprehensive resource guides — definitive references that become the go-to link target for a topic",
      "Free tools and calculators — interactive assets that generate ongoing links from users and recommendation posts",
      "Infographics and visual data assets — shareable content formats that earn links from visual-first publications",
      "Expert roundups and interview content — leveraging industry authority for mutual linking opportunities",
      "Case studies with real data — documented results that other professionals reference as evidence",
    ],
  },
  {
    icon: Newspaper,
    title: "Digital PR & Media Outreach",
    desc: "Digital PR earns high-authority backlinks from news sites, industry publications, and media outlets. These editorial links carry the strongest authority signals and are nearly impossible for competitors to replicate.",
    items: [
      "Journalist outreach with data-driven story pitches relevant to your industry expertise",
      "HARO / Connectively / Qwoted response strategy — providing expert quotes for journalist queries",
      "Press release optimization and distribution through high-authority newswires",
      "Reactive PR — monitoring trending industry topics and providing timely expert commentary",
      "Industry award submissions and recognition campaigns for brand authority signals",
      "Podcast and interview placement — earning links from show notes and guest bio pages",
    ],
  },
  {
    icon: ExternalLink,
    title: "Strategic Link Building Outreach",
    desc: "Targeted outreach to relevant websites that would genuinely benefit from linking to your content. Quality over quantity — each link prospect is evaluated for topical relevance, domain authority, and editorial standards.",
    items: [
      "Competitor backlink analysis — identifying link sources your competitors have that you can also earn",
      "Broken link building — finding broken links on relevant sites and offering your content as a replacement",
      "Resource page link building — getting listed on curated resource pages within your industry niche",
      "Guest posting on editorially vetted publications with genuine audience value — not link farms",
      "Skyscraper technique — creating superior content to outperform existing linked resources",
      "Unlinked brand mention reclamation — converting existing mentions of your brand into actual backlinks",
    ],
  },
  {
    icon: Globe,
    title: "Brand Authority & Trust Signals",
    desc: "Off-page SEO extends beyond links. Google evaluates overall brand authority through mentions, reviews, social proof, and entity recognition. Building brand signals strengthens your entire domain's ranking potential.",
    items: [
      "Brand mention monitoring and sentiment analysis across the web",
      "Google Business Profile optimization for local authority signals and review management",
      "Industry directory listings on high-authority, editorially curated platforms",
      "Social media profile optimization and consistent NAP (Name, Address, Phone) data",
      "Wikipedia and knowledge panel entity establishment strategies",
      "Review acquisition and management across Google, industry platforms, and third-party review sites",
    ],
  },
  {
    icon: Users,
    title: "Community & Relationship Building",
    desc: "Genuine industry relationships produce the most natural backlink profiles. Active participation in professional communities generates ongoing link opportunities that search engines recognize as authentic endorsements.",
    items: [
      "Industry forum and community participation with genuine value contributions",
      "Professional association memberships and thought leadership positioning",
      "Co-marketing partnerships with complementary (non-competing) businesses",
      "Sponsorship and event participation — earning links from event pages and recap coverage",
      "Alumni and professional network leverage for referral-based link opportunities",
      "Social proof amplification — turning customer success stories into linkable testimonial assets",
    ],
  },
  {
    icon: BarChart3,
    title: "Link Profile Analysis & Risk Management",
    desc: "Not all backlinks help your rankings — some actively harm them. Ongoing link profile monitoring protects your site from toxic links, penalty risk, and negative SEO attacks.",
    items: [
      "Full backlink audit — analyzing every link pointing to your site for quality, relevance, and risk",
      "Toxic link identification — detecting spammy, PBN, or manipulative links that trigger penalties",
      "Google Disavow file management — properly disavowing harmful links without losing valuable ones",
      "Anchor text distribution analysis — ensuring natural variation that avoids over-optimization penalties",
      "Link velocity monitoring — tracking acquisition rate to maintain natural growth patterns",
      "Competitor link gap analysis — identifying authority sources where competitors have links but you don't",
    ],
  },
];

const commonMistakes = [
  { title: "Buying Links from Link Farms", desc: "Purchased links from low-quality networks are easily detected by Google's SpamBrain. These links provide zero ranking value and risk manual penalties that can deindex your entire site." },
  { title: "Over-Optimized Anchor Text", desc: "If 80% of your backlinks use exact-match keyword anchor text, Google flags it as manipulative. Natural link profiles have diverse anchor text — brand names, URLs, generic phrases, and varied keyword variations." },
  { title: "Ignoring Link Relevance", desc: "A link from a high-DA cooking blog to your SEO agency provides minimal value. Topical relevance between the linking page and your content is now weighted more heavily than raw domain authority." },
  { title: "Neglecting Internal Linking", desc: "External backlinks send authority to your domain, but internal links distribute that authority to specific pages. Without strategic internal linking, backlink value gets trapped on landing pages instead of flowing to target pages." },
  { title: "One-Time Link Building Campaigns", desc: "Link building requires consistent, ongoing effort. A burst of 50 links in one month followed by zero links for six months creates unnatural velocity patterns that search engines flag." },
  { title: "Ignoring Brand Mentions", desc: "Unlinked brand mentions are free link opportunities. If a site mentions your brand without linking to you, a simple outreach email converts 20-40% of mentions into actual backlinks." },
];

const OffPageSeo = () => (
  <Layout>
    <SeoHead
      title="Off-Page SEO & Link Building Services — Authority & Backlink Strategy | Naveed Ganatra"
      description="Off-page SEO and link building services covering digital PR, content-driven outreach, brand authority, competitor analysis, and ethical backlink acquisition for sustainable ranking growth."
      canonical="https://seoexpertinkarachi.com/off-page-seo"
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
            <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Off-Page SEO</p>
             <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Off-Page SEO & Link Building Services
            </h1>
            <p className="text-lg text-body mb-4">
               Off-page SEO builds the authority and trust signals that determine how search engines rank your site. For Karachi businesses competing in local and national markets, backlinks remain one of Google's top three ranking factors — combined with strong technical foundations and on-page optimization.
             </p>
             <p className="text-body mb-8">
               Our off-page SEO services combine content-driven link acquisition, digital PR, strategic outreach, and brand authority development — building the external signals that move rankings upward sustainably.
             </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                Get Free Backlink Audit
              </a>
              <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Off-Page SEO Matters */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Why Off-Page SEO Determines Who Ranks First</h2>
          <p className="text-body max-w-3xl mb-6">
            Two pages can have identical <Link to="/on-page-seo" className="text-primary hover:underline">on-page optimization</Link> and <Link to="/technical-seo" className="text-primary hover:underline">technical health</Link>. The page with <strong className="text-heading">stronger external authority signals — backlinks, brand mentions, and trust indicators</strong> — ranks higher. Off-page SEO is the competitive differentiator that a comprehensive <Link to="/seo-audit" className="text-primary hover:underline">SEO audit</Link> quantifies.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { v: "Top 3", l: "Ranking factor: backlinks in Google's algorithm" },
              { v: "1 vs 100", l: "One relevant authority link beats 100 low-quality links" },
              { v: "4-12 wks", l: "Time for new backlinks to impact rankings" },
              { v: "20-40%", l: "Unlinked mentions convertible to backlinks" },
            ].map((s) => (
              <div key={s.l} className="metric-card text-center">
                <p className="stat-number text-3xl">{s.v}</p>
                <p className="text-xs text-subtle mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Pillars */}
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
          <h2 className="text-3xl font-bold mb-4">6 Link Building Mistakes That Destroy Rankings</h2>
          <p className="text-body max-w-3xl mb-10">
            Bad link building doesn't just fail to help — it actively harms your site. Google's SpamBrain AI can detect manipulative patterns and penalize your entire domain.
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

       {/* Related Services */}
       <section className="section-padding surface-sunken">
         <div className="section-container">
           <h2 className="text-2xl font-bold mb-4 text-center">Related SEO Services</h2>
           <div className="flex flex-wrap gap-4 justify-center">
             <Link to="/seo-services" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">All SEO Services</Link>
             <Link to="/on-page-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">On-Page SEO</Link>
             <Link to="/technical-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Technical SEO</Link>
             <Link to="/seo-audit" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">SEO Audit</Link>
             <Link to="/content-strategy-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Content Strategy</Link>
             <Link to="/keyword-research" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Keyword Research</Link>
             <Link to="/local-seo-karachi" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Local SEO</Link>
           </div>
         </div>
       </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
           <h2 className="text-2xl font-bold text-heading mb-4">Authority Cannot Be Faked — It Must Be Built</h2>
           <p className="text-body mb-4">
            Off-page SEO in Karachi requires a strategic combination of content-driven link acquisition and brand authority development. Start with a thorough <Link to="/seo-audit" className="text-primary hover:text-primary/80">backlink audit</Link> to understand your current link profile, then build authority through <Link to="/content-strategy-seo" className="text-primary hover:text-primary/80">content-driven strategies</Link> that earn editorial links naturally.
           </p>
           <p className="text-body mb-4">
            For <Link to="/local-seo-karachi" className="text-primary hover:text-primary/80">local businesses in Karachi</Link>, off-page signals include local citations, review management, and community engagement. For <Link to="/ecommerce-seo-karachi" className="text-primary hover:text-primary/80">e-commerce brands</Link> and <Link to="/saas-seo" className="text-primary hover:text-primary/80">SaaS companies</Link>, link building focuses on industry publications and data-driven PR.
           </p>
          <div className="metric-card bg-primary/5 border-primary/20 mt-6">
            <h2 className="text-2xl font-bold text-heading mb-3">How Strong Is Your Backlink Profile?</h2>
            <p className="text-body mb-6">Get a free backlink audit covering link quality, toxic link risk, anchor text distribution, competitor gap analysis, and actionable link building opportunities.</p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                Get Free Backlink Audit →
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

export default OffPageSeo;
