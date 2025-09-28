import React from "react";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ORCIDIcon,
  TIconProps,
} from "../icons";

export type TSocialLink = {
  id: string;
  icon: (props: TIconProps) => React.ReactNode;
  href: string;
};

export const socialLinks: TSocialLink[] = [
  {
    id: "github",
    icon: GithubIcon,
    href: "https://github.com/leoank",
  },
  {
    id: "orcid",
    icon: ORCIDIcon,
    href: "https://orcid.org/0000-0002-7686-7335",
  },
  {
    id: "mail",
    icon: MailIcon,
    href: "mailto:leoank98@gmail.com",
  },
];
