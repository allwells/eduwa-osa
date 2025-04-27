import cn from "~/utils/cn";
import type { HTMLAttributes } from "react";

interface TitleProps
  extends Omit<HTMLAttributes<HTMLHeadingElement>, "className"> {
  className?: string;
}

export default function Title({ className, ...props }: TitleProps) {
  return (
    <h3
      className={cn(
        "uppercase text-xs font-bold text-brand-primary leading-4 tracking-[1.5px]",
        className,
      )}
      {...props}
    />
  );
}
