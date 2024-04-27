export const Button = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <button
      className="rounded py-2 px-4 border bg-rachel-medium text-rachel-light"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
