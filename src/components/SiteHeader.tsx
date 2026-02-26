import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

const serviceCategories = [
  {
    label: "Core SEO",
    links: [
      { href: "/seo-services", label: "All SEO Services" },
      { href: "/technical-seo", label: "Technical SEO" },
      { href: "/on-page-seo", label: "On-Page SEO" },
      { href: "/off-page-seo", label: "Off-Page SEO" },
      { href: "/seo-audit", label: "SEO Audit" },
      { href: "/keyword-research", label: "Keyword Research" },
      { href: "/content-strategy-seo", label: "Content Strategy" },
    ],
  },
  {
    label: "Specialized SEO",
    links: [
      { href: "/local-seo-karachi", label: "Local SEO" },
      { href: "/ecommerce-seo-karachi", label: "E-commerce SEO" },
      { href: "/international-seo", label: "International SEO" },
      { href: "/website-migration-seo", label: "Website Migration" },
      { href: "/youtube-seo", label: "YouTube SEO" },
      { href: "/ai-search-optimization", label: "AI Search (GEO)" },
    ],
  },
  {
    label: "Platforms",
    links: [
      { href: "/wordpress-seo", label: "WordPress SEO" },
      { href: "/shopify-seo", label: "Shopify SEO" },
      { href: "/woocommerce-seo", label: "WooCommerce SEO" },
      { href: "/magento-seo", label: "Magento SEO" },
      { href: "/webflow-seo", label: "Webflow SEO" },
      { href: "/wix-seo", label: "Wix SEO" },
      { href: "/squarespace-seo", label: "Squarespace SEO" },
      { href: "/drupal-seo", label: "Drupal SEO" },
      { href: "/joomla-seo", label: "Joomla SEO" },
      { href: "/shopify-ecommerce-seo", label: "Shopify E-commerce" },
      { href: "/bigcommerce-seo", label: "BigCommerce SEO" },
      { href: "/opencart-seo", label: "OpenCart SEO" },
    ],
  },
  {
    label: "Industry SEO",
    links: [
      { href: "/seo-for-startups", label: "SEO for Startups" },
      { href: "/saas-seo", label: "SaaS SEO" },
      { href: "/real-estate-seo", label: "Real Estate SEO" },
      { href: "/law-firm-seo", label: "Law Firm SEO" },
      { href: "/dental-seo", label: "Dental SEO" },
      { href: "/plumber-seo", label: "Plumber SEO" },
      { href: "/hvac-seo", label: "HVAC SEO" },
      { href: "/ecommerce-seo", label: "eCommerce SEO" },
      { href: "/manufacturing-seo", label: "Manufacturing SEO" },
      { href: "/restaurant-seo", label: "Restaurant SEO" },
      { href: "/accounting-firm-seo", label: "Accounting Firm SEO" },
    ],
  },
  {
    label: "Locations",
    links: [
      { href: "/seo-agency-karachi", label: "SEO Agency Karachi" },
      { href: "/seo-agency-lahore", label: "SEO Agency Lahore" },
      { href: "/seo-agency-islamabad", label: "SEO Agency Islamabad" },
      { href: "/seo-agency-rawalpindi", label: "SEO Agency Rawalpindi" },
      { href: "/seo-agency-faisalabad", label: "SEO Agency Faisalabad" },
      { href: "/seo-agency-multan", label: "SEO Agency Multan" },
      { href: "/seo-agency-gujranwala", label: "SEO Agency Gujranwala" },
      { href: "/seo-agency-hyderabad", label: "SEO Agency Hyderabad" },
      { href: "/seo-agency-peshawar", label: "SEO Agency Peshawar" },
      { href: "/seo-agency-quetta", label: "SEO Agency Quetta" },
    ],
  },
  {
    label: "Consulting",
    links: [
      { href: "/seo-consulting", label: "SEO Consulting" },
      { href: "/white-label-seo", label: "White Label SEO" },
      { href: "/seo-packages", label: "SEO Packages" },
    ],
  },
];

const allServiceHrefs = serviceCategories.flatMap((c) => c.links.map((l) => l.href));

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].label);
  const [openMobileCategory, setOpenMobileCategory] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLLIElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isServicePage = allServiceHrefs.includes(location.pathname);

  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setOpenMobileCategory(null);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => setServicesOpen(false), 200);
  };

  const activeCat = serviceCategories.find((c) => c.label === activeCategory) || serviceCategories[0];

  const linkClass = (active: boolean) =>
    `px-3 py-2 text-sm font-medium rounded-md transition-colors ${active ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`;

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="section-container flex h-16 items-center justify-between" aria-label="Main navigation">
        <Link to="/" className="text-xl font-bold tracking-tight text-heading" aria-label="Naveed Ganatra - SEO Expert in Karachi">
          Naveed Ganatra
        </Link>

        {/* ── Desktop nav ── */}
        <ul className="hidden lg:flex items-center gap-1">
          <li><Link to="/" className={linkClass(location.pathname === "/")}>Home</Link></li>
          <li><Link to="/about" className={linkClass(location.pathname === "/about")}>About</Link></li>

          {/* Two-panel mega menu */}
          <li
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`inline-flex items-center gap-1 ${linkClass(isServicePage)}`}
            >
              Our Services
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full mt-1 flex w-[620px] h-[420px] rounded-xl border bg-background shadow-xl z-50 overflow-hidden">
                {/* Left panel – categories */}
                <div className="w-[180px] border-r bg-muted/30 py-3">
                  {serviceCategories.map((cat) => (
                    <button
                      key={cat.label}
                      onMouseEnter={() => setActiveCategory(cat.label)}
                      className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                        activeCategory === cat.label
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {cat.label}
                      <ChevronRight className="h-3.5 w-3.5 opacity-50" />
                    </button>
                  ))}
                </div>

                {/* Right panel – links in columns */}
                <div className="flex-1 py-3 px-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-2">
                    {activeCat.label}
                  </p>
                  <ul className="[columns:2] [column-gap:0.5rem]">
                    {activeCat.links.map((link) => (
                      <li key={link.href} className="break-inside-avoid">
                        <Link
                          to={link.href}
                          className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                            location.pathname === link.href
                              ? "text-primary bg-primary/10 font-medium"
                              : "text-foreground hover:bg-secondary"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </li>

          <li><Link to="/blog" className={linkClass(location.pathname.startsWith("/blog"))}>Blog</Link></li>
          <li><Link to="/case-studies" className={linkClass(location.pathname === "/case-studies")}>Case Studies</Link></li>
          <li><Link to="/contact" className={linkClass(location.pathname === "/contact")}>Hire Me</Link></li>
          <li>
            <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="ml-2 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
              Free SEO Audit
            </a>
          </li>
        </ul>

        {/* ── Mobile toggle ── */}
        <button className="lg:hidden p-2 rounded-md hover:bg-secondary" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* ── Mobile nav ── */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-background max-h-[80vh] overflow-y-auto">
          <ul className="section-container py-4 space-y-1">
            <li><Link to="/" onClick={() => setMobileOpen(false)} className={`block ${linkClass(location.pathname === "/")}`}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMobileOpen(false)} className={`block ${linkClass(location.pathname === "/about")}`}>About</Link></li>

            <li>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`w-full flex items-center justify-between ${linkClass(isServicePage)}`}
              >
                Our Services
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="mt-1 ml-2 space-y-1">
                  {serviceCategories.map((cat) => (
                    <div key={cat.label}>
                      <button
                        onClick={() => setOpenMobileCategory(openMobileCategory === cat.label ? null : cat.label)}
                        className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:bg-secondary rounded-md"
                      >
                        {cat.label}
                        <ChevronRight className={`h-3 w-3 transition-transform ${openMobileCategory === cat.label ? "rotate-90" : ""}`} />
                      </button>
                      {openMobileCategory === cat.label && (
                        <ul className="ml-3 space-y-0.5">
                          {cat.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                to={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={`block px-3 py-1.5 text-sm rounded-md transition-colors ${
                                  location.pathname === link.href
                                    ? "text-primary bg-primary/10 font-medium"
                                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                                }`}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </li>

            <li><Link to="/blog" onClick={() => setMobileOpen(false)} className={`block ${linkClass(location.pathname.startsWith("/blog"))}`}>Blog</Link></li>
            <li><Link to="/case-studies" onClick={() => setMobileOpen(false)} className={`block ${linkClass(location.pathname === "/case-studies")}`}>Case Studies</Link></li>
            <li><Link to="/contact" onClick={() => setMobileOpen(false)} className={`block ${linkClass(location.pathname === "/contact")}`}>Hire Me</Link></li>
            <li>
              <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="mt-2 block rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground">
                Free SEO Audit
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
