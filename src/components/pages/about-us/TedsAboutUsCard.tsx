import tedIntorcio from "/src/assets/about-us/ted-intorcio.jpg?w=400&format=webp"

export const TedsAboutUsCard: React.FC = () => (
  <div className="flex flex-col items-start gap-2 text-lg">
    <div className="aspect-[4/3] w-full">
      <img
        src={tedIntorcio}
        alt="Ted Intorcio"
        className="h-full w-full object-cover"
      />
    </div>
    <span className="pointer-events-none absolute inset-0 bg-white opacity-0 transition-opacity group-hover:opacity-40" />
    <div className="text-blue-700">
      <h2>Ted Intorcio</h2>
      <h2>Creative Director</h2>
    </div>
    <p className="text-sm">
      Ted loves stuff that moves. Combined with his passion for the magic of
      visual communication design, typography, illustration, and branding, he
      has created a unique set of skills that have successfully been employed
      for clients like Turner Broadcasting, Starz Entertainment, ESPN, NatGeo,
      and Awkward Family Photos. Ted knows design and how to make the most of
      the limited time and space each video has to make your company shine. You
      can see
      <a
        href="https://tintorcio.myportfolio.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
      >
        his personal website
      </a>{" "}
      to explore the breadth of his talents.
    </p>
  </div>
)
