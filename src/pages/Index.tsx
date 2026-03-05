import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { personSchema, organizationSchema, websiteSchema, siteNavigationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import LeadGenForm from "@/components/LeadGenForm";
import { ArrowRight, BarChart3, Search, Globe, Zap, ShieldCheck, TrendingUp, CheckCircle2, MapPin, Wrench, Users, FileSearch, Layers, Target, Play } from "lucide-react";

const stats = [
  { value: "300%+", label: "Avg. Organic Traffic Growth" },
  { value: "50+", label: "SEO Campaigns Delivered" },
  { value: "10+", label: "Years of Experience" },
  { value: "27+", label: "Industries Served" },
];

const services = [
  { icon: Search, title: "Technical SEO", desc: "Core Web Vitals optimization, crawl efficiency, structured data implementation, and site architecture engineering for peak search engine performance.", link: "/technical-seo" },
  { icon: Globe, title: "Local SEO Karachi", desc: "Hyperlocal Google Business Profile optimization, NAP consistency management, and neighborhood-level targeting for DHA, Clifton, Gulshan-e-Iqbal, PECHS, and North Nazimabad.", link: "/local-seo-karachi" },
  { icon: BarChart3, title: "On-Page SEO", desc: "Entity-based content optimization, semantic keyword placement, title tag engineering, internal linking architecture, and intent-layered content strategy.", link: "/on-page-seo" },
  { icon: Zap, title: "Off-Page SEO & Link Building", desc: "High-DR .pk backlinks, contextual guest posts on authoritative Pakistani and international publications, and digital PR campaigns.", link: "/off-page-seo" },
  { icon: ShieldCheck, title: "SEO Audits", desc: "100+ point comprehensive audits covering page speed, mobile usability, crawlability, indexation, schema validation, and content gap analysis.", link: "/seo-audit" },
  { icon: TrendingUp, title: "E-commerce SEO", desc: "Product page optimization, category architecture, faceted navigation handling, and structured data for Shopify, WooCommerce, and Magento stores.", link: "/ecommerce-seo" },
  { icon: FileSearch, title: "Keyword Research", desc: "Search intent classification, competitor keyword gap analysis, long-tail opportunity mapping, and bilingual keyword targeting for English and Urdu queries.", link: "/keyword-research" },
  { icon: Layers, title: "Content Strategy", desc: "Topical authority mapping, content cluster architecture, pillar page development, and editorial calendar planning aligned with search demand patterns.", link: "/content-strategy-seo" },
  { icon: Target, title: "AI Search Optimization", desc: "Optimization for Google AI Overviews, SGE, and next-generation search experiences to maintain visibility as search evolves beyond traditional blue links.", link: "/ai-search-optimization" },
];

const framework = [
  { step: "01", title: "Discovery & Audit", desc: "Deep-dive into your website's technical health, content gaps, backlink profile, and competitive landscape using Ahrefs, Screaming Frog, and Google Search Console data." },
  { step: "02", title: "Entity Mapping", desc: "Build a knowledge graph linking your brand to services, locations, and industry entities — establishing topical authority signals that Google's algorithms reward." },
  { step: "03", title: "Intent Matching", desc: "Classify every target keyword by dominant, secondary, and implicit search intent to ensure content satisfies the full spectrum of user needs at each funnel stage." },
  { step: "04", title: "Schema Structuring", desc: "Implement LocalBusiness, FAQPage, Article, HowTo, Product, and Review schemas to unlock rich snippets, knowledge panels, and featured snippet eligibility." },
  { step: "05", title: "Content Architecture", desc: "Design hub-and-spoke content clusters with strategic internal linking that reinforces semantic relationships, distributes PageRank, and builds topical depth." },
  { step: "06", title: "Performance Monitoring", desc: "Track rankings, crawl rates, Core Web Vitals (LCP, FID, CLS), and conversion metrics with monthly reporting and continuous optimization cycles." },
];

const industries = [
  { title: "E-commerce & Retail", desc: "Product SEO, category page optimization, and structured data for online stores across Pakistan.", link: "/ecommerce-seo" },
  { title: "Real Estate", desc: "Property listing optimization, local map pack rankings, and neighborhood-targeted content for Karachi real estate agencies.", link: "/real-estate-seo" },
  { title: "Healthcare & Dental", desc: "YMYL-compliant content, medical schema markup, and patient acquisition strategies for clinics and hospitals.", link: "/dental-seo" },
  { title: "Law Firms", desc: "Practice area page optimization, legal schema implementation, and local SEO for law firms across Pakistan.", link: "/law-firm-seo" },
  { title: "SaaS & Technology", desc: "Product-led SEO, feature page optimization, and programmatic content strategies for software companies.", link: "/saas-seo" },
  { title: "Manufacturing & B2B", desc: "Industrial keyword targeting, product specification pages, and international SEO for export-oriented manufacturers.", link: "/manufacturing-seo" },
  { title: "Restaurants & Food", desc: "Google Business Profile optimization, menu schema, and local pack strategies for restaurants and food businesses.", link: "/restaurant-seo" },
  { title: "Accounting & Finance", desc: "Service page optimization, trust signals, and local SEO strategies for accounting firms and financial advisors.", link: "/accounting-firm-seo" },
];

const tools = [
  "Ahrefs", "SEMrush", "Screaming Frog", "Google Search Console", "Google Analytics 4",
  "Google Keyword Planner", "Surfer SEO", "ProSEOToolkit.com", "PageSpeed Insights",
  "Schema Markup Validator", "GTmetrix", "Google Trends",
];

const karachiAreas = [
  { name: "DHA Defence", link: "/dha-defence" },
  { name: "Clifton", link: "/clifton" },
  { name: "Gulshan-e-Iqbal", link: "/gulshan-e-iqbal" },
  { name: "PECHS", link: "/pechs" },
  { name: "North Nazimabad", link: "/north-nazimabad" },
  { name: "Gulistan-e-Johar", link: "/gulistan-e-johar" },
  { name: "Saddar", link: "/saddar" },
  { name: "Korangi", link: "/korangi" },
  { name: "Malir", link: "/malir" },
  { name: "Nazimabad", link: "/nazimabad" },
  { name: "FB Area", link: "/fb-area" },
  { name: "Tariq Road", link: "/tariq-road" },
  { name: "Bahadurabad", link: "/bahadurabad" },
  { name: "Shahrah-e-Faisal", link: "/shahrah-e-faisal" },
  { name: "Scheme 33", link: "/scheme-33" },
];

const testimonials = [
  { name: "Ahmed R.", role: "CEO, Karachi Logistics Co.", text: "Naveed delivered 420% organic traffic growth in 6 months. Our 'Karachi to Lahore cargo rates' page went from page 5 to position 1. The ROI has been exceptional." },
  { name: "Dr. Sarah M.", role: "Director, Beverly Hills Dental Clinic", text: "Ranked #1 for 'Beverly Hills dental implants' within 7 months. Patient inquiries from Google increased by 280%. Naveed's technical SEO expertise is unmatched." },
  { name: "Farhan K.", role: "Founder, Pharma Export Company", text: "18 first-page rankings generated 17 international inquiries with $28,000 average order value. Naveed's international SEO strategy transformed our export business." },
  { name: "Zainab A.", role: "Marketing Head, E-commerce Store", text: "Our Shopify store's organic revenue grew 350% after Naveed restructured our product pages and category architecture. Schema implementation alone doubled our click-through rates." },
];

const blogPosts = [
  { title: "Dark SEO Funnel: Why Traffic No Longer Proves Success", link: "/blog/dark-seo-funnel-explained", desc: "The customer journey now starts inside AI — invisible to analytics. Learn the 3-stage dark funnel, the 5 metrics replacing traffic, and why revenue stays stable when clicks drop.", category: "AI & SEO Strategy", date: "Mar 2, 2026", readTime: "11 min", videoId: "gGcxJ5AZbPs", videoType: "long" as const },
  { title: "Entity SEO: Why AI Values Entities Over Keywords", link: "/blog/entity-seo-explained", desc: "AI search engines rank entities, not keywords. Discover the 3 pillars of entity SEO and the 6 trust signals AI uses for verification.", category: "AI & SEO", date: "Feb 26, 2026", readTime: "10 min", videoId: "12mTj5VkSvM", videoType: "short" as const },
  { title: "Secret Traffic Source: Being Cited by AI Without Clicks", link: "/blog/ai-citation-traffic-source", desc: "AI citations deliver brand visibility without clicks. Learn how to build entity signals and optimize for AI extractability.", category: "AI & SEO", date: "Feb 26, 2026", readTime: "9 min", videoId: "0AH3gmqPhNU", videoType: "short" as const },
  { title: "2026 Blog Ranking Guide: Topic Research & Semantic Writing", link: "/blog/blog-ranking-guide-2026", desc: "A 3-phase framework covering validated topic research, structured content planning, and semantic writing that produces 2x deeper content.", category: "Content Strategy", date: "Feb 22, 2026", readTime: "15 min", videoId: "WtTyFaV-LpE", videoType: "long" as const },
  { title: "How Local SEO Changed Because of AI Search", link: "/blog/local-seo-changed-ai-search", desc: "AI summarizes local queries above the traditional local pack. Learn how to optimize reviews and entity signals for AI visibility.", category: "Local SEO", date: "Feb 22, 2026", readTime: "8 min", videoId: "2K072pEkNiw", videoType: "short" as const },
  { title: "5 Types of Websites AI Overview Deliberately Ignores", link: "/blog/websites-ai-overview-ignores", desc: "Your website ranks on page 1 yet AI never cites it. These 5 website types fail AI's trust evaluation every time.", category: "AI & SEO", date: "Feb 22, 2026", readTime: "8 min", videoId: "HcwFRmD6sgw" },
];

const faqData = [
  { q: "What is SEO, and why is it important for businesses in Karachi?", a: "Search Engine Optimization (SEO) is the practice of improving your website's visibility on search engines like Google. For Karachi businesses, SEO is critical because 93% of online experiences begin with a search engine, and 75% of users never scroll past the first page. Local SEO specifically targets queries like 'best [service] in Karachi' or 'near me' searches, connecting your business with high-intent customers in your area. With Karachi's rapidly growing digital economy and increasing smartphone penetration, businesses that invest in SEO gain a significant competitive advantage over those relying solely on traditional marketing." },
  { q: "How long does it take to see SEO results in Karachi?", a: "SEO timelines vary based on your website's current state, competition level, and target keywords. Typically, initial improvements from technical fixes and Google Business Profile optimization appear within 30–45 days. Meaningful ranking improvements for competitive keywords like 'SEO services Karachi' or industry-specific terms take 3–6 months. Long-tail keywords and local searches (e.g., 'plumber in DHA Karachi') can rank faster, often within 6–8 weeks. I provide monthly progress reports tracking keyword positions, organic traffic, and Core Web Vitals metrics so you can see measurable progress throughout the engagement." },
  { q: "What does a technical SEO audit include?", a: "My 100+ point technical SEO audit covers site speed optimization (targeting LCP under 2.5s, FID under 100ms, CLS under 0.1), mobile responsiveness testing across devices, crawlability analysis using Screaming Frog, indexation health checks via Google Search Console, structured data validation, internal linking architecture review, duplicate content identification, canonical tag verification, XML sitemap optimization, robots.txt configuration, HTTPS security analysis, and Core Web Vitals performance benchmarking. The audit also includes a competitive gap analysis comparing your technical performance against top-ranking competitors in your industry." },
  { q: "How much does SEO cost in Karachi?", a: "SEO pricing in Karachi varies based on scope, competition, and business goals. My packages typically range from PKR 30,000 to PKR 150,000+ per month depending on the number of target keywords, content requirements, and link building intensity. Unlike agencies that lock you into long-term contracts, I offer flexible month-to-month engagements with transparent reporting. Every campaign includes a clear ROI framework so you can measure the return on your SEO investment. Contact me for a free consultation and customized quote based on your specific business needs." },
  { q: "What is the difference between on-page and off-page SEO?", a: "On-page SEO involves optimizing elements directly on your website — title tags, meta descriptions, header hierarchy (H1–H6), content quality, keyword placement, internal linking, image alt text, URL structure, and schema markup. Off-page SEO focuses on building your website's authority through external signals — high-quality backlinks from authoritative domains, guest posts on industry publications, digital PR mentions, social signals, brand citations, and Google Business Profile optimization. Both are essential: on-page ensures Google understands your content, while off-page convinces Google your website is trustworthy and authoritative." },
  { q: "Do you provide SEO services outside Karachi?", a: "Yes. While my primary focus is Karachi-based businesses, I serve clients across Pakistan including Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, and Quetta. I also work with international clients in the USA, UK, UAE, and other markets. My international SEO experience — including ranking 'Beverly Hills dental implants' at position 1 — demonstrates my ability to compete in any market regardless of geography." },
  { q: "What tools do you use for SEO analysis?", a: "I leverage enterprise-grade SEO tools including Ahrefs (for backlink analysis and keyword research), SEMrush (for competitive intelligence), Screaming Frog (for technical crawl audits), Google Search Console and Google Analytics 4 (for performance tracking), Surfer SEO (for content optimization), PageSpeed Insights and GTmetrix (for Core Web Vitals), Google Keyword Planner and Google Trends (for search demand data), and my proprietary ProSEOToolkit.com for advanced entity analysis and semantic gap identification." },
  { q: "How do you handle Google algorithm updates?", a: "My SEO methodology is built on white-hat, algorithm-proof principles. I focus on E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals, high-quality content that satisfies search intent, and clean technical foundations. During Google's Helpful Content Updates, 94% of my clients maintained or improved their rankings because we prioritize genuine value over manipulative tactics. I continuously monitor algorithm changes and proactively adjust strategies to protect your rankings." },
  { q: "What is local SEO and how does it help Karachi businesses?", a: "Local SEO optimizes your online presence to attract customers from specific geographic areas. For Karachi businesses, this includes Google Business Profile optimization, local citation building on Pakistani directories, NAP (Name, Address, Phone) consistency management, neighborhood-targeted landing pages (DHA, Clifton, Gulshan-e-Iqbal), location-specific schema markup, and local review generation strategies. Local SEO is particularly valuable because 46% of all Google searches have local intent, and 88% of consumers who do a local search on their smartphone visit or call a store within 24 hours." },
  { q: "Can you help with e-commerce SEO for online stores?", a: "Absolutely. I specialize in e-commerce SEO for platforms including Shopify, WooCommerce, Magento, BigCommerce, and OpenCart. My e-commerce optimization covers product page SEO (unique descriptions, schema markup, image optimization), category page architecture, faceted navigation handling to prevent duplicate content, site speed optimization for large product catalogs, internal linking strategies, and structured data implementation for product rich snippets. One recent Shopify client saw 350% organic revenue growth after implementing my product page restructuring and schema strategy." },
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
                Google-Certified SEO Consultant · Karachi, Pakistan
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

      {/* What is SEO */}
      <section className="section-padding surface-sunken" aria-label="What is SEO">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">What is SEO and Why Does Your Karachi Business Need It?</h2>
            <div className="space-y-4 text-body">
              <p>
                Search Engine Optimization (SEO) is the strategic process of improving your website's visibility on search engines like Google, Bing, and Yahoo. When potential customers in Karachi search for products or services you offer — whether it's "best dentist in DHA," "cargo company Karachi," or "buy furniture online Pakistan" — SEO determines whether your website appears on the first page of results or gets buried beneath competitors.
              </p>
              <p>
                In Pakistan's rapidly growing digital economy, <strong>over 100 million internet users</strong> rely on search engines daily to find local businesses, compare services, and make purchasing decisions. For Karachi — Pakistan's largest city with a population exceeding 16 million — the opportunity is massive. Businesses that invest in professional SEO services consistently outperform competitors who rely solely on paid advertising or social media, because organic search delivers <strong>5.66x higher click-through rates</strong> than paid ads and builds compounding visibility over time.
              </p>
              <p>
                My approach to SEO goes beyond basic keyword stuffing or outdated link schemes. I implement a comprehensive, white-hat methodology built on Google's <strong>E-E-A-T framework</strong> (Experience, Expertise, Authoritativeness, Trustworthiness), semantic search optimization, and Core Web Vitals performance tuning. This ensures your website not only ranks higher but converts visitors into customers through superior user experience and relevant, trustworthy content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding" aria-label="Why choose Naveed Ganatra">
        <div className="section-container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Why Choose Naveed Ganatra as Your SEO Expert in Karachi?
          </h2>
          <p className="text-body max-w-3xl mx-auto mb-10 text-center">
            Hiring an SEO expert is an investment in your business's future. Here's what sets my approach apart from generic agencies and freelancers in Karachi's crowded SEO market.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="metric-card">
              <h3 className="font-semibold text-heading mb-2">Proven Results Across Industries</h3>
              <p className="text-sm text-body">
                Delivered 300%+ organic traffic growth for logistics, healthcare, dental, and e-commerce businesses. Ranked #1 for competitive keywords like "Karachi to Lahore cargo rates" and "Beverly Hills dental implants" within 5–7 months. Every campaign is backed by transparent data and monthly progress reports.
              </p>
            </div>
            <div className="metric-card">
              <h3 className="font-semibold text-heading mb-2">Direct Access, No Middlemen</h3>
              <p className="text-sm text-body">
                Work directly with a Google-certified SEO professional — not a junior account manager reading from a script. I personally audit your website, develop your strategy, and execute optimizations. This direct involvement ensures faster decision-making and higher-quality execution.
              </p>
            </div>
            <div className="metric-card">
              <h3 className="font-semibold text-heading mb-2">Enterprise-Grade Tools & Methodology</h3>
              <p className="text-sm text-body">
                Leveraging Ahrefs, SEMrush, Screaming Frog, Surfer SEO, and my proprietary ProSEOToolkit.com for precise audits, competitive intelligence, and semantic gap analysis. The same tools used by top agencies in New York, London, and Dubai — applied to your Karachi business.
              </p>
            </div>
            <div className="metric-card">
              <h3 className="font-semibold text-heading mb-2">Algorithm-Proof Strategy</h3>
              <p className="text-sm text-body">
                My proprietary content framework ensured 94% of clients maintained or improved rankings during Google's Helpful Content Updates and core algorithm changes. I build on sustainable, white-hat foundations — not shortcuts that risk penalties.
              </p>
            </div>
            <div className="metric-card">
              <h3 className="font-semibold text-heading mb-2">Global Experience, Local Expertise</h3>
              <p className="text-sm text-body">
                Having worked with clients across USA, Dubai, UK, and Pakistan, I understand both international SEO standards and Karachi's unique market dynamics — bilingual search behavior, mobile-first users on varying network speeds, and local competition patterns.
              </p>
            </div>
            <div className="metric-card">
              <h3 className="font-semibold text-heading mb-2">Transparent Reporting & ROI Focus</h3>
              <p className="text-sm text-body">
                Monthly reports track keyword positions, organic traffic, Core Web Vitals scores, backlink growth, and conversion metrics. No vanity metrics — every recommendation ties back to measurable business outcomes and revenue growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding surface-sunken" aria-label="SEO services in Karachi">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Comprehensive SEO Services in Karachi</h2>
            <p className="text-body mb-4">
              From technical foundations to content strategy and link building, I offer the full spectrum of SEO services tailored for Karachi's bilingual, mobile-first search ecosystem. Each service is designed to work as part of an integrated strategy — not isolated tactics.
            </p>
            <p className="text-body">
              Whether you need a complete SEO overhaul or targeted improvements in specific areas, my services scale to match your business goals, budget, and competitive landscape.
            </p>
          </div>
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

      {/* How SEO Works — Process */}
      <section className="section-padding" aria-label="SEO process">
        <div className="section-container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">How My SEO Process Works</h2>
          <p className="text-body max-w-3xl mx-auto mb-10 text-center">
            A structured, transparent methodology that takes your website from audit to authority. Every step is data-driven, measurable, and aligned with Google's latest ranking signals.
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

      {/* Industries */}
      <section className="section-padding surface-sunken" aria-label="Industries served">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Industries I Serve in Karachi & Beyond</h2>
            <p className="text-body mb-4">
              Every industry has unique search patterns, competition dynamics, and customer acquisition challenges. I develop industry-specific SEO strategies that account for your market's particular keyword landscape, seasonal trends, and buyer journey — not one-size-fits-all templates.
            </p>
            <p className="text-body">
              With 27+ industries served, I bring cross-industry insights that help identify untapped opportunities and avoid common pitfalls specific to your vertical.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind) => (
              <Link key={ind.title} to={ind.link} className="metric-card group">
                <h3 className="font-semibold text-heading mb-2 group-hover:text-primary transition-colors">{ind.title}</h3>
                <p className="text-sm text-body">{ind.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technology */}
      <section className="section-padding" aria-label="SEO tools and technology">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Enterprise-Grade SEO Tools & Technology</h2>
            <p className="text-body max-w-3xl mx-auto mb-10 text-center">
              I use the same premium tools trusted by top SEO agencies worldwide — providing your Karachi business with the same level of competitive intelligence and technical analysis available to Fortune 500 companies.
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

      {/* Success Stories */}
      <section className="section-padding surface-sunken" aria-label="Client testimonials and success stories">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Client Testimonials & Success Stories</h2>
            <p className="text-body">
              Real results from real businesses. These testimonials reflect the measurable impact of data-driven SEO — not vanity metrics, but revenue growth, lead generation, and market dominance.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <article key={t.name} className="metric-card">
                <p className="text-sm text-body mb-4 italic">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-heading text-sm">{t.name}</p>
                  <p className="text-xs text-subtle">{t.role}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              View Detailed Case Studies <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* On-Page vs Off-Page vs Technical SEO */}
      <section className="section-padding" aria-label="SEO pillars explained">
        <div className="section-container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">The Three Pillars of SEO Excellence</h2>
          <p className="text-body max-w-3xl mx-auto mb-10 text-center">
            A successful SEO campaign requires mastery across three interconnected disciplines. Here's how each pillar contributes to your website's search engine dominance.
          </p>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="metric-card">
              <h3 className="font-semibold text-heading mb-3 text-lg">On-Page SEO</h3>
              <p className="text-sm text-body mb-4">
                On-page optimization ensures search engines understand your content's relevance and quality. This includes title tag engineering, semantic keyword placement, header hierarchy optimization (H1–H6), meta description crafting, internal linking architecture, image alt text, and URL structure optimization.
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
                Off-page SEO builds your website's authority and trustworthiness through external signals. High-quality backlinks from authoritative domains, guest posts on industry publications, digital PR campaigns, brand mentions, and local citation building all contribute to stronger domain authority.
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
                Technical SEO ensures search engine crawlers can efficiently discover, crawl, render, and index your website's content. This foundational layer addresses site speed, mobile responsiveness, structured data, crawl budget optimization, and Core Web Vitals performance.
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

      {/* Local SEO Karachi Areas */}
      <section className="section-padding surface-sunken" aria-label="Areas served in Karachi">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Local SEO Services Across Karachi</h2>
            <p className="text-body mb-4">
              Karachi is a city of diverse neighborhoods, each with unique search patterns and commercial opportunities. My local SEO strategies target specific areas with neighborhood-level landing pages, localized Google Business Profile optimization, and geo-targeted content that captures "near me" and area-specific search queries.
            </p>
            <p className="text-body">
              From the commercial hubs of Saddar and Shahrah-e-Faisal to the residential markets of DHA, Clifton, and Gulshan-e-Iqbal — I help businesses dominate local search results in every corner of Karachi.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {karachiAreas.map((area) => (
              <Link key={area.name} to={area.link} className="inline-flex items-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-heading hover:text-primary transition-colors">
                <MapPin className="h-3.5 w-3.5 text-primary mr-2" />
                {area.name}
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/local-seo-karachi"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Learn About Local SEO in Karachi <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SEO for Different Platforms */}
      <section className="section-padding" aria-label="Platform-specific SEO">
        <div className="section-container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Platform-Specific SEO Expertise</h2>
          <p className="text-body max-w-3xl mx-auto mb-10 text-center">
            Every CMS and e-commerce platform has unique SEO capabilities and limitations. I optimize websites built on all major platforms, leveraging platform-specific best practices for maximum search visibility.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "WordPress SEO", desc: "Plugin configuration, theme optimization, and speed tuning for the world's most popular CMS.", link: "/wordpress-seo" },
              { name: "Shopify SEO", desc: "Collection page hierarchy, liquid template optimization, and app-based SEO enhancements.", link: "/shopify-seo" },
              { name: "WooCommerce SEO", desc: "Product schema, variable product optimization, and WooCommerce-specific performance tuning.", link: "/woocommerce-seo" },
              { name: "Webflow SEO", desc: "Clean code output optimization, CMS collection SEO, and Webflow-native performance gains.", link: "/webflow-seo" },
            ].map((platform) => (
              <Link key={platform.name} to={platform.link} className="metric-card group text-center">
                <h3 className="font-semibold text-heading mb-2 group-hover:text-primary transition-colors">{platform.name}</h3>
                <p className="text-sm text-body">{platform.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-subtle">
              Also serving:{" "}
              <Link to="/wix-seo" className="text-primary hover:text-primary/80">Wix</Link>{" · "}
              <Link to="/squarespace-seo" className="text-primary hover:text-primary/80">Squarespace</Link>{" · "}
              <Link to="/drupal-seo" className="text-primary hover:text-primary/80">Drupal</Link>{" · "}
              <Link to="/joomla-seo" className="text-primary hover:text-primary/80">Joomla</Link>{" · "}
              <Link to="/magento-seo" className="text-primary hover:text-primary/80">Magento</Link>{" · "}
              <Link to="/bigcommerce-seo" className="text-primary hover:text-primary/80">BigCommerce</Link>{" · "}
              <Link to="/opencart-seo" className="text-primary hover:text-primary/80">OpenCart</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Insights & Videos Hub */}
      <section className="section-padding surface-sunken" aria-label="SEO insights, videos, and strategies">
        <div className="section-container">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-2">Insights & Videos</p>
              <h2 className="text-3xl sm:text-4xl font-bold">SEO Strategies — Articles & Video Breakdowns</h2>
              <p className="text-body mt-3 max-w-2xl">
                In-depth guides paired with video walkthroughs on AI search optimization, entity SEO, and semantic content strategies — bridging theory and execution for 2026.
              </p>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-heading hover:text-primary hover:border-primary/40 transition-colors shrink-0"
            >
              View All Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Featured Post with Video Thumbnail */}
          <Link to={blogPosts[0].link} className="block metric-card group mb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-lg" />
            <div className="grid md:grid-cols-5 gap-6">
              {blogPosts[0].videoId && blogPosts[0].videoType === "long" && (
                <div className="md:col-span-2 relative rounded-lg overflow-hidden aspect-video bg-muted">
                  <img
                    src={`https://img.youtube.com/vi/${blogPosts[0].videoId}/hqdefault.jpg`}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 group-hover:bg-foreground/10 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg">
                      <Play className="h-6 w-6 text-primary-foreground fill-primary-foreground ml-0.5" />
                    </div>
                  </div>
                </div>
              )}
              <div className={`${blogPosts[0].videoId && blogPosts[0].videoType === "long" ? "md:col-span-3" : "md:col-span-5"} pl-2 md:pl-4 flex flex-col justify-center`}>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{blogPosts[0].category}</span>
                  {blogPosts[0].videoId && blogPosts[0].videoType === "long" && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-destructive/10 px-2.5 py-0.5 text-[10px] font-bold text-destructive uppercase tracking-wider">
                      <Play className="h-2.5 w-2.5 fill-destructive" /> Video
                    </span>
                  )}
                  {blogPosts[0].videoId && blogPosts[0].videoType === "short" && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold text-accent-foreground uppercase tracking-wider">
                      <Play className="h-2.5 w-2.5" /> YT Short
                    </span>
                  )}
                  <span className="text-xs text-subtle">{blogPosts[0].date}</span>
                  <span className="text-xs text-subtle">·</span>
                  <span className="text-xs text-subtle">{blogPosts[0].readTime}</span>
                  <span className="inline-block rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold text-accent-foreground uppercase tracking-wider">Latest</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-heading group-hover:text-primary transition-colors mb-3">{blogPosts[0].title}</h3>
                <p className="text-body max-w-3xl">{blogPosts[0].desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-4">
                  {blogPosts[0].videoType === "long" ? "Read Full Article & Watch Video" : blogPosts[0].videoId ? "Read Article & Watch Short" : "Read Full Article"} <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>

          {/* Grid with Video Badges */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <Link key={post.link} to={post.link} className="metric-card group flex flex-col h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">{post.category}</span>
                  {post.videoId && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-destructive/10 px-2 py-0.5 text-[10px] font-bold text-destructive uppercase tracking-wider">
                      <Play className="h-2.5 w-2.5 fill-destructive" /> Video
                    </span>
                  )}
                  <span className="text-xs text-subtle">{post.readTime}</span>
                </div>
                <h3 className="font-bold text-heading mb-2 group-hover:text-primary transition-colors text-sm leading-snug flex-grow">
                  {post.title}
                </h3>
                <p className="text-xs text-body mb-3 line-clamp-3">{post.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-auto">
                  {post.videoId ? "Read & Watch" : "Read Article"} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>

          {/* YouTube Channel CTA */}
          <div className="mt-8 text-center">
            <a
              href="https://www.youtube.com/@naveedganatra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Subscribe on YouTube for Weekly SEO Videos <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* City-Level SEO Services */}
      <section className="section-padding" aria-label="SEO services across Pakistan">
        <div className="section-container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">SEO Services Across Pakistan</h2>
          <p className="text-body max-w-3xl mx-auto mb-10 text-center">
            While Karachi is my home base, I provide professional SEO services to businesses across all major cities in Pakistan — each with city-specific keyword research, local citation building, and Google Business Profile optimization.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { city: "Karachi", link: "/seo-agency-karachi" },
              { city: "Lahore", link: "/seo-agency-lahore" },
              { city: "Islamabad", link: "/seo-agency-islamabad" },
              { city: "Rawalpindi", link: "/seo-agency-rawalpindi" },
              { city: "Faisalabad", link: "/seo-agency-faisalabad" },
              { city: "Multan", link: "/seo-agency-multan" },
              { city: "Gujranwala", link: "/seo-agency-gujranwala" },
              { city: "Hyderabad", link: "/seo-agency-hyderabad" },
              { city: "Peshawar", link: "/seo-agency-peshawar" },
              { city: "Quetta", link: "/seo-agency-quetta" },
            ].map((c) => (
              <Link key={c.city} to={c.link} className="metric-card text-center group py-4">
                <MapPin className="h-4 w-4 text-primary mx-auto mb-2" />
                <p className="font-semibold text-heading text-sm group-hover:text-primary transition-colors">SEO Agency {c.city}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding surface-sunken" aria-label="Frequently asked questions about SEO in Karachi">
        <div className="section-container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Frequently Asked Questions About SEO in Karachi</h2>
          <p className="text-body max-w-3xl mx-auto mb-10 text-center">
            Get answers to the most common questions about SEO services, pricing, timelines, and methodology. If your question isn't listed here, feel free to reach out via WhatsApp for a direct response.
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((f) => (
              <details key={f.q} className="group metric-card">
                <summary className="cursor-pointer font-semibold text-heading list-none flex items-center justify-between">
                  {f.q}
                  <span className="ml-4 text-primary text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <p className="mt-3 text-sm text-body leading-relaxed">{f.a}</p>
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
