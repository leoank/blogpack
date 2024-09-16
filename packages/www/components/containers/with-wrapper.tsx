import React from "react";
import cx from "clsx";

export type TContainerWithWrapperProps = React.HTMLProps<HTMLDivElement> & {
  wrapperProps?: Omit<React.HTMLProps<HTMLDivElement>, "children">;
};

export function ContainerWithWrapper(props: TContainerWithWrapperProps) {
  const { wrapperProps = {}, className, children, ...rest } = props;
  const { className: wrapperClassName, ...wrapperRest } = wrapperProps;

  return (
    <div
      className={cx("flex flex-1 w-screen justify-center", className)}
      {...rest}
    >
      <div
        className={cx("container flex-1", wrapperClassName)}
        {...wrapperRest}
      >
        {children}
      </div>
    </div>
  );
}
