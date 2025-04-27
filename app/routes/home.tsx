import { Animate } from "~/components/common";
import { Button } from "~/components/form";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero section */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-center md:px-[5%] px-6 max-w-9xl mx-auto md:min-h-[calc(100vh-96px)] min-h-[calc(100vh-80px)] overflow-hidden lg:gap-20 gap-14 lg:pt-0 pt-24">
        <div className="flex flex-col justify-start lg:items-start items-center w-full max-w-xl mt-12 md:mt-0 lg:text-left text-center gap-4">
          <Animate
            as="h1"
            className="font-crimson font-medium md:text-6xl xs:text-5xl text-[40px] leading-[1]"
          >
            Unlock Deep <br /> Transformation <br /> & Scale Outcomes
          </Animate>
          <Animate
            as="p"
            delay={100}
            className="md:text-2xl text-lg font-normal text-brand-grey-2"
          >
            Empowering high-growth individuals to unlock their highest potential
            through high-performance strategies.
          </Animate>

          <Animate delay={200}>
            <Button className="mt-6 px-6 text-base">Work with Eduwa</Button>
          </Animate>
        </div>

        <Animate
          delay={350}
          className="overflow-hidden lg:min-w-[560px] sm:min-w-[460px] sm:min-h-[530px] aspect-[560/720] w-fit h-fit mt-auto"
        >
          <img
            width={560}
            height={720}
            loading="eager"
            src="/images/eduwa.png"
            className="h-full w-full object-center object-contain relative"
          />
        </Animate>
      </div>

      <div className="h-56 w-full"></div>
    </div>
  );
}
