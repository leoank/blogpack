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
import { useCallback, useEffect, useState } from "react";

export type TReference = {
  name: string;
};

export function Reference(props: TReference) {
  const { name } = props;

  const [isSmallWidthDevice, setIsSmallWidthDevice] = useState(false);

  const {
    frontmatter: { references },
  } = useMDXContext();

  const handleResize = useCallback(() => {
    if (!window) return;

    setIsSmallWidthDevice(window.innerWidth < 1200);
  }, []);

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

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

  if (isSmallWidthDevice) {
    return (
      <span>
        <sup className="px-0.5">[{idx + 1}]</sup>
        <br />
        <span className="block text-muted text-sm p-2">
          <sup>[{idx + 1}]</sup>
          <ReferenceText text={reference.text} />
        </span>
        <br />
      </span>
    );
  }

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
