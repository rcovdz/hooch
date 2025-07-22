import { SVGProps } from "react";

const OriginalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={22}
    viewBox="0 0 32 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M27.25 1H4.75C2.67893 1 1 2.11929 1 3.5V18.5C1 19.8807 2.67893 21 4.75 21H27.25C29.3211 21 31 19.8807 31 18.5V3.5C31 2.11929 29.3211 1 27.25 1Z"
      className={props.className}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default OriginalIcon;
