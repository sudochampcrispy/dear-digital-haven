import LeadGenForm from "@/components/LeadGenForm";

interface CtaBannerProps {
  heading?: string;
  text?: string;
}

const CtaBanner = ({
  heading = "Ready to Dominate Search Rankings?",
}: CtaBannerProps) => (
  <section className="bg-primary section-padding" aria-label="Call to action">
    <div className="section-container flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-bold !text-primary-foreground mb-6 text-center">{heading}</h2>
      <div className="bg-background rounded-lg w-full max-w-xl">
        <LeadGenForm />
      </div>
    </div>
  </section>
);

export default CtaBanner;
