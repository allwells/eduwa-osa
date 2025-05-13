import { Image } from "~/components/ui";
import { Animate } from "~/components/common";

export default function Banner() {
  return (
    <Animate
      delay={200}
      animation="slide-up"
      className="overflow-hidden w-full max-h-[600px] md:aspect-[1024/600] xs:aspect-[512/480] flex justify-center items-center"
    >
      <Image
        width={1024}
        height={600}
        src="/images/coach.jpg"
        className="object-top xs:relative absolute z-[1]"
      />

      <div className="w-full h-full xs:absolute z-[2] flex justify-center items-center bg-brand-black/75 inset-0 md:px-[5%] px-6 py-24">
        <div className="w-full max-w-9xl flex justify-center items-center">
          <h1 className="font-crimson font-extralight text-center lg:text-7xl md:text-6xl sm:text-5xl xs:text-[40px] text-4xl leading-[1] max-w-8xl">
            Igniting exponential growth through integrated insight and
            unwavering commitment.
          </h1>
        </div>
      </div>
    </Animate>
  );
}
