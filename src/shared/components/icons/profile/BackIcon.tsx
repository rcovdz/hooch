import { SVGProps } from "react";

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.2856 5.44444C17.4946 2.76448 14.4447 1 10.9834 1C5.4697 1 1 5.47716 1 11C1 16.5229 5.4697 21 10.9834 21C14.4447 21 17.4946 19.2356 19.2856 16.5556"
      stroke="#66F542"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.1259 6.5L7.68887 10.9444M7.68887 10.9444L12.1259 15.3889M7.68887 10.9444H21"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SVGComponent;
