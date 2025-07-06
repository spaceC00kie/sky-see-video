import { AboutUsCard } from "./AboutUsCard"

interface Props {}

export const AboutUs: React.FC<Props> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center">
        {/* full length banner here @todo */}
      <div className="flex max-w-[70em] flex-col gap-4 py-20">
        <p className="text-2xl text-blue-500">ABOUT US</p>
        <p className="p-2 text-xl">
          You’ve got specific media needs, and SkySee Video has the expertise to
          help you achieve them. We’re a boutique production company with film
          and corporate backgrounds, providing fresh perspectives for branding
          and marketing campaigns. From initial concepts to broadcast-quality
          final videos and animations, our experience and passion focus on
          companies, their people, the products they build, and the services
          they provide. Our knowledge of the industry and the production process
          means we’ll save you valuable time and money as we execute your plan,
          bringing your vision to life with stunning audio/video assets and
          exceptional storytelling.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {/* fill in details here */}
          <AboutUsCard image={""} title="" description="" />
          <AboutUsCard image={""} title="" description="" />
          <AboutUsCard image={""} title="" description="" />
          <AboutUsCard image={""} title="" description="" />
        </div>
      </div>
    </div>
  )
}
