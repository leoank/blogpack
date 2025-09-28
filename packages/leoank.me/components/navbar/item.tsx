"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "@/util/clsx";

export type TNavbarItem = {
  id: string;
  href: string;
  text: string;
};

export type TNavbarItemProps = {
  item: TNavbarItem;
};

export function NavbarItem(props: TNavbarItemProps) {
  const { item } = props;
  const pathname = usePathname();

  return (
    <Link
      href={item.href}
      className={clsx(
        "p-4 hover:bg-gray-900",
        pathname.startsWith(item.href) && "bg-gray-900"
      )}
    >
      {item.text}
    </Link>
  );
}
