import { Image } from "~/components/ui";
import { Button } from "~/components/form";
import { Animate } from "~/components/common";

export default function Hero() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center md:px-[5%] px-6 max-w-9xl mx-auto md:min-h-[calc(100vh-96px)] min-h-[calc(100vh-80px)] overflow-hidden lg:gap-20 gap-14">
      <div className="flex flex-col justify-start lg:items-start items-center w-full max-w-xl lg:mt-0 mt-20 lg:text-left text-center gap-4">
        <Animate
          as="h1"
          className="font-crimson font-medium lg:text-7xl md:text-6xl xs:text-5xl text-[40px] leading-[1]"
        >
          Unlock Deep
          <br />
          <span className="text-brand-secondary">Transformation</span>
          <br />& Scale Outcomes
        </Animate>

        <Animate
          as="p"
          delay={100}
          className="lg:text-2xl md:text-xl text-lg text-brand-grey-2"
        >
          Empowering high-growth individuals to unlock their highest potential
          through high-performance strategies.
        </Animate>

        <Animate delay={200}>
          <Button
            to="/services"
            variant="secondary"
            className="mt-6 px-6 text-base"
          >
            Begin Your Journey
          </Button>
        </Animate>
      </div>

      <Animate
        offset={0}
        delay={350}
        className="overflow-hidden lg:min-w-[560px] sm:min-w-[460px] min-h-[530px] aspect-[560/720] w-fit h-fit mt-auto"
      >
        <Image
          width={560}
          height={720}
          src="/images/eduwa.png"
          className="object-contain"
        />
      </Animate>
    </div>
  );
}
