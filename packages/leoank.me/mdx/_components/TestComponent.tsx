"use client";

import React from "react";

export default function TestComponent(props: React.PropsWithChildren) {
  const [state, setState] = React.useState(0);

  return (
    <div>
      <h1>Test Component.</h1>
      <p>{props.children}</p>
      <span>Counter: {state}</span>
      <button onClick={() => setState((prev) => prev + 1)}>Increment</button>
    </div>
  );
}
