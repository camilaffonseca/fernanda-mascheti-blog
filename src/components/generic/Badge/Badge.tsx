import { type ButtonHTMLAttributes, type HTMLAttributes, useMemo } from "react";

type BadgeBaseProps = {
  label: string;
  isActive?: boolean;
};

type BadgeButtonProps = BadgeBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick: () => void;
  };

type BadgeSpanProps = BadgeBaseProps &
  HTMLAttributes<HTMLSpanElement> & {
    onClick?: never;
  };

type BadgeProps = BadgeButtonProps | BadgeSpanProps;

const Badge = ({ label, isActive, ...props }: BadgeProps) => {
  const isInteractive = useMemo(
    () => "onClick" in props && typeof props.onClick === "function",
    // biome-ignore lint/correctness/useExhaustiveDependencies: No change every render
    [props],
  );

  const className = useMemo(
    () =>
      `font-bold rounded-[4px] py-2 px-3 w-fit truncate ${
        isActive ? "solid" : "outlined"
      } ${isInteractive ? "cursor-pointer" : ""}`,
    [isActive, isInteractive],
  );

  if (isInteractive) {
    return (
      <button
        type="button"
        aria-pressed={isActive}
        className={className}
        {...props}
      >
        <span>{label}</span>
      </button>
    );
  }

  return (
    <span className={className} {...props}>
      {label}
    </span>
  );
};

export default Badge;
