import cn from "~/utils/cn";
import { Link } from "react-router";
import { IconLoader2 } from "@tabler/icons-react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "outline" | "secondary" | "unstyled";

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

type ButtonAsLinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>;
type ButtonAsButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

export function Button({
  to,
  children,
  className,
  loading = false,
  variant = "primary",
  onClick,
  ...rest
}: ButtonProps) {
  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-brand- text-brand- border-brand- disabled:bg-brand-/40 disabled:text-brand-/80 disabled:border-transparent",
    outline:
      "bg-brand-/5 border-brand- text-brand- disabled:bg-transparent disabled:border-brand-/40 disabled:text-brand-/40",
    secondary:
      "bg-brand- text-brand- border-brand- disabled:bg-brand-/40 disabled:text-brand-/40 disabled:border-transparent",
    unstyled: "p-0",
  };

  const classNames = cn(
    "flex justify-center items-center uppercase border border-transparent px-4 py-2.5 text-sm font-normal rounded-xs gap-x-2 w-fit h-fit",
    variants[variant],
    className,
  );

  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={classNames}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classNames}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
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
