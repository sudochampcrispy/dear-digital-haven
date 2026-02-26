import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";

const ecommerceBreadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "E-commerce SEO", url: "https://seoexpertinkarachi.com/ecommerce-seo-karachi" },
]);

const ecommerceWebPage = buildWebPage({
  name: "E-commerce SEO Services in Karachi",
  description: "Boost your online store's organic traffic with expert E-commerce SEO services in Karachi.",
  url: "https://seoexpertinkarachi.com/ecommerce-seo-karachi",
});

const ecommerceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "Person", name: "Naveed Ganatra" },
  areaServed: { "@type": "City", name: "Karachi" },
  serviceType: "E-commerce SEO",
  description:
    "E-commerce SEO services in Karachi by Naveed Ganatra. Product page optimization, category architecture, structured data, and conversion-focused SEO for online stores in Pakistan.",
};

const faqData = [
  {
    q: "What is E-commerce SEO and how is it different from regular SEO?",
    a: "E-commerce SEO focuses specifically on optimizing online stores — product pages, category hierarchies, faceted navigation, and shopping feeds. Unlike regular SEO, it addresses unique challenges like duplicate product variants, thin product descriptions, and transactional search intent.",
  },
  {
    q: "How long does it take to see results from E-commerce SEO?",
    a: "Technical fixes and schema improvements can show results in 2–4 weeks. Significant organic traffic growth for product and category pages typically takes 3–6 months depending on competition and catalog size.",
  },
  {
    q: "Which e-commerce platforms do you optimize for?",
    a: "We optimize for all major platforms including Shopify, WooCommerce, Magento, OpenCart, and custom-built stores. Each platform has unique SEO challenges that we address with platform-specific strategies.",
  },
  {
    q: "How much does E-commerce SEO cost in Karachi?",
    a: "E-commerce SEO packages start at PKR 50,000/month for stores with up to 500 products. Larger catalogs and competitive niches require custom pricing. Contact us for a free audit and quote.",
  },
  {
    q: "Can you help with Google Shopping and Merchant Center?",
    a: "Yes. We optimize product feeds for Google Merchant Center, implement Product schema markup, and ensure your products appear in Google Shopping results with rich snippets including price, availability, and ratings.",
  },
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

const challenges = [
  { title: "Duplicate Content", desc: "Product variants, filters, and pagination create thousands of duplicate pages that dilute your SEO authority and confuse search engines." },
  { title: "Thin Product Pages", desc: "Generic manufacturer descriptions fail to rank. Each product page needs unique, intent-optimized content with proper schema markup." },
  { title: "Complex Site Architecture", desc: "Categories, subcategories, filters, and faceted navigation must be structured to maximize crawl efficiency and internal link equity." },
  { title: "Slow Page Speed", desc: "Heavy product images, third-party scripts, and bloated themes kill Core Web Vitals — and conversions. Speed optimization is critical." },
];

const services = [
  { title: "Product Page Optimization", items: ["Unique, keyword-rich product descriptions", "Product schema markup (price, availability, reviews)", "Optimized product images with descriptive alt text", "Internal linking between related products", "Review and rating markup for rich snippets"] },
  { title: "Category & Architecture SEO", items: ["SEO-friendly category hierarchy design", "Faceted navigation optimization (noindex, canonical)", "Breadcrumb schema implementation", "Pagination handling with rel=next/prev", "Category page content optimization"] },
  { title: "Technical E-commerce SEO", items: ["Core Web Vitals optimization for product pages", "Crawl budget management for large catalogs", "Canonical tag strategy for product variants", "XML sitemap optimization for product feeds", "Mobile-first indexing compliance"] },
  { title: "Conversion-Focused SEO", items: ["Transactional keyword targeting", "Shopping feed optimization for Google Merchant Center", "Competitor pricing and positioning analysis", "Cart abandonment page optimization", "Landing page SEO for promotional campaigns"] },
];

const EcommerceSeoKarachi = () => (
  <Layout>
    <SeoHead
      title="E-commerce SEO Services Company in Karachi | Naveed Ganatra"
      description="Boost your online store's organic traffic with expert E-commerce SEO services in Karachi. Product page optimization, category architecture, Google Shopping setup, and structured data by Naveed Ganatra."
      canonical="https://seoexpertinkarachi.com/ecommerce-seo-karachi"
    />
    <JsonLd data={ecommerceSchema} />
    <JsonLd data={organizationSchema} />
    <JsonLd data={faqSchema} />
    <JsonLd data={ecommerceBreadcrumb} />
    <JsonLd data={ecommerceWebPage} />

    <main>
      {/* Hero */}
      <section className="section-padding surface-sunken" aria-label="E-commerce SEO hero">
        <div className="section-container">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">E-commerce SEO</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              E-commerce SEO Services in Karachi
            </h1>
            <p className="text-lg text-body mb-8">
              Turn your online store into a traffic magnet. From product page optimization and category architecture to Google Shopping feeds and structured data — we help Karachi e-commerce businesses rank higher and sell more through organic search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/923232877850"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Get Free E-commerce SEO Audit
              </a>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why E-commerce SEO */}
      <section className="section-padding" aria-label="Why E-commerce SEO matters">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Why E-commerce SEO Matters in Pakistan</h2>
          <p className="text-body max-w-3xl mb-10">
            Pakistan's e-commerce market is projected to reach $7.6 billion by 2025. With 60%+ of online shoppers starting their journey on Google, organic search is the highest-ROI channel for online stores. Yet most Pakistani e-commerce sites suffer from critical SEO gaps that cost them thousands of potential customers every month.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">60%+</p>
              <p className="text-xs text-subtle mt-1">Online shoppers start on Google</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">$7.6B</p>
              <p className="text-xs text-subtle mt-1">Projected Pakistan e-commerce market</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">14x</p>
              <p className="text-xs text-subtle mt-1">ROI of SEO vs paid ads for e-commerce</p>
            </div>
            <div className="metric-card text-center">
              <p className="stat-number text-3xl">70%</p>
              <p className="text-xs text-subtle mt-1">Of clicks go to organic results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="section-padding surface-sunken" aria-label="E-commerce SEO challenges">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Common E-commerce SEO Challenges We Solve</h2>
          <p className="text-body max-w-3xl mb-10">
            E-commerce websites face unique SEO challenges that generic SEO strategies can't address. Here's what we fix for online stores in Karachi.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {challenges.map((c) => (
              <div key={c.title} className="metric-card">
                <h3 className="font-semibold text-heading mb-2">{c.title}</h3>
                <p className="text-sm text-body">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding" aria-label="E-commerce SEO services">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Our E-commerce SEO Services</h2>
          <p className="text-body max-w-3xl mb-10">
            A comprehensive approach covering every aspect of e-commerce SEO — from individual product pages to your entire store architecture.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="metric-card">
                <h3 className="font-semibold text-heading mb-4">{s.title}</h3>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-body">
                      <span className="text-primary font-bold">→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="section-padding surface-sunken" aria-label="Supported platforms">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Platforms We Optimize</h2>
          <p className="text-body max-w-3xl mb-10">
            Whether you're on Shopify, WooCommerce, or a custom-built store, we tailor our SEO strategy to your platform's strengths and limitations.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Shopify", "WooCommerce", "Magento", "OpenCart", "Daraz Seller Stores", "Custom-Built Stores"].map((platform) => (
              <div key={platform} className="metric-card text-center">
                <h3 className="font-semibold text-heading">{platform}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" aria-label="Frequently asked questions">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-10">E-commerce SEO FAQs</h2>
          <div className="max-w-4xl space-y-6">
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

      {/* Internal linking */}
      <aside className="section-padding surface-sunken" aria-label="Related pages">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold mb-4">Explore More Services</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/seo-services" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
              All SEO Services
            </Link>
            <Link to="/local-seo-karachi" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
              Local SEO Karachi
            </Link>
            <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
              View Case Studies
            </Link>
          </div>
        </div>
      </aside>

      <CtaBanner heading="Ready to Grow Your Online Store's Traffic?" text="Get a free E-commerce SEO audit and start ranking your products on Google." />
    </main>
  </Layout>
);

export default EcommerceSeoKarachi;
