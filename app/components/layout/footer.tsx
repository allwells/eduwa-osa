import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import BrandLogo from "./logo";
import { Link } from "react-router";
import type { LinkType } from "~/types";
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
          <BrandLogo className="md:w-20 w-16 h-auto contrast-200 saturate-0 invert" />
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
                className="w-fit h-fit md:text-sm text-xs font-medium hover:text-brand-secondary"
              >
                {item.name}
              </Link>
              <span className="sm:group-last-of-type/link:hidden sm:flex hidden text-brand-secondary font-bold xs:text-xl text-base">
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
              className="text-brand-secondary hover:scale-110 w-fit h-fit"
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
              className="text-brand-black hover:text-brand-secondary font-medium transition-colors"
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

// <footer className="w-full md:px-[5%] px-6 bg-brand-white text-brand-black flex flex-col items-center">
//   {/* Top footer section */}
//   <div className="w-full max-w-9xl md:pb-20 pt-12 flex flex-col xl:flex-row justify-between items-start gap-x-5 gap-y-10">
//     <div className="flex flex-col gap-4 shrink-0">
//       <Link to="/" className="w-fit h-fit">
//         <BrandLogo className="md:w-20 w-16 h-auto contrast-200 saturate-0 invert" />
//       </Link>

//       <p className="sm:text-base text-sm max-w-xs text-brand-grey-1">
//         Unlock Your Highest Self. Scale Your Outcomes.
//       </p>

//       <div className="flex justify-start items-center gap-x-4 sm:gap-x-6 w-full max-w-fit">
//         {FOOTER_LINKS.socials.map((social) => (
//           <Link
//             target="_blank"
//             key={social.name}
//             to={social.url}
//             className="text-primary hover:text-accent transition-colors duration-300 ease-in-out"
//           >
//             <social.icon className="h-auto w-6 shrink-0 stroke-[1.5]" />
//           </Link>
//         ))}
//       </div>
//     </div>

//     <div className="md:flex md:justify-end md:items-start grid grid-cols-1 sm:grid-cols-2 gap-y-8 md:gap-x-12 lg:gap-x-24 w-full md:w-fit">
//       <Links heading="Quick Links" links={[]} />
//       <Links heading="Company" links={[]} />

//       <div className="bg-accent col-span-full p-6 md:p-8 lg:p-14 md:max-w-fit w-full flex flex-col justify-center gap-y-4 md:gap-y-6 lg:gap-y-8 rounded-xl">
//         {/* {[].map((link) => (
//           <Link
//             key={link.name}
//             to={link.path}
//             className="text-base md:text-lg lg:text-xl text-white font-medium flex justify-start items-center gap-x-3"
//           >
//             <span>
//               <link.icon className="h-auto w-6 lg:w-8 shrink-0 stroke-[1.5]" />{" "}
//             </span>
//             <span>{link.name}</span>
//           </Link>
//         ))} */}
//       </div>
//     </div>
//   </div>

//   {/* Copyright */}
//   <div className="w-full max-w-9xl md:border-t md:border-brand-black/15 py-8 flex justify-center md:justify-start items-center">
//     <p className="text-brand-black/80 sm:text-xs text-[10px] tracking-[1.5px] uppercase">
//       &copy; {new Date().getFullYear()}{" "}
//       <Link
//         to="/"
//         className="text-brand-black hover:text-brand-secondary font-medium transition-colors"
//       >
//         Eduwa Osa
//       </Link>
//       . All rights reserved.
//     </p>
//   </div>
// </footer>

interface LinksSectionProps {
  heading: string;
  links: LinkType[];
}

function Links({ heading, links }: LinksSectionProps) {
  return (
    <div className="flex flex-col justify-start items-start gap-y-4 shrink-0">
      <h3 className="text-base font-bold uppercase text-brand-secondary">
        {heading}
      </h3>

      <div className="flex flex-col gap-y-2.5">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-sm uppercase text-brand-grey-2 hover:text-brand-secondary transition-colors duration-100"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
