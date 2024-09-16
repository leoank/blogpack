import cx from "clsx";
import React from "react";

export type TDotsProps = Omit<React.HTMLProps<HTMLDivElement>, "children"> & {
  /**
   * Number of columns.
   */
  columns?: number;
  /**
   * Number of rows.
   */
  rows?: number;
  /**
   * Size of dots.
   */
  size?: number;
  /**
   * Distance between dots.
   */
  gap?: number;
};

export function Dots(props: TDotsProps) {
  const {
    columns = 10,
    rows = 10,
    size = 2,
    gap = 8,
    className,
    ...rest
  } = props;

  return (
    <div style={{ gap }} className={cx("flex flex-col", className)} {...rest}>
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="flex" style={{ gap }}>
          {Array.from({ length: columns }).map((_, idx) => (
            <div
              key={idx}
              className="rounded-full bg-gray-400"
              style={{
                height: `${size}px`,
                width: `${size}px`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
