import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import BrandLogo from "./logo";
import { Link } from "react-router";
import { NAVIGATIONS } from "./navbar";
import type { ReactNode } from "react";

type SocialLink = {
  name: string;
  url: string;
  icon: ReactNode;
};

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/eduwaosa.co",
    icon: <IconBrandFacebook className="h-6 w-6 shrink-0 stroke-[1.3]" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/eduwaosa.co",
    icon: (
      <IconBrandInstagram className="h-[26px] w-[26px] shrink-0 stroke-[1.3]" />
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/eduwaosa",
    icon: <IconBrandLinkedin className="h-6 w-6 shrink-0 stroke-[1.3]" />,
  },
];

export default function Footer() {
  return (
    <footer className="w-full md:px-[5%] px-6 pt-12 pb-8 bg-brand-white text-brand-black flex flex-col items-center">
      <div className="w-full max-w-9xl flex flex-col justify-center items-center">
        <Link to="/" className="w-fit h-fit">
          <BrandLogo />
        </Link>

        <p className="sm:text-base text-sm max-w-x text-brand-grey-1 text-center mt-4">
          Unlock your highest self and <br /> scale your outcomes.
        </p>

        <div className="w-fit flex sm:flex-row flex-col justify-center items-center sm:gap-3 gap-4 mx-auto sm:mt-6 py-6">
          {NAVIGATIONS.map((item) => (
            <div
              key={item.name}
              className="group/link flex justify-center items-center xs:gap-3 gap-2 uppercase w-fit shrink-0"
            >
              <Link
                to={item.path}
                className="w-fit h-fit md:text-sm text-xs font-medium text-brand-grey-1 hover:text-brand-primary"
              >
                {item.name}
              </Link>
              <span className="sm:group-last-of-type/link:hidden sm:flex hidden text-brand-grey-2 font-medium xs:text-xl text-base">
                |
              </span>
            </div>
          ))}
        </div>

        <div className="w-fit flex justify-center items-center gap-6 mx-auto my-4">
          {SOCIAL_LINKS.map((social) => (
            <Link
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              to={social.url}
              className="text-brand-primary hover:scale-110 w-fit h-fit"
            >
              {social.icon}
            </Link>
          ))}
        </div>

        <div className="w-full mt-12">
          <p className="text-brand-black/80 text-center sm:text-xs text-[10px] tracking-[1.5px] uppercase">
            &copy; {new Date().getFullYear()}{" "}
            <Link
              to="/"
              className="text-brand-black hover:text-brand-primary font-bold transition-colors"
            >
              Eduwa Osa
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
