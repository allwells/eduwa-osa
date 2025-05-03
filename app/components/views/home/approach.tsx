import { Animate } from "~/components/common";
import { TRANSFORMATION } from "~/utils/constant";
import { LogoBackground, SvgSectionBreaker } from "~/components/ui";

export default function Approach() {
  return (
    <>
      <SvgSectionBreaker filename="wavy-red" className="opacity-80" />

      <div className="w-full md:px-[5%] px-6 md:pb-24 pb-12 pt-12 flex justify-center bg-brand-secondary/80 text-brand-white relative overflow-hidden isolate">
        <LogoBackground
          classNames={{
            image:
              "md:h-full md:w-auto h-auto w-full md:object-contain object-cover",
          }}
        />

        <div className="w-full max-w-9xl flex flex-col md:gap-[72px] gap-12 items-center">
          <div className="w-full max-w-2xl flex flex-col items-center text-center">
            <Animate as="h3" className="title">
              My Unique Approach
            </Animate>
            <Animate as="h2" delay={100} className="heading">
              Transform at Every Level
            </Animate>
            <Animate
              as="p"
              delay={200}
              className="mt-2 description text-brand-white/85"
            >
              My signature methodology fuses diverse disciplines to create deep,
              lasting change and elevate your performance and impact
              significantly.
            </Animate>
          </div>

          <div className="w-full grid md:grid-cols-12 grid-cols-1 gap-8">
            {TRANSFORMATION.map((item, index) => (
              <Animate
                key={item.title}
                delay={index + 20}
                className="flex flex-col gap-2 shadow-xl shadow-brand-black/15 bg-brand-white text-brand-black px-6 py-8 rounded lg:col-span-4 md:col-span-6 xl:nth-last-of-type-[2]:col-start-3 xl:last-of-type:col-start-7 lg:nth-last-of-type-[2]:col-start-2 lg:last-of-type:col-start-7 xl:nth-last-of-type-[2]:col-span-4 xl:last-of-type:col-span-4 lg:nth-last-of-type-[2]:col-span-5 lg:last-of-type:col-span-5 md:last-of-type:col-start-4"
              >
                <h3 className="title text-brand-secondary">{item.subtitle}</h3>
                <h2 className="font-semibold xl:text-3xl text-2xl leading-[1.1] font-crimson">
                  {item.title}
                </h2>
                <p className="xl:text-xl text-lg mt-2">{item.description}</p>
              </Animate>
            ))}
          </div>
        </div>
      </div>

      <SvgSectionBreaker
        filename="wavy-red"
        className="-scale-100 opacity-80"
      />
    </>
  );
}
