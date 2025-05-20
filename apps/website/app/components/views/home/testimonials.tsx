import "swiper/css/free-mode";

import cn from "~/utils/cn";
import { Controller, FreeMode } from "swiper/modules";
import Animate from "~/components/common/animate";
import { TESTIMONIALS } from "~/utils/constant";
import { useEffect, useState, type ReactNode } from "react";
import type { Testimonial as TestimonialType } from "~/types";
import type { Swiper as SwiperType } from "swiper/types";
import { Swiper, SwiperSlide, type SwiperProps } from "swiper/react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import SvgSectionBreaker from "~/components/ui/svg-section-breaker";

type SwiperSlideMovement = {
  isBeginning: boolean;
  isEnd: boolean;
};

interface TestimonialsProps {
  title?: ReactNode;
  heading?: ReactNode;
  withBg?: boolean;
  bgFileName?: string;
  className?: string;
}

export default function Testimonials({
  title,
  heading,
  className,
  withBg = true,
  bgFileName = "arc-yellow",
}: TestimonialsProps) {
  const [swiper, setSwiper] = useState<SwiperType>();
  const [mounted, setMounted] = useState<boolean>(false);
  const [position, setPosition] = useState<SwiperSlideMovement>({
    isBeginning: true,
    isEnd: false,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const breakpoints: SwiperProps["breakpoints"] = {
    1024: { slidesPerView: 3.1, spaceBetween: 24 },
    768: { slidesPerView: 2.5, spaceBetween: 16 },
    0: { slidesPerView: 1.3, spaceBetween: 8 },
  };

  return (
    <>
      {withBg && (
        <SvgSectionBreaker
          filename={bgFileName}
          className="-scale-x-100 opacity-80 -mb-[0.3px]"
        />
      )}

      <div
        className={cn(
          "w-full md:pb-24 py-12 bg-brand-primary/80 text-brand-black flex justify-center relative isolate overflow-hidden",
          className,
        )}
      >
        <div className="w-full flex flex-col md:gap-[72px] gap-12 items-center">
          <div className="w-full max-w-9xl md:px-[5%] px-6 flex flex-col gap-4 items-center text-center">
            <Animate as="h3" className="title">
              {title ? title : "Real Results"}
            </Animate>
            <Animate as="h2" staggerIndex={1} className="heading leading-[0.9]">
              {heading ? (
                <>{heading}</>
              ) : (
                <>
                  Voices of <br /> Transformation
                </>
              )}
            </Animate>
          </div>

          <div className="w-full flex flex-col gap-y-12">
            {mounted ? (
              <div className="w-full grid">
                <Swiper
                  speed={1200}
                  init={false}
                  freeMode={true}
                  controller={{ control: swiper }}
                  onSwiper={(swiper) => setSwiper(swiper)}
                  onSlideChange={(s) =>
                    setPosition({ isBeginning: s.isBeginning, isEnd: s.isEnd })
                  }
                  modules={[Controller, FreeMode]}
                  breakpoints={breakpoints}
                  className="w-full! grid! md:px-[5%]! px-6!"
                >
                  {TESTIMONIALS.map((testimonial, index) => (
                    <SwiperSlide key={testimonial.id} className="h-full!">
                      <Animate
                        staggerIndex={index}
                        className="grid h-full w-full"
                      >
                        <Testimonial
                          {...{ ...testimonial, filename: bgFileName }}
                        />
                      </Animate>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ) : (
              <div className="w-full flex justify-start items-center lg:gap-6 md:gap-4 gap-2 overflow-hidden md:px-[5%] px-6">
                {[1, 2, 3, 4, 5].map((value) => (
                  <div
                    key={value}
                    className="w-full shrink-0 max-w-[400px] aspect-[420/390] relative rounded bg-brand-black/50 animate-pulse"
                  />
                ))}
              </div>
            )}

            <div className="w-full flex justify-center">
              {mounted && swiper ? (
                <Animate
                  animation="zoom-in"
                  className="w-fit flex justify-center items-center gap-6"
                >
                  <button
                    type="button"
                    onClick={() => swiper.slidePrev()}
                    disabled={position.isBeginning}
                    className="w-fit h-fit lg:p-4 md:p-3 p-2 rounded bg-brand-black text-brand-white disabled:text-brand-white/50 disabled:bg-brand-grey-1"
                  >
                    <IconArrowLeft className="lg:h-7 lg:w-7 md:h-6 md:w-6 h-5 w-5 shrink-0 stroke-[1.5]" />
                  </button>

                  <button
                    type="button"
                    onClick={() => swiper.slideNext()}
                    disabled={position.isEnd}
                    className="w-fit h-fit lg:p-4 md:p-3 p-2 rounded bg-brand-black text-brand-white disabled:text-brand-white/50 disabled:bg-brand-grey-1"
                  >
                    <IconArrowRight className="lg:h-7 lg:w-7 md:h-6 md:w-6 h-5 w-5 shrink-0 stroke-[1.5]" />
                  </button>
                </Animate>
              ) : (
                <div className="w-fit flex justify-center items-center gap-5">
                  {[1, 2].map((value) => (
                    <div
                      key={value}
                      className="w-12 h-12 rounded shrink-0 bg-brand-black/50 animate-pulse"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {withBg && (
        <SvgSectionBreaker
          filename={bgFileName}
          className="-scale-y-100 opacity-80 -mt-[0.3px]"
        />
      )}
    </>
  );
}

function Testimonial(props: { filename?: string } & TestimonialType) {
  return (
    <div className="w-full h-full flex justify-center items-center relative rounded border border-brand-black/50 bg-brand-black text-brand-white md:p-6 p-4">
      <div className="w-full h-full flex flex-col items-start text-left justify-between gap-y-12">
        <div className="flex gap-2 justify-start items-center w-full">
          {props.photo && (
            <div className="w-12 h-12 rounded-full shrink-0 bg-brand-white/10"></div>
          )}

          <div className="flex flex-col gap-1">
            <h2
              className={cn(
                "text-base font-medium leading-[1.2] tracking-tight uppercase",
                {
                  "text-brand-primary":
                    props.filename && props.filename.endsWith("yellow"),
                  "text-brand-secondary-muted contrast-100 saturate-200":
                    props.filename && props.filename.endsWith("red"),
                },
              )}
            >
              {props.name}
            </h2>
            <h3 className="font-satoshi-italic text-sm uppercase text-brand-grey-2">
              {props.location}
            </h3>
          </div>
        </div>

        <div className="lg:text-xl md:text-lg text-base font-normal mt-auto pt-12">
          {props.content}
        </div>
      </div>
    </div>
  );
}
