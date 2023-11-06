// eslint-disable-next-line react/prop-types
export default function Plus({ width, height, ...props }) {
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
        d="M10 4.1665V15.8332"
        stroke="#FF6636"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.1665 10H15.8332"
        stroke="#FF6636"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
