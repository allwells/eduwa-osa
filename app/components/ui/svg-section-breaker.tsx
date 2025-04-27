import cn from "~/utils/cn";

interface Props {
  width?: number;
  height?: number;
  filename: string;
  className?: string;
}

export default function SvgSectionBreaker({
  filename,
  className,
  width = 1024,
  height = 200,
}: Props) {
  return (
    <img
      width={width}
      height={height}
      loading="lazy"
      src={`/images/svgs/${filename}.svg`}
      className={cn("w-full left-0 object-cover", className)}
    />
  );
}
