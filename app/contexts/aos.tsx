import AOS from "aos";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import type { AOSAnchorPlacement, AOSEasing } from "~/types";

interface AOSProviderProps {
  children: React.ReactNode;
  config?: {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: AOSEasing;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: AOSAnchorPlacement;
    disableForMobile?: boolean;
    throttleDelay?: number;
    startEvent?: string;
    debounceDelay?: number;
  };
}

export const AOSProvider = ({ children, config }: AOSProviderProps) => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  // Initialize AOS once when component mounts
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    AOS.init({
      // Core settings
      offset: 50,
      delay: 0,
      duration: 800, // Shorter duration on mobile
      // duration: isMobile ? 700 : 1000, // Shorter duration on mobile
      easing: "ease-out", // Smoother easing function
      once: true, // Better performance with once: true
      mirror: false,
      anchorPlacement: "center-bottom",

      // Performance optimizations
      throttleDelay: 99, // Throttle scroll events
      debounceDelay: 50, // Debounce resize events

      // Mobile handling
      disable: config?.disableForMobile && isMobile,

      // Start event (defaults to 'DOMContentLoaded')
      startEvent: config?.startEvent || "DOMContentLoaded",

      // Override with any custom config
      ...config,
    });

    setInitialized(true);

    // Add resize handler with debouncing
    let resizeTimer: number;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        AOS.refresh();
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    // Clean up AOS when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);

      // No official cleanup method, but we can ensure animations are reset
      document.querySelectorAll("[data-aos]").forEach((el) => {
        el.removeAttribute("data-aos-animate");
      });
    };
  }, []);

  // Handle route changes with a smarter refresh
  useEffect(() => {
    if (!initialized) return;

    // Clear any existing animations before refreshing
    document.querySelectorAll("[data-aos].aos-animate").forEach((el) => {
      el.classList.remove("aos-animate");
    });

    // Small timeout to allow for DOM to update before refreshing
    const timeoutId = setTimeout(() => {
      AOS.refresh();

      // Additional timeout for animations to trigger after refresh
      setTimeout(() => {
        // Force a re-scan after any dynamic content has loaded
        AOS.refreshHard();
      }, 50);
    }, 10);

    return () => clearTimeout(timeoutId);
  }, [location.pathname, initialized]);

  return <>{children}</>;
};
