import cn from "~/utils/cn";
import type { Service } from "~/types";
import Button from "~/components/form/button";
import { slugifyThis } from "~/utils/helpers";

interface ServiceCardProps {
  index: number;
  service: Service;
}

export default function ServiceCard({ index, service }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "sm:h-fit h-full w-full aspect-auto rounded px-6 pb-7 pt-10 border border-brand-primary/15 hover:border-transparent hover:bg-brand-primary/85 relative isolate overflow-hidden transition-all duration-150 group/service",
        {
          "sm:mt-16": index % 2 !== 0,
        },
      )}
    >
      <div className="flex flex-col grow w-full h-full gap-2">
        <h3 className="title text-brand-primary group-hover/service:text-brand-black transition-colors duration-150 cursor-default">
          {service.subtitle}
        </h3>
        <h2 className="text-xl font-semibold text-brand-white group-hover/service:text-brand-black transition-colors duration-150 cursor-default">
          {service.title}
        </h2>
        <p className="lg:text-xl text-lg text-brand-grey-2 leading-[1.3] mt-2 group-hover/service:text-brand-black/80 transition-colors duration-200 cursor-default">
          {service.description}
        </p>

        <Button
          variant="inverted"
          to={`/services#${slugifyThis(service.title)}`}
          className="py-2.5 px-5 mt-12 group-hover/service:text-brand-primary group-hover/service:bg-brand-black group-hover/service:border-brand-black"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}
