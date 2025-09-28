import React from "react";
import clsx from "@/util/clsx";

export type TContainerWithWrapperProps = React.HTMLProps<HTMLDivElement> & {
  wrapperProps?: Omit<React.HTMLProps<HTMLDivElement>, "children">;
};

export function ContainerWithWrapper(props: TContainerWithWrapperProps) {
  const { wrapperProps = {}, className, children, ...rest } = props;
  const { className: wrapperClassName, ...wrapperRest } = wrapperProps;

  return (
    <div
      className={clsx("flex flex-1 w-screen justify-center", className)}
      {...rest}
    >
      <div
        className={clsx("container flex-1 max-w-4xl", wrapperClassName)}
        {...wrapperRest}
      >
        {children}
      </div>
    </div>
  );
}
