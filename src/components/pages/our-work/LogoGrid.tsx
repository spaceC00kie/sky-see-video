import { logos } from "./data"

interface Props {
  className?: string
}

export const LogoGrid: React.FC<Props> = ({ className = "" }) => (
  <div className={`flex flex-wrap justify-center gap-4 ${className}`.trim()}>
    {logos.map((src, i) => (
      <img
        key={src}
        src={src}
        decoding="async"
        loading={i > 3 ? "lazy" : undefined}
        className="w-32 xl:w-20"
      />
    ))}
  </div>
)
