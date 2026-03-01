import { Link } from "react-router-dom";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import LeadGenForm from "@/components/LeadGenForm";

export interface IslamabadAreaPageProps {
  area: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  heroP1: string;
  heroP2: string;
  whyH2: string;
  whyParagraphs: string[];
  services: { title: string; desc: string }[];
  faqData: { q: string; a: string }[];
  nearbyAreas: { name: string; link: string }[];
}

const IslamabadAreaPage = ({
  area, slug, metaTitle, metaDescription, heroSubtitle, heroP1, heroP2,
  whyH2, whyParagraphs, services, faqData, nearbyAreas,
}: IslamabadAreaPageProps) => {
  const canonical = `https://seoexpertinkarachi.com/seo-agency-islamabad/${slug}`;
  const breadcrumb = buildBreadcrumb([
    { name: "Home", url: "https://seoexpertinkarachi.com/" },
    { name: "SEO Agency Islamabad", url: "https://seoexpertinkarachi.com/seo-agency-islamabad" },
    { name: `SEO Agency ${area}`, url: canonical },
  ]);
  const webPage = buildWebPage({ name: metaTitle, description: metaDescription, url: canonical });
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    name: `SEO Agency ${area}`,
    description: metaDescription,
    provider: { "@type": "Organization", name: "Naveed Ganatra SEO Agency", url: "https://seoexpertinkarachi.com" },
    areaServed: { "@type": "Place", name: `${area}, Islamabad`, containedInPlace: { "@type": "City", name: "Islamabad" } },
    serviceType: "Search Engine Optimization",
  };
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqData.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <Layout>
      <SeoHead title={metaTitle} description={metaDescription} canonical={canonical} />
      <JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={serviceSchema} /><JsonLd data={faqSchema} />
      <main>
        <section className="section-padding surface-sunken" aria-label="Hero">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">SEO Agency · {area}, Islamabad</p>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                  SEO Agency in {area} <span className="block mt-1">{heroSubtitle}</span>
                </h1>
                <p className="text-lg text-body mb-4">{heroP1}</p>
                <p className="text-base text-body mb-8">{heroP2}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Get Free SEO Consultation <ArrowRight className="h-4 w-4" /></a>
                  <Link to="/seo-agency-islamabad" className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">All Islamabad SEO Services</Link>
                </div>
              </div>
              <LeadGenForm />
            </div>
          </div>
        </section>

        <section className="section-padding" aria-label={whyH2}>
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">{whyH2}</h2>
              <div className="space-y-4 text-body">
                {whyParagraphs.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding surface-sunken" aria-label="SEO services">
          <div className="section-container">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">SEO Services We Deliver in {area}</h2>
            <p className="text-body max-w-3xl mx-auto mb-10 text-center">Our <Link to="/seo-agency-islamabad" className="text-primary hover:underline">Islamabad SEO agency</Link> provides targeted optimization strategies designed for {area}'s unique competitive landscape.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div key={s.title} className="metric-card">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <h3 className="font-semibold text-heading">{s.title}</h3>
                  </div>
                  <p className="text-sm text-body">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding" aria-label="FAQ">
          <div className="section-container">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Frequently Asked Questions — SEO in {area}</h2>
            <div className="max-w-3xl mx-auto space-y-4 mt-10">
              {faqData.map((f) => (
                <details key={f.q} className="group metric-card">
                  <summary className="cursor-pointer font-semibold text-heading list-none flex items-center justify-between">{f.q}<span className="ml-4 text-primary text-xl group-open:rotate-45 transition-transform shrink-0">+</span></summary>
                  <p className="mt-3 text-sm text-body leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding surface-sunken" aria-label="Nearby areas">
          <div className="section-container">
            <div className="text-center max-w-4xl mx-auto mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">SEO Services in Other Islamabad Areas</h2>
              <p className="text-body">We provide dedicated SEO services across all major Islamabad sectors and localities.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {nearbyAreas.map((a) => (
                <Link key={a.name} to={a.link} className="inline-flex items-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-heading hover:text-primary transition-colors">
                  <MapPin className="h-3.5 w-3.5 text-primary mr-2" />{a.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner heading={`Ready to Dominate Search in ${area}?`} text={`Get a free SEO consultation from Naveed Ganatra SEO Agency. Discover how our data-driven strategies deliver measurable organic growth for businesses in ${area}, Islamabad.`} />
      </main>
    </Layout>
  );
};

export default IslamabadAreaPage;
