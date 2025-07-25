import { SVGProps } from "react";

const YoutubeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={45}
    height={32}
    viewBox="0 0 45 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M34.5608 30.994C39.4968 31.1737 43.6472 27.3251 43.8399 22.3896V9.61044C43.6472 4.67501 39.4968 0.826353 34.5608 1.00604H10.2791C5.34318 0.826353 1.19274 4.67501 1 9.61044V22.3896C1.19274 27.3251 5.34318 31.1737 10.2791 30.994H34.5608Z"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.3661 9.9489L28.1369 14.5498C28.5756 14.806 28.8453 15.2757 28.8453 15.7836C28.8453 16.2917 28.5756 16.7614 28.1369 17.0174L21.3661 22.0511C20.0809 22.9229 18.136 22.1796 18.136 20.8173V11.1784C18.136 9.82252 20.083 9.07711 21.3661 9.9489Z"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default YoutubeIcon;
