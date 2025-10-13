import React from "react";
import clsx from "@/util/clsx";

export function PageHeading(props: React.HTMLProps<HTMLHeadingElement>) {
  const { className, ...rest } = props;
  return <h1 {...rest} className={clsx("text-4xl", className)} />;
}

export function PageDescription(props: React.HTMLProps<HTMLParagraphElement>) {
  const { className, ...rest } = props;
  return (
    <p {...rest} className={clsx("mt-2 text-small text-muted", className)} />
  );
}
