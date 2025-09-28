import clsx from "@/util/clsx";
import Link from "next/link";
import React from "react";

export type LogoWithNameProps = {
  className?: string;
  imageProps?: Omit<React.HTMLProps<HTMLImageElement>, "src" | "alt">;
  h1Props?: React.HTMLProps<HTMLHeadingElement>;
};

export function LogoWithName(props: LogoWithNameProps) {
  const { className, imageProps, h1Props } = props;
  return (
    <Link
      href="/"
      className={clsx("flex gap-3 items-center select-none", className)}
    >
      <img
        alt="logo"
        {...imageProps}
        className={clsx("size-8 mt-1 lg:size-12", imageProps?.className)}
        src="/assets/logo.svg"
      />
      <div>
        <h1
          {...h1Props}
          className={clsx(
            "font-light text-3xl lg:text-4xl",
            h1Props?.className
          )}
        >
          Ankur Kumar
        </h1>
      </div>
    </Link>
  );
}
