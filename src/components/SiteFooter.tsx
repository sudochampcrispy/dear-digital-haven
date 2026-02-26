import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="border-t surface-sunken">
    <div className="section-container section-padding">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-lg font-bold text-heading">Naveed Ganatra</p>
          <p className="mt-2 text-sm text-body max-w-xs">
            Google-certified SEO expert in Karachi with 10+ years of experience delivering measurable organic growth.
          </p>
        </div>

        {/* SEO Services */}
        <nav aria-label="SEO Services">
          <p className="text-sm font-semibold text-heading mb-3">SEO Services</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/technical-seo" className="text-subtle hover:text-foreground transition-colors">Technical SEO</Link></li>
            <li><Link to="/on-page-seo" className="text-subtle hover:text-foreground transition-colors">On-Page SEO</Link></li>
            <li><Link to="/off-page-seo" className="text-subtle hover:text-foreground transition-colors">Off-Page SEO</Link></li>
            <li><Link to="/local-seo-karachi" className="text-subtle hover:text-foreground transition-colors">Local SEO Karachi</Link></li>
            <li><Link to="/ecommerce-seo" className="text-subtle hover:text-foreground transition-colors">E-commerce SEO</Link></li>
            <li><Link to="/keyword-research" className="text-subtle hover:text-foreground transition-colors">Keyword Research</Link></li>
            <li><Link to="/seo-audit" className="text-subtle hover:text-foreground transition-colors">SEO Audit</Link></li>
            <li><Link to="/content-strategy-seo" className="text-subtle hover:text-foreground transition-colors">Content Strategy</Link></li>
          </ul>
        </nav>

        {/* Platform & Industry */}
        <nav aria-label="Platform and Industry SEO">
          <p className="text-sm font-semibold text-heading mb-3">Platform SEO</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/wordpress-seo" className="text-subtle hover:text-foreground transition-colors">WordPress SEO</Link></li>
            <li><Link to="/shopify-seo" className="text-subtle hover:text-foreground transition-colors">Shopify SEO</Link></li>
            <li><Link to="/woocommerce-seo" className="text-subtle hover:text-foreground transition-colors">WooCommerce SEO</Link></li>
            <li><Link to="/wix-seo" className="text-subtle hover:text-foreground transition-colors">Wix SEO</Link></li>
            <li><Link to="/webflow-seo" className="text-subtle hover:text-foreground transition-colors">Webflow SEO</Link></li>
          </ul>
          <p className="text-sm font-semibold text-heading mb-3 mt-5">Industry SEO</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/real-estate-seo" className="text-subtle hover:text-foreground transition-colors">Real Estate SEO</Link></li>
            <li><Link to="/dental-seo" className="text-subtle hover:text-foreground transition-colors">Dental SEO</Link></li>
            <li><Link to="/law-firm-seo" className="text-subtle hover:text-foreground transition-colors">Law Firm SEO</Link></li>
            <li><Link to="/saas-seo" className="text-subtle hover:text-foreground transition-colors">SaaS SEO</Link></li>
          </ul>
        </nav>

        {/* Pages & Cities */}
        <nav aria-label="Pages and Locations">
          <p className="text-sm font-semibold text-heading mb-3">Company</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="text-subtle hover:text-foreground transition-colors">About</Link></li>
            <li><Link to="/case-studies" className="text-subtle hover:text-foreground transition-colors">Case Studies</Link></li>
            <li><Link to="/seo-packages" className="text-subtle hover:text-foreground transition-colors">SEO Packages</Link></li>
            <li><Link to="/blog" className="text-subtle hover:text-foreground transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="text-subtle hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
          <p className="text-sm font-semibold text-heading mb-3 mt-5">Locations</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/seo-agency-karachi" className="text-subtle hover:text-foreground transition-colors">SEO Agency Karachi</Link></li>
            <li><Link to="/seo-agency-lahore" className="text-subtle hover:text-foreground transition-colors">SEO Agency Lahore</Link></li>
            <li><Link to="/seo-agency-islamabad" className="text-subtle hover:text-foreground transition-colors">SEO Agency Islamabad</Link></li>
            <li><Link to="/seo-agency-rawalpindi" className="text-subtle hover:text-foreground transition-colors">SEO Agency Rawalpindi</Link></li>
            <li><Link to="/seo-agency-faisalabad" className="text-subtle hover:text-foreground transition-colors">SEO Agency Faisalabad</Link></li>
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <p className="text-sm font-semibold text-heading mb-3">Contact</p>
          <ul className="space-y-2 text-sm">
            <li className="text-subtle">Sharfabad, Jamshed Town, Karachi</li>
            <li>
              <a href="tel:+923232877850" className="text-subtle hover:text-foreground transition-colors">
                +92 323 2877850
              </a>
            </li>
            <li>
              <a href="mailto:info@seoexpertinkarachi.com" className="text-subtle hover:text-foreground transition-colors">
                info@seoexpertinkarachi.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/923232877850"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                WhatsApp →
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t text-center text-xs text-subtle">
        <p>© {new Date().getFullYear()} Naveed Ganatra. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
