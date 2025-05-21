import Cta from "~/components/views/cta";
import Approach from "~/components/views/home/approach";
import Testimonials from "~/components/views/home/testimonials";
import ServicesHero from "~/components/views/services/services-hero";
import ServiceList from "~/components/views/services/service-list";

export default function Services() {
  return (
    <div className="w-full flex flex-col">
      <ServicesHero />
      <ServiceList />
      <Approach
        withBg={false}
        className="bg-brand-transparent text-brand-white md:py-24 py-[72px]"
      />
      <Testimonials title={<></>} heading="Hear From Transformed Clients" />
      <Cta />
    </div>
  );
}
