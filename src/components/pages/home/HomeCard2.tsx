interface Props {
  image: string
  title: string
  description: string
  link: string
}

export const HomeCard2: React.FC<Props> = ({ image, title, description, link }) => (
  <div className="flex flex-col items-start gap-2 text-lg">
    <a href={link} className="group relative block w-full overflow-hidden rounded">
      <div className="aspect-[4/3] w-full">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <span className="pointer-events-none absolute inset-0 bg-white opacity-0 transition-opacity group-hover:opacity-40" />
    </a>
    <h2 className="font-bold">{title}</h2>
    <p>{description}</p>
  </div>
)