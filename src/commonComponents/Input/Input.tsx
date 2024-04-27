export const Input = ({
  label,
  type,
  required,
}: {
  label: string;
  type: React.HTMLInputTypeAttribute;
  required: boolean;
}) => {
  return (
    <div className="flex flex-col">
      <label className="font-semibold" htmlFor={label}>
        {label}
      </label>
      <input
        id={label}
        type={type}
        name={label}
        required={required}
        aria-required={required ? "true" : "false"}
        className="w-full md:w-1/2 border-rachel-medium border rounded p-2"
      />
    </div>
  );
};
