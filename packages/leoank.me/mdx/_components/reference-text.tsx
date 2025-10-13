import { Anchor } from "@/components/anchor";
import React from "react";

export type TReferenceTextProps = {
  text: string;
};

export function ReferenceText(props: TReferenceTextProps) {
  const { text } = props;

  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    // push plain text before link
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    // push link
    parts.push(
      <Anchor
        key={match[2]}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
      >
        {match[1]}
      </Anchor>
    );

    lastIndex = linkRegex.lastIndex;
  }

  // push any remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <>{parts}</>;
}

export default ReferenceText;
