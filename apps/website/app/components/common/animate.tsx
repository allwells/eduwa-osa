import "aos/dist/aos.css";
import { memo, forwardRef } from "react";
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
  disableOnMobile?: boolean;
  staggerIndex?: number;
}

/**
 * Enhanced Animate component with performance optimizations
 * and mobile-specific handling
 */
const Animate = forwardRef<HTMLElement, AnimateProps>(
  (
    {
      as: Component = "div",
      duration,
      delay,
      easing = "ease-out",
      once = true, // Default to true for better performance
      mirror = false,
      anchor,
      anchorPlacement,
      offset,
      children,
      className = "",
      animation = "fade-up",
      disableOnMobile = false,
      staggerIndex = 0,
    },
    ref,
  ) => {
    // Calculate staggered delay if provided
    const calculatedDelay =
      typeof delay === "number"
        ? delay
        : staggerIndex > 0
          ? staggerIndex * 100 // Default stagger of 100ms per item
          : undefined;

    // Detect mobile for conditional rendering
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    // Skip animation attributes if disabled on mobile
    const animationProps =
      disableOnMobile && isMobile
        ? {}
        : {
            "data-aos": animation,
            "data-aos-duration": duration,
            "data-aos-delay": calculatedDelay,
            "data-aos-easing": easing,
            "data-aos-once": once,
            "data-aos-mirror": mirror,
            "data-aos-anchor": anchor,
            "data-aos-anchor-placement": anchorPlacement,
            "data-aos-offset": offset,
          };

    return (
      // @ts-ignore - Component could be any valid JSX element
      <Component ref={ref} {...animationProps} className={className}>
        {children}
      </Component>
    );
  },
);

// Add display name for React DevTools
Animate.displayName = "Animate";

// Memoize the component to prevent unnecessary re-renders
export default memo(Animate);
