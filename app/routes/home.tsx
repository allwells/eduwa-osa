import { Button } from "~/components/form";
import { Animate } from "~/components/common";
import { Image, SvgSectionBreaker } from "~/components/ui";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero section */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-center md:px-[5%] px-6 max-w-9xl mx-auto md:min-h-[calc(100vh-96px)] min-h-[calc(100vh-80px)] overflow-hidden lg:gap-20 gap-14">
        <div className="flex flex-col justify-start lg:items-start items-center w-full max-w-xl mt-12 md:mt-0 lg:text-left text-center gap-4">
          <Animate
            as="h1"
            className="font-crimson font-light lg:text-7xl md:text-6xl xs:text-5xl text-[40px] leading-[1]"
          >
            Unlock Deep
            <br />
            <span className="text-brand-secondary">Transformation</span>
            <br />& Scale Outcomes
          </Animate>

          <Animate
            as="p"
            delay={100}
            className="md:text-2xl text-lg font-light text-brand-grey-2"
          >
            Empowering high-growth individuals to unlock their highest potential
            through high-performance strategies.
          </Animate>

          <Animate delay={200}>
            <Button variant="secondary" className="mt-6 px-6 text-base">
              Begin Your Journey
            </Button>
          </Animate>
        </div>

        <Animate
          delay={350}
          className="overflow-hidden lg:min-w-[560px] sm:min-w-[460px] sm:min-h-[530px] aspect-[560/720] w-fit h-fit mt-auto"
        >
          <Image
            width={560}
            height={720}
            src="/images/eduwa.png"
            className="object-contain"
          />
        </Animate>
      </div>

      {/* About section */}
      <div className="w-full md:px-[5%] px-6 md:pb-24 py-12 md:mt-20 bg-brand-white text-brand-black relative isolate">
        <SvgSectionBreaker
          filename="wavy-white"
          className="absolute bottom-full"
        />

        <div className="w-full flex flex-col lg:flex-row justify-center items-start lg:gap-24 md:gap-12 gap-4">
          <div className="flex flex-col gap-6 w-full max-w-xl">
            <div className="flex flex-col gap-2">
              <Animate
                as="h3"
                delay={50}
                className="title text-brand-secondary"
              >
                Discover Your Coach
              </Animate>
              <Animate as="h2" delay={150} className="heading">
                Meet Eduwa Osa
              </Animate>
            </div>

            <Animate
              delay={200}
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

            <Animate delay={250} className="md:mt-6 mt-4 md:flex hidden">
              <Button variant="secondary" className="px-6 text-base">
                Learn more
              </Button>
            </Animate>
          </div>

          <Animate
            delay={250}
            className="overflow-hidden md:max-w-[520px] md:aspect-[520/650] aspect-[400/400] rounded-xl flex justify-center md:items-center items-start"
          >
            <Image
              width={520}
              height={650}
              src="/images/eduwa-2.jpg"
              className="object-top"
            />
          </Animate>

          <Animate
            delay={350}
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

          <Animate delay={250} className="mt-6 md:hidden">
            <Button variant="secondary" className="px-6 text-base">
              Learn more
            </Button>
          </Animate>
        </div>
      </div>
      <SvgSectionBreaker filename="wavy-white" className="-scale-y-100" />

      <div className="w-full md:px-[5%] px-6 md:pb-24 py-12">
        <div className="w-full"></div>
      </div>
    </div>
  );
}
