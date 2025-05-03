import cn from "~/utils/cn";
import { useState } from "react";
import BrandLogo from "./logo";
import MobileMenu from "./mobile-menu";
import type { LinkType } from "~/types";
import { useScrollPosition } from "~/hooks";
import { Button } from "~/components/form";
import { Link, useLocation } from "react-router";
import { IconMenu3 } from "@tabler/icons-react";
import { isPageActive } from "~/utils/helpers";

export const NAVIGATIONS: LinkType[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Catalyst Codex",
    path: "/blog",
  },
  {
    name: "Resources",
    path: "/resources",
  },
];

const TARGET = 30;

export default function Navbar() {
  const { pathname } = useLocation();
  const { scrollY } = useScrollPosition();
  const [isMobileMenuOpen, setMobileMenu] = useState<boolean>(false);

  return (
    <>
      <nav
        className={cn(
          "w-full md:px-[5%] px-6 py-2 md:h-20 h-16 z-40 sticky top-0 flex justify-center items-center isolate",
          {
            "bg-brand-black/85 backdrop-blur-sm": scrollY >= TARGET,
          },
        )}
      >
        <div className="w-full flex justify-between items-center max-w-9xl">
          <Link to="/" className="w-fit h-fit">
            <BrandLogo />
          </Link>

          <div className="w-fit md:flex hidden justify-center items-center gap-5">
            {NAVIGATIONS.map((item) => {
              const isActive = isPageActive(pathname, item.path);

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "font-normal text-sm uppercase text-brand-grey-2 hover:text-brand-white transition-colors duration-100",
                    {
                      "font-bold text-brand-primary hover:text-brand-primary":
                        isActive,
                    },
                  )}
                >
                  {item.name}
                </Link>
              );
            })}

            <Button variant="primary">Get Started</Button>
          </div>

          <Button
            type="button"
            variant="unstyled"
            onClick={() => setMobileMenu((o) => !o)}
            className="md:hidden flex w-fit h-fit text-brand-primary"
          >
            <IconMenu3 className="h-auto w-8 stroke-[1.5] shrink-0" />
          </Button>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setMobileMenu(false)}
      />
    </>
  );
}
