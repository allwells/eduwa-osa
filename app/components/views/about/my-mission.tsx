import { Animate } from "~/components/common";
import { Image, SvgSectionBreaker } from "~/components/ui";

export default function MyMission() {
  return (
    <>
      <div className="w-full md:px-[5%] px-6 md:py-24 py-[72px] bg-brand-white text-brand-black relative isolate overflow-hidden">
        <div className="w-full flex flex-col lg:flex-row-reverse justify-center lg:items-center md:gap-12 gap-4">
          <Animate
            animation="fade-left"
            className="flex flex-col gap-6 w-full max-w-xl relative isolate"
          >
            <h2 className="heading text-brand-secondary">Mission</h2>

            <div className="w-full space-y-4 md:text-xl text-lg">
              <p>
                My mission is to build individuals and institutions that operate
                from their highest, most authentic state. I am committed to
                equipping highly driven individuals, teams, and organizations
                with the tools to operate from a place of clarity, mastery, and
                wholeness, fostering cultures of innovation, resilience, and
                peak performance.
              </p>

              <p className="md:flex hidden">
                I partner with those who are not satisfied with surface-level
                change but are ready to redefine the way they think, lead, and
                operate both personally and organizationally. The goal is always
                the same: radical transformation, expanded potential, and
                outcomes that redefine what&apos;s possible.
              </p>
            </div>
          </Animate>

          <Animate
            delay={250}
            animation="fade-right"
            className="overflow-hidden md:max-w-[512px] aspect-square rounded-md flex justify-center md:items-center items-start"
          >
            <Image
              width={512}
              height={512}
              src="/images/eduwa-2.jpg"
              className="object-top"
            />
          </Animate>

          <Animate
            delay={350}
            animation="fade-left"
            className="w-full md:hidden mt-4 space-y-4 text-lg"
          >
            I partner with those who are not satisfied with surface-level change
            but are ready to redefine the way they think, lead, and operate both
            personally and organizationally. The goal is always the same:
            radical transformation, expanded potential, and outcomes that
            redefine what&apos;s possible.
          </Animate>
        </div>
      </div>

      <SvgSectionBreaker filename="arc-white" className="-scale-y-100 -mt-1" />
    </>
  );
}
