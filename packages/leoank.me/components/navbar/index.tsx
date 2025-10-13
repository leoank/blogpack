import clsx from "@/util/clsx";
import { LogoWithName } from "../logo-with-name";
import { NavbarItem, TNavbarItem } from "./item";
import { BLOG, PUBLICATION } from "@/constants/routes";

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
        "rounded-lg overflow-hidden justify-between flex border-gray-800 border sm:border",
        className
      )}
    >
      <LogoWithName
        className="pl-2 sm:pl-4"
        imageProps={{ className: "size-6 lg:size-8" }}
        h1Props={{
          className: clsx(
            "hidden text-lg lg:text-xl",
            doesLogoHaveName && "block"
          ),
        }}
      />
      <div className="flex justify-end sm:flex">
        {items.map((item) => (
          <NavbarItem key={item.id} item={item} />
        ))}
      </div>
    </nav>
  );
}
