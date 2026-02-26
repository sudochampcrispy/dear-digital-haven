import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { personSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";

const aboutBreadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "About", url: "https://seoexpertinkarachi.com/about" },
]);

const aboutWebPage = buildWebPage({
  name: "About Naveed Ganatra - SEO Expert in Karachi",
  description: "Learn about Naveed Ganatra, a Google-certified SEO expert in Karachi with 10+ years of experience.",
  url: "https://seoexpertinkarachi.com/about",
});

const milestones = [
  { year: "2013–2018", event: "Mass Communication, Biztek University" },
  { year: "2018–2022", event: "SEO campaigns across USA, Dubai, and Pakistan" },
  { year: "2022–Present", event: "Lead SEO Strategist at COLAB PK — serving Honda, NEOM, Federal Tax Authority" },
  { year: "2023", event: "Google AdWords PPC & Digital Marketing Fundamentals certified" },
  { year: "2023", event: "Published contributor to US News" },
  { year: "2024", event: "Featured in Dawn.com" },
  { year: "2025", event: "Launched ProSEOToolkit.com — free SEO tools for the community" },
];

const About = () => (
  <Layout>
    <SeoHead
      title="About Naveed Ganatra - SEO Expert in Karachi | 10+ Years Experience"
      description="Learn about Naveed Ganatra, a Google-certified SEO expert in Karachi with 10+ years of experience, 50+ campaigns, and proven 300%+ organic traffic growth across 27+ industries."
      canonical="https://seoexpertinkarachi.com/about"
    />
    <JsonLd data={personSchema} />
    <JsonLd data={aboutBreadcrumb} />
    <JsonLd data={aboutWebPage} />

    <main>
      {/* Hero */}
      <section className="section-padding surface-sunken" aria-label="About hero">
        <div className="section-container">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">About</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Naveed Ganatra
            </h1>
            <p className="text-lg sm:text-xl text-body">
              Google-certified SEO expert in Karachi with 10+ years of experience delivering measurable organic growth for businesses across 27+ industries in Pakistan, the USA, and the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding" aria-label="SEO philosophy">
        <div className="section-container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Our SEO Philosophy</h2>
            <p className="text-body mb-4">
              Beyond keywords — we optimize the entire user experience for true ranking success. Our methodology is rooted in <strong>semantic SEO</strong>, <strong>entity-based optimization</strong>, and <strong>topical authority building</strong>. Every campaign we run is engineered to create lasting, algorithm-resilient rankings.
            </p>
            <p className="text-body mb-4">
              We don't chase shortcuts. Our approach combines technical excellence with deep content strategy, ensuring your website earns Google's trust through genuine expertise, authority, and trustworthiness — the E-E-A-T signals that drive modern search.
            </p>
            <p className="text-body">
              Having worked across three continents and served clients ranging from local Karachi businesses to enterprise brands like Honda and NEOM, we bring a unique blend of global perspective and hyperlocal expertise to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Experience & Methodology */}
      <section className="section-padding surface-sunken" aria-label="Experience">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Experience & Track Record</h2>
          <p className="text-body max-w-3xl mb-10">Key milestones in our SEO journey.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {milestones.map((m, i) => (
              <div key={i} className="metric-card flex gap-4 items-start">
                <span className="text-xs font-mono font-bold text-primary whitespace-nowrap mt-1 min-w-[100px]">
                  {m.year}
                </span>
                <p className="text-sm text-body">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding" aria-label="Credentials">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-10">Credentials & Recognition</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="metric-card">
              <h3 className="font-semibold text-heading mb-2">Certifications</h3>
              <p className="text-sm text-body">Google AdWords PPC, Digital Marketing Fundamentals — Google Skillshop, 2023</p>
            </div>
            <div className="metric-card">
              <h3 className="font-semibold text-heading mb-2">Publications</h3>
              <p className="text-sm text-body">Contributor to US News (2023), featured in Dawn.com (2024)</p>
            </div>
            <div className="metric-card">
              <h3 className="font-semibold text-heading mb-2">Tools & Community</h3>
              <p className="text-sm text-body">
                Creator of{" "}
                <a href="https://proseotoolkit.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                  ProSEOToolkit.com
                </a>{" "}
                — free SEO tools used by the community
              </p>
            </div>
            <div className="metric-card">
              <h3 className="font-semibold text-heading mb-2">YouTube Channel</h3>
              <p className="text-sm text-body">
                2,000+ subscribers with weekly SEO tutorials, case studies, and Q&A sessions.{" "}
                <a href="https://www.youtube.com/@naveedganatra" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                  Subscribe →
                </a>
              </p>
            </div>
            <div className="metric-card">
              <h3 className="font-semibold text-heading mb-2">Enterprise Clients</h3>
              <p className="text-sm text-body">Honda, NEOM, Federal Tax Authority, and 50+ campaigns across 27+ industries</p>
            </div>
            <div className="metric-card">
              <h3 className="font-semibold text-heading mb-2">Client Results</h3>
              <p className="text-sm text-body">"Naveed's strategies delivered 420% traffic growth for our logistics firm" — Abdul Samad, MEPL INTL</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal linking CTA */}
      <section className="section-padding surface-sunken" aria-label="Next steps">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold mb-4">Explore Our Work</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/seo-services" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
              View SEO Services
            </Link>
            <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
              See Case Studies
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  </Layout>
);

export default About;
