import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="border-t surface-sunken">
    <div className="section-container section-padding">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-lg font-bold text-heading">Naveed Ganatra</p>
          <p className="mt-2 text-sm text-body max-w-xs">
            Google-certified SEO expert in Karachi with 10+ years of experience delivering measurable organic growth.
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Footer navigation">
          <p className="text-sm font-semibold text-heading mb-3">Pages</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-subtle hover:text-foreground transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-subtle hover:text-foreground transition-colors">About</Link></li>
            <li><Link to="/seo-services" className="text-subtle hover:text-foreground transition-colors">SEO Services</Link></li>
            <li><Link to="/local-seo-karachi" className="text-subtle hover:text-foreground transition-colors">Local SEO Karachi</Link></li>
            <li><Link to="/case-studies" className="text-subtle hover:text-foreground transition-colors">Case Studies</Link></li>
            <li><Link to="/contact" className="text-subtle hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label="Services">
          <p className="text-sm font-semibold text-heading mb-3">Services</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/seo-services#technical-seo" className="text-subtle hover:text-foreground transition-colors">Technical SEO</Link></li>
            <li><Link to="/seo-services#local-seo" className="text-subtle hover:text-foreground transition-colors">Local SEO</Link></li>
            <li><Link to="/seo-services#semantic-content" className="text-subtle hover:text-foreground transition-colors">Semantic Content</Link></li>
            <li><Link to="/seo-services#link-building" className="text-subtle hover:text-foreground transition-colors">Link Building</Link></li>
            <li><Link to="/seo-services#ecommerce-seo" className="text-subtle hover:text-foreground transition-colors">E-commerce SEO</Link></li>
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
