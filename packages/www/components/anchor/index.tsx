import clsx from "clsx";
import React from "react";

export function Anchor(props: React.HTMLProps<HTMLAnchorElement>) {
  const { className, ...rest } = props;
  return (
    <a
      className={clsx("border-dashed border-b border-b-blue-400", className)}
      {...rest}
    />
  );
}
