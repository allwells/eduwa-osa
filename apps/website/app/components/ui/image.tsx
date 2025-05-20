import cn from "~/utils/cn";
import type { ImgHTMLAttributes } from "react";

interface ImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "className"> {
  className?: string;
}

export default function Image({ className, ...props }: ImageProps) {
  return (
    <img
      loading="lazy"
      className={cn(
        "h-full w-full object-center object-cover relative",
        className,
      )}
      {...props}
    />
  );
}
