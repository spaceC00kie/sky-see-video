import { GalleryCard } from "../../common/GalleryCard";

export interface OurWorkCardProps {
  image: string;
  srcSet?: string;
  title: string;
  description: string;
  path: string;
}

export const OurWorkCard: React.FC<OurWorkCardProps> = ({
  image,
  srcSet,
  title,
  description,
  path,
}) => (
  <GalleryCard
    image={image}
    srcSet={srcSet}
    title={title}
    description={description}
    path={path}
    lazy
  />
);
