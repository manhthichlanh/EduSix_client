// eslint-disable-next-line react/prop-types
export default function ChevronLeft({ width, height, fill, ...props }) {
  return (
    <svg
      className=""
      width={width}
      height={height}
      viewBox="0 0 22 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 18L8 12L14 6L15.4 7.4L10.8 12L15.4 16.6L14 18Z"
        fill={fill}
      />
    </svg>
  );
}
