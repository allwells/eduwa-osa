import cn from "~/utils/cn";
import BrandLogo from "./logo";
import { useEffect } from "react";
import { NAVIGATIONS } from "./navbar";
import { Button } from "~/components/form";
import { IconX } from "@tabler/icons-react";
import { Link, useLocation } from "react-router";
import { isPageActive } from "~/utils/helpers";
import { LayoutBackground } from "~/routes/layout";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div
      className={cn(
        "w-full h-dvh z-45 fixed inset-0 left-0 bg-brand-black transition-all duration-700 ease-in-out md:hidden flex flex-col items-center justify-start border-r border-brand-primary/10",
        isOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <div className="w-full h-full px-6 flex flex-col justify-center items-center relative">
        <div className="w-full flex justify-between items-center px-6 absolute top-4">
          <Link to="/" onClick={onClose} className="w-fit h-fit">
            <BrandLogo />
          </Link>

          <Button
            type="button"
            variant="unstyled"
            onClick={onClose}
            className="flex w-fit h-fit text-brand-primary"
          >
            <IconX className="h-auto w-6 stroke-[1.5] shrink-0" />
          </Button>
        </div>

        <div className="flex flex-col justify-center items-center w-fit xs:gap-8 gap-6">
          {NAVIGATIONS.map((item) => {
            const isActive = isPageActive(pathname, item.path);

            return (
              <Button
                key={item.name}
                to={item.path}
                onClick={onClose}
                variant="unstyled"
                className={cn(
                  "font-normal text-3xl uppercase text-brand-grey-2 transition-colors duration-100",
                  {
                    "font-bold text-brand-primary hover:text-brand-primary":
                      isActive,
                  },
                )}
              >
                {item.name}
              </Button>
            );
          })}

          <Button onClick={onClose} className="xs:text-xl text-xl px-6 py-4">
            Work With Eduwa
          </Button>
        </div>

        <LayoutBackground />
      </div>
    </div>
  );
}
