// eslint-disable-next-line react/prop-types
export default function ArrowRight({ width, height, ...props }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="0.389893" width="24" height="24" rx="12" fill="#FF6636" />
      <path
        d="M18.7498 11.77H6.24976M18.7498 11.77L14.7498 7.52002M18.7498 11.77L14.7498 16.02"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
