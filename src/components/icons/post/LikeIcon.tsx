import { JSX, SVGProps } from "react";

const LikeIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
  className?: string,
  stroke?: string,
) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M12.2889 1C15.1067 1 17 3.98 17 6.76C17 12.39 9.14222 17 9 17C8.85778 17 1 12.39 1 6.76C1 3.98 2.89333 1 5.71111 1C7.32889 1 8.38667 1.91 9 2.71C9.61333 1.91 10.6711 1 12.2889 1Z"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default LikeIcon;
