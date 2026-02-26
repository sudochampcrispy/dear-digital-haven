import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import LeadGenForm from "@/components/LeadGenForm";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => (
  <Layout>
    <SeoHead
      title="Contact SEO Expert in Karachi — Naveed Ganatra"
      description="Get in touch with Naveed Ganatra for a free SEO consultation. Fill out the form or reach out via WhatsApp for personalized SEO strategies."
      canonical="https://seoexpertinkarachi.com/contact"
    />
    <main>
      <section className="section-padding surface-sunken" aria-label="Contact">
        <div className="section-container">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-body max-w-2xl mb-10">
            Ready to grow your organic traffic? Fill out the form below and I'll get back to you within 24 hours with a personalized SEO strategy.
          </p>
          <div className="grid lg:grid-cols-2 gap-10">
            <LeadGenForm />
            <div className="space-y-6">
              <div className="metric-card flex items-start gap-4">
                <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-heading mb-1">WhatsApp</h3>
                  <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-primary/80 transition-colors">
                    +92 323 2877850
                  </a>
                </div>
              </div>
              <div className="metric-card flex items-start gap-4">
                <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-heading mb-1">Email</h3>
                  <a href="mailto:info@seoexpertinkarachi.com" className="text-sm text-primary hover:text-primary/80 transition-colors">
                    info@seoexpertinkarachi.com
                  </a>
                </div>
              </div>
              <div className="metric-card flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-heading mb-1">Location</h3>
                  <p className="text-sm text-body">Karachi, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </Layout>
);

export default Contact;
