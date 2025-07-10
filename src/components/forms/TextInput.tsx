import TextField, { TextFieldProps } from "@mui/material/TextField";

interface Props extends Omit<TextFieldProps, "variant"> {
  /** Optional label displayed above the field */
  label?: string;
  /** Tailwind classes for the outer container */
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
    <TextField
      {...props}
      variant="outlined"
      size="small"
      className={className}
      InputProps={{ sx: { p: 0 } }}
      sx={{ "& .MuiOutlinedInput-input": { p: 2 } }}
    />
  </div>
);
