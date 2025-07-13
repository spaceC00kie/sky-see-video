interface Props {
  image: string
  name: string
  title: string
  description: string
}

export const AboutUsCard: React.FC<Props> = ({
  image,
  name,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-start gap-2 text-lg">
      <div className="aspect-[4/3] w-full">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <span className="pointer-events-none absolute inset-0 bg-white opacity-0 transition-opacity group-hover:opacity-40" />
      <div className="text-blue-700">
        <h2>{name}</h2>
        <h2>{title}</h2>
      </div>
      <p className="text-sm">{description}</p>
    </div>
  )
}
