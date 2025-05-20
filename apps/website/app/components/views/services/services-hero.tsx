import Image from "~/components/ui/image";
import Animate from "~/components/common/animate";

export default function ServicesHero() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full md:px-[5%] px-6 md:py-24 py-[72px] flex flex-col gap-12 justify-center items-center overflow-hidden">
        <div className="w-full max-w-9xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:gap-12 gap-8">
          <Animate animation="fade-right" className="space-y-4">
            <h3 className="title text-brand-primary">Explore Services</h3>
            <h2 className="heading">
              Tailored Experiences <br /> for Profound Growth
            </h2>
          </Animate>

          <Animate
            as="p"
            staggerIndex={1}
            animation="fade-left"
            className="w-full flex flex-col max-w-2xl gap-4 description text-brand-grey-2 leading-[1.5]"
          >
            Explore coaching programs, intensives, and organizational solutions
            designed to help you transcend limits, unlock potential, and scale
            your outcomes exponentially.
          </Animate>
        </div>

        <Animate
          staggerIndex={2}
          className="overflow-hidden w-full max-h-[600px] md:aspect-[1024/600] xs:aspect-[512/480] rounded-lg flex justify-center items-center"
        >
          <Image
            width={1024}
            height={600}
            src="/images/growth.jpg"
            className="object-top"
          />

          {/* <div className="w-full h-full absolute z-[2] bg-brand-black/45 inset-0" /> */}
        </Animate>
      </div>
    </div>
  );
}
