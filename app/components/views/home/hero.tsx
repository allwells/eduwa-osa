import Image from "~/components/ui/image";
import Button from "~/components/form/button";
import Animate from "~/components/common/animate";

export default function Hero() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center md:px-[5%] px-6 max-w-9xl mx-auto md:min-h-[calc(100vh-96px)] min-h-[calc(100vh-80px)] overflow-hidden lg:gap-20 gap-14">
      <div className="flex flex-col justify-start lg:items-start items-center w-full lg:mt-0 mt-20 lg:text-left text-center gap-4">
        <Animate
          as="h1"
          className="font-crimson font-medium lg:text-7xl md:text-6xl xs:text-5xl text-[40px] leading-[1] max-w-3xl"
        >
          Unlock Your <span className="text-brand-secondary">Highest Self</span>
          <br />& Scale Your Outcomes
        </Animate>

        <Animate
          as="p"
          staggerIndex={1}
          className="lg:text-2xl md:text-xl text-lg text-brand-grey-2 max-w-xl"
        >
          Empowering high-growth individuals to unlock their highest potential
          and engineer their NEXT.
        </Animate>

        <Animate staggerIndex={2}>
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
        staggerIndex={1}
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
