"use client";
import React, { useCallback, useState } from "react";
import { CodeBlock } from "react-code-block";
import { useCopyToClipboard } from "react-use";
import clsx from "@/util/clsx";
import { ClipboardCheckIcon, ClipboardIcon } from "@/components/icons";

export type TCodeRendererProps = {
  children: string;
  language: string;
  meta?: string | null;
};

function parseMeta(meta?: string | null) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const props = {} as Record<string, any>;
  const regex = /(\w+)(?:=\{([^}]+)\})?/g;

  if (!meta) {
    return props;
  }

  let match;
  while ((match = regex.exec(meta)) !== null) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, key, value] = match;
    if (value !== undefined) {
      props[key] = JSON.parse(value);
    } else {
      props[key] = true;
    }
  }
  return props;
}

export function CodeRenderer(props: TCodeRendererProps) {
  const { children, language, meta } = props;
  const { lines = [], words = [], showLineNumbers = false } = parseMeta(meta);

  const [state, copyToClipboard] = useCopyToClipboard();
  const [hasCopied, setHasCopied] = useState(false);

  const copyCode = useCallback(() => {
    copyToClipboard(children);
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 5000);
  }, [children]);

  return (
    <div className="relative">
      <CodeBlock
        data-has-linenumber
        code={children}
        language={language}
        lines={lines}
        words={words}
      >
        <CodeBlock.Code className={clsx(showLineNumbers && "has-linenumber")}>
          {({ isLineHighlighted }) => (
            <div
              className={clsx("table-row", isLineHighlighted && "highlighted")}
            >
              {showLineNumbers && (
                <CodeBlock.LineNumber
                  className={
                    "table-cell pr-4 pl-6 text-sm text-right select-none linenumber"
                  }
                />
              )}

              <CodeBlock.LineContent className="table-cell w-full pr-6">
                <CodeBlock.Token>
                  {({ isTokenHighlighted, children }) => (
                    <span
                      className={clsx(
                        isTokenHighlighted &&
                          "bg-highlight text-highlight-foreground rounded-md px-1 py-0.5"
                      )}
                    >
                      {children}
                    </span>
                  )}
                </CodeBlock.Token>
              </CodeBlock.LineContent>
            </div>
          )}
        </CodeBlock.Code>
      </CodeBlock>
      <button
        className="bg-background/30 text-foreground rounded-full px-3.5 py-1.5 absolute top-2 right-2 text-sm font-semibold"
        onClick={copyCode}
      >
        {state.value && hasCopied ? (
          <span className="flex items-center">
            <ClipboardCheckIcon className="stroke-white size-4" /> Copied!
          </span>
        ) : (
          <span className="flex items-center">
            <ClipboardIcon className="stroke-white size-4" /> Copy
          </span>
        )}
      </button>
    </div>
  );
}
