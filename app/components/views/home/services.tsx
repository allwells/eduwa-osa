import { SERVICES } from "~/utils/constant";
import Animate from "~/components/common/animate";
import ServiceCard from "~/components/views/services/service-card";

export default function Services() {
  return (
    <div className="w-full md:px-[5%] px-6 md:py-24 py-12 flex justify-center">
      <div className="w-full max-w-9xl flex flex-col xl:flex-row justify-between gap-12">
        <div className="w-full max-w-lg flex">
          <div className="xl:sticky xl:top-28 flex flex-col gap-2 h-fit grow">
            <Animate as="h3" className="title text-brand-primary">
              Explore Offerings
            </Animate>
            <Animate as="h2" delay={100} className="heading">
              How We Can Work Together
            </Animate>
            <Animate
              as="p"
              delay={200}
              className="mt-4 description text-brand-grey-2"
            >
              Discover the key ways we can partner to unlock your potential,
              gain strategic clarity, and engineer exponential growth for you.
            </Animate>
          </div>
        </div>

        <div className="w-full xl:max-w-3xl max-w-4xl flex xl:shrink-0">
          <div className="grid sm:grid-cols-2 md:gap-x-8 gap-x-8 sm:gap-y-0 gap-y-6 w-full">
            {SERVICES.map((service, index) => (
              <Animate
                key={service.id}
                delay={index + 20}
                className="sm:h-fit h-full grid"
              >
                <ServiceCard index={index} service={service} />
              </Animate>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
