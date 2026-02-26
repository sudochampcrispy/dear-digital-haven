import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { personSchema, organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import LeadGenForm from "@/components/LeadGenForm";

const contactBreadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "Hire Me", url: "https://seoexpertinkarachi.com/contact" },
]);

const contactWebPage = buildWebPage({
  name: "Hire an SEO Consultant in Karachi",
  description: "Contact Naveed Ganatra for a free SEO audit. WhatsApp +92 323 2877850.",
  url: "https://seoexpertinkarachi.com/contact",
});

const Contact = () => (
  <Layout>
    <SeoHead
      title="Hire an SEO Consultant in Karachi - Contact Naveed Ganatra"
      description="Ready to grow your organic traffic? Contact Naveed Ganatra, SEO expert in Karachi, for a free SEO audit. WhatsApp +92 323 2877850 or email info@seoexpertinkarachi.com."
      canonical="https://seoexpertinkarachi.com/contact"
    />
    <JsonLd data={personSchema} />
    <JsonLd data={organizationSchema} />
    <JsonLd data={contactBreadcrumb} />
    <JsonLd data={contactWebPage} />

    <main>
      {/* Hero */}
      <section className="section-padding surface-sunken" aria-label="Contact hero">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Contact</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Hire an SEO Consultant
            </h1>
            <p className="text-lg text-body max-w-2xl mx-auto">
              Ready to dominate Google rankings in Karachi? Get in touch for a free SEO audit and a personalized strategy built around your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options — centered */}
      <section className="section-padding" aria-label="Contact methods">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <a
              href="https://wa.me/923232877850"
              target="_blank"
              rel="noopener noreferrer"
              className="metric-card text-center group"
            >
              <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3" />
              <h2 className="font-semibold text-heading mb-1 group-hover:text-primary transition-colors">WhatsApp</h2>
              <p className="text-sm text-body">+92 323 2877850</p>
              <p className="text-xs text-primary mt-2 font-medium">Fastest response →</p>
            </a>
            <a
              href="tel:+923232877850"
              className="metric-card text-center group"
            >
              <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
              <h2 className="font-semibold text-heading mb-1 group-hover:text-primary transition-colors">Phone</h2>
              <p className="text-sm text-body">+92 323 2877850</p>
            </a>
            <a
              href="mailto:info@seoexpertinkarachi.com"
              className="metric-card text-center group"
            >
              <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
              <h2 className="font-semibold text-heading mb-1 group-hover:text-primary transition-colors">Email</h2>
              <p className="text-sm text-body break-all">info@seoexpertinkarachi.com</p>
            </a>
            <div className="metric-card text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <h2 className="font-semibold text-heading mb-1">Location</h2>
              <p className="text-sm text-body">Sharfabad, Jamshed Town, Karachi, Pakistan</p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding surface-sunken" aria-label="What to expect">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What Happens When You Reach Out</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="metric-card">
                <span className="text-sm font-mono font-bold text-primary">01</span>
                <h3 className="font-semibold text-heading mt-2 mb-1">Free SEO Audit</h3>
                <p className="text-sm text-body">We analyze your website's technical health, content gaps, and competitive positioning — completely free.</p>
              </div>
              <div className="metric-card">
                <span className="text-sm font-mono font-bold text-primary">02</span>
                <h3 className="font-semibold text-heading mt-2 mb-1">Strategy Discussion</h3>
                <p className="text-sm text-body">We discuss your business goals, target keywords, and the SEO approach that makes sense for your industry and budget.</p>
              </div>
              <div className="metric-card">
                <span className="text-sm font-mono font-bold text-primary">03</span>
                <h3 className="font-semibold text-heading mt-2 mb-1">Custom Proposal</h3>
                <p className="text-sm text-body">You receive a detailed proposal with clear deliverables, timelines, and expected outcomes — no generic templates.</p>
              </div>
              <div className="metric-card">
                <span className="text-sm font-mono font-bold text-primary">04</span>
                <h3 className="font-semibold text-heading mt-2 mb-1">Execution & Reporting</h3>
                <p className="text-sm text-body">Once approved, we begin work immediately with monthly progress reports tracking 15+ KPIs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="section-padding" aria-label="Why work with us">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Businesses Trust Naveed Ganatra</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="metric-card text-center">
                <p className="stat-number text-3xl">300%+</p>
                <p className="text-xs text-subtle mt-1">Average traffic growth</p>
              </div>
              <div className="metric-card text-center">
                <p className="stat-number text-3xl">50+</p>
                <p className="text-xs text-subtle mt-1">Campaigns delivered</p>
              </div>
              <div className="metric-card text-center">
                <p className="stat-number text-3xl">94%</p>
                <p className="text-xs text-subtle mt-1">Client ranking retention during HCU</p>
              </div>
              <div className="metric-card text-center">
                <p className="stat-number text-3xl">10+</p>
                <p className="text-xs text-subtle mt-1">Years of experience</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
                View Case Studies
              </Link>
              <Link to="/seo-services" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
                Explore Services
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
                About Naveed
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Gen Form */}
      <section className="section-padding" aria-label="Get a free SEO quote">
        <div className="section-container">
          <div className="max-w-xl mx-auto">
            <LeadGenForm />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary section-padding" aria-label="Final call to action">
        <div className="section-container text-center">
          <h2 className="text-2xl sm:text-3xl font-bold !text-primary-foreground mb-4">
            Let's Grow Your Organic Traffic
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Schedule a free SEO audit today. No commitments, no generic pitches — just a data-backed conversation about your growth potential.
          </p>
          <a
            href="https://wa.me/923232877850"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-background px-8 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background/90"
          >
            WhatsApp Us Now →
          </a>
        </div>
      </section>
    </main>
  </Layout>
);

export default Contact;
