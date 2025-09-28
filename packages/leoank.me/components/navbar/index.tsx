import clsx from "@/util/clsx";
import { LogoWithName } from "../logo-with-name";
import Link from "next/link";
import { ContainerWithWrapper } from "../containers/with-wrapper";

export type TNavbarProps = {
  className?: string;
};

type TNavbarItem = {
  id: string;
  href: string;
  text: string;
};

const items: TNavbarItem[] = [
  {
    id: "publication",
    href: "/publication",
    text: "Publication",
  },
  {
    id: "experience",
    href: "/experience",
    text: "Experience",
  },
  {
    id: "blog",
    href: "/blog",
    text: "Blog",
  },
];

export function Navbar(props: TNavbarProps) {
  const { className } = props;

  return (
    <nav
      className={clsx(
        "rounded-lg border border-gray-800 overflow-hidden hidden justify-between sm:flex",
        className
      )}
    >
      <LogoWithName
        className="pl-4"
        imageProps={{ className: "size-8 lg:size-8" }}
        h1Props={{ className: "hidden" }}
      />
      <div className="flex justify-end">
        {items.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className="p-4 hover:bg-gray-900"
          >
            {item.text}
          </Link>
        ))}
      </div>
    </nav>
  );
}
