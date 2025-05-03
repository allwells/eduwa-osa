import { SvgSectionBreaker } from "~/components/ui";
import { LayoutBackground } from "~/routes/layout";

export default function Testimonials() {
  return (
    <>
      <SvgSectionBreaker
        filename="wavy-yellow"
        className="-scale-x-100 opacity-70"
      />

      <div className="w-full md:px-[5%] px-6 md:pb-24 pb-12 pt-12 bg-brand-primary/70 text-brand-black relative isolate overflow-hidden">
        <LayoutBackground />
        Testimonials
      </div>

      <SvgSectionBreaker
        filename="wavy-yellow"
        className="-scale-y-100 opacity-70"
      />
    </>
  );
}
