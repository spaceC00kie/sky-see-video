import { GalleryCard } from "../../common/GalleryCard";

interface Props {
  image: string;
  title: string;
  description: string;
  path: string;
}

export const HomeCard2: React.FC<Props> = ({ image, title, description, path }) => (
  <GalleryCard image={image} title={title} description={description} path={path} />
);
