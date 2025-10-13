import clsx from "@/util/clsx";
import { LogoWithName } from "../logo-with-name";
import { NavbarItem, TNavbarItem } from "./item";
import { BLOG, EXPERIENCE, PUBLICATION } from "@/constants/routes";

export type TNavbarProps = {
  className?: string;
  doesLogoHaveName?: boolean;
};

const items: TNavbarItem[] = [
  {
    id: "publication",
    href: PUBLICATION,
    text: "Publication",
  },
  // Uncomment when we have experience page.
  // {
  //   id: "experience",
  //   href: EXPERIENCE,
  //   text: "Experience",
  // },
  {
    id: "blog",
    href: BLOG,
    text: "Blog",
  },
];

export function Navbar(props: TNavbarProps) {
  const { className, doesLogoHaveName = true } = props;

  return (
    <nav
      className={clsx(
        "rounded-lg overflow-hidden justify-between flex border-gray-800 sm:border",
        className
      )}
    >
      <LogoWithName
        className="sm:pl-4"
        imageProps={{ className: "size-8 lg:size-8" }}
        h1Props={{
          className: clsx(
            "hidden text-xl lg:text-xl",
            doesLogoHaveName && "block"
          ),
        }}
      />
      <div className="hidden justify-end sm:flex">
        {items.map((item) => (
          <NavbarItem key={item.id} item={item} />
        ))}
      </div>
    </nav>
  );
}
