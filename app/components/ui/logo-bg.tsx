import cn from "~/utils/cn";
import Animate from "~/components/common/animate";

interface LogoBackgroundProps {
  className?: string;
}

export default function LogoBackground({ className }: LogoBackgroundProps) {
  return (
    <Animate
      animation="zoom-in"
      className={cn(
        "absolute -z-[1] h-full w-full flex justify-center items-center inset-0 m-auto",
        className,
      )}
    >
      {/* <div className="w-full h-full bg-[url('/images/logo.png')] bg-repeat bg-center bg-contain saturate-0 invert contrast-200 opacity-10" /> */}

      <img
        loading="lazy"
        src="/images/logo.png"
        className="h-full w-auto object-center object-contain saturate-0 invert contrast-200 opacity-10"
      />
    </Animate>
  );
}
