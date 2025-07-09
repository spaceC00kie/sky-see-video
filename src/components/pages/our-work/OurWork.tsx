import { Helmet } from "react-helmet-async"
import { OurWorkCard } from "./OurWorkCard"

/* ——— client logos ——— */
import cnnLogo from "/src/assets/our-work/cnn-logo.png"
import horizonLogo from "/src/assets/our-work/horizon-roofing-logo.png"
import ballyLogo from "/src/assets/our-work/bally-sports-logo.png"
import starzLogo from "/src/assets/our-work/starz-logo.png"
import hyundaiLogo from "/src/assets/our-work/hyundai-construction-logo.png"
import canesLogo from "/src/assets/our-work/raising-canes-logo.png"
import alhurraLogo from "/src/assets/our-work/alhurra-logo.png"
import channel7Logo from "/src/assets/our-work/channel-7-logo.png"
import blueKeyLogo from "/src/assets/our-work/blue-key-logo.png"
import cbsnLogo from "/src/assets/our-work/cbsn-logo.png"
import emoryLogo from "/src/assets/our-work/emory-university-logo.png"
import foxLogo from "/src/assets/our-work/fox-sports-logo.png"
import hlnLogo from "/src/assets/our-work/hln-logo.png"
import natGeoLogo from "/src/assets/our-work/national-geographic-logo.png"
import espnLogo from "/src/assets/our-work/espn-logo.png"
import pbsLogo from "/src/assets/our-work/pbs-logo.png"

/* ——— gallery thumbnails ——— */
import num20 from "/src/assets/our-work/examples/20.jpg"
import num21 from "/src/assets/our-work/examples/21.png"
import num22 from "/src/assets/our-work/examples/22.png"
import num23 from "/src/assets/our-work/examples/23.png"
import num24 from "/src/assets/our-work/examples/24.png"
import num25 from "/src/assets/our-work/examples/25.png"
import num26 from "/src/assets/our-work/examples/26.png"
import num27 from "/src/assets/our-work/examples/27.png"
import num28 from "/src/assets/our-work/examples/28.png"
import num29 from "/src/assets/our-work/examples/29.png"
import num30 from "/src/assets/our-work/examples/30.png"
import num31 from "/src/assets/our-work/examples/31.png"
import num32 from "/src/assets/our-work/examples/32.jpg"
import num33 from "/src/assets/our-work/examples/33.png"
import num34 from "/src/assets/our-work/examples/34.png"
import num35 from "/src/assets/our-work/examples/35.png"
import num36 from "/src/assets/our-work/examples/36.png"
import num37 from "/src/assets/our-work/examples/37.png"
import num38 from "/src/assets/our-work/examples/38.png"
import num39 from "/src/assets/our-work/examples/39.png"
import num40 from "/src/assets/our-work/examples/40.png"
import num41 from "/src/assets/our-work/examples/41.png"
import num42 from "/src/assets/our-work/examples/42.png"
import num43 from "/src/assets/our-work/examples/43.png"
import num44 from "/src/assets/our-work/examples/44.png"
import num45 from "/src/assets/our-work/examples/45.png"
import num46 from "/src/assets/our-work/examples/46.png"
import num47 from "/src/assets/our-work/examples/47.png"
import num48 from "/src/assets/our-work/examples/48.png"
import num49 from "/src/assets/our-work/examples/49.png"
import num50 from "/src/assets/our-work/examples/50.png"
import num51 from "/src/assets/our-work/examples/51.png"
import num52 from "/src/assets/our-work/examples/52.png"
import num53 from "/src/assets/our-work/examples/53.png"
import num54 from "/src/assets/our-work/examples/54.png"
import num55 from "/src/assets/our-work/examples/55.png"
import num56 from "/src/assets/our-work/examples/56.png"
import num57 from "/src/assets/our-work/examples/57.png"
import num58 from "/src/assets/our-work/examples/58.png"
import num59 from "/src/assets/our-work/examples/59.png"
import num60 from "/src/assets/our-work/examples/60.png"
import num61 from "/src/assets/our-work/examples/61.png"
import num62 from "/src/assets/our-work/examples/62.jpg"
import num63 from "/src/assets/our-work/examples/63.png"
import num64 from "/src/assets/our-work/examples/64.jpg"
import num65 from "/src/assets/our-work/examples/65.jpg"
import num66 from "/src/assets/our-work/examples/66.jpg"
import num67 from "/src/assets/our-work/examples/67.jpg"
import num68 from "/src/assets/our-work/examples/68.jpg"
import num69 from "/src/assets/our-work/examples/69.jpg"
import num70 from "/src/assets/our-work/examples/70.jpg"
import num71 from "/src/assets/our-work/examples/71.jpg"

/* ——— arrays ——— */
const logos = [
  cnnLogo,
  horizonLogo,
  ballyLogo,
  starzLogo,
  hyundaiLogo,
  canesLogo,
  alhurraLogo,
  channel7Logo,
  blueKeyLogo,
  cbsnLogo,
  emoryLogo,
  foxLogo,
  hlnLogo,
  natGeoLogo,
  espnLogo,
  pbsLogo,
] as const

export const cards = [
  {
    image: num20,
    title: "Kompas Communications / Mission",
    description:
      "Kompas Communications is a strategic, creative and digital marketing & communications company. In this promo their graphic mark illustrates the company’s mission statement and customer service.",
    path: "/project/kompas-show-reel/",
  },
  {
    image: num21,
    title: "Hyundai HCEA / Amerigo Recycling",
    description:
      "Hyundai Construction Equipment of America talked with the owner of Amerigo Recycling in Atlanta about his satisfaction with HCEA equipment, dedication to service, and quick turnaround on delivery.",
    path: "/project/hyundai-hcea-amerigo-recycling/",
  },
  {
    image: num22,
    title: "805 Wine / Animated Logo",
    description:
      "Paso Robles, California wine company. Animated logo used to brand the company with the region from which its unique flavors are produced. Character was created to establish itself in the Japanese marketplace.",
    path: "/project/805-wine-animated-logo/",
  },
  {
    image: num23,
    title: "SitusAMC/Habitat for Humanity ATL",
    description:
      "Members of SitusAMC’s Atlanta team joined Habitat for Humanity to help build a home for a family in need. SkySee Video shot on the ground with Sony A7Siiis & Sony G Master lenses, and in the air with DJI Mavic Pro 2.",
    path: "/project/situsamc-habitat-for-humanity-atl/",
  },
  {
    image: num24,
    title: "Charlotte Hornets Promo",
    description:
      "Larger than life NBA players light up the Charlotte skyline. Combining video and animation, this Fox Sports promo gears up the fans for the Charlotte Hornets plan to “dominate” all season long.",
    path: "/project/charlotte-hornets/",
  },
  {
    image: num25,
    title: "Norwegian Anti-Smoking Campaign",
    description:
      "Marvin the Moose exposes the dangers of smoking in this animated vignette series. Used on social networks and in public video displays at bus stops and metro stations.",
    path: "/project/norwegian-anti-smoking-campaign/",
  },
  {
    image: num26,
    title: "Awkward Fam Photos/American Goth",
    description:
      "Documentary graphics for a segment of Awkward Family Photos, a show pilot which premiered at the 2020 Sundance Film Festival. Tools included After Effects and Photoshop.",
    path: "/project/awkward-family-photos-american-goth/",
  },
  {
    image: num27,
    title: "Fox Sports / CFB Talent Promo",
    description:
      "ACC college football is back and better than ever! For this spot, we combined graphic animation, talent shots, upbeat music and sound bites to promote this quirky crew of football fanatics at their best.",
    path: "/project/fox-sports-cfb-talent-promo/",
  },
  {
    image: num28,
    title: "Proper Cloth / Coronavirus Masks",
    description:
      "During the pandemic, Proper Cloth introduced a high-end line of masks with comfort, style, and efficacy as key selling points. Tracked GFX highlight the technology and product’s superiority.",
    path: "/project/proper-cloth-cvc-masks/",
  },
  {
    image: num29,
    title: "Atlanta Braves Opening Week",
    description: "",
    path: "/project/atlanta-braves-opening-week/",
  },
  {
    image: num30,
    title: "805 Wine Animations",
    description:
      "Created primarily for the developing wine market in Japan, these animations use anthropomorphic characters, which are a popular marketing device for Japanese wine consumers.",
    path: "/project/805-wine-animations/",
  },
  {
    image: num31,
    title: "Starz Graveyard Shift",
    description:
      "A promo package for an ongoing block of horror movie programming for Starz Entertainment. Tracking and graphics accomplished with Cinema 4D, After Effects, and in-camera effects.",
    path: "/project/starz-graveyard-shift/",
  },
  {
    image: num32,
    title: "Awkward Family Photos Open",
    description:
      "Documentary show that tells the stories behind America’s most popular awkward family photos. What better way to communicate the silliness of the show than wrapping it in a retro-style photo album?",
    path: "/project/awkward-family-photos-open/",
  },
  {
    image: num33,
    title: "Cringeworthy Board Game",
    description:
      "A budget-friendly explainer video or “explanimation” for a new board game called “Cringeworthy”. Character design and compositions drawn by hand and animated in After Effects.",
    path: "/project/cringeworthy-board-game/",
  },
  {
    image: num34,
    title: "Emory GBS Virtual Tour",
    description:
      "A guided tour of the Roberto C. Goizueta Business School campus at Emory University. Learn about the programs offered and what Emory GBS has to offer candidates for higher learning.",
    path: "/project/emory-gbs-virtual-tour/",
  },
  {
    image: num35,
    title: "Discover Card Brand Social",
    description: "Created with After Effects",
    path: "/project/discover-card-brand-social/",
  },
  {
    image: num36,
    title: "Major League Rugby Pro Shop",
    description:
      "Shop MLR video: Get the hottest gear from your favorite Major League Rugby squad. Whether it’s jerseys, caps or workout gear … you can get everything you need at ShopMLR.com",
    path: "/project/major-league-rugby-pro-shop/",
  },
  {
    image: num37,
    title: "MBN Alhurra “The Melting Pot”",
    description:
      "13-Part Series on families who immigrated to the United States. 3 generations of each family were interviewed for this series, with each generation offering its own unique perspective on America.",
    path: "/project/mbn-alhurra-the-melting-pot/",
  },
  {
    image: num38,
    title: "At Home with Authors/In That Time",
    description:
      "Daniel Weiss, CEO of the Metropolitan Museum of Art, finds poetry in one soldier’s life and captures a portrait of the Vietnam era with his new book, In That Time. The book is a tribute to Major Michael O’Donnell.",
    path: "/project/nantucket-book-festival-at-home-with-authors-in-that-time/",
  },
  {
    image: num39,
    title: "At Home with Authors/Crocker Snow, Jr.",
    description:
      "You could say that Crocker Snow Jr. has been writing his latest book, about the tiny island off the coast of Nantucket called Muskeget, ever since his father flew him there some 70 years ago. He shares his memories of a bygone era.",
    path: "/project/nantucket-book-festival-at-home-with-authors-crocker-snow-jr-with-rob-cocuzzo/",
  },
  {
    image: num40,
    title: "At Home with Authors/The Right To Vote",
    description:
      "Elaine Weiss, author of The Woman’s Hour: The Great Fight To Win The Vote, says her book “is about how change is made in a democracy….what it takes to make change, and how hard it is.”",
    path: "/project/nantucket-book-festival-at-home-with-authors-the-right-to-vote/",
  },
  {
    image: num41,
    title: "BlueKey Construction Liberty Welding",
    description:
      "Hurricane Ida wreaked havoc on New Orleans, and Liberty Welding was hit hard. BlueKey Restoration saved the day and got Liberty Welding the money needed to restore, and improve, the building.",
    path: "/project/bluekey-construction-liberty-welding/",
  },
  {
    image: num42,
    title: "Your Teams Play Here",
    description: "",
    path: "/project/your-teams-play-here/",
  },
  {
    image: num43,
    title: "Mercedes-Benz of Buckhead / Black Friday",
    description:
      "Black Friday promotional event for Mercedes-Benz of Buckhead. SkySee Video’s camera and drone crew followed the Black Friday caravan around the Buckhead area, including the Lennox Mall roundabout.",
    path: "/project/mercedes-benz-of-buckhead-black-friday/",
  },
  {
    image: num44,
    title: "Fly Fishing B-Roll",
    description:
      "B-roll shot for Blowing Rock, NC, and Chetola Resort ad campaigns. Panasonic GH5s and Inspire 2 with X7 camera.",
    path: "/project/fly-fishing-b-roll/",
  },
  {
    image: num45,
    title: "life.less",
    description:
      "”Myong-hee,” played by Jennifer Sun Bell, who was abused by close members of her family. When she runs away from home, she finds herself on the street where predators await vulnerable girls like her.",
    path: "/project/life-less/",
  },
  {
    image: num46,
    title: "Rasin Mwen – L’ Amour Du Fric",
    description:
      "“For The Love Of Money” A film by Robinson Vil, shot entirely on location in Haiti, is a Hollywood-styled film that combines great visuals of the island & a story full of plot twists that will entertain from start to finish.",
    path: "/project/rasin-mwen-l-amour-du-fric/",
  },
  {
    image: num47,
    title: "Emory GBS Leadership ExecMBA",
    description:
      "Overview of the Goizueta Business School’s Executive MBA program at Emory University in Atlanta, GA. Learn about the programs offered and what Emory GBS has to offer candidates for higher learning.",
    path: "/project/emory-gbs-leadership-execmba/",
  },
  {
    image: num48,
    title: "Emory GBS Entrepreneurship",
    description:
      "Overview of Emory’s Entrepreneurship program for undergraduate students of the Roberto C. Goizueta Business School.",
    path: "/project/emory-gbs-entrepreneurship/",
  },
  {
    image: num49,
    title: "Emory Goizueta Business School",
    description:
      "The Emory Goizueta Business School prides itself on helping to develop the next generation of business leaders. Emory GBS is preparing these leaders to overcome these challenges our planet faces.",
    path: "/project/emory-goizueta-business-school/",
  },
  {
    image: num50,
    title: "Horizon Roofing / Friendship Baptist Church",
    description:
      "When Friendship Baptist Church, its school and gym were devastated by a hurricane, Horizon Roofing was able to secure $2,500,000 to repair all of the damages and restore the property.",
    path: "/project/horizon-roofing-friendship-baptist-church/",
  },
  {
    image: num51,
    title: "Chetola Lifestyle / Girlfriends Getaway",
    description:
      "Social medial promo for Chetola Resort in Blowing Rock, NC, highlighting the surrounding area and its amenities, including trout fishing, hiking, horseback riding, fine dining, picnicking, and more.",
    path: "/project/chetola-lifestyle-girlfriends-getaway/",
  },
  {
    image: num52,
    title: "Chetola Resort Lifestyle / Romantic Couple",
    description:
      "Social medial promo for Chetola Resort in Blowing Rock, NC, highlighting the surrounding area and its amenities, including trout fishing, hiking, horseback riding, fine dining, picnicking, and more.",
    path: "/project/chetola-resort-lifestyle-romantic-couple/",
  },
  {
    image: num53,
    title: "Coronavirus Cleanup GA CBS 46",
    description:
      "Created for Coronavirus Cleanup GA, a company specializing in disinfecting businesses and schools. The video includes 3-D animation of viruses and bacteria eliminated by CVCGA.",
    path: "/project/coronavirus-cleanup-ga-cbs-46/",
  },
  {
    image: num54,
    title: "Emory GBS Leadership EvMBA",
    description: "Overview of Executive MBA program at Emory GBS.",
    path: "/project/emory-gbs-leadership-evmba/",
  },
  {
    image: num55,
    title: "Emory GBS Leadership FTMBA",
    description:
      "Overview of Emory Goizueta Business School’s full-time Leadership MBA program.",
    path: "/project/emory-gbs-leadership-ftmba/",
  },
  {
    image: num56,
    title: "The Melting Pot / MBN Al Hurra",
    description:
      "13-part series on immigration in the United States of America, broadcast in the Middle East on American-owned network, Al Hurra. Audio is dubbed over in Arabic",
    path: "/project/the-melting-pot-mbn-al-hurra/",
  },
  {
    image: num57,
    title: "Clayton Homes / Hurricane Michael",
    description:
      "Clayton Homes manufactures modular houses that are not only aesthetically stylish, they’re built to withstand the worst that Mother Nature can throw at it. Hurricane Michael proved their case.",
    path: "/project/clayton-homes-1-hurricane-michael-0/",
  },
  {
    image: num58,
    title: "Blowing Rock Family Getaway",
    description: "",
    path: "/project/blowing-rock-family-getaway/",
  },
  {
    image: num59,
    title: "Blowing Rock Girlfriends Getaway",
    description: "",
    path: "/project/blowing-rock-girlfriends-getaway/",
  },
  {
    image: num60,
    title: "Blowing Rock Romantic Getaway",
    description: "",
    path: "/project/blowing-rock-romantic-getaway/",
  },
  {
    image: num61,
    title: "Chetola Winter Wonderland",
    description: "",
    path: "/project/chetola-winter-wonderland/",
  },
  {
    image: num62,
    title: "Chetola Resort @ Blowing Rock/Fall Season",
    description: "",
    path: "/project/chetola-resort-at-blowing-rock/",
  },
  {
    image: num63,
    title: "The Hold Fast Foundation",
    description: "",
    path: "/project/the-hold-fast-foundation/",
  },
  {
    image: num64,
    title: "Kearns Marine Construction",
    description: "",
    path: "/project/kearns-marine-construction/",
  },
  {
    image: num65,
    title: "SkySee Video | PT Stearman Biplane",
    description: "",
    path: "/project/pt-stearman-airplane-drone-1/",
  },
  {
    image: num66,
    title: "This American Land on PBS / Land of Legends",
    description: "",
    path: "/project/this-american-land-land-of-legends/",
  },
  {
    image: num67,
    title: "This American Land: Sage Advice for Sage Lands",
    description: "",
    path: "/project/this-american-land-sage-advice-for-sage-lands/",
  },
  {
    image: num68,
    title: "This American Land: Farming The Upstream",
    description: "",
    path: "/project/this-american-land-farming-the-upstream/",
  },
  {
    image: num69,
    title: "This American Land / Megaloads",
    description:
      "Protestors stand up to oil companies attempting to transport “Megaloads” through scenic routes on federal lands, often requiring the disassembly and reassembly of bridges.",
    path: "/project/this-american-land-megaloads-blocked-from-wild-scenic-river-route/",
  },
  {
    image: num70,
    title: "This American Land / Back To Organics",
    description:
      "Small-scale farmers in Montana learn how to grow crops organically with helpful support from advisers with the Natural Resources Conservation Service.",
    path: "/project/this-american-land-back-to-organics/",
  },
  {
    image: num71,
    title: "This American Land / Sold on Organics",
    description: "",
    path: "/project/this-american-land-sold-on-organics/",
  },
] as const

export const OurWork: React.FC = () => (
  <>
    <Helmet>
      {/* give the first logo & card thumb a head-start */}
      <link rel="preload" as="image" href={cnnLogo} />
      <link rel="preload" as="image" href={num20} />
      <title>Our Work | SkySee Video</title>
      <meta
        name="description"
        content="Explore SkySee Video’s portfolio—broadcast promos, corporate marketing, documentaries and more."
      />
    </Helmet>

    <div className="flex flex-col gap-4 py-20">
      {/* ——— client logos ——— */}
      <div className="flex flex-wrap justify-center gap-4">
        {logos.map((src, i) => (
          <img
            key={src}
            src={src}
            decoding="async"
            loading={i > 3 ? "lazy" : undefined} /* eager-load first row */
            className="w-32 xl:w-20"
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
          {cards.map((card) => (
            <div key={card.image} className="content-visibility-auto">
              <OurWorkCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
)
