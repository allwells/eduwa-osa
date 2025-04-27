import cn from "~/utils/cn";
import { Link } from "react-router";
import { IconLoader2 } from "@tabler/icons-react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonVariant =
  | "default"
  | "outline"
  | "inverted"
  | "inverted-outline"
  | "primary"
  | "primary-outline"
  | "secondary"
  | "secondary-outline"
  | "unstyled";

type BaseProps = {
  to?: string;
  loading?: boolean;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
};

type ButtonAsLinkProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;
type ButtonAsButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

const VARIANTS: Record<ButtonVariant, string> = {
  default: cn(
    "bg-brand-black text-brand-white border-brand-black",
    "disabled:bg-brand-grey-2 disabled:text-brand-white/80 disabled:border-transparent",
  ),
  outline: cn(
    "bg-transparent text-brand-black border-brand-black",
    "hover:bg-brand-black hover:text-brand-white",
    "disabled:bg-transparent disabled:text-brand-grey-2 disabled:border-brand-grey-2",
  ),
  inverted: cn(
    "bg-brand-white text-brand-black border-brand-white",
    "disabled:bg-brand-white/50 disabled:text-brand-grey-1 disabled:border-transparent",
  ),
  "inverted-outline": cn(
    "bg-transparent text-brand-white border-brand-white",
    "hover:bg-brand-white hover:text-brand-black",
    "disabled:bg-transparent disabled:text-brand-grey-2 disabled:border-brand-grey-2",
  ),
  primary: cn(
    "bg-brand-primary text-brand-black border-brand-primary",
    "disabled:bg-brand-primary/50 disabled:text-brand-black/80 disabled:border-transparent",
  ),
  "primary-outline": cn(
    "bg-transparent text-brand-primary border-brand-primary",
    "hover:bg-brand-primary hover:text-brand-black",
    "disabled:bg-transparent disabled:text-brand-primary/50 disabled:border-brand-primary/50",
  ),
  secondary: cn(
    "bg-brand-secondary text-brand-white border-brand-secondary",
    "disabled:bg-brand-secondary/50 disabled:text-brand-white/80 disabled:border-transparent",
  ),
  "secondary-outline": cn(
    "bg-transparent text-brand-secondary border-brand-secondary",
    "hover:bg-brand-secondary hover:text-brand-white",
    "disabled:bg-transparent disabled:text-brand-secondary/50 disabled:border-brand-secondary/50",
  ),
  unstyled: "p-0",
};

export default function Button({
  to,
  children,
  className,
  loading = false,
  variant = "primary",
  onClick,
  ...props
}: ButtonProps) {
  const classNames = cn(
    "w-fit h-fit px-6 py-3 rounded",
    "flex justify-center items-center gap-2.5",
    "border border-transparent",
    "text-sm font-semibold tracking-[1px] uppercase",
    "transition-all duration-150",
    "hover:scale-105 active:scale-90",
    "disabled:hover:scale-none disabled:active:scale-none",
    VARIANTS[variant],
    className,
  );

  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={classNames}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classNames}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {loading && (
        <span className="w-5 h-5 flex justify-center items-center">
          <IconLoader2 className="h-5 w-5 md:stroke-2 stroke-1 shrink-0 animate-spin" />
        </span>
      )}
      {children}
    </button>
  );
}
