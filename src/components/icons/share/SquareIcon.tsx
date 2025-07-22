import { SVGProps } from "react";

const SquareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.5 1H3.5C2.11929 1 1 2.11929 1 3.5V18.5C1 19.8807 2.11929 21 3.5 21H18.5C19.8807 21 21 19.8807 21 18.5V3.5C21 2.11929 19.8807 1 18.5 1Z"
      className={props.className}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SquareIcon;
