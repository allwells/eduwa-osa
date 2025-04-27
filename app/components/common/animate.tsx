import type { AOSAnchorPlacement, AOSAnimation, AOSEasing } from "~/types";

interface AnimateProps {
  animation?: AOSAnimation;
  duration?: number;
  delay?: number;
  easing?: AOSEasing;
  once?: boolean;
  mirror?: boolean;
  anchor?: string;
  anchorPlacement?: AOSAnchorPlacement;
  offset?: number;
  className?: string;
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Animate({
  as: Component = "div",
  duration,
  delay,
  easing,
  once,
  mirror,
  anchor,
  anchorPlacement,
  offset,
  children,
  className = "",
  animation = "fade-up",
}: AnimateProps) {
  return (
    <Component
      data-aos={animation}
      data-aos-duration={duration}
      data-aos-delay={delay}
      data-aos-easing={easing}
      data-aos-once={once}
      data-aos-mirror={mirror}
      data-aos-anchor={anchor}
      data-aos-anchor-placement={anchorPlacement}
      data-aos-offset={offset}
      className={className}
    >
      {children}
    </Component>
  );
}
