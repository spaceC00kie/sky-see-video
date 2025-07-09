import { OurWorkCard } from "./OurWorkCard"
import { cards } from "./data"

interface Props {
  className?: string
}

export const WorkGallery: React.FC<Props> = ({ className = "" }) => (
  <div className={`content-auto grid gap-5 md:grid-cols-2 lg:grid-cols-4 ${className}`.trim()}>
    {cards.map((card) => (
      <div key={card.image} className="content-visibility-auto">
        <OurWorkCard {...card} />
      </div>
    ))}
  </div>
)
