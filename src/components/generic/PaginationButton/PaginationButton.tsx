import type { ButtonHTMLAttributes } from "react";

type PaginationButtonProps = {
  isActive: boolean;
  pageNumber: number;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const PaginationButton = ({
  isActive,
  pageNumber,
  onClick,
  ...props
}: PaginationButtonProps) => (
  <button
    type="button"
    className={`py-2 px-3 text-bg rounded-[4px] ${
      isActive ? "bg-heading" : "bg-gray"
    }`}
    aria-label={`Ir para página ${pageNumber}`}
    aria-current={isActive ? "page" : undefined}
    onClick={onClick}
    {...props}
  >
    <span aria-hidden="true">{pageNumber}</span>
  </button>
);

export default PaginationButton;
