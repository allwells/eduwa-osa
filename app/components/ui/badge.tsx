import cn from "~/utils/cn";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
}

export default function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "uppercase text-xs font-bold leading-4 tracking-[1.5px] px-2 py-1 rounded-xs bg-brand-primary text-brand-white w-fit h-fit",
        className
      )}
      {...props}
    />
  );
}
