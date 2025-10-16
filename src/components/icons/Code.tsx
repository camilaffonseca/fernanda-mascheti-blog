import type { SVGProps } from "react";

const Code = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="100%"
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Code</title>

    <path
      d="M30.6666 34.5L42.1666 23L30.6666 11.5"
      stroke="#1CA7C8"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M15.3333 11.5L3.83331 23L15.3333 34.5"
      stroke="#1CA7C8"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Code;
