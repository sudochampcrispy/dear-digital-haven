import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, UtensilsCrossed, MapPin, FileText, Star, Camera, Menu } from "lucide-react";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "Restaurant SEO", url: "https://seoexpertinkarachi.com/restaurant-seo" },
]);
const webPage = buildWebPage({ name: "Restaurant SEO Services — Local Visibility & Foot Traffic", description: "Restaurant SEO services covering Google Business Profile optimization, local map pack dominance, menu SEO, review management, and food photography optimization for restaurants and food businesses.", url: "https://seoexpertinkarachi.com/restaurant-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Restaurant SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "Restaurant SEO", description: "Restaurant SEO services covering Google Business Profile optimization, local map pack dominance, menu page SEO, review management strategy, food photography optimization, and local content marketing for restaurants and food businesses." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Why is SEO important for restaurants?", acceptedAnswer: { "@type": "Answer", text: "90% of diners research restaurants online before visiting, and 'restaurants near me' is one of the most searched local queries globally. Google Business Profile is the primary discovery channel for restaurants — appearing in the local map pack for cuisine and location searches directly drives foot traffic, reservations, and delivery orders. Restaurants visible in the top 3 local results receive 70% of clicks. Without local SEO, your restaurant is invisible to the majority of potential diners." }},
  { "@type": "Question", name: "How important is Google Business Profile for restaurants?", acceptedAnswer: { "@type": "Answer", text: "Google Business Profile is the single most important digital asset for restaurants. It appears in Maps, local search results, and Google's restaurant finder. Complete profiles with updated menus, food photos, operating hours, reservation links, and delivery options generate 35% more direction requests and 25% more phone calls than incomplete profiles. Regular posts about specials, events, and seasonal menus keep your profile active and signal freshness to Google's ranking algorithm." }},
  { "@type": "Question", name: "How do online reviews affect restaurant SEO?", acceptedAnswer: { "@type": "Answer", text: "Reviews are the most influential factor in both restaurant search rankings and customer decisions. 94% of diners choose restaurants based on online reviews. Google uses review quantity, quality, recency, and response rate in local ranking calculations. Restaurants with 200+ Google reviews and a 4.3+ rating dominate local search results. Responding to every review — positive and negative — signals active management and improves both rankings and customer perception." }},
  { "@type": "Question", name: "How quickly does restaurant SEO show results?", acceptedAnswer: { "@type": "Answer", text: "Restaurant SEO produces the fastest results of any local SEO category because of high search volume and strong local signals. Google Business Profile optimizations show measurable improvements within 2-4 weeks. Cuisine and neighborhood keyword rankings improve within 6-8 weeks. Consistent SEO effort for 3-4 months typically produces a 40-60% increase in online discovery, direction requests, and phone calls from Google. Seasonal promotions and event pages can generate immediate traffic." }},
]};

const pillars = [
  { icon: MapPin, title: "Google Business Profile & Local SEO", desc: "Google Business Profile is the primary discovery channel for restaurants. When someone searches 'best biryani near me' or 'restaurants in Clifton', GBP results appear first — above every other website.", items: ["Google Business Profile optimization — complete profile with menus, food photos, hours, and ordering links", "Menu upload and optimization — structured menu content that appears directly in Google search results", "Photo strategy — regular uploads of professional food photos that increase engagement and click-through rates", "Google Posts — weekly posts about specials, events, seasonal menus, and promotions for ranking freshness", "Q&A management — proactively answering common questions about menu, parking, reservations, and dietary options", "Multi-location GBP management — optimizing profiles for restaurant chains and multiple branch locations"] },
  { icon: Star, title: "Review Management & Reputation", desc: "Reviews determine which restaurants appear in local search results and which get chosen by diners. A systematic review strategy is the highest-ROI SEO activity for any restaurant.", items: ["Review generation strategy — table cards, receipt prompts, and follow-up systems encouraging Google reviews", "Review response templates — professional responses to positive and negative reviews maintaining brand voice", "Review monitoring — real-time alerts for new reviews across Google, Yelp, TripAdvisor, and food apps", "Negative review management — de-escalation strategies that turn complaints into positive outcomes", "Review schema markup — AggregateRating structured data displaying star ratings in search results", "Review velocity tracking — maintaining consistent review flow for sustained local ranking improvement"] },
  { icon: Menu, title: "Menu & Website SEO", desc: "Your restaurant website must convert searchers into diners. Menu pages, location pages, and ordering pages need specific optimization to rank for cuisine, dish, and location searches.", items: ["Menu page optimization — HTML menus with dish descriptions, dietary labels, and cuisine schema markup", "Cuisine-specific landing pages — dedicated pages for each cuisine type and specialty you offer", "Location and neighborhood pages — optimized pages for 'restaurant in [area]' searches", "Online ordering SEO — optimized ordering pages with proper schema for delivery and takeout", "Event and private dining pages — SEO-optimized pages for catering, events, and group dining", "Restaurant schema markup — Restaurant, Menu, and MenuItem structured data for rich search results"] },
  { icon: Camera, title: "Food Photography & Visual SEO", desc: "Food is visual. Restaurant search results increasingly feature images — in map packs, image search, and social platforms. Professional food photography optimized for search generates both rankings and cravings.", items: ["Food photo optimization — professional images with descriptive filenames, alt text, and schema markup", "Google Business Profile photo strategy — regular uploads showing dishes, ambiance, and dining experience", "Image search optimization — ranking food photos in Google Images for dish and cuisine searches", "User-generated content strategy — encouraging and leveraging customer food photos for social proof", "Video content — short-form cooking and behind-the-scenes videos for YouTube and social search", "Instagram and social SEO — optimizing social profiles and content for food-related discovery searches"] },
];

const RestaurantSeo = () => (
  <Layout>
    <SeoHead title="Restaurant SEO Services — Local Visibility & Foot Traffic | Naveed Ganatra" description="Restaurant SEO services covering Google Business Profile optimization, local map pack dominance, menu SEO, review management, and food photography optimization for restaurants." canonical="https://seoexpertinkarachi.com/restaurant-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">Restaurant SEO</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Restaurant SEO Services</h1>
        <p className="text-lg text-body mb-4">90% of diners research restaurants online before visiting. In Karachi's competitive food scene, restaurants that dominate Google's local map pack and maintain strong review profiles capture the majority of walk-in and delivery traffic.</p>
        <p className="text-body mb-8">Our restaurant SEO services combine Google Business Profile optimization, review management, menu SEO, and local content strategy — designed to turn online searches into paying customers at your tables.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Restaurant SEO Consultation</a>
          <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link>
        </div>
      </div></div></section>

      <section className="section-padding"><div className="section-container">
        <h2 className="text-3xl font-bold mb-4">Why Restaurants Need Specialized SEO</h2>
        <p className="text-body max-w-3xl">Restaurant SEO is driven by <Link to="/local-seo-karachi" className="text-primary hover:underline">local search signals</Link> and visual content. Google Business Profile optimization is foundational, while targeted <Link to="/on-page-seo" className="text-primary hover:underline">on-page SEO</Link> for menu and cuisine pages captures specific food searches. A strong <Link to="/off-page-seo" className="text-primary hover:underline">off-page strategy</Link> through reviews and food blog citations builds the authority needed for map pack dominance.</p>
      </div></section>

      {pillars.map((pillar, i) => (
        <section key={pillar.title} className={`section-padding ${i % 2 === 0 ? "" : "surface-sunken"}`}><div className="section-container"><div className="grid lg:grid-cols-2 gap-8 items-start">
          <div><div className="flex items-center gap-3 mb-4"><pillar.icon className="h-6 w-6 text-primary shrink-0" /><h2 className="text-3xl font-bold">{pillar.title}</h2></div><p className="text-body">{pillar.desc}</p></div>
          <ul className="space-y-3">{pillar.items.map((item) => (<li key={item} className="flex gap-3 text-sm text-body"><CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />{item}</li>))}</ul>
        </div></div></section>
      ))}

      <section className="section-padding"><div className="section-container max-w-3xl">
        <h2 className="text-2xl font-bold text-heading mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">{faqSchema.mainEntity.map((faq) => (
          <details key={faq.name} className="group metric-card"><summary className="cursor-pointer font-semibold text-heading list-none flex items-center justify-between">{faq.name}<span className="ml-4 text-primary text-xl group-open:rotate-45 transition-transform">+</span></summary><p className="mt-3 text-sm text-body">{faq.acceptedAnswer.text}</p></details>
        ))}</div>
      </div></section>

      <section className="section-padding surface-sunken"><div className="section-container"><h2 className="text-2xl font-bold mb-4 text-center">Related SEO Services</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/seo-services" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">All SEO Services</Link>
          <Link to="/local-seo-karachi" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Local SEO</Link>
          <Link to="/ecommerce-seo-karachi" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">E-commerce SEO</Link>
          <Link to="/on-page-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">On-Page SEO</Link>
        </div>
      </div></section>

      <section className="section-padding"><div className="section-container max-w-3xl">
        <div className="metric-card bg-primary/5 border-primary/20">
          <h2 className="text-2xl font-bold text-heading mb-3">Ready to Fill More Tables From Online Search?</h2>
          <p className="text-body mb-6">Get a free restaurant SEO assessment covering your Google Business Profile, local search visibility, review strategy, and a plan for driving more diners from organic search.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Restaurant SEO Assessment →</a>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">Hire Naveed Ganatra</Link>
          </div>
        </div>
      </div></section>
      <CtaBanner />
    </main>
  </Layout>
);

export default RestaurantSeo;
