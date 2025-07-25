import { JSX, SVGProps } from "react";

const CommentIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
  className?: string,
  stoke?: string,
) => (
  <svg
    width={20}
    height={18}
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M6 8H6.01M10 8H10.01M14 8H14.01M19 17L15.6757 15.3378C15.4237 15.2118 15.2977 15.1488 15.1656 15.1044C15.0484 15.065 14.9277 15.0365 14.8052 15.0193C14.6672 15 14.5263 15 14.2446 15H4.2C3.07989 15 2.51984 15 2.09202 14.782C1.71569 14.5903 1.40973 14.2843 1.21799 13.908C1 13.4802 1 12.9201 1 11.8V4.2C1 3.07989 1 2.51984 1.21799 2.09202C1.40973 1.71569 1.71569 1.40973 2.09202 1.21799C2.51984 1 3.0799 1 4.2 1H15.8C16.9201 1 17.4802 1 17.908 1.21799C18.2843 1.40973 18.5903 1.71569 18.782 2.09202C19 2.51984 19 3.0799 19 4.2V17Z"
      stroke={stoke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default CommentIcon;
