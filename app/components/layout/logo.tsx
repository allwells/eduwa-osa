import cn from "~/utils/cn";

interface BrandLogoProps {
  className?: string;
}

export default function BrandLogo({ className }: BrandLogoProps) {
  return (
    <img
      loading="eager"
      src="/images/logo.png"
      alt="eduwa osa logo"
      className={cn(
        "object-center object-contain h-auto md:w-20 w-16",
        className,
      )}
    />
  );
}
