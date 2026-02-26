import { Link } from "react-router-dom";
import { ArrowRight, Search, Globe, BarChart3, Zap, ShieldCheck, TrendingUp, FileSearch, Layers, Target, CheckCircle2, Wrench, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import LeadGenForm from "@/components/LeadGenForm";

/* ─── Structured Data ─── */
const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "SEO Agency Karachi", url: "https://seoexpertinkarachi.com/seo-agency-karachi" },
]);

const webPage = buildWebPage({
  name: "SEO Agency Karachi — Naveed Ganatra SEO Agency",
  description: "Leading SEO agency in Karachi providing data-driven organic growth strategies. Full-service SEO company delivering technical optimization, content strategy, and link building for measurable results.",
  url: "https://seoexpertinkarachi.com/seo-agency-karachi",
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Agency Karachi",
  description: "Full-service SEO agency in Karachi delivering technical optimization, content strategy, link building, and local SEO for measurable organic growth across all industries.",
  provider: { "@type": "Organization", name: "Naveed Ganatra SEO Agency", url: "https://seoexpertinkarachi.com" },
  areaServed: { "@type": "City", name: "Karachi", containedInPlace: { "@type": "Country", name: "Pakistan" } },
  serviceType: "Search Engine Optimization",
  offers: {
    "@type": "Offer",
    priceSpecification: { "@type": "PriceSpecification", priceCurrency: "PKR", price: "50000", description: "Starting from PKR 50,000/month" },
  },
};

const faqData = [
  { q: "Why should I hire an SEO agency in Karachi instead of doing SEO myself?", a: "SEO requires specialized expertise across technical optimization, content strategy, and link building — disciplines that each take years to master. A professional SEO agency in Karachi brings enterprise-grade tools like Ahrefs, SEMrush, and Screaming Frog (collectively costing PKR 150,000+/month), proven methodologies refined across 200+ campaigns, and deep understanding of Karachi's local search ecosystem. DIY SEO often leads to outdated tactics, Google penalties, or wasted months on low-impact activities. Our agency delivers measurable ROI by focusing efforts where data shows the highest opportunity." },
  { q: "How long does it take for an SEO agency to deliver results in Karachi?", a: "Most Karachi businesses see measurable ranking improvements within 90-120 days. Technical fixes and Google Business Profile optimization often produce visible changes within 30-45 days. Competitive keywords in industries like real estate, healthcare, and e-commerce typically require 4-6 months for significant organic traffic gains. We provide monthly progress reports tracking keyword positions, organic traffic growth, Core Web Vitals metrics, and conversion improvements so you can see measurable progress throughout the engagement." },
  { q: "What SEO services does your Karachi agency provide?", a: "Our SEO agency in Karachi provides comprehensive services including technical SEO audits (100+ checkpoints), on-page optimization with entity-based content strategy, off-page SEO and high-DR link building, local SEO with Google Business Profile optimization across all Karachi neighborhoods, e-commerce SEO for Shopify/WooCommerce/Magento stores, content strategy with topical authority mapping, keyword research with bilingual targeting (English & Urdu), website migration SEO, international SEO, and AI search optimization for Google's evolving search features." },
  { q: "How much does an SEO agency charge in Karachi?", a: "SEO investment in Karachi ranges from PKR 50,000 to PKR 300,000+ per month depending on competition level, number of target keywords, content requirements, and link building intensity. Unlike agencies that lock you into long-term contracts, we offer flexible month-to-month engagements with transparent reporting. Every campaign includes a clear ROI framework so you can measure the return on your investment. Contact us for a free consultation and customized quote based on your specific business goals." },
  { q: "What makes Naveed Ganatra SEO Agency different from other SEO companies in Karachi?", a: "Three key differentiators: First, direct access to a Google-certified SEO professional with 10+ years of experience — no junior account managers or outsourced work. Second, a proven track record with 200+ successful campaigns across 27+ industries, including international results like ranking #1 for 'Beverly Hills dental implants.' Third, our proprietary methodology built on the Koray framework for semantic SEO, entity-based optimization, and topical authority — not generic template strategies that every other agency uses." },
  { q: "Do you offer SEO services for e-commerce stores in Karachi?", a: "Yes, e-commerce SEO is one of our core specialties. We optimize Shopify, WooCommerce, Magento, BigCommerce, and OpenCart stores with product page SEO, category architecture optimization, faceted navigation handling, structured data for product rich snippets, site speed optimization for large catalogs, and internal linking strategies. One recent Shopify client saw 350% organic revenue growth after implementing our product page restructuring and schema strategy." },
  { q: "Can your SEO agency help with Google Business Profile optimization?", a: "Absolutely. Local SEO and Google Business Profile (GBP) optimization is foundational to our Karachi SEO services. We optimize your GBP listing with accurate NAP data, strategic category selection, keyword-rich descriptions, regular Google Posts, review generation strategies, photo optimization, and Q&A management. We also create neighborhood-specific landing pages targeting areas like DHA, Clifton, Gulshan-e-Iqbal, PECHS, and 10+ other Karachi localities for maximum local visibility." },
  { q: "How do you handle Google algorithm updates?", a: "Our SEO methodology is built on white-hat, algorithm-proof principles. We focus on E-E-A-T signals, high-quality content that satisfies search intent, and clean technical foundations. During Google's Helpful Content Updates, 94% of our clients maintained or improved their rankings because we prioritize genuine value over manipulative tactics. We continuously monitor algorithm changes through industry channels and proactively adjust strategies to protect and improve your rankings." },
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

/* ─── Data Arrays ─── */
const stats = [
  { value: "200+", label: "Karachi Businesses Ranked" },
  { value: "10+", label: "Years of SEO Experience" },
  { value: "350%", label: "Average Traffic Increase" },
  { value: "27+", label: "Industries Served" },
];

const services = [
  { icon: Search, title: "Technical SEO", desc: "Core Web Vitals optimization, crawl efficiency, structured data implementation, and site architecture engineering for peak search engine performance.", link: "/technical-seo" },
  { icon: Globe, title: "Local SEO Karachi", desc: "Hyperlocal Google Business Profile optimization, NAP consistency management, and neighborhood-level targeting across DHA, Clifton, Gulshan, PECHS, and all Karachi areas.", link: "/local-seo-karachi" },
  { icon: BarChart3, title: "On-Page SEO", desc: "Entity-based content optimization, semantic keyword placement, title tag engineering, internal linking architecture, and intent-layered content strategy.", link: "/on-page-seo" },
  { icon: Zap, title: "Off-Page SEO & Link Building", desc: "High-DR backlinks from authoritative Pakistani and international publications, contextual guest posts, and digital PR campaigns.", link: "/off-page-seo" },
  { icon: ShieldCheck, title: "SEO Audits", desc: "100+ point comprehensive audits covering page speed, mobile usability, crawlability, indexation, schema validation, and competitive gap analysis.", link: "/seo-audit" },
  { icon: TrendingUp, title: "E-commerce SEO", desc: "Product page optimization, category architecture, faceted navigation handling, and structured data for Shopify, WooCommerce, and Magento stores.", link: "/ecommerce-seo" },
  { icon: FileSearch, title: "Keyword Research", desc: "Search intent classification, competitor keyword gap analysis, long-tail opportunity mapping, and bilingual keyword targeting for English and Urdu queries.", link: "/keyword-research" },
  { icon: Layers, title: "Content Strategy", desc: "Topical authority mapping, content cluster architecture, pillar page development, and editorial calendar planning aligned with search demand.", link: "/content-strategy-seo" },
  { icon: Target, title: "AI Search Optimization", desc: "Optimization for Google AI Overviews, SGE, and next-generation search experiences to maintain visibility as search evolves.", link: "/ai-search-optimization" },
];

const process = [
  { step: "01", title: "Discovery & Audit", desc: "Deep-dive into your website's technical health, content gaps, backlink profile, and competitive landscape using enterprise-grade SEO tools." },
  { step: "02", title: "Entity Mapping", desc: "Build a knowledge graph linking your brand to services, locations, and industry entities — establishing topical authority signals Google rewards." },
  { step: "03", title: "Intent Matching", desc: "Classify every target keyword by search intent to ensure content satisfies user needs at each funnel stage — informational, navigational, and transactional." },
  { step: "04", title: "Schema Structuring", desc: "Implement LocalBusiness, FAQPage, Service, Product, and Review schemas to unlock rich snippets, knowledge panels, and featured snippet eligibility." },
  { step: "05", title: "Content Architecture", desc: "Design hub-and-spoke content clusters with strategic internal linking that reinforces semantic relationships and builds topical depth." },
  { step: "06", title: "Monitor & Scale", desc: "Track rankings, crawl rates, Core Web Vitals, and conversions with monthly reporting and continuous optimization cycles." },
];

const industries = [
  { title: "E-commerce & Retail", desc: "Product SEO, category optimization, and structured data for online stores.", link: "/ecommerce-seo" },
  { title: "Real Estate", desc: "Property listing optimization and local map pack rankings for Karachi agencies.", link: "/real-estate-seo" },
  { title: "Healthcare & Dental", desc: "YMYL-compliant content, medical schema, and patient acquisition strategies.", link: "/dental-seo" },
  { title: "Law Firms", desc: "Practice area optimization, legal schema, and local SEO for Karachi law firms.", link: "/law-firm-seo" },
  { title: "SaaS & Technology", desc: "Product-led SEO and programmatic content strategies for software companies.", link: "/saas-seo" },
  { title: "Manufacturing & B2B", desc: "Industrial keyword targeting and international SEO for export manufacturers.", link: "/manufacturing-seo" },
  { title: "Restaurants & Food", desc: "GBP optimization, menu schema, and local pack strategies for food businesses.", link: "/restaurant-seo" },
  { title: "Accounting & Finance", desc: "Service page optimization and trust signals for accounting firms.", link: "/accounting-firm-seo" },
  { title: "Plumbing & Home Services", desc: "Local service area targeting and review generation for home service providers.", link: "/plumber-seo" },
  { title: "HVAC & Maintenance", desc: "Seasonal keyword strategies and emergency service visibility.", link: "/hvac-seo" },
];

const karachiAreas = [
  { name: "DHA Defence", link: "/dha-defence", desc: "Premium service businesses competing for high-value local visibility." },
  { name: "Clifton", link: "/clifton", desc: "Upscale commercial hub with intense competition across all sectors." },
  { name: "Gulshan-e-Iqbal", link: "/gulshan-e-iqbal", desc: "Dense competition in healthcare, education, and retail services." },
  { name: "PECHS", link: "/pechs", desc: "Strong demand for professional services, restaurants, and retail." },
  { name: "North Nazimabad", link: "/north-nazimabad", desc: "Established area with growing online search adoption." },
  { name: "Gulistan-e-Johar", link: "/gulistan-e-johar", desc: "Rapidly growing population with increasing local search demand." },
  { name: "Saddar", link: "/saddar", desc: "Historic commercial center with wholesale and retail businesses." },
  { name: "Korangi", link: "/korangi", desc: "Industrial zone where B2B businesses need targeted SEO strategies." },
  { name: "Malir", link: "/malir", desc: "Expanding residential area with emerging service-based search queries." },
  { name: "Nazimabad", link: "/nazimabad", desc: "High-density area with strong demand for local healthcare and education." },
  { name: "FB Area", link: "/fb-area", desc: "Mixed commercial-residential zone with diverse search opportunities." },
  { name: "Tariq Road", link: "/tariq-road", desc: "Major shopping district with high retail and fashion search volume." },
  { name: "Bahadurabad", link: "/bahadurabad", desc: "Commercial hub with food, electronics, and professional services." },
  { name: "Shahrah-e-Faisal", link: "/shahrah-e-faisal", desc: "Corporate corridor with B2B and professional service demand." },
  { name: "Scheme 33", link: "/scheme-33", desc: "Developing area with growing digital adoption and local searches." },
];

const tools = [
  "Ahrefs", "SEMrush", "Screaming Frog", "Google Search Console", "Google Analytics 4",
  "Surfer SEO", "ProSEOToolkit.com", "PageSpeed Insights", "Schema Markup Validator", "GTmetrix", "Google Trends",
];

const SeoAgencyKarachi = () => (
  <Layout>
    <SeoHead
      title="SEO Agency Karachi — #1 SEO Company & Services | Naveed Ganatra"
      description="Karachi's leading SEO agency with 10+ years of experience. Naveed Ganatra SEO Agency delivers 350%+ organic traffic growth through technical SEO, content strategy, and link building. Get a free SEO consultation today."
      canonical="https://seoexpertinkarachi.com/seo-agency-karachi"
    />
    <JsonLd data={organizationSchema} />
    <JsonLd data={breadcrumb} />
    <JsonLd data={webPage} />
    <JsonLd data={serviceSchema} />
    <JsonLd data={faqSchema} />

    <main>
      {/* ═══ Hero + Lead Form ═══ */}
      <section className="section-padding surface-sunken" aria-label="Hero">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">
                Full-Service SEO Agency · Karachi, Pakistan
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                SEO Agency in Karachi{" "}
                <span className="block mt-1">— Data-Driven Organic Growth</span>
              </h1>
              <p className="text-lg text-body mb-4">
                Naveed Ganatra SEO Agency is a results-driven <strong>SEO company in Karachi</strong> that helps businesses dominate Google's first page through semantic optimization, technical excellence, and hyperlocal strategies built on 10+ years of hands-on experience.
              </p>
              <p className="text-base text-body mb-4">
                Whether you're searching for reliable <strong>SEO services in Karachi</strong> for your startup or need an enterprise-level SEO partner, our agency combines deep local market knowledge with global SEO best practices. We've helped 200+ Karachi businesses — from DHA-based clinics and Clifton law firms to Gulshan e-commerce stores — achieve measurable revenue growth through organic search.
              </p>
              <p className="text-base text-body mb-8">
                Our approach is built on the Koray framework for topical authority, entity-based optimization, and E-E-A-T signals that Google's algorithms reward. No generic playbooks. No junior account managers. Direct access to a Google-certified professional who understands Karachi's competitive landscape inside out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                  Get Free SEO Consultation <ArrowRight className="h-4 w-4" />
                </a>
                <Link to="/case-studies" className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
                  View Case Studies
                </Link>
              </div>
            </div>
            <LeadGenForm />
          </div>
        </div>
      </section>

      {/* ═══ Stats ═══ */}
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

      {/* ═══ Why Karachi Businesses Need an SEO Agency ═══ */}
      <section className="section-padding surface-sunken" aria-label="Why an SEO agency in Karachi">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Karachi Businesses Need a Professional SEO Agency</h2>
            <div className="space-y-4 text-body">
              <p>
                Karachi is Pakistan's economic powerhouse — home to over 16 million residents, the country's highest concentration of digital consumers, and thousands of businesses competing for online visibility. With <strong>over 100 million internet users in Pakistan</strong> relying on Google daily to find local services, the difference between appearing on page one and page three translates directly into revenue.
              </p>
              <p>
                A professional <strong>SEO agency in Karachi</strong> brings the expertise, tools, and systematic processes that in-house teams or freelancers simply cannot match. From understanding Google's constantly evolving algorithms to implementing <Link to="/technical-seo" className="text-primary hover:underline">technical SEO</Link> fixes that improve crawlability and page speed, agency-level SEO requires a multidisciplinary approach spanning content strategy, link acquisition, and data analysis.
              </p>
              <p>
                The Karachi market presents unique challenges: bilingual search behavior (English and Urdu), mobile-first users on varying network speeds, intense local competition in high-value areas like DHA, Clifton, and Gulshan-e-Iqbal, and industry-specific compliance requirements for sectors like healthcare and legal services. Our agency has navigated these challenges across 200+ campaigns, building repeatable systems that deliver consistent results regardless of industry or competition level.
              </p>
              <p>
                Organic search remains the most cost-effective customer acquisition channel — delivering <strong>5.66x higher click-through rates</strong> than paid ads while building compounding visibility over time. Businesses that invest in professional <strong>SEO services in Karachi</strong> consistently outperform competitors relying solely on paid advertising or social media marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Why Choose Our Agency ═══ */}
      <section className="section-padding" aria-label="Why choose our SEO agency">
        <div className="section-container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Why Choose Naveed Ganatra as Your SEO Agency in Karachi?</h2>
          <p className="text-body max-w-3xl mx-auto mb-10 text-center">
            Choosing the right <strong>SEO company in Karachi</strong> is a critical business decision. Here's what separates our agency from generic SEO providers in Pakistan's crowded digital marketing landscape.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Proven Results Across 27+ Industries", text: "Delivered 350%+ average organic traffic growth across logistics, healthcare, dental, e-commerce, real estate, and manufacturing businesses. Ranked #1 for competitive keywords internationally, including 'Beverly Hills dental implants' within 7 months. Every campaign is backed by transparent data." },
              { title: "Direct Access, No Middlemen", text: "Work directly with a Google-certified SEO professional — not a junior account manager reading from a script. I personally audit your website, develop your strategy, and execute optimizations for faster decision-making and higher-quality execution." },
              { title: "Enterprise-Grade Tools & Methodology", text: "Leveraging Ahrefs, SEMrush, Screaming Frog, Surfer SEO, and our proprietary ProSEOToolkit.com for precise audits, competitive intelligence, and semantic gap analysis — the same tools used by top agencies globally, applied to your Karachi business." },
              { title: "Algorithm-Proof SEO Strategy", text: "Our methodology is built on semantic SEO principles, E-E-A-T signals, and topical authority — not shortcuts that risk penalties. During Google's Helpful Content Updates, 94% of our clients maintained or improved their rankings." },
              { title: "Deep Karachi Market Expertise", text: "Having served businesses across every major Karachi neighborhood — from DHA Defence and Clifton to Korangi and Scheme 33 — we understand the local search dynamics, competition patterns, and bilingual keyword targeting that generic agencies miss." },
              { title: "Transparent ROI-Focused Reporting", text: "Monthly reports tracking keyword positions, organic traffic, Core Web Vitals scores, backlink growth, and conversion metrics. No vanity metrics — every recommendation ties directly to measurable business outcomes and revenue growth." },
            ].map((item) => (
              <div key={item.title} className="metric-card">
                <h3 className="font-semibold text-heading mb-2">{item.title}</h3>
                <p className="text-sm text-body">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Full SEO Services ═══ */}
      <section className="section-padding surface-sunken" aria-label="SEO services in Karachi">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Complete SEO Services Our Karachi Agency Provides</h2>
            <p className="text-body mb-4">
              From <Link to="/technical-seo" className="text-primary hover:underline">technical foundations</Link> to <Link to="/content-strategy-seo" className="text-primary hover:underline">content strategy</Link> and <Link to="/off-page-seo" className="text-primary hover:underline">link building</Link>, our agency offers the full spectrum of SEO services tailored for Karachi's bilingual, mobile-first search ecosystem.
            </p>
            <p className="text-body">
              Each service works as part of an integrated strategy — not isolated tactics. Whether you need a complete SEO overhaul or targeted improvements, our services scale to match your goals and competitive landscape.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.title} to={s.link} className="metric-card group">
                <s.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-heading mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-sm text-body">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/seo-services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ Our SEO Process ═══ */}
      <section className="section-padding" aria-label="SEO process">
        <div className="section-container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">How Our SEO Agency Works</h2>
          <p className="text-body max-w-3xl mx-auto mb-10 text-center">
            A structured, transparent methodology that takes your website from <Link to="/seo-audit" className="text-primary hover:underline">audit</Link> to authority. Every step is data-driven, measurable, and aligned with Google's latest ranking signals.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p) => (
              <div key={p.step} className="metric-card">
                <span className="text-xs font-mono font-bold text-primary">{p.step}</span>
                <h3 className="font-semibold text-heading mt-2 mb-2">{p.title}</h3>
                <p className="text-sm text-body">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Industries We Serve ═══ */}
      <section className="section-padding surface-sunken" aria-label="Industries served">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Industries Our SEO Agency Serves in Karachi</h2>
            <p className="text-body mb-4">
              Every industry has unique search patterns, competition dynamics, and customer acquisition challenges. Our SEO agency develops industry-specific strategies that account for your market's keyword landscape, seasonal trends, and buyer journey — not one-size-fits-all templates.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <Link key={ind.title} to={ind.link} className="metric-card group">
                <h3 className="font-semibold text-heading mb-2 group-hover:text-primary transition-colors">{ind.title}</h3>
                <p className="text-sm text-body">{ind.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              { label: "Startups", link: "/seo-for-startups" },
              { label: "WordPress SEO", link: "/wordpress-seo" },
              { label: "Shopify SEO", link: "/shopify-seo" },
              { label: "WooCommerce SEO", link: "/woocommerce-seo" },
              { label: "Magento SEO", link: "/magento-seo" },
              { label: "International SEO", link: "/international-seo" },
              { label: "YouTube SEO", link: "/youtube-seo" },
              { label: "White Label SEO", link: "/white-label-seo" },
            ].map((badge) => (
              <Link key={badge.label} to={badge.link} className="inline-flex items-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-heading hover:border-primary/40 transition-colors">
                {badge.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ The Three Pillars of SEO ═══ */}
      <section className="section-padding" aria-label="SEO pillars explained">
        <div className="section-container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">The Three Pillars of Our SEO Strategy</h2>
          <p className="text-body max-w-3xl mx-auto mb-10 text-center">
            A successful SEO campaign requires mastery across three interconnected disciplines. Here's how each pillar contributes to your website's search dominance in Karachi and beyond.
          </p>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="metric-card">
              <h3 className="font-semibold text-heading mb-3 text-lg">On-Page SEO</h3>
              <p className="text-sm text-body mb-4">
                On-page optimization ensures search engines understand your content's relevance and quality. Our agency implements entity-based content optimization that goes beyond traditional keyword density to establish semantic relationships Google rewards.
              </p>
              <ul className="space-y-2">
                {["Title & meta optimization", "Header hierarchy (H1–H6)", "Semantic keyword placement", "Internal linking architecture", "Image & alt text optimization", "URL structure & canonicals"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-body">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/on-page-seo" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-4">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="metric-card">
              <h3 className="font-semibold text-heading mb-3 text-lg">Off-Page SEO</h3>
              <p className="text-sm text-body mb-4">
                Off-page SEO builds your website's authority through external signals. Our agency acquires high-quality backlinks from authoritative Pakistani and international domains using white-hat outreach and digital PR campaigns.
              </p>
              <ul className="space-y-2">
                {["High-DR backlink acquisition", "Guest posting on authority sites", "Digital PR & brand mentions", ".pk domain link building", "Local citation management", "Social signal amplification"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-body">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/off-page-seo" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-4">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="metric-card">
              <h3 className="font-semibold text-heading mb-3 text-lg">Technical SEO</h3>
              <p className="text-sm text-body mb-4">
                Technical SEO ensures crawlers can efficiently discover, crawl, render, and index your content. Our agency addresses site speed, mobile responsiveness, structured data, and Core Web Vitals for a bulletproof technical foundation.
              </p>
              <ul className="space-y-2">
                {["Core Web Vitals optimization", "Crawl budget management", "Structured data / schema markup", "Mobile-first indexing readiness", "Site architecture & sitemaps", "HTTPS & security hardening"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-body">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/technical-seo" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-4">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Hyperlocal SEO Across Karachi ═══ */}
      <section className="section-padding surface-sunken" aria-label="Local SEO areas in Karachi">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Hyperlocal SEO Services Across Karachi</h2>
            <p className="text-body mb-4">
              Karachi is a city of diverse neighborhoods, each with unique search patterns and commercial opportunities. Our <Link to="/local-seo-karachi" className="text-primary hover:underline">local SEO strategies</Link> target specific areas with neighborhood-level landing pages, localized Google Business Profile optimization, and geo-targeted content that captures "near me" and area-specific search queries.
            </p>
            <p className="text-body">
              Our <Link to="/keyword-research" className="text-primary hover:underline">keyword research</Link> maps search intent at the locality level, ensuring your business appears when customers in your specific area are actively looking for your services.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {karachiAreas.map((area) => (
              <Link key={area.name} to={area.link} className="metric-card group">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  <h3 className="font-semibold text-heading group-hover:text-primary transition-colors">{area.name}</h3>
                </div>
                <p className="text-sm text-body">{area.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Tools & Technology ═══ */}
      <section className="section-padding" aria-label="SEO tools">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Enterprise-Grade SEO Tools We Use</h2>
            <p className="text-body max-w-3xl mx-auto mb-10 text-center">
              Our SEO agency uses the same premium tools trusted by top agencies worldwide — providing your Karachi business with Fortune 500-level competitive intelligence and technical analysis.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool) => (
                <span key={tool} className="inline-flex items-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-heading">
                  <Wrench className="h-3.5 w-3.5 text-primary mr-2" />
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SEO Agency Across Pakistan ═══ */}
      <section className="section-padding surface-sunken" aria-label="SEO services across Pakistan">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our SEO Services Extend Beyond Karachi</h2>
            <p className="text-body">
              While Karachi is our home base, our SEO agency serves businesses across all major cities in Pakistan with the same data-driven methodology and commitment to measurable results.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "SEO Agency Lahore", link: "/seo-agency-lahore" },
              { name: "SEO Agency Islamabad", link: "/seo-agency-islamabad" },
              { name: "SEO Agency Rawalpindi", link: "/seo-agency-rawalpindi" },
              { name: "SEO Agency Faisalabad", link: "/seo-agency-faisalabad" },
              { name: "SEO Agency Multan", link: "/seo-agency-multan" },
              { name: "SEO Agency Gujranwala", link: "/seo-agency-gujranwala" },
              { name: "SEO Agency Hyderabad", link: "/seo-agency-hyderabad" },
              { name: "SEO Agency Peshawar", link: "/seo-agency-peshawar" },
              { name: "SEO Agency Quetta", link: "/seo-agency-quetta" },
            ].map((city) => (
              <Link key={city.name} to={city.link} className="inline-flex items-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-heading hover:border-primary/40 transition-colors">
                <MapPin className="h-3.5 w-3.5 text-primary mr-2" />
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="section-padding surface-sunken" aria-label="Frequently asked questions">
        <div className="section-container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Frequently Asked Questions About SEO in Karachi</h2>
          <p className="text-body max-w-3xl mx-auto mb-10 text-center">Get answers to the most common questions about SEO services, pricing, timelines, and methodology. If your question isn't listed here, feel free to reach out via WhatsApp for a direct response.</p>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq) => (
              <details key={faq.q} className="group metric-card">
                <summary className="cursor-pointer font-semibold text-heading list-none flex items-center justify-between">{faq.q}<span className="ml-4 text-primary text-xl group-open:rotate-45 transition-transform shrink-0">+</span></summary>
                <p className="mt-3 text-sm text-body leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CtaBanner
        heading="Ready to Grow Your Karachi Business with SEO?"
        text="Get a free SEO consultation from Naveed Ganatra SEO Agency. Discover how our data-driven strategies can deliver measurable organic growth for your business."
      />
    </main>
  </Layout>
);

export default SeoAgencyKarachi;
