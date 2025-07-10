interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClassName?: string;
}

export const TextInput: React.FC<Props> = ({
  label,
  containerClassName,
  className,
  ...props
}) => (
  <div className={`flex flex-col gap-2 ${containerClassName ?? ""}`}>
    {label && <label className="font-semibold">{label}</label>}
    <input {...props} className={`border p-2 ${className ?? ""}`} />
  </div>
);
