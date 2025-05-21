import cn from "~/utils/cn";
import CustomImage from "~/components/ui/custom-image";

interface BrandLogoProps {
  className?: string;
}

export default function BrandLogo({ className }: BrandLogoProps) {
  return (
    <CustomImage
      src="logo.png"
      className={cn("object-contain h-auto md:w-16 w-12", className)}
    />
  );
}
