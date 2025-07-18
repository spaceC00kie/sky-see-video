import { Helmet } from "react-helmet-async"
import { logos, cards } from "./ourWorkData"
import { GalleryCard } from "../../common/GalleryCard"

export const OurWork: React.FC = () => (
  <>
    <Helmet>
      {logos.map(({ src }) => (
        <link key={src} rel="preload" as="image" href={src} />
      ))}
      {cards.map(({ image }) => (
        <link key={image} rel="preload" as="image" href={image} />
      ))}
      <title>Our Work | SkySee Video</title>
      <meta
        name="description"
        content="Explore SkySee Video’s portfolio—broadcast promos, corporate marketing, documentaries and more."
      />
    </Helmet>

    <div className="flex flex-col gap-4 py-20">
      {/* ——— client logos ——— */}
      <div className="xl:grid xl:grid-flow-col gap-4 flex flex-wrap justify-center px-6">
        {logos.map(({ src, alt }) => (
          <img
            key={src}
            src={src}
            alt={alt}
            decoding="async"
            loading="eager"
            className="w-32 xl:w-20 h-auto"
          />
        ))}
      </div>

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
        <div className="content-auto grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ image, srcSet, title, description, path }, index) => (
            <div
              key={image}
              className="content-visibility-auto flex justify-center mb-5"
            >
              <GalleryCard
                image={image}
                srcSet={srcSet}
                title={title}
                description={description}
                path={path}
                lazy={index < 12}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
)
