import cn from "~/utils/cn";
import CustomImage from "~/components/ui/custom-image";
import Button from "~/components/form/button";
import Animate from "~/components/common/animate";
import { LayoutBackground } from "~/routes/layout";

type CtaVariant = "default" | "white";

interface CtaProps {
  variant?: CtaVariant;
}

const VARIANTS: Record<CtaVariant, string> = {
  default: "bg-brand-white text-brand-black",
  white: "bg-brand-black text-brand-white",
};

export default function Cta({ variant = "default" }: CtaProps) {
  return (
    <div
      className={cn(
        "w-full md:px-[5%] px-6 py-24 flex justify-center items-center",
        {
          "bg-brand-white border-b border-brand-grey-2": variant === "white",
        }
      )}
    >
      <div
        className={cn(
          "md:w-full w-fit md:max-w-6xl overflow-hidden flex md:flex-row flex-col justify-between items-center gap-16 md:px-12 px-8 pt-12 md:pb-12 pb-0 rounded relative min-h-[512px]",
          VARIANTS[variant]
        )}
      >
        <LayoutBackground />

        <div className="flex flex-col md:items-start items-center md:text-left text-center w-fit max-w-m md:shrink-0 md:gap-4 gap-3">
          <Animate
            as="h2"
            className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-satoshi leading-[1] font-light"
          >
            Are you
            <br />
            <span className="font-crimson font-medium text-brand-primary">
              ready to evolve?
            </span>
          </Animate>

          <Animate
            as="p"
            className="lg:text-2xl sm:text-xl text-lg text-brand-grey-1 leading-[1.2] w-full md:max-w-lg max-w-sm"
          >
            Break through limitations and accelerate your journey to exponential
            outcomes.
          </Animate>

          <Animate className="w-fit h-fit">
            <Button to="/services" className="mt-4">
              Begin your journey
            </Button>
          </Animate>
        </div>

        <div className="md:aspect-[380/420] w-full h-full max-w-[320px] max-h-[420px]">
          <Animate className="overflow-hidden w-full h-full max-w-[420px] md:absolute lg:right-0 md:-right-12 bottom-0">
            <CustomImage
              width={380}
              height={420}
              src="eduwa-1.webp"
              className="object-contain -scale-x-100 pointer-events-none"
            />
          </Animate>
        </div>
      </div>
    </div>
  );
}
