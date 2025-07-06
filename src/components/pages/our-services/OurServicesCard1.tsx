import { Link } from "react-router-dom"

interface Props {
  title: string
  bulletPoints: string[]
}

export const OurServicesCard1: React.FC<Props> = ({ title, bulletPoints }) => {
  return (
    <div className="flex flex-col items-center justify-between gap-3 sm:w-56">
      <h2 className="text-2xl text-blue-500">{title}</h2>
      <p className="text-lg">
        {bulletPoints.map((point, index) => (
          <span key={index} className="block">
            {point}
          </span>
        ))}
      </p>
    </div>
  )
}
