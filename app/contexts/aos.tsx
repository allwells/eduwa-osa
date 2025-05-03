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
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: true,
      throttleDelay: 50,
      // anchorPlacement: "center-center",
      useClassNames: true,
      ...config,
    });
  }, [config]);

  return <>{children}</>;
};
