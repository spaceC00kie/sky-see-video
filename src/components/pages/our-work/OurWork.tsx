import { OurWorkCard } from "./OurWorkCard"
import { default as kompasThumbnail } from "/src/assets/home/kompas-thumbnail.jpg"
import { default as hyundaiThumbnail } from "/src/assets/home/hyundai-thumbnail.png"
import { default as cnnLogo } from "/src/assets/our-work/cnn-logo.png"
import { default as horizonLogo } from "/src/assets/our-work/horizon-roofing-logo.png"
import { default as ballyLogo } from "/src/assets/our-work/bally-sports-logo.png"
import { default as starzLogo } from "/src/assets/our-work/starz-logo.png"
import { default as hyundaiLogo } from "/src/assets/our-work/hyundai-construction-logo.png"
import { default as canesLogo } from "/src/assets/our-work/raising-canes-logo.png"
import { default as alhurraLogo } from "/src/assets/our-work/alhurra-logo.png"
import { default as channel7Logo } from "/src/assets/our-work/channel-7-logo.png"
import { default as blueKeyLogo } from "/src/assets/our-work/blue-key-logo.png"
import { default as cbsnLogo } from "/src/assets/our-work/cbsn-logo.png"
import { default as emoryLogo } from "/src/assets/our-work/emory-university-logo.png"
import { default as foxLogo } from "/src/assets/our-work/fox-sports-logo.png"
import { default as hlnLogo } from "/src/assets/our-work/hln-logo.png"


interface Props {}

export const OurWork: React.FC<Props> = ({}) => {
  return (
    <div className="flex flex-col gap-4 py-20">
      <div className="flex flex-wrap justify-center gap-4">
        <img src={cnnLogo} className="border" />
        <img src={horizonLogo} />
        <img src={""} />
        <img src={""} />
        <img src={""} />
        <img src={""} />
        <img src={""} />
        <img src={""} />
        <img src={""} />
        <img src={""} />
        <img src={""} />
        <img src={""} />
        <img src={""} />
        <img src={""} />
        <img src={""} />
        <img src={""} />
      </div>
      <div className="px-6">
        <p className="text-center text-4xl">
          SkySee Video has a wide range of corporate packaging and documentary
          work. Scroll down to review some examples.
        </p>
        <div className="flex justify-center p-8">
          <hr className="w-1/3 border-t-4 border-black" />
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <OurWorkCard
            image={kompasThumbnail}
            title="Kompas Communications / Mission"
            description="Kompas Communications is a strategic, creative and digital marketing & communications company. In this promo their graphic mark illustrates the company’s mission statement and customer service."
            // @todo connect path
            path=""
          />
          <OurWorkCard
            image={hyundaiThumbnail}
            title="Hyundai HCEA / Amerigo Recycling"
            description="Hyundai Construction Equipment of America talked with the owner of Amerigo Recycling in Atlanta about his satisfaction with HCEA equipment, dedication to service, and quick turnaround on delivery."
            // @todo connect path
            path=""
          />
          <OurWorkCard
            image={kompasThumbnail}
            title="Kompas Communications / Mission"
            description="Kompas Communications is a strategic, creative and digital marketing & communications company. In this promo their graphic mark illustrates the company’s mission statement and customer service."
            // @todo connect path
            path=""
          />
          <OurWorkCard
            image={hyundaiThumbnail}
            title="Hyundai HCEA / Amerigo Recycling"
            description="Hyundai Construction Equipment of America talked with the owner of Amerigo Recycling in Atlanta about his satisfaction with HCEA equipment, dedication to service, and quick turnaround on delivery."
            // @todo connect path
            path=""
          />
          <OurWorkCard
            image={kompasThumbnail}
            title="Kompas Communications / Mission"
            description="Kompas Communications is a strategic, creative and digital marketing & communications company. In this promo their graphic mark illustrates the company’s mission statement and customer service."
            // @todo connect path
            path=""
          />
          <OurWorkCard
            image={hyundaiThumbnail}
            title="Hyundai HCEA / Amerigo Recycling"
            description="Hyundai Construction Equipment of America talked with the owner of Amerigo Recycling in Atlanta about his satisfaction with HCEA equipment, dedication to service, and quick turnaround on delivery."
            // @todo connect path
            path=""
          />
          <OurWorkCard
            image={kompasThumbnail}
            title="Kompas Communications / Mission"
            description="Kompas Communications is a strategic, creative and digital marketing & communications company. In this promo their graphic mark illustrates the company’s mission statement and customer service."
            // @todo connect path
            path=""
          />
          <OurWorkCard
            image={hyundaiThumbnail}
            title="Hyundai HCEA / Amerigo Recycling"
            description="Hyundai Construction Equipment of America talked with the owner of Amerigo Recycling in Atlanta about his satisfaction with HCEA equipment, dedication to service, and quick turnaround on delivery."
            // @todo connect path
            path=""
          />
          <OurWorkCard
            image={kompasThumbnail}
            title="Kompas Communications / Mission"
            description="Kompas Communications is a strategic, creative and digital marketing & communications company. In this promo their graphic mark illustrates the company’s mission statement and customer service."
            // @todo connect path
            path=""
          />
          <OurWorkCard
            image={hyundaiThumbnail}
            title="Hyundai HCEA / Amerigo Recycling"
            description="Hyundai Construction Equipment of America talked with the owner of Amerigo Recycling in Atlanta about his satisfaction with HCEA equipment, dedication to service, and quick turnaround on delivery."
            // @todo connect path
            path=""
          />
          <OurWorkCard
            image={kompasThumbnail}
            title="Kompas Communications / Mission"
            description="Kompas Communications is a strategic, creative and digital marketing & communications company. In this promo their graphic mark illustrates the company’s mission statement and customer service."
            // @todo connect path
            path=""
          />
          <OurWorkCard
            image={hyundaiThumbnail}
            title="Hyundai HCEA / Amerigo Recycling"
            description="Hyundai Construction Equipment of America talked with the owner of Amerigo Recycling in Atlanta about his satisfaction with HCEA equipment, dedication to service, and quick turnaround on delivery."
            // @todo connect path
            path=""
          />
          <OurWorkCard
            image={kompasThumbnail}
            title="Kompas Communications / Mission"
            description="Kompas Communications is a strategic, creative and digital marketing & communications company. In this promo their graphic mark illustrates the company’s mission statement and customer service."
            // @todo connect path
            path=""
          />
          <OurWorkCard
            image={hyundaiThumbnail}
            title="Hyundai HCEA / Amerigo Recycling"
            description="Hyundai Construction Equipment of America talked with the owner of Amerigo Recycling in Atlanta about his satisfaction with HCEA equipment, dedication to service, and quick turnaround on delivery."
            // @todo connect path
            path=""
          />
        </div>
      </div>
    </div>
  )
}
