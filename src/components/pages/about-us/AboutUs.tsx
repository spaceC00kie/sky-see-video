import { AboutUsCard } from "./AboutUsCard"
import { default as sorenChristiansen } from "/src/assets/about-us/soren-christiansen.jpg"
import { default as robinsonVil } from "/src/assets/about-us/robinson-vil.jpg"
import { default as charlesFrederick } from "/src/assets/about-us/charles-frederick.jpg"
import { TedsAboutUsCard } from "./TedsAboutUsCard"

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
          <AboutUsCard
            image={sorenChristiansen}
            name="Soren Christiansen"
            title="Videographer / Editor / Drone Pilot"
            description="With over 3 decades in advertising and video production, Soren uses his knowledge and experience to make sure every video package hits its mark and achieves its targeted goals. Soren's work experience and clients include McCann-Erickson, CNN, CNNi, Kia, Hyundai HCEA, Esso/Exxon, Mastercard, Motorola, Pollo Tropical, This American Land on PBS, and more. Soren is a videographer, licensed drone pilot and video editor."
          />
          <TedsAboutUsCard />
          <AboutUsCard
            image={robinsonVil}
            name="Robinson Vil"
            title="Director / Producer"
            description="Rob, a native of Haiti, is an award-winning director & producer who specializes in films and documentaries. His nominations in the film category include the Pan African Film Festival, the Bare Bones Intl Film Festival, the Cannes Short Film Corners, and winning Best Actor, Best Director and Best Picture at the Motion Picture Association of Haiti for “Rasin Mwen—L’ amour Du Fric.”"
          />
          <AboutUsCard
            image={charlesFrederick}
            name="Charles Frederick"
            title="Producer / Social Media"
            description="Charles is a multi-Emmy award winning writer, producer and editor, creating content for television, radio, online and digital communications. Specializing in producing content for social media, Charles ensures our messaging hits the mark and targets the right people for your products and services. Charles is a broadcast veteran of CNN, CBS Los Angeles, Fox Sports, Bally Sports and NBC San Diego."
          />
        </div>
      </div>
    </div>
  )
}
