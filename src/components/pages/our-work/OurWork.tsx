import { OurWorkCard } from "./OurWorkCard"
import { default as kompasThumbnail } from "/src/assets/home/kompas-thumbnail.jpg"
import { default as hyundaiThumbnail } from "/src/assets/home/hyundai-thumbnail.png"

interface Props {}

export const OurWork: React.FC<Props> = ({}) => {
  return (
    <div className="flex flex-col gap-4 py-20">
      <div className="flex flex-wrap justify-center gap-4 px-6">
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
        <img src={""} />
        <img src={""} />
      </div>
      <div className=""></div>
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
  )
}
