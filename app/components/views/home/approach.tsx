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
          "w-full md:px-[5%] px-6 md:pb-24 pb-12 pt-4 flex justify-center bg-brand-primary/80 text-brand-white relative overflow-hidden isolate",
          className
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
              {heading ? <>{heading}</> : "Transform from the Inside Out"}
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

          <div className="w-full max-w-5xl grid md:grid-cols-2 grid-cols-1 gap-8">
            {TRANSFORMATION.map((item, index) => (
              <Animate
                key={item.title}
                staggerIndex={index}
                className="flex flex-col gap-2 border border-brand-primary/30 shadow-xl shadow-brand-black/15 bg-brand-white text-brand-black px-6 py-8 rounded"
              >
                <div className="flex items-center justify-center gap-2 mr-auto border border-brand-primary rounded-xs overflow-hidden uppercase pl-2">
                  <h3 className="title text-brand-primary">Step</h3>
                  <div className="w-7 h-7 flex justify-center items-center shrink-0 bg-brand-primary text-brand-white font-bold text-sm">
                    0{index + 1}
                  </div>
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
