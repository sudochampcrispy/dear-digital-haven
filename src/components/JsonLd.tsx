interface JsonLdProps {
  data: Record<string, unknown>;
}

const JsonLd = ({ data }: JsonLdProps) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default JsonLd;

/* ─── Person Schema ─── */
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Naveed Ganatra",
  jobTitle: "SEO Expert",
  url: "https://seoexpertinkarachi.com",
  sameAs: [
    "https://www.youtube.com/@naveedganatra",
    "https://pk.linkedin.com/in/naveed-ganatra-search-engine-optimization-specialist",
    "https://proseotoolkit.com",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressRegion: "Sindh",
    addressCountry: "PK",
    streetAddress: "Sharfabad, Jamshed Town",
    postalCode: "74800",
  },
  telephone: "+923232877850",
  email: "info@seoexpertinkarachi.com",
  knowsAbout: [
    "Search Engine Optimization",
    "Technical SEO",
    "Local SEO",
    "Semantic SEO",
    "Link Building",
    "E-commerce SEO",
    "SEO Audits",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Biztek University",
  },
};

/* ─── Organization / LocalBusiness Schema ─── */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://seoexpertinkarachi.com/#organization",
  name: "Naveed Ganatra - SEO Expert in Karachi",
  url: "https://seoexpertinkarachi.com",
  logo: "https://seoexpertinkarachi.com/favicon.png",
  image: "https://seoexpertinkarachi.com/favicon.png",
  telephone: "+923232877850",
  email: "info@seoexpertinkarachi.com",
  priceRange: "PKR 40,000 - PKR 200,000+",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sharfabad, Jamshed Town",
    addressLocality: "Karachi",
    addressRegion: "Sindh",
    addressCountry: "PK",
    postalCode: "74800",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 24.8607,
    longitude: 67.0011,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+923232877850",
    contactType: "customer service",
    availableLanguage: ["English", "Urdu"],
    areaServed: ["PK", "AE", "US"],
  },
  founder: { "@type": "Person", name: "Naveed Ganatra" },
  foundingDate: "2018",
  areaServed: [
    { "@type": "City", name: "Karachi" },
    { "@type": "Country", name: "Pakistan" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "United States" },
  ],
  serviceType: [
    "Technical SEO",
    "Local SEO",
    "On-Page SEO",
    "Off-Page SEO",
    "E-commerce SEO",
    "SEO Audits",
    "Website Migration SEO",
    "Semantic Content Strategy",
  ],
  sameAs: [
    "https://www.youtube.com/@naveedganatra",
    "https://pk.linkedin.com/in/naveed-ganatra-search-engine-optimization-specialist",
    "https://proseotoolkit.com",
  ],
};

/* ─── WebSite Schema ─── */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://seoexpertinkarachi.com/#website",
  name: "Naveed Ganatra - SEO Expert in Karachi",
  url: "https://seoexpertinkarachi.com",
  publisher: { "@id": "https://seoexpertinkarachi.com/#organization" },
  inLanguage: "en",
};

/* ─── SiteNavigationElement Schema ─── */
export const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  name: [
    "Home",
    "About",
    "SEO Services",
    "Local SEO",
    "E-commerce SEO",
    "SEO Packages",
    "Blog",
    "Case Studies",
    "Hire Me",
  ],
  url: [
    "https://seoexpertinkarachi.com/",
    "https://seoexpertinkarachi.com/about",
    "https://seoexpertinkarachi.com/seo-services",
    "https://seoexpertinkarachi.com/local-seo-karachi",
    "https://seoexpertinkarachi.com/ecommerce-seo-karachi",
    "https://seoexpertinkarachi.com/seo-packages",
    "https://seoexpertinkarachi.com/blog",
    "https://seoexpertinkarachi.com/case-studies",
    "https://seoexpertinkarachi.com/contact",
  ],
};

/* ─── Breadcrumb Helper ─── */
export const buildBreadcrumb = (
  items: { name: string; url: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
});

/* ─── WebPage Helper ─── */
export const buildWebPage = (opts: {
  name: string;
  description: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${opts.url}#webpage`,
  name: opts.name,
  description: opts.description,
  url: opts.url,
  isPartOf: { "@id": "https://seoexpertinkarachi.com/#website" },
  about: { "@id": "https://seoexpertinkarachi.com/#organization" },
  inLanguage: "en",
});
