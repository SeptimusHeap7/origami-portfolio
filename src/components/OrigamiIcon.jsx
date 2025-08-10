import React from "react";

export default function OrigamiIcon({ width = 48, height = 48, color = "#7d5e52" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Body */}
      <polygon
        points="32 2 12 22 20 38 32 28 44 38 52 22 32 2"
        fill={color}
        stroke="#5a4b41"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Head */}
      <polygon
        points="12 22 7 27 12 32 15 28 12 22"
        fill={color}
        stroke="#5a4b41"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Tail */}
      <polygon
        points="52 22 57 27 52 32 49 28 52 22"
        fill={color}
        stroke="#5a4b41"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Wing left */}
      <polygon
        points="20 38 18 48 32 38 32 28"
        fill={color}
        stroke="#5a4b41"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Wing right */}
      <polygon
        points="44 38 46 48 32 38 32 28"
        fill={color}
        stroke="#5a4b41"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
