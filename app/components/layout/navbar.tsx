import cn from "~/utils/cn";
import BrandLogo from "./logo";
import type { LinkType } from "~/types";
import { useScrollPosition } from "~/hooks";
import { Button } from "~/components/form";
import { Link, useLocation } from "react-router";

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
    name: "Resources",
    path: "/resources",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const { scrollY } = useScrollPosition();

  const isPageActive = (item: LinkType): boolean => {
    return item.path === "/"
      ? pathname === "/"
      : pathname.startsWith(item.path);
  };

  return (
    <nav
      className={cn(
        "w-full md:px-[5%] px-6 py-2 md:h-24 h-20 z-40 sticky top-0 flex justify-center items-center",
        {
          "bg-brand-black/50 backdrop-blur-xs": scrollY >= 30,
        },
      )}
    >
      <div className="w-full flex justify-between itemscen max-w-9xl">
        <Link to="/" className="w-fit h-fit">
          <BrandLogo />
        </Link>

        <div className="w-fit md:flex hidden justify-center items-center gap-5">
          {NAVIGATIONS.map((item) => {
            const isActive = isPageActive(item);

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

          <Button variant="primary" to="/register" className="px-8">
            Join
          </Button>
        </div>
      </div>
    </nav>
  );
}
