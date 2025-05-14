import Cta from "~/components/views/cta";
import { SERVICES } from "~/utils/constant";
import { useLoaderData } from "react-router";
import { slugifyThis } from "~/utils/helpers";
import SvgSectionBreaker from "~/components/ui/svg-section-breaker";
import type { Service } from "~/types";
import Image from "~/components/ui/image";

export async function loader({ params }: { params: { slug: string } }) {
  const { slug } = params;

  if (!slug) {
    throw new Error("Slug is missing from params.");
  }

  // Fetch the service details
  const service = SERVICES.find(
    (service) => slugifyThis(service.title) === slug,
  );

  if (!service) {
    throw new Error("Service not found.");
  }

  return service;
}

export default function ServiceDetails() {
  const service = useLoaderData<Service>();

  return (
    <div className="w-full flex flex-col">
      <div className="w-full md:px-[5%] px-8 md:py-32 py-24 flex flex-col items-center justify-center">
        <div className="w-full max-w-9xl mx-auto flex flex-col items-center md:gap-32 gap-20">
          <div className="w-full max-w-6xl flex flex-col items-center gap-12">
            <div className="w-full max-w-4xl flex flex-col items-center gap-2">
              <h3 className="title text-brand-primary">{service.subtitle}</h3>
              <h1 className="heading">{service.title}</h1>
            </div>
            <div className="overflow-hidden w-full max-h-[600px] md:aspect-[1024/600] xs:aspect-[512/480] rounded-lg flex justify-center items-center">
              <Image width={1024} height={600} src={service.image} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <SvgSectionBreaker
          filename="arc-white"
          className="-scale-x-100 -mb-[0.5px]"
        />
        <Cta variant="primary" />
      </div>
    </div>
  );
}
