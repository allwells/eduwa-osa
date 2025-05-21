import Button from "~/components/form/button";
import Animate from "~/components/common/animate";
import CustomImage from "~/components/ui/custom-image";
import LogoBackground from "~/components/ui/logo-bg";
import SvgSectionBreaker from "~/components/ui/svg-section-breaker";

export default function AboutOverview() {
  return (
    <>
      <SvgSectionBreaker
        filename="arc-white"
        className="scale-y-100 -mb-1 -mt-24"
      />
      <div className="w-full md:px-[5%] px-6 md:pb-24 py-12 bg-brand-white text-brand-black relative isolate">
        <div className="w-full flex flex-col lg:flex-row justify-center items-start lg:gap-24 md:gap-12 gap-4">
          <div className="flex flex-col gap-6 w-full max-w-xl relative isolate">
            <LogoBackground classNames={{ wrapper: "md:flex hidden" }} />

            <div className="flex flex-col gap-2">
              <Animate as="h3" className="title text-brand-primary">
                Discover Your Coach
              </Animate>
              <Animate as="h2" staggerIndex={1} className="heading">
                Meet Eduwa Osa
              </Animate>
            </div>

            <Animate
              staggerIndex={2}
              className="w-full space-y-4 md:text-xl text-lg md:mt-4"
            >
              <p>
                Welcome. I'm Eduwa Osa, and I serve as a catalyst for deep,
                lasting transformation. I partner with high-growth individuals,
                visionary leaders, and forward-thinking organizations ready to
                unlock their deepest potential and scale their outcomes
                exponentially.
              </p>

              <p className="md:flex hidden">
                My work transcends conventional approaches, integrating
                Philosophy, Psychology, Spirituality, Neuroscience, and
                High-Performance Strategy. This unique fusion helps you break
                through internal barriers, realign with your true essence, and
                architect a life and work that reflect your highest
                capabilities.
              </p>

              <p className="md:flex hidden">
                If you're ready to move beyond the surface and engineer profound
                shifts, I invite you to explore the depth of my approach and
                journey.
              </p>
            </Animate>

            <Animate staggerIndex={3} className="md:mt-6 mt-4 md:flex hidden">
              <Button to="/about" className="px-6 text-base">
                Learn more
              </Button>
            </Animate>
          </div>

          <Animate
            staggerIndex={4}
            className="overflow-hidden md:max-w-[520px] md:aspect-[520/650] aspect-[400/400] rounded-md flex justify-center md:items-center items-start"
          >
            <CustomImage
              width={520}
              height={650}
              src="eduwa-2.webp"
              className="object-top"
            />
          </Animate>

          <Animate
            staggerIndex={5}
            className="w-full md:hidden mt-4 space-y-4 text-lg"
          >
            <p>
              My work transcends conventional approaches, integrating
              Philosophy, Psychology, Spirituality, Neuroscience, and
              High-Performance Strategy. This unique fusion helps you break
              through internal barriers, realign with your true essence, and
              architect a life and work that reflect your highest capabilities.
            </p>

            <p>
              If you're ready to move beyond the surface and engineer profound
              shifts, I invite you to explore the depth of my approach and
              journey.
            </p>
          </Animate>

          <Animate staggerIndex={6} className="mt-6 md:hidden">
            <Button to="/about" className="px-6 text-base">
              Learn more
            </Button>
          </Animate>
        </div>
      </div>
      <SvgSectionBreaker filename="arc-white" className="-scale-y-100 -mt-1" />
    </>
  );
}
