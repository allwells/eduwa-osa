import Cta from "~/components/views/cta";
import Approach from "~/components/views/home/approach";
import Testimonials from "~/components/views/home/testimonials";
import { ServiceList, ServicesHero } from "~/components/views/services";

export default function Services() {
  return (
    <div className="w-full flex flex-col">
      <ServicesHero />
      <ServiceList />
      <Approach
        withBg={false}
        title="Foundational Approach"
        heading={<>The Core Transformation Pillars</>}
        className="bg-brand-transparent text-brand-white md:py-24 py-[72px]"
      />
      <Testimonials
        bgFileName="arc-yellow"
        title={<></>}
        heading="Hear From Transformed Clients"
        className="bg-brand-primary/80 text-brand-black md:py-24 py-[72px]"
      />
      <Cta variant="secondary" />
    </div>
  );
}
