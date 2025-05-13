import cn from "~/utils/cn";
import type { ReactNode } from "react";
import Animate from "~/components/common/animate";
import { TRANSFORMATION } from "~/utils/constant";
import LogoBackground from "~/components/ui/logo-bg";
import SvgSectionBreaker from "~/components/ui/svg-section-breaker";

interface ApproachProps {
  title?: ReactNode;
  heading?: ReactNode;
  description?: ReactNode;
  withBg?: boolean;
  bgFileName?: string;
  className?: string;
}

export default function Approach({
  title,
  heading,
  description,
  className,
  withBg = true,
  bgFileName = "wavy-red",
}: ApproachProps) {
  return (
    <>
      {withBg && (
        <SvgSectionBreaker filename={bgFileName} className="opacity-80" />
      )}

      <div
        className={cn(
          "w-full md:px-[5%] px-6 md:pb-24 pb-12 pt-12 flex justify-center bg-brand-secondary/80 text-brand-white relative overflow-hidden isolate",
          className,
        )}
      >
        <LogoBackground
          classNames={{
            image:
              "md:h-full md:w-auto h-auto w-full md:object-contain object-cover",
          }}
        />

        <div className="w-full max-w-9xl flex flex-col md:gap-[72px] gap-12 items-center">
          <div className="w-full max-w-3xl flex flex-col items-center text-center">
            <Animate as="h3" className="title">
              {title ? title : "My Unique Approach"}
            </Animate>
            <Animate as="h2" staggerIndex={1} className="heading">
              {heading ? <>{heading}</> : "Transform at Every Level"}
            </Animate>

            {description && (
              <Animate
                as="p"
                staggerIndex={2}
                className="mt-2 description text-brand-white/85 max-w-2xl"
              >
                {description}
              </Animate>
            )}
          </div>

          <div className="w-full grid md:grid-cols-12 grid-cols-1 gap-8">
            {TRANSFORMATION.map((item, index) => (
              <Animate
                key={item.title}
                staggerIndex={index}
                className="flex flex-col gap-2 border border-brand-secondary/30 shadow-xl shadow-brand-black/15 bg-brand-white text-brand-black px-6 py-8 rounded lg:col-span-4 md:col-span-6 xl:nth-last-of-type-[2]:col-start-3 xl:last-of-type:col-start-7 lg:nth-last-of-type-[2]:col-start-2 lg:last-of-type:col-start-7 xl:nth-last-of-type-[2]:col-span-4 xl:last-of-type:col-span-4 lg:nth-last-of-type-[2]:col-span-5 lg:last-of-type:col-span-5 md:last-of-type:col-start-4"
              >
                <div className="flex items-center justify-center gap-2 mr-auto border border-brand-secondary rounded-xs overflow-hidden pr-2">
                  <div className="w-7 h-7 flex justify-center items-center shrink-0 bg-brand-secondary text-brand-white font-bold text-sm uppercase">
                    0{index + 1}
                  </div>
                  <h3 className="title text-brand-secondary">
                    {item.subtitle}
                  </h3>
                </div>

                <h2 className="font-semibold xl:text-3xl text-2xl leading-[1.1] font-crimson">
                  {item.title}
                </h2>
                <p className="xl:text-xl text-lg mt-2">{item.description}</p>
              </Animate>
            ))}
          </div>
        </div>
      </div>

      {withBg && (
        <SvgSectionBreaker
          filename={bgFileName}
          className="-scale-100 opacity-80"
        />
      )}
    </>
  );
}
