import { SVGProps } from "react";

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <ellipse
      cx={8.92308}
      cy={8.87574}
      rx={8.92308}
      ry={8.87574}
      transform="matrix(-1 0 0 1 20 0)"
      fill="white"
    />
    <path
      d="M0.180724 16.716C0.507903 16.1144 1.20192 15.7791 2.13389 15.7791C2.83782 15.7791 3.44261 16.0651 3.79953 16.5582C4.15645 17.0513 4.23577 17.712 4.01765 18.3728C3.59132 19.6548 2.84773 19.9408 2.44124 19.9901C2.38175 20 2.32226 20 2.25286 20C1.81662 20 1.14243 19.8126 0.488075 18.8363C-0.0373948 18.0769 -0.136542 17.3176 0.180724 16.716Z"
      fill="#EA4040"
    />
  </svg>
);
export default SearchIcon;
