import { GalleryCard } from "../../common/GalleryCard";

interface Props {
  image: string
  srcSet?: string
  title: string
  description: string
  path: string
}

export const HomeCard2: React.FC<Props> = ({ image, srcSet, title, description, path }) => (
  <GalleryCard image={image} srcSet={srcSet} title={title} description={description} path={path} />
);
