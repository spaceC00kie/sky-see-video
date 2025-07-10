import TextField, { TextFieldProps } from "@mui/material/TextField";

interface Props extends Omit<TextFieldProps, "variant" | "label"> {
  label: string;
  containerClassName?: string;
}

export const Textarea: React.FC<Props> = ({
  label,
  containerClassName,
  className,
  rows = 4,
  ...props
}) => (
  <div className={`flex flex-col gap-2 ${containerClassName ?? ""}`}>
    <label className="font-semibold">{label}</label>
    <TextField
      {...props}
      multiline
      rows={rows as number}
      variant="outlined"
      size="small"
      className={className}
      InputProps={{ sx: { p: 0 } }}
      sx={{ "& .MuiOutlinedInput-input": { p: 2 } }}
    />
  </div>
);
