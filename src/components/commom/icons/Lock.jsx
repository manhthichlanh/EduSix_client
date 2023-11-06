/* eslint-disable react/prop-types */
export default function Lock({ width, height, ...props }) {
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
        d="M12.6667 7.3335H3.33333C2.59695 7.3335 2 7.93045 2 8.66683V13.3335C2 14.0699 2.59695 14.6668 3.33333 14.6668H12.6667C13.403 14.6668 14 14.0699 14 13.3335V8.66683C14 7.93045 13.403 7.3335 12.6667 7.3335Z"
        fill="#808080"
        stroke="#808080"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66699 7.3335V4.66683C4.66699 3.78277 5.01818 2.93493 5.6433 2.30981C6.26842 1.68469 7.11627 1.3335 8.00033 1.3335C8.88438 1.3335 9.73223 1.68469 10.3573 2.30981C10.9825 2.93493 11.3337 3.78277 11.3337 4.66683V7.3335"
        stroke="#808080"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
