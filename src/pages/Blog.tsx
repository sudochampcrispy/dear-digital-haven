import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import JsonLd, { buildBreadcrumb, buildWebPage } from "@/components/JsonLd";
import CtaBanner from "@/components/CtaBanner";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const blogBreadcrumb = buildBreadcrumb([{ name: "Home", url: "https://seoexpertinkarachi.com/" }, { name: "Blog", url: "https://seoexpertinkarachi.com/blog" }]);
const blogWebPage = buildWebPage({ name: "SEO Blog — Expert Insights & Guides", description: "Read actionable SEO guides from Naveed Ganatra.", url: "https://seoexpertinkarachi.com/blog" });

const blogPosts = [
  { slug: "entity-seo-explained", title: "Entity SEO Explained: Why AI Values Entities Over Keywords in 2026", excerpt: "SEO is no longer a keywords game — AI search engines recognize entities, not keyword-optimized pages. Learn the 3 pillars of entity SEO, the 6 trust signals AI uses for verification, and why building your brand identity matters more than building backlinks in 2026.", author: "Naveed Ganatra", date: "2026-02-26", readTime: "10 min read", category: "AI & SEO" },
  { slug: "ai-citation-traffic-source", title: "Secret Traffic Source: Being Cited by AI Without Clicks (2026)", excerpt: "You don't need traffic anymore — AI citations alone deliver brand visibility and credibility. AI systems cite YouTube videos 200x more than any other platform. Learn how to build entity signals, optimize for AI extractability, and shift your KPIs from clicks to citations.", author: "Naveed Ganatra", date: "2026-02-26", readTime: "9 min read", category: "AI & SEO" },
  { slug: "blog-ranking-guide-2026", title: "2026 Blog Ranking Guide: Topic Research, Content Plan & Semantic Writing", excerpt: "Most blog posts never rank because the process is broken — not the writing. This 3-phase framework covers validated topic research with competitor analysis, structured content planning using contextual bridges and the Koray framework, and section-by-section semantic writing that produces 2x deeper content than single-prompt generation.", author: "Naveed Ganatra", date: "2026-02-22", readTime: "15 min read", category: "Content Strategy" },
  { slug: "local-seo-changed-ai-search", title: "How Local SEO Has Changed Because of AI Search in 2026", excerpt: "AI search summarizes local queries and recommends top locations above the traditional local pack. AI local discovery is 30x more challenging than traditional local ranking. Businesses must optimize reviews, structured content, and entity signals for AI visibility.", author: "Naveed Ganatra", date: "2026-02-22", readTime: "8 min read", category: "Local SEO" },
  { slug: "optimize-youtube-videos-ai-search", title: "How to Optimize YouTube Videos for AI Search in 2026", excerpt: "AI search extracts answers from YouTube transcripts — not thumbnails or engagement metrics. These 4 techniques ensure AI systems cite your video content: structured spoken answers, contextual descriptions, front-loaded answers, and tutorial formatting.", author: "Naveed Ganatra", date: "2026-02-22", readTime: "7 min read", category: "AI & SEO" },
  { slug: "websites-ai-overview-ignores", title: "5 Types of Websites AI Overview Deliberately Ignores in 2026", excerpt: "Your website ranks on page 1 — yet AI Overview never cites it. AI evaluates trust, entity signals, and topical authority independently from traditional ranking factors. These 5 website types fail the trust evaluation every time.", author: "Naveed Ganatra", date: "2026-02-22", readTime: "8 min read", category: "AI & SEO" },
  { slug: "how-to-hire-best-seo-agency-karachi", title: "How to Hire the Best SEO Agency in Karachi", excerpt: "Choosing the right SEO agency in Karachi requires evaluating semantic SEO expertise, proven case studies, and transparent reporting. This guide covers essential criteria, red flags, and why topical authority matters more than backlink quantity in 2025.", author: "Naveed Ganatra", date: "2026-02-18", readTime: "12 min read", category: "SEO Strategy" },
];

const Blog = () => (
  <Layout>
    <SeoHead title="SEO Blog — Expert Insights & Guides | Naveed Ganatra" description="Read actionable SEO guides and semantic SEO strategies from Naveed Ganatra." canonical="https://seoexpertinkarachi.com/blog" />
    <JsonLd data={blogBreadcrumb} /><JsonLd data={blogWebPage} />
    <main>
      <section className="section-padding surface-sunken"><div className="section-container"><p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">SEO Insights & Guides</p><h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Our Blog</h1><p className="text-lg text-body max-w-2xl">Actionable SEO strategies and insights to help Karachi businesses dominate search rankings.</p></div></section>
      <section className="section-padding"><div className="section-container"><div className="grid gap-8 max-w-4xl">{blogPosts.map((post) => (
        <article key={post.slug} className="metric-card group">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{post.category}</span>
            <span className="flex items-center gap-1 text-xs text-subtle"><Calendar className="h-3.5 w-3.5" />{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span className="flex items-center gap-1 text-xs text-subtle"><Clock className="h-3.5 w-3.5" />{post.readTime}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-heading mb-3 group-hover:text-primary transition-colors"><Link to={`/blog/${post.slug}`}>{post.title}</Link></h2>
          <p className="text-body mb-4">{post.excerpt}</p>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm text-subtle"><User className="h-4 w-4" />{post.author}</span>
            <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">Read Article <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </article>
      ))}</div></div></section>
      <CtaBanner />
    </main>
  </Layout>
);

export default Blog;
