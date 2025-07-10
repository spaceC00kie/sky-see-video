interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox: React.FC<Props> = ({ label, className, ...props }) => (
  <label className={`flex items-center gap-2 ${className ?? ""}`}>
    <input type="checkbox" {...props} />
    {label}
  </label>
);
