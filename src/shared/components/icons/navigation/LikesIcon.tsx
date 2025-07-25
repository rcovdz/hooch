import { SVGProps } from "react";

const LikesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.6389 1C23.0417 1 26 5.65625 26 10C26 18.7969 13.7222 26 13.5 26C13.2778 26 1 18.7969 1 10C1 5.65625 3.95833 1 8.36111 1C10.8889 1 12.5417 2.42188 13.5 3.67188C14.4583 2.42188 16.1111 1 18.6389 1Z"
      stroke="#EA4040"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default LikesIcon;
