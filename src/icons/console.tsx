import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

export default function ConsoleIcon({ width = 24, height = 22 }) {
  const { colorMode } = useColorMode();
  const color = colorMode === "dark" ? "white" : "black";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 22"
      fill="none"
    >
      <rect
        width="7.03329"
        height="7.03712"
        transform="matrix(-1 0 0 1 23.0015 13.9629)"
        fill={color}
        stroke="#181818"
        stroke-width="0.438341"
        stroke-linejoin="round"
      />
      <path
        d="M19.8756 12.0081H12.8423L15.9682 13.9629H23.0015L19.8756 12.0081Z"
        fill="#0D93FC"
        stroke="#181818"
        stroke-width="0.438341"
        stroke-linejoin="round"
      />
      <path
        d="M15.9692 13.9629L12.8433 12.0082V19.0453L15.9692 21V13.9629Z"
        fill="#0D93FC"
        stroke="#181818"
        stroke-width="0.438341"
        stroke-linejoin="round"
      />
      <rect
        width="7.03329"
        height="7.03712"
        transform="matrix(-1 0 0 1 11.1587 2.95564)"
        fill={color}
        stroke="#181818"
        stroke-width="0.438341"
        stroke-linejoin="round"
      />
      <path
        d="M8.03278 1.00092H0.999492L4.1254 2.95567H11.1587L8.03278 1.00092Z"
        fill={color}
        stroke="#181818"
        stroke-width="0.438341"
        stroke-linejoin="round"
      />
      <path
        d="M4.12646 2.95567L1.00056 1.00092V8.03803L4.12646 9.99279V2.95567Z"
        fill={color}
        stroke="#181818"
        stroke-width="0.438341"
        stroke-linejoin="round"
      />
      <rect
        width="7.03034"
        height="6.9577"
        transform="matrix(-1 0 0 1 23.0015 7.16727)"
        fill={color}
        stroke="#181818"
        stroke-width="0.438341"
        stroke-linejoin="round"
      />
      <path
        d="M19.8769 5.23454H12.8465L15.9711 7.16723H23.0015L19.8769 5.23454Z"
        fill={color}
        stroke="#181818"
        stroke-width="0.438341"
        stroke-linejoin="round"
      />
      <path
        d="M15.9722 7.16719L12.8476 5.2345V12.1922L15.9722 14.1249V7.16719Z"
        fill={color}
        stroke="#181818"
        stroke-width="0.438341"
        stroke-linejoin="round"
      />
      <rect
        width="7.03034"
        height="7.03712"
        transform="matrix(-1 0 0 1 16.02 13.9629)"
        fill={color}
        stroke="#181818"
        stroke-width="0.438341"
        stroke-linejoin="round"
      />
      <path
        d="M12.8954 12.0081H5.86508L8.98968 13.9629H16.02L12.8954 12.0081Z"
        fill={color}
        stroke="#181818"
        stroke-width="0.438341"
        stroke-linejoin="round"
      />
      <path
        d="M8.98926 13.9629L5.86466 12.0082V19.0453L8.98926 21V13.9629Z"
        fill={color}
        stroke="#181818"
        stroke-width="0.438341"
        stroke-linejoin="round"
      />
    </svg>
  );
}
