import { useId } from "react"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  containerClassName?: string
}

export const TextInput: React.FC<Props> = ({
  label,
  containerClassName,
  className,
  id,
  ...props
}) => {
  const autoId = useId()
  const inputId = id || autoId

  return (
    <div className={`flex flex-col gap-2 ${containerClassName ?? ""}`}>
      {label && (
        <label htmlFor={inputId} className="font-semibold">
          {label}
      </label>
      )}
      <input
        {...props}
        id={inputId}
        className={`border p-2 ${className ?? ""}`}
      />
    </div>
  )
}
