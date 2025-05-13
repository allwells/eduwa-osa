import AOS from "aos";
import { useEffect } from "react";
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
  };
}

export const AOSProvider = ({ children, config }: AOSProviderProps) => {
  useEffect(() => {
    AOS.init({
      offset: 0,
      delay: 0,
      duration: 1400,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      throttleDelay: 50,
      anchorPlacement: "top-bottom",
      useClassNames: true,
      ...config,
    });
  }, [config]);

  return <>{children}</>;
};
