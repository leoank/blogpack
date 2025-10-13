"use client";

import { useCallback, useEffect, useState } from "react";
import { useMDXContext } from "../context";
import ReferenceText from "./reference-text";

export function References() {
  const {
    frontmatter: { references },
  } = useMDXContext();

  const [idForAnimatePluse, setIDForAnimatePulse] = useState("");

  const updateOnHashChange = useCallback((event: HashChangeEvent) => {
    const id = event.newURL.split("#")[1];

    if (!id) {
      return;
    }

    setIDForAnimatePulse(id);

    setTimeout(() => {
      setIDForAnimatePulse("");
    }, 3000);
  }, []);

  useEffect(() => {
    window.addEventListener("hashchange", updateOnHashChange);

    return () => {
      window.removeEventListener("hashchange", updateOnHashChange);
    };
  }, [updateOnHashChange]);

  if (!references || references.length === 0) {
    return null;
  }

  return (
    <div>
      <h2>References</h2>
      <ol>
        {references.map((ref, idx) => {
          const id = `reference-${idx}`;
          return (
            <li key={ref.name} id={id}>
              {id === idForAnimatePluse && (
                <span className="relative inline-flex size-3 mr-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                </span>
              )}
              <ReferenceText text={ref.text} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
