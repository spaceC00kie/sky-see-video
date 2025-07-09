interface Props {
  title: string
  bulletPoints: string[]
}

export const OurServicesCard1: React.FC<Props> = ({ title, bulletPoints }) => {
  return (
    <div className="sm:w-62 flex flex-col items-center justify-start gap-3">
      <h2 className="w-full text-xl text-blue-500">{title}</h2>
      <ul className="list-disc list-inside pl-4 text-left text-xl sm:pl-0 sm:text-center">
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  )
}
