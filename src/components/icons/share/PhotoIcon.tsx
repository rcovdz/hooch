import { JSX, SVGProps } from "react";

const PhotoIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) => (
  <svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.72772 11.0843C7.78216 11.0843 8.63695 10.1965 8.63695 9.10117C8.63695 8.00591 7.78216 7.11803 6.72772 7.11803C5.67327 7.11803 4.81848 8.00591 4.81848 9.10117C4.81848 10.1965 5.67327 11.0843 6.72772 11.0843Z"
      stroke="#A8AD24"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.35358 21C10.6707 11.1835 15.0906 9.45804 20.0928 15.8338"
      stroke="#EA4040"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.7681 3.15175H4.81847C3.80574 3.15175 2.83451 3.56956 2.1184 4.31338C1.40229 5.0572 1 6.0661 1 7.11803V17.0337C1 18.0857 1.40229 19.0944 2.1184 19.8383C2.83451 20.5821 3.80574 21 4.81847 21H16.2739C17.2866 21 18.2579 20.5821 18.9739 19.8383C19.6901 19.0944 20.0923 18.0857 20.0923 17.0337V12.0759"
      stroke="#246FAD"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.9445 8.93256V1"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.8904 4.17303L17.9452 1L21 4.17303"
      stroke="#66F542"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default PhotoIcon;
