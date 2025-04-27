import { Animate } from "~/components/common";
import { Button } from "~/components/form";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero section */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-center md:px-[5%] px-6 max-w-9xl mx-auto md:min-h-[calc(100vh-96px)] min-h-[calc(100vh-80px)] overflow-hidden lg:gap-20 gap-14">
        <div className="flex flex-col justify-start lg:items-start items-center w-full max-w-xl mt-12 md:mt-0 lg:text-left text-center gap-4">
          <Animate
            as="h1"
            className="font-crimson font-medium lg:text-6xl md:text-5xl text-[40px] leading-[1]"
          >
            Unlock Deep <br /> Transformation <br /> & Scale Outcomes
          </Animate>
          <Animate
            as="p"
            delay={75}
            className="lg:text-2xl md:text-lg text-lg font-normal text-brand-grey-2"
          >
            Empowering high-growth individuals to unlock their highest potential
            through high-performance strategies.
          </Animate>

          <Animate delay={150}>
            <Button className="mt-6 px-8 text-base">Work with Eduwa</Button>
          </Animate>
        </div>

        <Animate
          delay={225}
          className="overflow-hidden sm:min-w-[460px] sm:min-h-[530px] aspect-[560/720] w-fit h-fit mt-auto"
        >
          <img
            width={560}
            height={720}
            loading="eager"
            src="/images/eduwa.png"
            alt="Eduwa Osa"
            className="h-full w-full object-center object-contain relative"
          />
        </Animate>
      </div>

      <div className="h-56 w-full"></div>
    </div>
  );
}
