import { MDXComponents as TMDXComponents } from "mdx/types";
import clsx from "@/util/clsx";

import { References } from "./references";
import { Reference } from "./reference";

export const MDXComponents: TMDXComponents = {
  img: ({ className, alt, ...rest }) => (
    <span className="flex flex-col gap-2 justify-center items-center my-4">
      <img
        {...rest}
        alt={alt}
        className={clsx(
          "object-contain w-full object-center max-h-[70vh] rounded-md",
          className
        )}
      />
      <span className="text-xs">{alt}</span>
    </span>
  ),
  References,
  Reference,
};
