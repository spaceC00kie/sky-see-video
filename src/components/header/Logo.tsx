import skyseeLogo from "/src/assets/skysee-7.png"

interface Props {
  className?: string
}

export const Logo: React.FC<Props> = ({ className = "" }) => (
  <img src={skyseeLogo} alt="SkySee Video" className={className} />
)
