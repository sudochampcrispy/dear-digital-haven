import LeadGenForm from "@/components/LeadGenForm";

interface CtaBannerProps {
  heading?: string;
  text?: string;
}

const CtaBanner = ({
  heading = "Ready to Dominate Search Rankings?",
  text = "Get a free SEO audit and a personalized strategy tailored for your business in Karachi.",
}: CtaBannerProps) => (
  <section className="bg-primary section-padding" aria-label="Call to action">
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold !text-primary-foreground mb-4">{heading}</h2>
          <p className="text-primary-foreground/80 max-w-xl mb-4">{text}</p>
        </div>
        <div className="bg-background rounded-lg">
          <LeadGenForm />
        </div>
      </div>
    </div>
  </section>
);

export default CtaBanner;
