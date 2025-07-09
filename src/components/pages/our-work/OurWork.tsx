import { Helmet } from "react-helmet-async"
import { logos, cards } from "./data"
import { LogoGrid } from "./LogoGrid"
import { WorkGallery } from "./WorkGallery"

export const OurWork: React.FC = () => (
  <>
    <Helmet>
      {/* give the first logo & card thumb a head-start */}
      <link rel="preload" as="image" href={logos[0]} />
      <link rel="preload" as="image" href={cards[0].image} />
      <title>Our Work | SkySee Video</title>
      <meta
        name="description"
        content="Explore SkySee Video’s portfolio—broadcast promos, corporate marketing, documentaries and more."
      />
    </Helmet>

    <div className="flex flex-col gap-4 py-20">
      {/* ——— client logos ——— */}
      <LogoGrid />

      {/* ——— intro copy ——— */}
      <div className="px-6">
        <p className="text-center text-4xl">
          SkySee Video has a wide range of corporate packaging and documentary
          work. Scroll down to review some examples.
        </p>

        <div className="flex justify-center p-8">
          <hr className="w-1/3 border-t-4 border-black" />
        </div>

        {/* ——— gallery ——— */}
        <WorkGallery />
      </div>
    </div>
  </>
)
