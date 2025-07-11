import { useState } from "react";
import { createContainer } from "unstated-next";

const useProjectCarousel = () => {
  const [slide, setSlide] = useState(0);
  return { slide, setSlide };
};

export const ProjectCarousel = createContainer(useProjectCarousel);
