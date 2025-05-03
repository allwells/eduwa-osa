import cn from "~/utils/cn";

interface BrandLogoProps {
  className?: string;
}

export default function BrandLogo({ className }: BrandLogoProps) {
  return (
    <img
      loading="lazy"
      src="/images/logo.png"
      className={cn(
        "object-center object-contain h-auto md:w-16 w-12",
        className,
      )}
    />
  );
}
