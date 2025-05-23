// import CustomImage from "~/components/ui/custom-image";
import Animate from "~/components/common/animate";
import SvgSectionBreaker from "~/components/ui/svg-section-breaker";

export default function MyMission() {
  return (
    <>
      <div className="w-full md:px-[5%] px-6 md:py-24 py-[72px] bg-brand-white text-brand-black relative isolate overflow-hidden">
        <div className="w-full flex flex-col lg:flex-row-reverse justify-center lg:items-center md:gap-12 gap-4">
          <Animate
            // animation="fade-left"
            className="flex flex-col gap-6 w-full max-w-6xl relative isolate"
            // className="flex flex-col gap-6 w-full max-w-xl relative isolate"
          >
            <div className="w-full space-y-4 text-center lg:text-4xl md:text-3xl text-xl md:leading-[1.3] leading-[1.5]">
              {/* <div className="w-full space-y-4 md:text-xl text-lg"> */}
              <p>
                I help individuals and organizations unlock the clarity,
                mindset, and tools they need to live and lead from their most
                authentic, powerful selves. I work with highly driven people and
                forward-moving organizations to elevate their thinking, master
                who they are, and engineer their next level so they can perform
                at their highest level and create lasting impact.
              </p>
            </div>
          </Animate>

          {/* <Animate
            staggerIndex={1}
            animation="fade-right"
            className="overflow-hidden md:max-w-md aspect-square rounded-md flex justify-center md:items-center items-start"
          >
            <CustomImage
              width={512}
              height={512}
              src="eduwa-3.webp"
              className="object-top"
            />
          </Animate> */}
        </div>
      </div>

      <SvgSectionBreaker filename="arc-white" className="-scale-y-100 -mt-1" />
    </>
  );
}
