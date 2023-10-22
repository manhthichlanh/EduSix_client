// eslint-disable-next-line react/prop-types
export default function ChecvronUp({ width, height, ...props }) {
  return (
    <svg
      className=""
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 12.5L10 7.5L5 12.5"
        stroke="#333333"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
