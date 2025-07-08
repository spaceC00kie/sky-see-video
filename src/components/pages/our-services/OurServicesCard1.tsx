interface Props {
  title: string
  bulletPoints: string[]
}

export const OurServicesCard1: React.FC<Props> = ({ title, bulletPoints }) => {
  return (
    <div className="sm:w-62 flex flex-col items-center justify-start gap-3">
      <h2 className="w-full text-xl text-blue-500">{title}</h2>
      <p className="text-center text-xl">
        {bulletPoints.map((point, index) => (
          <div key={index} className="flex flex-row ">
            • {point}
          </div>
        ))}
      </p>
    </div>
  )
}
