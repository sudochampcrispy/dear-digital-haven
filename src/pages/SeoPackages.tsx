import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";

const packagesBreadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Packages", url: "https://seoexpertinkarachi.com/seo-packages" },
]);

const packagesWebPage = buildWebPage({
  name: "Affordable SEO Packages in Karachi",
  description: "Explore transparent, results-driven SEO packages in Karachi starting from PKR 40,000/month.",
  url: "https://seoexpertinkarachi.com/seo-packages",
});

const packagesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "Person", name: "Naveed Ganatra" },
  areaServed: { "@type": "City", name: "Karachi" },
  serviceType: "SEO Packages",
  description:
    "Affordable SEO packages in Karachi designed for startups, SMEs, and enterprises. Transparent pricing with measurable deliverables by Naveed Ganatra.",
};

const packages = [
  {
    name: "SEO Starter",
    emoji: "🚀",
    price: "40,000",
    period: "PKR/month",
    ideal: "Startups & small businesses entering the digital space",
    features: [
      "5–10 page on-page optimization",
      "15 target keyword tracking",
      "Basic technical SEO audit & fixes",
      "Meta tags & heading optimization",
      "Google Business Profile setup",
      "Monthly analytics report",
      "Mobile responsiveness check",
      "Email support",
    ],
  },
  {
    name: "Growth Accelerator",
    emoji: "🌟",
    price: "70,000",
    period: "PKR/month",
    featured: true,
    ideal: "Growing businesses seeking competitive rankings",
    features: [
      "Up to 20 page optimization",
      "30 target keyword tracking",
      "Advanced technical SEO overhaul",
      "Content strategy & topic clusters",
      "Schema markup implementation",
      "Competitor gap analysis",
      "Backlink audit & acquisition plan",
      "Local SEO optimization",
      "Video SEO strategy",
      "Priority WhatsApp support",
    ],
  },
  {
    name: "Market Dominator",
    emoji: "🏆",
    price: "120,000",
    period: "PKR/month",
    ideal: "Established brands targeting market leadership",
    features: [
      "40+ page optimization",
      "Unlimited keyword tracking",
      "Full technical SEO overhaul",
      "AI-powered content strategy",
      "Enterprise-grade link building",
      "International SEO setup",
      "Advanced schema & rich results",
      "YouTube SEO optimization",
      "24/7 premium support",
      "Dedicated account manager",
    ],
  },
];

const whyPackages = [
  { title: "Transparent Deliverables", desc: "Every package comes with a detailed scope of work — no hidden charges, no vague promises. You know exactly what our team delivers each month." },
  { title: "Scalable Growth", desc: "Start with the package that fits your budget and scale up as your business grows. We design each tier to build upon the previous one seamlessly." },
  { title: "Data-Driven Reporting", desc: "Monthly reports tracking 15+ KPIs including organic traffic, keyword rankings, Core Web Vitals, and conversion metrics — all backed by Google Search Console data." },
  { title: "No Long-Term Contracts", desc: "We believe in earning your business every month. Our packages operate on a month-to-month basis with the flexibility to upgrade or adjust anytime." },
];

const process = [
  { step: "01", title: "Discovery & Audit", desc: "We conduct a comprehensive 100+ point SEO audit of your website to identify opportunities and technical issues that need immediate attention." },
  { step: "02", title: "Strategy & Roadmap", desc: "Based on our audit findings, we build a customized SEO roadmap with prioritized actions, target keywords, and content plans aligned to your business goals." },
  { step: "03", title: "Execution & Optimization", desc: "Our team implements technical fixes, optimizes content, builds quality backlinks, and continuously refines our strategy based on real-time performance data." },
  { step: "04", title: "Reporting & Scaling", desc: "We deliver detailed monthly reports with actionable insights and recommendations for scaling your organic growth further." },
];

const faqData = [
  { q: "Which SEO package is right for my business?", a: "The Starter package suits businesses new to SEO. Growth Accelerator is ideal for companies ready to compete aggressively. Market Dominator is for established brands seeking category leadership. Contact us for a free consultation to determine the best fit." },
  { q: "Can I customize an SEO package?", a: "Absolutely. Our packages serve as a starting framework. We tailor deliverables based on your industry, competition level, and specific business objectives." },
  { q: "How soon will I see results from SEO?", a: "Technical improvements show within 2–4 weeks. Meaningful ranking and traffic improvements typically appear within 3–6 months depending on your industry's competitiveness." },
  { q: "Do you offer one-time SEO audits?", a: "Yes. We offer standalone comprehensive SEO audits starting at PKR 25,000. This is ideal for businesses that want an expert assessment before committing to an ongoing package." },
  { q: "What industries do you work with?", a: "We have delivered results across 27+ industries including e-commerce, healthcare, logistics, real estate, education, legal services, and more." },
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

const SeoPackages = () => (
  <Layout>
    <SeoHead
      title="Affordable SEO Packages in Karachi - Pricing & Plans | Naveed Ganatra"
      description="Explore transparent, results-driven SEO packages in Karachi starting from PKR 40,000/month. Starter, Growth, and Enterprise plans with clear deliverables and monthly reporting."
      canonical="https://seoexpertinkarachi.com/seo-packages"
    />
    <JsonLd data={packagesSchema} />
    <JsonLd data={organizationSchema} />
    <JsonLd data={faqSchema} />
    <JsonLd data={packagesBreadcrumb} />
    <JsonLd data={packagesWebPage} />

    <main>
      {/* Hero */}
      <section className="section-padding surface-sunken" aria-label="SEO packages hero">
        <div className="section-container">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">SEO Packages</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Affordable SEO Packages in Karachi
            </h1>
            <p className="text-lg text-body">
              Transparent, results-driven SEO plans designed for businesses of every size. Each package includes clear deliverables, monthly reporting, and a dedicated focus on measurable organic growth — no hidden fees, no guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding" aria-label="SEO pricing plans">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`metric-card flex flex-col ${pkg.featured ? "ring-2 ring-primary" : ""}`}
              >
                {pkg.featured && (
                  <p className="text-xs font-semibold text-primary mb-2">MOST POPULAR</p>
                )}
                <h2 className="text-lg font-bold text-heading">
                  {pkg.emoji} {pkg.name}
                </h2>
                <p className="text-3xl font-bold text-primary mt-2">{pkg.price}</p>
                <p className="text-xs text-subtle mb-2">{pkg.period}</p>
                <p className="text-sm text-body mb-6 italic">{pkg.ideal}</p>
                <ul className="space-y-2 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-body">
                      <span className="text-primary">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/923232877850"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 block text-center rounded-md px-4 py-2.5 text-sm font-semibold transition-colors ${
                    pkg.featured
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border bg-background text-foreground hover:bg-secondary"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Packages */}
      <section className="section-padding surface-sunken" aria-label="Why choose our packages">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Why Businesses Choose Our SEO Packages</h2>
          <p className="text-body max-w-3xl mb-10">
            Our packages are built on transparency, accountability, and measurable results — the pillars that set us apart from generic SEO agencies in Karachi.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {whyPackages.map((item) => (
              <div key={item.title} className="metric-card">
                <h3 className="font-semibold text-heading mb-2">{item.title}</h3>
                <p className="text-sm text-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding" aria-label="Our SEO process">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">How We Deliver Results</h2>
          <p className="text-body max-w-3xl mb-10">
            Every package follows our proven four-step methodology, adapted to your business goals and competitive landscape.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Custom Solutions */}
      <section className="section-padding surface-sunken" aria-label="Custom SEO solutions">
        <div className="section-container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-4">Need a Custom SEO Solution?</h2>
            <p className="text-body mb-6">
              Our standard packages cover most business needs, but we understand that some projects require a tailored approach. Whether you're managing a large e-commerce catalog, targeting international markets, or need specialized industry SEO — we build custom strategies that align with your unique requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/923232877850"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Discuss Custom Package
              </a>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                View Our Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" aria-label="SEO packages FAQ">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-10">SEO Packages FAQs</h2>
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
          <h2 className="text-2xl font-bold mb-4">Explore Our Services</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/seo-services" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
              All SEO Services
            </Link>
            <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
              View Case Studies
            </Link>
          </div>
        </div>
      </aside>

      <CtaBanner heading="Ready to Invest in Your Growth?" text="Schedule a free consultation and find the perfect SEO package for your business." />
    </main>
  </Layout>
);

export default SeoPackages;
