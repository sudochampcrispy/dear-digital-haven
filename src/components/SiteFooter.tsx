import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="border-t surface-sunken">
    <div className="section-container section-padding">
      <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {/* Brand */}
        <div className="col-span-2 md:col-span-3 lg:col-span-1">
          <p className="text-lg font-bold text-heading">Naveed Ganatra</p>
          <p className="mt-2 text-sm text-body max-w-xs">
            Google-certified SEO expert in Karachi with 10+ years of experience delivering measurable organic growth.
          </p>
          <a
            href="https://wa.me/923232877850"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-4 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
          >
            WhatsApp →
          </a>
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
            <li><Link to="/ai-search-optimization" className="text-subtle hover:text-foreground transition-colors">AI Search Optimization</Link></li>
            <li><Link to="/youtube-seo" className="text-subtle hover:text-foreground transition-colors">YouTube SEO</Link></li>
          </ul>
        </nav>

        {/* Platform SEO */}
        <nav aria-label="Platform SEO">
          <p className="text-sm font-semibold text-heading mb-3">Platform SEO</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/wordpress-seo" className="text-subtle hover:text-foreground transition-colors">WordPress SEO</Link></li>
            <li><Link to="/shopify-seo" className="text-subtle hover:text-foreground transition-colors">Shopify SEO</Link></li>
            <li><Link to="/woocommerce-seo" className="text-subtle hover:text-foreground transition-colors">WooCommerce SEO</Link></li>
            <li><Link to="/wix-seo" className="text-subtle hover:text-foreground transition-colors">Wix SEO</Link></li>
            <li><Link to="/webflow-seo" className="text-subtle hover:text-foreground transition-colors">Webflow SEO</Link></li>
            <li><Link to="/squarespace-seo" className="text-subtle hover:text-foreground transition-colors">Squarespace SEO</Link></li>
            <li><Link to="/magento-seo" className="text-subtle hover:text-foreground transition-colors">Magento SEO</Link></li>
            <li><Link to="/drupal-seo" className="text-subtle hover:text-foreground transition-colors">Drupal SEO</Link></li>
            <li><Link to="/bigcommerce-seo" className="text-subtle hover:text-foreground transition-colors">BigCommerce SEO</Link></li>
            <li><Link to="/opencart-seo" className="text-subtle hover:text-foreground transition-colors">OpenCart SEO</Link></li>
          </ul>
        </nav>

        {/* Industry SEO */}
        <nav aria-label="Industry SEO">
          <p className="text-sm font-semibold text-heading mb-3">Industry SEO</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/real-estate-seo" className="text-subtle hover:text-foreground transition-colors">Real Estate SEO</Link></li>
            <li><Link to="/dental-seo" className="text-subtle hover:text-foreground transition-colors">Dental SEO</Link></li>
            <li><Link to="/law-firm-seo" className="text-subtle hover:text-foreground transition-colors">Law Firm SEO</Link></li>
            <li><Link to="/saas-seo" className="text-subtle hover:text-foreground transition-colors">SaaS SEO</Link></li>
            <li><Link to="/restaurant-seo" className="text-subtle hover:text-foreground transition-colors">Restaurant SEO</Link></li>
            <li><Link to="/manufacturing-seo" className="text-subtle hover:text-foreground transition-colors">Manufacturing SEO</Link></li>
            <li><Link to="/accounting-firm-seo" className="text-subtle hover:text-foreground transition-colors">Accounting Firm SEO</Link></li>
            <li><Link to="/plumber-seo" className="text-subtle hover:text-foreground transition-colors">Plumber SEO</Link></li>
            <li><Link to="/hvac-seo" className="text-subtle hover:text-foreground transition-colors">HVAC SEO</Link></li>
            <li><Link to="/seo-for-startups" className="text-subtle hover:text-foreground transition-colors">SEO for Startups</Link></li>
          </ul>
        </nav>

        {/* Company & Locations */}
        <nav aria-label="Company and Locations">
          <p className="text-sm font-semibold text-heading mb-3">Company</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="text-subtle hover:text-foreground transition-colors">About</Link></li>
            <li><Link to="/seo-services" className="text-subtle hover:text-foreground transition-colors">SEO Services</Link></li>
            <li><Link to="/seo-packages" className="text-subtle hover:text-foreground transition-colors">SEO Packages</Link></li>
            <li><Link to="/case-studies" className="text-subtle hover:text-foreground transition-colors">Case Studies</Link></li>
            <li><Link to="/blog" className="text-subtle hover:text-foreground transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="text-subtle hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
          <p className="text-sm font-semibold text-heading mb-3 mt-5">Locations</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/seo-agency-karachi" className="text-subtle hover:text-foreground transition-colors">Karachi</Link></li>
            <li><Link to="/seo-agency-lahore" className="text-subtle hover:text-foreground transition-colors">Lahore</Link></li>
            <li><Link to="/seo-agency-islamabad" className="text-subtle hover:text-foreground transition-colors">Islamabad</Link></li>
            <li><Link to="/seo-agency-rawalpindi" className="text-subtle hover:text-foreground transition-colors">Rawalpindi</Link></li>
            <li><Link to="/seo-agency-faisalabad" className="text-subtle hover:text-foreground transition-colors">Faisalabad</Link></li>
            <li><Link to="/seo-agency-multan" className="text-subtle hover:text-foreground transition-colors">Multan</Link></li>
            <li><Link to="/seo-agency-peshawar" className="text-subtle hover:text-foreground transition-colors">Peshawar</Link></li>
            <li><Link to="/seo-agency-quetta" className="text-subtle hover:text-foreground transition-colors">Quetta</Link></li>
          </ul>
        </nav>
      </div>

      <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-subtle">
        <p>© {new Date().getFullYear()} Naveed Ganatra — SEO Expert in Karachi. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="tel:+923232877850" className="hover:text-foreground transition-colors">+92 323 2877850</a>
          <span className="text-border">·</span>
          <a href="mailto:info@seoexpertinkarachi.com" className="hover:text-foreground transition-colors">info@seoexpertinkarachi.com</a>
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
