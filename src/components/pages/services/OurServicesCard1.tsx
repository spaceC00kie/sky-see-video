interface Props {
  title: string
  bulletPoints: string[]
}

export const OurServicesCard1: React.FC<Props> = ({ title, bulletPoints }) => (
  <div className="flex flex-col justify-start gap-3 w-full sm:max-w-64">
    <h2 className="w-full text-xl text-blue-700">{title}</h2>
    <ul className="list-none w-full space-y-1">
      {bulletPoints.map((point, index) => (
        <li key={index} className="flex items-start gap-2 pl-2 text-xl">
          <span className="leading-6">•</span>
          <span className="flex-1 leading-6">{point}</span>
        </li>
      ))}
    </ul>
  </div>
)
