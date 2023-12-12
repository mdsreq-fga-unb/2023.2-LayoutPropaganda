"use client";

import { Square, TestButtonHover } from "./styles";

export default function Edit() {
  return (
    <div>
      <TestButtonHover>
        <Square />
        <Square />
        <Square />
        <Square />
      </TestButtonHover>
    </div>
  );
}
