import { Link } from "react-router-dom";

interface CtaBannerProps {
  heading?: string;
  text?: string;
}

const CtaBanner = ({
  heading = "Ready to Dominate Search Rankings?",
  text = "Get a free SEO audit and a personalized strategy tailored for your business in Karachi.",
}: CtaBannerProps) => (
  <section className="bg-primary section-padding" aria-label="Call to action">
    <div className="section-container text-center">
      <h2 className="text-2xl sm:text-3xl font-bold !text-primary-foreground mb-4">{heading}</h2>
      <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">{text}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://wa.me/923232877850"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background/90"
        >
          Get Free SEO Audit →
        </a>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-md border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
        >
          Hire an SEO Consultant
        </Link>
      </div>
    </div>
  </section>
);

export default CtaBanner;
