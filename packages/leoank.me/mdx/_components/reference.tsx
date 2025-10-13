"use client";

import { Anchor } from "@/components/anchor";
import { useMDXContext } from "../context";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardPortal,
  HoverCardArrow,
  HoverCardContent,
} from "@radix-ui/react-hover-card";
import ReferenceText from "./reference-text";

export type TReference = {
  name: string;
};

export function Reference(props: TReference) {
  const { name } = props;

  const {
    frontmatter: { references },
  } = useMDXContext();

  if (!references) {
    throw new Error("No reference is defined.");
  }

  const idx = references.findIndex((ref) => ref.name === name);

  if (idx === -1) {
    throw new Error(
      `Reference with name "${name}" is not found. All references are:${JSON.stringify(
        references.map((ref) => ref.name)
      )}`
    );
  }

  const reference = references[idx];

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <sup className="px-0.5">
          <Anchor id={`cited-reference-${idx}`} href={`#reference-${idx}`}>
            [{idx + 1}]
          </Anchor>
        </sup>
      </HoverCardTrigger>
      <HoverCardPortal>
        <HoverCardContent className="max-w-sm bg-foreground rounded-md p-2 text-background text-sm">
          <HoverCardArrow className="h-4 w-4" />
          <ReferenceText text={reference.text} />
        </HoverCardContent>
      </HoverCardPortal>
    </HoverCard>
  );
}
