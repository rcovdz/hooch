import { SVGProps } from "react";

const WideIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={17}
    viewBox="0 0 32 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M27.25 1H4.75C2.67893 1 1 1.83947 1 2.875V14.125C1 15.1605 2.67893 16 4.75 16H27.25C29.3211 16 31 15.1605 31 14.125V2.875C31 1.83947 29.3211 1 27.25 1Z"
      className={props.className}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default WideIcon;
