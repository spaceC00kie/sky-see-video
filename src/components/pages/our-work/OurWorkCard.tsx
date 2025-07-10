import { GalleryCard } from "../../common/GalleryCard";

export interface OurWorkCardProps {
  image: string;
  title: string;
  description: string;
  path: string;
}

export const OurWorkCard: React.FC<OurWorkCardProps> = ({
  image,
  title,
  description,
  path,
}) => <GalleryCard image={image} title={title} description={description} path={path} lazy />;
