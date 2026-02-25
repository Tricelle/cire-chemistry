interface WaxSealLogoProps {
  size?: number;
  className?: string;
  variant?: "light" | "dark";
}

const colors = {
  light: { seal: "#3E2723", letters: "#F5F0E6" },
  dark: { seal: "#F5F0E6", letters: "#3E2723" },
};

export function WaxSealLogo({
  size = 40,
  className,
  variant = "light",
}: WaxSealLogoProps) {
  const { seal, letters } = colors[variant];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      role="img"
      aria-label="Cire Chemistry"
      className={className}
    >
      <path
        d="M 32 2.5 C 37 2, 42 3.8, 46.5 6 C 51.5 8.5, 55.5 12, 58.5 16.5 C 60.5 20, 62 24.5, 62 29 C 62.2 34, 61.5 38.5, 59.5 42.5 C 57 47, 53.5 51, 49 54 C 44.5 57.2, 40 59.5, 35.5 61 C 31 62, 26 61.5, 21.5 59.5 C 17 57.5, 13 54, 10 49.5 C 7 45, 4.5 40, 3.5 35 C 2.5 30, 2.5 25, 4.5 20.5 C 6.5 16, 9.5 12, 13.5 8.5 C 17.5 5.5, 22 3.5, 27 2.8 C 29.5 2.4, 30.5 2.4, 32 2.5 Z"
        fill={seal}
      />
      <path
        d="M 30 19 C 28 17.5, 25.5 17, 23 17 C 16.5 17, 13 23, 13 32 C 13 41, 16.5 47, 23 47 C 25.5 47, 28 46.5, 30 45 L 29.5 42.5 C 28 43.5, 26 44, 23.5 44 C 19 44, 17.5 39.5, 17.5 32 C 17.5 24.5, 19 20, 23.5 20 C 26 20, 28 20.5, 29.5 21.5 Z"
        fill={letters}
      />
      <path
        d="M 50 19 C 48 17.5, 45.5 17, 43 17 C 36.5 17, 33 23, 33 32 C 33 41, 36.5 47, 43 47 C 45.5 47, 48 46.5, 50 45 L 49.5 42.5 C 48 43.5, 46 44, 43.5 44 C 39 44, 37.5 39.5, 37.5 32 C 37.5 24.5, 39 20, 43.5 20 C 46 20, 48 20.5, 49.5 21.5 Z"
        fill={letters}
      />
    </svg>
  );
}
