import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import CtaBanner from "@/components/CtaBanner";

const createPage = (title: string, heading: string, description: string) => {
  const Page = () => (
    <Layout>
      <SeoHead title={title} description={description} />
      <main>
        <section className="section-padding surface-sunken" aria-label="Hero">
          <div className="section-container">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">{heading}</h1>
            <p className="text-lg text-body max-w-2xl">{description}</p>
          </div>
        </section>
        <CtaBanner />
      </main>
    </Layout>
  );
  return Page;
};

export default createPage;
