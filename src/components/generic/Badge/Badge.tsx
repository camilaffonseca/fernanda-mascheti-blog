const Badge = ({
  badgeText,
  variant = "solid",
}: {
  badgeText: string;
  variant?: "solid" | "outlined";
}) => {
  return (
    <p
      className={`font-bold rounded-[4px] py-2 px-3 ${variant} w-fit truncate`}
    >
      {badgeText}
    </p>
  );
};

export default Badge;
