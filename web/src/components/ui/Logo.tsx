"use client";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "#ffffff" : "#1a1a1a";
  const accentColor = "#7b6bb2";

  return (
    <svg
      width="140"
      height="36"
      viewBox="0 0 140 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Amélia Saúde"
    >
      {/* Monogram "A" — the mark */}
      <g>
        <path
          d="M8 28 L17 8 L26 28"
          stroke={accentColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M11 21 L23 21"
          stroke={accentColor}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Accent dot */}
        <circle cx="17" cy="5" r="1.5" fill={accentColor} />
      </g>

      {/* Wordmark "amélia saúde" */}
      <text
        x="34"
        y="23"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="16"
        fontWeight="400"
        letterSpacing="0.04em"
        fill={textColor}
        style={{ textTransform: "uppercase" }}
      >
        amélia
      </text>
      <text
        x="34"
        y="32"
        fontFamily="'DM Sans', Arial, sans-serif"
        fontSize="8"
        fontWeight="400"
        letterSpacing="0.18em"
        fill={accentColor}
        style={{ textTransform: "uppercase" }}
      >
        saúde
      </text>
    </svg>
  );
}
