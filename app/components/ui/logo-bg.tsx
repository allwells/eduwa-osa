import cn from "~/utils/cn";
import Animate from "~/components/common/animate";

interface LogoBackgroundProps {
  classNames?: {
    wrapper?: string;
    image?: string;
  };
}

export default function LogoBackground({ classNames }: LogoBackgroundProps) {
  return (
    <Animate
      animation="zoom-in"
      className={cn(
        "absolute -z-[1] h-full w-full flex flex-col gap-6 justify-center items-center inset-0 m-auto overflow-hidden",
        classNames?.wrapper,
      )}
    >
      {/* <div className="w-full h-full bg-[url('/images/logo.png')] bg-repeat bg-center bg-contain saturate-0 invert contrast-200 opacity-10" /> */}

      <img
        loading="lazy"
        src="/images/logo.png"
        className={cn(
          "h-full w-auto object-center object-contain saturate-0 invert contrast-200 opacity-10",
          classNames?.image,
        )}
      />
    </Animate>
  );
}
