import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

export default function TurnKeyIcon({ width = 20, height = 20 }) {
  const { colorMode } = useColorMode();
  const color = colorMode === "dark" ? "white" : "black";
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.56187 11.8182H0L15.6522 0L11.4381 8.18183H20L4.34782 20L8.56187 11.8182Z"
        fill={color}
      />
    </svg>
  );
}
