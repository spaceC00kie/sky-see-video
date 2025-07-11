interface Props {}

export const Documentaries: React.FC<Props> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative mx-auto mb-6 aspect-video w-full max-w-[95em]">
        <div className="absolute inset-0 grid place-content-center rounded-sm bg-black" />
        <iframe
          src="https://www.youtube.com/embed/-eHAiKjgp4U?si=Jq1v0cIwl-Sr7TJy?h=af982b45c1&badge=0&autopause=0&player_id=0&app_id=58479"
          className="absolute left-0 top-0 z-10 h-full w-full"
          title="Documentary Videography | SkySee Video"
          style={{ border: "none" }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          fetchpriority="high"
        />
      </div>

      <div className="flex max-w-[70em] flex-col gap-8 pb-20">
        <div className="flex w-full flex-col gap-4 px-6">
          <h1 className="text-3xl font-medium text-blue-500">Documentaries</h1>
          <div className="flex flex-col gap-3 text-lg">
            <p>
              Cinematography in the film and entertainment industry grows more
              advanced every year. Today’s documentary filmmakers need to move
              at a rapid pace, change course at any time, and have the gear that
              allows the crew to be highly mobile. Every project is different,
              but the rigorous standards for quality remain the same. Anything
              less than the best simply won’t cut it. At SkySee Video, our
              videographers work to create seamless, multicam shoots, and use
              precision flying techniques to capture meaningful footage that
              producers love to see in their content, and viewers love to see in
              their films.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 px-6">
          <h2 className="text-blue-500 text-2xl">Explore the Possibilities</h2>
          <p>
            With exceptional on the ground and aerial footage, you can reach
            your audience in new and unexpected ways. Our high end cameras are
            capable of shooting scenes underwater, on the ground, in the air,
            and even in low light situations, allowing for minimal intrusion on
            the subject in their natural surroundings. We’ll also provide
            viewers with broadcast quality aerial imagery, including panoramic
            and birds eye views of landscapes. Set the mood for a touching,
            humorous, or devastating moment with drone footage that follows and
            centers the subject as they walk, run, drive, and engage in outdoor
            activities. Aerial footage capabilities transcend traditional
            cinematography techniques to deliver new angles with incredible
            clarity. The storytelling skills of our videographers and drone
            operators ensure that you’ll capture the moments you need to tell
            your story.
          </p>
        </div>
      </div>
    </div>
  )
}
