import { Link } from "react-router-dom";
import { ArrowRight, Search, Globe, BarChart3, Zap, ShieldCheck, TrendingUp, FileSearch, Layers, Target, CheckCircle2, Wrench, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import LeadGenForm from "@/components/LeadGenForm";

const breadcrumb = buildBreadcrumb([{ name: "Home", url: "https://seoexpertinkarachi.com/" }, { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" }, { name: "SEO Agency Lahore", url: "https://seoexpertinkarachi.com/seo-agency-lahore" }]);
const webPage = buildWebPage({ name: "SEO Agency Lahore — Naveed Ganatra SEO Agency", description: "Lahore's leading SEO agency delivering data-driven organic growth for Punjab's cultural and commercial capital.", url: "https://seoexpertinkarachi.com/seo-agency-lahore" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "SEO Agency Lahore", description: "Full-service SEO agency in Lahore delivering technical optimization, content strategy, link building, and local SEO for measurable organic growth.", provider: { "@type": "Organization", name: "Naveed Ganatra SEO Agency", url: "https://seoexpertinkarachi.com" }, areaServed: { "@type": "City", name: "Lahore", containedInPlace: { "@type": "Country", name: "Pakistan" } }, serviceType: "Search Engine Optimization", offers: { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", priceCurrency: "PKR", price: "40000", description: "Starting from PKR 40,000/month" } } };

const faqData = [
  { q: "Why should I hire an SEO agency in Lahore instead of doing it in-house?", a: "SEO requires specialized expertise in technical optimization, content strategy, and link building — each taking years to master. A professional SEO agency brings enterprise-grade tools like Ahrefs, SEMrush, and Screaming Frog (collectively costing PKR 150,000+/month), proven methodologies from 200+ campaigns, and deep understanding of Lahore's competitive digital ecosystem. In-house teams rarely have the bandwidth or tooling to match agency-level output." },
  { q: "How long does SEO take to show results for Lahore businesses?", a: "Technical fixes and Google Business Profile optimization typically produce visible improvements within 30-45 days. Competitive keywords in Lahore's top industries — real estate, healthcare, IT services, and education — require 4-6 months for significant organic traffic gains. We provide monthly reports tracking keyword positions, traffic growth, Core Web Vitals, and conversions so you see measurable progress throughout." },
  { q: "What SEO services does your agency provide in Lahore?", a: "Our Lahore SEO services include 100+ checkpoint technical audits, on-page optimization with entity-based content strategy, off-page SEO with high-DR link building, local SEO with Google Business Profile optimization across all Lahore areas, e-commerce SEO for Shopify/WooCommerce stores, content strategy with topical authority mapping, keyword research with bilingual targeting (English & Urdu), and AI search optimization for Google's evolving features." },
  { q: "How much does SEO cost for Lahore businesses?", a: "SEO investment in Lahore ranges from PKR 40,000 to PKR 250,000+ per month depending on competition level, target keywords, content requirements, and link building intensity. We offer flexible month-to-month engagements with transparent reporting. Every campaign includes a clear ROI framework so you can measure returns. Contact us for a free consultation and customized quote." },
  { q: "What makes your SEO agency different from other companies in Lahore?", a: "Three differentiators: First, direct access to a Google-certified SEO professional with 10+ years of experience — no junior account managers. Second, a proven track record across 27+ industries with international results (ranking #1 for 'Beverly Hills dental implants'). Third, our methodology built on the Koray framework for semantic SEO and topical authority — not generic template strategies." },
  { q: "Do you provide e-commerce SEO for Lahore online stores?", a: "Yes. We optimize Shopify, WooCommerce, Magento, and custom e-commerce stores with product page SEO, category architecture optimization, faceted navigation handling, structured data for product rich snippets, site speed optimization, and internal linking strategies. Lahore's Liberty Market and Gulberg retailers are increasingly moving online, and our e-commerce SEO helps them compete nationally." },
  { q: "Can your agency help with Google Business Profile for Lahore?", a: "Absolutely. Local SEO with GBP optimization is core to our Lahore strategy. We optimize listings with accurate NAP data, strategic category selection, keyword-rich descriptions, Google Posts, review generation, photo optimization, and Q&A management. We create area-specific landing pages targeting Gulberg, DHA, Model Town, Johar Town, and 10+ other Lahore localities." },
  { q: "How do you handle Google algorithm updates for Lahore clients?", a: "Our methodology is built on white-hat, algorithm-proof principles. We focus on E-E-A-T signals, high-quality content that satisfies search intent, and clean technical foundations. During Google's Helpful Content Updates, 94% of our clients maintained or improved rankings because we prioritize genuine value over manipulative tactics." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqData.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const stats = [
  { value: "13M+", label: "Lahore Metro Population" },
  { value: "10+", label: "Years SEO Experience" },
  { value: "320%", label: "Average Traffic Growth" },
  { value: "27+", label: "Industries Served" },
];

const services = [
  { icon: Search, title: "Technical SEO", desc: "Core Web Vitals optimization, crawl efficiency, structured data implementation, and site architecture engineering for Lahore business websites.", link: "/technical-seo" },
  { icon: Globe, title: "Local SEO Lahore", desc: "Hyperlocal Google Business Profile optimization, NAP consistency, and area-level targeting across Gulberg, DHA, Model Town, Johar Town, and all Lahore zones.", link: "/local-seo-karachi" },
  { icon: BarChart3, title: "On-Page SEO", desc: "Entity-based content optimization, semantic keyword placement, title tag engineering, internal linking architecture, and intent-layered content strategy.", link: "/on-page-seo" },
  { icon: Zap, title: "Off-Page SEO & Link Building", desc: "High-DR backlinks from authoritative Pakistani and international publications, contextual guest posts, and digital PR campaigns.", link: "/off-page-seo" },
  { icon: ShieldCheck, title: "SEO Audits", desc: "100+ point comprehensive audits covering page speed, mobile usability, crawlability, indexation, schema validation, and competitive gap analysis.", link: "/seo-audit" },
  { icon: TrendingUp, title: "E-commerce SEO", desc: "Product page optimization, category architecture, faceted navigation handling, and structured data for Shopify, WooCommerce, and Magento stores.", link: "/ecommerce-seo" },
  { icon: FileSearch, title: "Keyword Research", desc: "Search intent classification, competitor gap analysis, long-tail opportunity mapping, and bilingual keyword targeting for English and Urdu queries.", link: "/keyword-research" },
  { icon: Layers, title: "Content Strategy", desc: "Topical authority mapping, content cluster architecture, pillar page development, and editorial calendar aligned with Lahore's search demand patterns.", link: "/content-strategy-seo" },
  { icon: Target, title: "AI Search Optimization", desc: "Optimization for Google AI Overviews, SGE, and next-generation search experiences to maintain visibility as search evolves.", link: "/ai-search-optimization" },
];

const process = [
  { step: "01", title: "Discovery & Audit", desc: "Deep-dive into your website's technical health, content gaps, backlink profile, and competitive landscape using enterprise-grade tools." },
  { step: "02", title: "Entity Mapping", desc: "Build a knowledge graph linking your brand to services, locations, and industry entities — establishing topical authority signals Google rewards." },
  { step: "03", title: "Intent Matching", desc: "Classify every keyword by search intent — informational, navigational, transactional — ensuring content satisfies user needs at each funnel stage." },
  { step: "04", title: "Schema Structuring", desc: "Implement LocalBusiness, FAQPage, Service, Product, and Review schemas to unlock rich snippets and featured snippet eligibility." },
  { step: "05", title: "Content Architecture", desc: "Design hub-and-spoke content clusters with strategic internal linking that reinforces semantic relationships and topical depth." },
  { step: "06", title: "Monitor & Scale", desc: "Track rankings, crawl rates, Core Web Vitals, and conversions with monthly reporting and continuous optimization cycles." },
];

const industries = [
  { title: "Real Estate & Property", desc: "Lahore's booming real estate market — DHA, Bahria Town, Lake City — demands specialized property listing SEO, local map pack rankings, and area-targeted content.", link: "/real-estate-seo" },
  { title: "Healthcare & Hospitals", desc: "YMYL-compliant content, medical schema markup, and patient acquisition strategies for Lahore's leading hospitals and specialist clinics.", link: "/dental-seo" },
  { title: "Law Firms & Legal", desc: "Practice area optimization, legal schema implementation, and local SEO for corporate law firms in Gulberg and The Mall.", link: "/law-firm-seo" },
  { title: "IT & Software Companies", desc: "Product-led SEO, SaaS content strategies, and programmatic optimization for Lahore's thriving tech corridor along Arfa Tower and IT Park.", link: "/saas-seo" },
  { title: "Education & Universities", desc: "Enrollment-driven SEO for Lahore's prestigious universities, colleges, and coaching academies competing for student attention online.", link: "/seo-services" },
  { title: "E-commerce & Retail", desc: "Product page SEO, category architecture, and structured data for online retailers extending Liberty Market and Gulberg storefronts digitally.", link: "/ecommerce-seo" },
  { title: "Manufacturing & Textiles", desc: "B2B keyword targeting, product specification pages, and international SEO for Lahore's garment and textile manufacturing sector.", link: "/manufacturing-seo" },
  { title: "Restaurants & Hospitality", desc: "Google Business Profile optimization, menu schema, and local pack strategies for Lahore's famous food scene on MM Alam Road and Food Street.", link: "/restaurant-seo" },
  { title: "Accounting & Finance", desc: "Service page optimization, trust signals, and local SEO for accounting firms and financial advisory practices.", link: "/accounting-firm-seo" },
];

const lahoreAreas = [
  { name: "Gulberg & Liberty Market", desc: "Lahore's premier commercial district housing corporate offices, retail flagships, and Pakistan's most iconic shopping destination. Intense SEO competition across real estate, hospitality, and professional services." },
  { name: "DHA Lahore (Phase 1-9)", desc: "Pakistan's most prestigious planned community spanning 9 phases with high-value residential and commercial properties. Premium healthcare, education, and luxury service businesses compete heavily for organic visibility." },
  { name: "Model Town", desc: "Established, affluent neighborhood known for its tree-lined streets, universities, and medical facilities. Growing digital adoption among local businesses creates strong local SEO opportunities." },
  { name: "Johar Town", desc: "Rapidly developing area anchored by UET and Expo Center, with new commercial plazas, hospitals, and educational institutions. The fastest-growing local search market in Lahore." },
  { name: "Bahria Town Lahore", desc: "Pakistan's largest private housing society with a concentrated, affluent consumer base of 200,000+ residents. Captive audience creates unique local SEO dynamics for service businesses." },
  { name: "Mall Road & Old Lahore", desc: "Historical commercial corridor stretching from Data Darbar to the Lahore Fort, with traditional businesses, bazaars, and heritage hospitality establishments transitioning to digital marketing." },
  { name: "Cantt & Fortress Stadium", desc: "Military-adjacent commercial zone with upscale shopping, restaurants, and professional services. High-income demographics make this a premium local SEO target area." },
  { name: "Iqbal Town & Township", desc: "Dense residential zones with strong demand for healthcare, education, and everyday services. High search volume for 'near me' queries across multiple service categories." },
  { name: "Wapda Town & Valencia", desc: "Modern residential communities with growing commercial infrastructure, medical centers, and educational facilities driving increasing local search demand." },
  { name: "Ferozepur Road & Thokar Niaz Baig", desc: "Lahore's industrial and transport corridor connecting to the motorway. Warehousing, logistics, and manufacturing businesses benefit from B2B search optimization." },
  { name: "Garden Town & Faisal Town", desc: "Central residential neighborhoods with medical specialists, dental clinics, and professional service providers competing for high-intent local searches." },
  { name: "Allama Iqbal International Airport Area", desc: "Commercial zone around Pakistan's second-busiest airport, with hotels, cargo services, and travel businesses requiring strong local and industry-specific SEO." },
];

const tools = ["Ahrefs", "SEMrush", "Screaming Frog", "Google Search Console", "Google Analytics 4", "Surfer SEO", "ProSEOToolkit.com", "PageSpeed Insights", "Schema Markup Validator", "GTmetrix", "Google Trends"];

const SeoAgencyLahore = () => (
  <Layout>
    <SeoHead title="SEO Agency Lahore — #1 SEO Company & Services | Naveed Ganatra" description="Lahore's leading SEO agency with 10+ years of experience. Naveed Ganatra SEO Agency delivers 320%+ organic traffic growth through technical SEO, content strategy, and link building for Punjab's commercial capital." canonical="https://seoexpertinkarachi.com/seo-agency-lahore" />
    <JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={serviceSchema} /><JsonLd data={faqSchema} />
    <main>
      {/* Hero + Lead Form */}
      <section className="section-padding surface-sunken" aria-label="Hero">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Full-Service SEO Agency · Lahore, Pakistan</p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                SEO Agency in Lahore <span className="block mt-1">— Dominate Punjab's Digital Market</span>
              </h1>
              <p className="text-lg text-body mb-4">
                Naveed Ganatra SEO Agency is a results-driven <strong>SEO company in Lahore</strong> helping businesses across Punjab's cultural capital achieve first-page Google rankings through semantic optimization, technical excellence, and entity-based content strategies refined over 10+ years.
              </p>
              <p className="text-base text-body mb-4">
                Whether you need <strong>SEO services in Lahore</strong> for your Gulberg-based IT startup, a DHA healthcare clinic, or a Liberty Market retailer expanding online — our agency combines deep local market intelligence with global SEO best practices. We've helped 150+ Lahore businesses generate measurable revenue growth through organic search.
              </p>
              <p className="text-base text-body mb-8">
                Our approach is built on the Koray framework for topical authority, E-E-A-T signal amplification, and data-driven keyword strategies. No cookie-cutter playbooks. Direct access to a Google-certified professional who understands Lahore's commercial landscape — from the tech corridors of Arfa Tower to the wholesale markets of Anarkali.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Get Free SEO Consultation <ArrowRight className="h-4 w-4" /></a>
                <Link to="/case-studies" className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">View Case Studies</Link>
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
            {stats.map((s) => (<div key={s.label} className="metric-card text-center"><p className="stat-number">{s.value}</p><p className="mt-2 text-sm text-subtle">{s.label}</p></div>))}
          </div>
        </div>
      </section>

      {/* Why Lahore Needs SEO */}
      <section className="section-padding surface-sunken" aria-label="Why SEO in Lahore">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Lahore Businesses Need a Professional SEO Agency</h2>
            <div className="space-y-4 text-body">
              <p>Lahore is Pakistan's cultural capital and second-largest digital economy — home to over 13 million residents, a booming IT sector anchored by Arfa Software Technology Park, and some of the country's most competitive commercial markets. From Gulberg's corporate towers to Liberty Market's retail sprawl, thousands of Lahore businesses compete daily for the attention of a digitally savvy consumer base.</p>
              <p>With <strong>smartphone penetration exceeding 65% in Lahore</strong> and Google processing millions of local searches daily, the difference between appearing on page one and page three translates directly into revenue. Industries like real estate, healthcare, education, and IT services face particularly fierce online competition — making professional <Link to="/seo-services" className="text-primary hover:underline">SEO services</Link> not just beneficial but essential for survival.</p>
              <p>Lahore's search landscape has unique characteristics: bilingual queries in English and Urdu, strong seasonal patterns around university admissions and property launches, and area-specific search intent that varies dramatically between DHA's affluent consumers and Anarkali's wholesale buyers. Our agency's <Link to="/keyword-research" className="text-primary hover:underline">keyword research</Link> captures these nuances, while our <Link to="/technical-seo" className="text-primary hover:underline">technical SEO</Link> ensures your website meets Google's increasingly demanding performance standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding" aria-label="SEO services for Lahore">
        <div className="section-container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Comprehensive SEO Services for Lahore Businesses</h2>
          <p className="text-body max-w-3xl mx-auto mb-10 text-center">Our agency delivers full-spectrum SEO solutions engineered for Lahore's competitive digital market — from technical foundations to content authority and link equity.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (<div key={s.title} className="metric-card"><div className="flex items-center gap-3 mb-3"><s.icon className="h-5 w-5 text-primary shrink-0" /><h3 className="font-semibold text-heading">{s.title}</h3></div><p className="text-sm text-body">{s.desc}</p></div>))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding surface-sunken" aria-label="SEO process">
        <div className="section-container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Our 6-Step SEO Process for Lahore Clients</h2>
          <p className="text-body max-w-3xl mx-auto mb-10 text-center">Every engagement begins with a thorough <Link to="/seo-audit" className="text-primary hover:underline">SEO audit</Link> to identify the highest-impact opportunities specific to your Lahore market position.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p) => (<div key={p.step} className="metric-card"><p className="text-2xl font-bold text-primary mb-2">{p.step}</p><h3 className="font-semibold text-heading mb-2">{p.title}</h3><p className="text-sm text-body">{p.desc}</p></div>))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding" aria-label="Industries we serve in Lahore">
        <div className="section-container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Industries We Serve in Lahore</h2>
          <p className="text-body max-w-3xl mx-auto mb-10 text-center">From Lahore's thriving real estate market to its world-famous food scene, our SEO strategies are tailored to each industry's competitive dynamics and customer acquisition patterns.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (<div key={ind.title} className="metric-card"><h3 className="font-semibold text-heading mb-2">{ind.title}</h3><p className="text-sm text-body">{ind.desc}</p></div>))}
          </div>
        </div>
      </section>

      {/* Lahore Areas */}
      <section className="section-padding surface-sunken" aria-label="Lahore areas we optimize for">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Hyperlocal SEO Across Lahore</h2>
            <p className="text-body mb-4">Search behavior varies dramatically across Lahore's diverse neighborhoods. Our <Link to="/keyword-research" className="text-primary hover:underline">keyword research</Link> maps demand at the area level, while our <Link to="/local-seo-karachi" className="text-primary hover:underline">local SEO strategies</Link> build neighborhood-aware campaigns.</p>
            <p className="text-body">From DHA's premium service market to Anarkali's wholesale ecosystem, every area gets a tailored approach based on actual search data and competitive analysis.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lahoreAreas.map((area) => (<div key={area.name} className="metric-card"><div className="flex items-center gap-2 mb-2"><MapPin className="h-4 w-4 text-primary shrink-0" /><h3 className="font-semibold text-heading">{area.name}</h3></div><p className="text-sm text-body">{area.desc}</p></div>))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="section-padding" aria-label="SEO tools">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Enterprise-Grade SEO Tools We Use</h2>
            <p className="text-body max-w-3xl mx-auto mb-10 text-center">Our agency uses premium tools trusted by top agencies worldwide — providing Lahore businesses with Fortune 500-level competitive intelligence.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool) => (<span key={tool} className="inline-flex items-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-heading"><Wrench className="h-3.5 w-3.5 text-primary mr-2" />{tool}</span>))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding surface-sunken" aria-label="Frequently asked questions">
        <div className="section-container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Frequently Asked Questions About SEO in Lahore</h2>
          <p className="text-body max-w-3xl mx-auto mb-10 text-center">Get answers to the most common questions about SEO services, pricing, and timelines for Lahore businesses.</p>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((f) => (
              <details key={f.q} className="group metric-card">
                <summary className="cursor-pointer font-semibold text-heading list-none flex items-center justify-between">{f.q}<span className="ml-4 text-primary text-xl group-open:rotate-45 transition-transform shrink-0">+</span></summary>
                <p className="mt-3 text-sm text-body leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner heading="Ready to Dominate Search in Lahore?" text="Get a free SEO consultation from Naveed Ganatra SEO Agency. Discover how our data-driven strategies deliver measurable organic growth for Lahore businesses." />
    </main>
  </Layout>
);

export default SeoAgencyLahore;
