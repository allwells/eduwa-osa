import Animate from "~/components/common/animate";

export default function Banner() {
  return (
    <div className="overflow-hidden w-full max-h-[600px] md:aspect-[1024/600] xs:aspect-[512/480] flex justify-center items-center bg-[url('/images/coach.jpg')] bg-top bg-no-repeat bg-cover bg-fixed">
      <div className="w-full h-full flex justify-center items-center bg-brand-black/75 inset-0 md:px-[5%] px-6 py-24">
        <Animate
          as="h1"
          animation="zoom-in"
          className="font-crimson font-extralight text-center lg:text-7xl md:text-6xl sm:text-5xl xs:text-[40px] text-4xl leading-[1] max-w-8xl"
        >
          Unlock your highest self and scale your outcomes.
        </Animate>
      </div>
    </div>
  );
}
