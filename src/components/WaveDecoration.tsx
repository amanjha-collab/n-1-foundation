interface WaveDecorationProps {
  position?: "top" | "bottom";
}

const WaveDecoration = ({ position = "bottom" }: WaveDecorationProps) => {
  const waveClass = position === "top" ? "top-0 scale-y-[-1]" : "bottom-0";

  return (
    <div
      className={`absolute ${waveClass} left-0 right-0 w-full overflow-hidden leading-[0] z-[2]`}
    >
      <svg viewBox="0 0 1512 85" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_12359_2583)">
          <path
            opacity="0.593"
            d="M0 9.93703C0 -27.9194 374.701 54.5853 752.701 54.5853C1130.7 54.5853 1512 -21.8065 1512 9.93703V84.9999H0C0 84.9999 0 47.7934 0 9.93703Z"
            fill="#FEFBF1"
          />
          <path
            opacity="0.373"
            d="M0 26.9468C0 -2.32994 374.751 61.683 752.751 61.683C1130.75 61.683 1512 2.39635 1512 26.9468V85H0C0 85 0 56.2248 0 26.9468Z"
            fill="#FEFBF1"
          />
          <path
            d="M0 47.4689C0 28.5407 372.87 67.0748 750.87 67.0748C1128.87 67.0748 1512 31.5971 1512 47.4689V85H0C0 85 0 66.3971 0 47.4689Z"
            fill="#FEFBF1"
          />
        </g>
        <defs>
          <clipPath id="clip0_12359_2583">
            <rect width="1512" height="85" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default WaveDecoration;
