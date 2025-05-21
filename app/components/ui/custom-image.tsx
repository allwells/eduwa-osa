import cn from "~/utils/cn";
import type { ImgHTMLAttributes } from "react";

type CustomImageProps = ImgHTMLAttributes<HTMLImageElement>;

export default function CustomImage({
  src,
  className,
  ...props
}: CustomImageProps) {
  if (!src) return;

  return (
    <img
      loading="lazy"
      src={src.startsWith("http") ? src : `/images/${src}`}
      className={cn(
        "h-full w-full object-center object-cover relative transition-all duration-300 ease-in-out",
        className
      )}
      {...props}
    />
  );
}
