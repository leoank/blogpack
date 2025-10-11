"use client";
import { useState } from "react";

export default function Increment() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      {count}: <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
}
