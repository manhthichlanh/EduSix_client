// eslint-disable-next-line react/prop-types
export default function ChevronRight({ width, height, fill, ...props }) {
  return (
    <svg
      className=""
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
     

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z" 
        fill={fill}
      />
    </svg>
  );
}
