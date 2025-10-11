"use client";
import React from "react";
import { CodeBlock } from "react-code-block";

export type TCodeRendererProps = {
  children: { props: { className: string; children: string } };
};

function getLanguage(className: string): string {
  switch (className) {
    case "language-tsx":
      return "tsx";
    case "language-jsx":
      return "jsx";
    case "language-ts":
      return "ts";
    case "language-js":
      return "js";
    case "language-python":
      return "python";
    default:
      return className.replace("language-", "") || "python";
  }
}
export function CodeRenderer(props: TCodeRendererProps) {
  const { children } = props;
  const language = getLanguage(children.props.className);

  return (
    <CodeBlock code={children.props.children} language={language}>
      <CodeBlock.Code>
        <div className="table-row">
          <CodeBlock.LineContent className="table-cell">
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </div>
      </CodeBlock.Code>
    </CodeBlock>
  );
}
