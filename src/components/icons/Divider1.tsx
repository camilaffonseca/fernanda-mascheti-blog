import type { SVGProps } from "react";

const Divider1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="100%"
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Divider1</title>

    <path d="M0 1H29" stroke="#1CA7C8" />
    <path d="M15 29V1" stroke="#1CA7C8" />
  </svg>
);

export default Divider1;
