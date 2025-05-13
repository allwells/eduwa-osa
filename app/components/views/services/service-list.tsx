import cn from "~/utils/cn";
import Image from "~/components/ui/image";
import Animate from "~/components/common/animate";
import { SERVICES } from "~/utils/constant";
import { Button } from "~/components/form";
import { slugifyThis } from "~/utils/helpers";

export default function ServiceList() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full md:px-[5%] px-6 md:py-24 py-[72px] flex justify-center items-center overflow-hidden">
        <div className="w-full max-w-9xl mx-auto flex flex-col items-center">
          <div className="space-y-4 text-center w-fit">
            <Animate as="h3" className="title text-brand-primary">
              Offerings
            </Animate>
            <Animate as="h2" delay={150} className="heading">
              Choose Your Journey
            </Animate>
            <Animate
              as="p"
              delay={250}
              className="description max-w-[800px] text-brand-grey-2"
            >
              Below are my signature offers designed to meet you exactly where
              you are and close the gap that exists between your NOW and NEXT so
              you can scale your outcomes exponentially.
            </Animate>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1">
        {SERVICES.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={cn(
                "w-full md:px-[3%] px-6 lg:min-h-[800px] py-14 flex justify-center items-center bg-brand-transparent text-brand-white",
                isEven ? "bg-brand-secondary/5" : "bg-brand-primary/5",
              )}
            >
              <div
                className={cn(
                  "w-full max-w-9xl flex lg:flex-row flex-col justify-center lg:items-center lg:gap-16 sm:gap-12 gap-8",
                  {
                    "lg:flex-row-reverse": !isEven,
                  },
                )}
              >
                <div className="flex flex-col gap-4 w-full lg:max-w-lg max-w-3xl">
                  {/* <Animate
                    as="h3"
                    animation={isEven ? "fade-right" : "fade-left"}
                    className={cn(
                      "title text-brand-secondary",
                      isEven ? "text-brand-secondary" : "text-brand-primary",
                    )}
                  >
                    {item.title}
                  </Animate> */}
                  <Animate
                    as="h1"
                    animation={isEven ? "fade-right" : "fade-left"}
                    className="md:text-5xl xs:text-4xl text-[26px] leading-[1] font-bold font-crimson"
                  >
                    {item.title}
                  </Animate>
                  <Animate
                    as="p"
                    animation={isEven ? "fade-right" : "fade-left"}
                    className="sm:text-xl text-lg"
                  >
                    {item.description}
                  </Animate>
                  <Animate
                    animation={isEven ? "fade-right" : "fade-left"}
                    className="mt-4"
                  >
                    <Button
                      to={`/services/${slugifyThis(item.title)}`}
                      variant={isEven ? "secondary" : "primary"}
                      className="px-5 py-2.5"
                    >
                      Learn more
                    </Button>
                  </Animate>
                </div>

                <Animate
                  delay={100}
                  animation={isEven ? "fade-left" : "fade-right"}
                  className="w-full h-full max-w-[800px] lg:max-h-[580px] max-h-[500px] aspect-[800/580] overflow-hidden rounded-md"
                >
                  <Image width={800} height={580} src={item.image} />
                </Animate>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
