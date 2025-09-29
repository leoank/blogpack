import type { MDXComponents } from "mdx/types";
import clsx from "@/util/clsx";
import "./mdx.css";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl leading-snug font-bold my-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl leading-normal font-bold my-3">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl leading-normal font-bold my-2">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-body leading-normal my-2">{children}</p>
  ),
  img: ({ className, alt, ...rest }) => (
    <span className="flex flex-col gap-2 justify-center items-center my-4">
      <img
        {...rest}
        alt={alt}
        className={clsx(
          "object-contain w-full object-center max-h-[70vh]",
          className
        )}
      />
      <span className="text-xs">{alt}</span>
    </span>
  ),
  blockquote: ({ children }) => (
    <blockquote className="text-sm ml-3 my-4 text-muted pl-2 border-l-muted border-l-4 [&>p]:my-0">
      {children}
    </blockquote>
  ),
  ol: (props) => <ol {...props} className="list-decimal pl-8 md:pl-10" />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
