interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  containerClassName?: string;
}

export const Textarea: React.FC<Props> = ({
  label,
  containerClassName,
  className,
  ...props
}) => (
  <div className={`flex flex-col gap-2 ${containerClassName ?? ""}`}>
    <label className="font-semibold">{label}</label>
    <textarea {...props} className={`border p-2 ${className ?? ""}`} />
  </div>
);
