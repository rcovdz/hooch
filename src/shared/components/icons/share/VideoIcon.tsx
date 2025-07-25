import { JSX, SVGProps } from "react";

const VideoIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) => (
  <svg
    width={22}
    height={20}
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 1H5C2.79086 1 1 2.79086 1 5V15C1 17.2091 2.79086 19 5 19H17C19.2091 19 21 17.2091 21 15V5C21 2.79086 19.2091 1 17 1Z"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.28 6.03994C8.19003 6.42994 8 8.5199 8 10.0399C8 11.5599 8.19003 13.5999 9.28 14.0399C10.37 14.4799 15 11.7499 15 10.0399C15 8.3299 10.44 5.61994 9.28 6.03994Z"
      stroke="#EA4040"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default VideoIcon;
