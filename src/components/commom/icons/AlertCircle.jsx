/* eslint-disable react/prop-types */
export default function Google({ width, height, ...props }) {
    return (
      <svg
        className=""
        {...props}
        width={width} 
        height={height} 

        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
     <g clipPath="url(#clip0_1027_3155)">
<path d="M8.00016 14.7244C11.6821 14.7244 14.6668 11.7397 14.6668 8.05778C14.6668 4.37588 11.6821 1.39111 8.00016 1.39111C4.31826 1.39111 1.3335 4.37588 1.3335 8.05778C1.3335 11.7397 4.31826 14.7244 8.00016 14.7244Z" stroke="#B5B5B5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 5.39111V8.05778" stroke="#B5B5B5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 10.7241H8.00667" stroke="#B5B5B5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1027_3155">
<rect width="16" height="16" fill="white" transform="translate(0 0.0576172)"/>
</clipPath>
</defs>
      </svg>
    );
  }
  