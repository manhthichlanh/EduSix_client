// eslint-disable-next-line react/prop-types
export default function ChevronDown({ width, height, ...props }) {
  return (
    <svg
      className=""
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13 6L8 11L3 6"
        stroke="#1D2026"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
