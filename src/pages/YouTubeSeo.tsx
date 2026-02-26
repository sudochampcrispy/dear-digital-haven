import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { organizationSchema, buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle, Video, Search, FileText, Tag, BarChart3, TrendingUp } from "lucide-react";

const breadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://seoexpertinkarachi.com/" },
  { name: "SEO Services", url: "https://seoexpertinkarachi.com/seo-services" },
  { name: "YouTube SEO", url: "https://seoexpertinkarachi.com/youtube-seo" },
]);
const webPage = buildWebPage({ name: "YouTube SEO Services — Video Optimization, Rankings & Visibility", description: "YouTube SEO services covering video optimization, keyword research, thumbnail strategy, engagement signals, playlist architecture, and cross-platform visibility for maximum video search performance.", url: "https://seoexpertinkarachi.com/youtube-seo" });
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "YouTube SEO Services", provider: { "@type": "Person", name: "Naveed Ganatra" }, areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }], serviceType: "YouTube Video SEO", description: "YouTube SEO services covering video title and description optimization, keyword research, thumbnail CTR optimization, engagement signal strategy, playlist architecture, and cross-platform search visibility for video content." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "How does YouTube SEO differ from traditional SEO?", acceptedAnswer: { "@type": "Answer", text: "YouTube SEO optimizes for YouTube's algorithm, which prioritizes watch time, engagement (likes, comments, shares), click-through rate from thumbnails, and session duration. Traditional SEO focuses on textual content relevance and backlinks. YouTube also surfaces videos in Google search results, making video SEO a dual-platform strategy that captures both YouTube and Google organic traffic." }},
  { "@type": "Question", name: "What are the most important YouTube ranking factors?", acceptedAnswer: { "@type": "Answer", text: "YouTube's primary ranking factors are: watch time (total minutes viewed), click-through rate from impressions (thumbnail + title effectiveness), engagement signals (likes, comments, shares, subscribers gained), video relevance (title, description, tags matching search queries), and session time (whether viewers continue watching more videos after yours). Content quality that keeps viewers watching is the strongest signal." }},
  { "@type": "Question", name: "How do I optimize YouTube videos for Google search?", acceptedAnswer: { "@type": "Answer", text: "To appear in Google's video results: target keywords that Google already shows video results for (check SERPs for video carousels), use detailed descriptions with timestamps, implement VideoObject schema on your website's embedded video pages, create transcripts, and optimize thumbnail images. Google prioritizes videos for how-to, tutorial, review, and entertainment queries." }},
  { "@type": "Question", name: "How important are YouTube thumbnails for SEO?", acceptedAnswer: { "@type": "Answer", text: "Thumbnails directly impact click-through rate (CTR), which is a primary ranking factor. A video with a 10% CTR will significantly outrank an identical video with 3% CTR. Custom thumbnails with clear text overlays, expressive faces, contrasting colors, and curiosity-driven imagery consistently outperform auto-generated thumbnails by 2-3x in CTR." }},
]};

const pillars = [
  { icon: Search, title: "YouTube Keyword Research", desc: "YouTube has its own search ecosystem with different keyword dynamics than Google. Effective YouTube keyword research identifies terms with high search volume on the platform and manageable competition.", items: ["YouTube autocomplete mining — extracting keyword suggestions directly from YouTube's search bar", "YouTube-specific search volume analysis using dedicated video keyword tools", "Competitor video analysis — identifying keywords successful channels target in your niche", "Google video intent keywords — targeting queries where Google shows video carousels in search results", "Trending topic identification — capitalizing on rising search demand for timely content", "Long-tail video keywords — targeting specific queries with lower competition and higher intent"] },
  { icon: FileText, title: "Video Title & Description Optimization", desc: "Titles and descriptions are the primary text signals YouTube uses to understand video content. Optimized metadata matches search queries while maximizing click-through rate from impressions.", items: ["Title optimization — front-loading keywords, keeping under 60 characters, adding curiosity hooks", "Description optimization — detailed 200-500 word descriptions with natural keyword integration", "Timestamp chapters — creating structured navigation that improves user experience and YouTube indexing", "Hashtag strategy — using 3-5 relevant hashtags for discoverability in hashtag search results", "Card and end screen optimization — driving viewers to related content for session time improvement", "Pinned comment strategy — reinforcing keywords and driving engagement through comment interaction"] },
  { icon: Tag, title: "Tags, Categories & Metadata", desc: "While less impactful than titles and descriptions, tags help YouTube understand content context and associate videos with related content for recommendation algorithms.", items: ["Primary keyword tags — exact-match and variation tags for your target search terms", "Category selection — choosing the most relevant YouTube category for algorithm classification", "Playlist optimization — organizing videos into keyword-optimized playlists for binge-watching sessions", "Channel keyword configuration — setting broad channel-level keywords for topical association", "VideoObject schema markup — structured data for your website's embedded video pages", "Closed caption optimization — uploading accurate transcripts that YouTube indexes for search relevance"] },
  { icon: TrendingUp, title: "Engagement & Growth Strategy", desc: "YouTube's algorithm heavily weights engagement signals. Videos that generate likes, comments, shares, and subscriber conversions receive algorithmic amplification in search and recommendations.", items: ["CTR optimization through thumbnail A/B testing and title formula refinement", "Watch time optimization — content structuring that maintains viewer attention throughout the video", "Comment engagement strategy — prompting discussion and responding to build community signals", "Subscriber conversion tactics — strategic CTAs that convert viewers into channel subscribers", "Cross-platform promotion — amplifying video reach through social media, email, and website embeds", "Collaboration and cross-promotion with relevant channels for audience expansion"] },
];

const YouTubeSeo = () => (
  <Layout>
    <SeoHead title="YouTube SEO Services — Video Optimization & Rankings | Naveed Ganatra" description="YouTube SEO services covering video optimization, keyword research, thumbnail strategy, engagement signals, and cross-platform visibility for maximum video search performance." canonical="https://seoexpertinkarachi.com/youtube-seo" />
    <JsonLd data={serviceSchema} /><JsonLd data={organizationSchema} /><JsonLd data={breadcrumb} /><JsonLd data={webPage} /><JsonLd data={faqSchema} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><div className="max-w-4xl">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">YouTube SEO</p>
         <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">YouTube SEO Services</h1>
         <p className="text-lg text-body mb-4">YouTube is the world's second-largest search engine. For Karachi businesses and content creators, videos optimized for YouTube's algorithm appear in both YouTube search and Google's video carousels — complementing your on-page SEO across two platforms simultaneously.</p>
         <p className="text-body mb-8">Our YouTube SEO services cover keyword research, title and description optimization, thumbnail CTR strategy, engagement signals, and cross-platform visibility — working alongside your content strategy to turn video into a consistent organic traffic source.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get YouTube SEO Consultation</a>
          <Link to="/case-studies" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">View Case Studies</Link>
        </div>
      </div></div></section>

      <section className="section-padding"><div className="section-container">
        <h2 className="text-3xl font-bold mb-4">YouTube SEO Within Your Search Strategy</h2>
        <p className="text-body max-w-3xl">YouTube SEO works best when integrated with your broader search strategy. Effective <Link to="/keyword-research" className="text-primary hover:underline">keyword research</Link> identifies which queries trigger video carousels in Google results. Your <Link to="/content-strategy-seo" className="text-primary hover:underline">content strategy</Link> should coordinate written and video content for maximum topical coverage across both platforms.</p>
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
          <Link to="/content-strategy-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Content Strategy</Link>
          <Link to="/on-page-seo" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">On-Page SEO</Link>
          <Link to="/keyword-research" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">Keyword Research</Link>
        </div>
      </div></section>

      <section className="section-padding"><div className="section-container max-w-3xl">
        <div className="metric-card bg-primary/5 border-primary/20">
          <h2 className="text-2xl font-bold text-heading mb-3">Ready to Rank Your Videos Higher?</h2>
          <p className="text-body mb-6">Get a free YouTube channel audit covering keyword opportunities, optimization gaps, and a strategy for increasing your video search visibility.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/923232877850" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Get Free YouTube Audit →</a>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">Hire Naveed Ganatra</Link>
          </div>
        </div>
      </div></section>
      <CtaBanner />
    </main>
  </Layout>
);

export default YouTubeSeo;
