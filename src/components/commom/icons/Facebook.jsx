/* eslint-disable react/prop-types */
export default function Facebook({ width, height, ...props }) {
  return (
    <svg
      className=""
      {...props}
      width={width} 
      height={height} 

      viewBox="0 0 42 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
    <ellipse cx="21.2286" cy="19.7284" rx="18.1376" ry="18.1376" fill="url(#paint0_linear_1015_2669)"/>
<path d="M27.9831 26.9337L28.7888 21.8144H23.7487V18.4938C23.7487 17.093 24.4514 15.7267 26.7089 15.7267H29.0018V11.3684C29.0018 11.3684 26.9218 11.0225 24.9342 11.0225C20.7814 11.0225 18.0696 13.4748 18.0696 17.9127V21.8144H13.4553V26.9337H18.0696V39.3099C18.996 39.4517 19.9437 39.5243 20.9091 39.5243C21.8746 39.5243 22.8223 39.4517 23.7487 39.3099V26.9337H27.9831Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_1015_2669" x1="21.2286" y1="1.59082" x2="21.2286" y2="37.7584" gradientUnits="userSpaceOnUse">
<stop stopColor="#18ACFE"/>
<stop offset="1" stopColor="#0163E0"/>
</linearGradient>
</defs>
    </svg>
  );
}
