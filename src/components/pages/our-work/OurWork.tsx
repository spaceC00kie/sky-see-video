import { Helmet } from "react-helmet-async"
import { OurWorkCard } from "./OurWorkCard"
import { Picture } from "../../Picture"

/* ——— client logos ——— */
import cnnLogo from "@/assets/our-work/cnn-logo.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import horizonLogo from "@/assets/our-work/horizon-roofing-logo.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import ballyLogo from "@/assets/our-work/bally-sports-logo.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import starzLogo from "@/assets/our-work/starz-logo.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import hyundaiLogo from "@/assets/our-work/hyundai-construction-logo.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import canesLogo from "@/assets/our-work/raising-canes-logo.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import alhurraLogo from "@/assets/our-work/alhurra-logo.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import channel7Logo from "@/assets/our-work/channel-7-logo.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import blueKeyLogo from "@/assets/our-work/blue-key-logo.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import cbsnLogo from "@/assets/our-work/cbsn-logo.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import emoryLogo from "@/assets/our-work/emory-university-logo.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import foxLogo from "@/assets/our-work/fox-sports-logo.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import hlnLogo from "@/assets/our-work/hln-logo.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import natGeoLogo from "@/assets/our-work/national-geographic-logo.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import espnLogo from "@/assets/our-work/espn-logo.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import pbsLogo from "@/assets/our-work/pbs-logo.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"

/* ——— gallery thumbnails ——— */
import num20 from "@/assets/our-work/examples/20.jpg?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num21 from "@/assets/our-work/examples/21.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num22 from "@/assets/our-work/examples/22.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num23 from "@/assets/our-work/examples/23.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num24 from "@/assets/our-work/examples/24.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num25 from "@/assets/our-work/examples/25.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num26 from "@/assets/our-work/examples/26.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num27 from "@/assets/our-work/examples/27.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num28 from "@/assets/our-work/examples/28.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num29 from "@/assets/our-work/examples/29.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num30 from "@/assets/our-work/examples/30.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num31 from "@/assets/our-work/examples/31.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num32 from "@/assets/our-work/examples/32.jpg?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num33 from "@/assets/our-work/examples/33.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num34 from "@/assets/our-work/examples/34.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num35 from "@/assets/our-work/examples/35.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num36 from "@/assets/our-work/examples/36.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num37 from "@/assets/our-work/examples/37.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num38 from "@/assets/our-work/examples/38.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num39 from "@/assets/our-work/examples/39.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num40 from "@/assets/our-work/examples/40.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num41 from "@/assets/our-work/examples/41.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num42 from "@/assets/our-work/examples/42.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num43 from "@/assets/our-work/examples/43.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num44 from "@/assets/our-work/examples/44.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num45 from "@/assets/our-work/examples/45.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num46 from "@/assets/our-work/examples/46.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num47 from "@/assets/our-work/examples/47.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num48 from "@/assets/our-work/examples/48.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num49 from "@/assets/our-work/examples/49.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num50 from "@/assets/our-work/examples/50.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num51 from "@/assets/our-work/examples/51.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num52 from "@/assets/our-work/examples/52.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num53 from "@/assets/our-work/examples/53.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num54 from "@/assets/our-work/examples/54.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num55 from "@/assets/our-work/examples/55.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num56 from "@/assets/our-work/examples/56.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num57 from "@/assets/our-work/examples/57.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num58 from "@/assets/our-work/examples/58.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num59 from "@/assets/our-work/examples/59.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num60 from "@/assets/our-work/examples/60.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num61 from "@/assets/our-work/examples/61.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num62 from "@/assets/our-work/examples/62.jpg?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num63 from "@/assets/our-work/examples/63.png?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num64 from "@/assets/our-work/examples/64.jpg?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num65 from "@/assets/our-work/examples/65.jpg?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num66 from "@/assets/our-work/examples/66.jpg?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num67 from "@/assets/our-work/examples/67.jpg?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num68 from "@/assets/our-work/examples/68.jpg?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num69 from "@/assets/our-work/examples/69.jpg?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num70 from "@/assets/our-work/examples/70.jpg?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"
import num71 from "@/assets/our-work/examples/71.jpg?imagetools&w=320;640;960&format=avif;webp;jpg&as=picture"

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
    videoUrl: "https://player.vimeo.com/video/818118738?h=2c2804b3da&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    image: num21,
    title: "Hyundai HCEA / Amerigo Recycling",
    description:
      "Hyundai Construction Equipment of America talked with the owner of Amerigo Recycling in Atlanta about his satisfaction with HCEA equipment, dedication to service, and quick turnaround on delivery.",
    path: "/project/hyundai-hcea-amerigo-recycling/",
    videoUrl: "https://player.vimeo.com/video/810145291?h=29898794b4&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    image: num22,
    title: "805 Wine / Animated Logo",
    description:
      "Paso Robles, California wine company. Animated logo used to brand the company with the region from which its unique flavors are produced. Character was created to establish itself in the Japanese marketplace.",
    path: "/project/805-wine-animated-logo/",
    videoUrl: "https://player.vimeo.com/video/504616073?h=07b19a7b7e",
  },
  {
    image: num23,
    title: "SitusAMC/Habitat for Humanity ATL",
    description:
      "Members of SitusAMC’s Atlanta team joined Habitat for Humanity to help build a home for a family in need. SkySee Video shot on the ground with Sony A7Siiis & Sony G Master lenses, and in the air with DJI Mavic Pro 2.",
    path: "/project/situsamc-habitat-for-humanity-atl/",
    videoUrl: "https://player.vimeo.com/video/810145426?h=64456897b1&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    image: num24,
    title: "Charlotte Hornets Promo",
    description:
      "Larger than life NBA players light up the Charlotte skyline. Combining video and animation, this Fox Sports promo gears up the fans for the Charlotte Hornets plan to “dominate” all season long.",
    path: "/project/charlotte-hornets/",
    videoUrl: "https://player.vimeo.com/video/819562921?h=c940e3203f&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    image: num25,
    title: "Norwegian Anti-Smoking Campaign",
    description:
      "Marvin the Moose exposes the dangers of smoking in this animated vignette series. Used on social networks and in public video displays at bus stops and metro stations.",
    path: "/project/norwegian-anti-smoking-campaign/",
    videoUrl: "https://player.vimeo.com/video/809210388?h=1382e2d0dd",
  },
  {
    image: num26,
    title: "Awkward Fam Photos/American Goth",
    description:
      "Documentary graphics for a segment of Awkward Family Photos, a show pilot which premiered at the 2020 Sundance Film Festival. Tools included After Effects and Photoshop.",
    path: "/project/awkward-family-photos-american-goth/",
    videoUrl: "https://player.vimeo.com/video/401129083?h=f04d85ba91",
  },
  {
    image: num27,
    title: "Fox Sports / CFB Talent Promo",
    description:
      "ACC college football is back and better than ever! For this spot, we combined graphic animation, talent shots, upbeat music and sound bites to promote this quirky crew of football fanatics at their best.",
    path: "/project/fox-sports-cfb-talent-promo/",
    videoUrl: "https://player.vimeo.com/video/819545063?h=371cb34ea8&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    image: num28,
    title: "Proper Cloth / Coronavirus Masks",
    description:
      "During the pandemic, Proper Cloth introduced a high-end line of masks with comfort, style, and efficacy as key selling points. Tracked GFX highlight the technology and product’s superiority.",
    path: "/project/proper-cloth-cvc-masks/",
    videoUrl: "",
  },
  {
    image: num29,
    title: "Atlanta Braves Opening Week",
    description: "",
    path: "/project/atlanta-braves-opening-week/",
    videoUrl: "https://player.vimeo.com/video/819566632?h=43fe3101d0&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    image: num30,
    title: "805 Wine Animations",
    description:
      "Created primarily for the developing wine market in Japan, these animations use anthropomorphic characters, which are a popular marketing device for Japanese wine consumers.",
    path: "/project/805-wine-animations/",
    videoUrl: "https://player.vimeo.com/video/533342147?h=56058290a2",
  },
  {
    image: num31,
    title: "Starz Graveyard Shift",
    description:
      "A promo package for an ongoing block of horror movie programming for Starz Entertainment. Tracking and graphics accomplished with Cinema 4D, After Effects, and in-camera effects.",
    path: "/project/starz-graveyard-shift/",
    videoUrl: "https://player.vimeo.com/video/405705624?h=2d94224eb2",
  },
  {
    image: num32,
    title: "Awkward Family Photos Open",
    description:
      "Documentary show that tells the stories behind America’s most popular awkward family photos. What better way to communicate the silliness of the show than wrapping it in a retro-style photo album?",
    path: "/project/awkward-family-photos-open/",
    videoUrl: "https://player.vimeo.com/video/382117945?h=5e9bb2a043",
  },
  {
    image: num33,
    title: "Cringeworthy Board Game",
    description:
      "A budget-friendly explainer video or “explanimation” for a new board game called “Cringeworthy”. Character design and compositions drawn by hand and animated in After Effects.",
    path: "/project/cringeworthy-board-game/",
    videoUrl: "https://player.vimeo.com/video/448727545?h=fa5b538ea4",
  },
  {
    image: num34,
    title: "Emory GBS Virtual Tour",
    description:
      "A guided tour of the Roberto C. Goizueta Business School campus at Emory University. Learn about the programs offered and what Emory GBS has to offer candidates for higher learning.",
    path: "/project/emory-gbs-virtual-tour/",
    videoUrl: "https://player.vimeo.com/video/810134546?h=5ffed2b6e4&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    image: num35,
    title: "Discover Card Brand Social",
    description: "Created with After Effects",
    path: "/project/discover-card-brand-social/",
    videoUrl: "https://player.vimeo.com/video/809223504?h=50c936f541",
  },
  {
    image: num36,
    title: "Major League Rugby Pro Shop",
    description:
      "Shop MLR video: Get the hottest gear from your favorite Major League Rugby squad. Whether it’s jerseys, caps or workout gear … you can get everything you need at ShopMLR.com",
    path: "/project/major-league-rugby-pro-shop/",
    videoUrl: "",
  },
  {
    image: num37,
    title: "MBN Alhurra “The Melting Pot”",
    description:
      "13-Part Series on families who immigrated to the United States. 3 generations of each family were interviewed for this series, with each generation offering its own unique perspective on America.",
    path: "/project/mbn-alhurra-the-melting-pot/",
    videoUrl: "",
  },
  {
    image: num38,
    title: "At Home with Authors/In That Time",
    description:
      "Daniel Weiss, CEO of the Metropolitan Museum of Art, finds poetry in one soldier’s life and captures a portrait of the Vietnam era with his new book, In That Time. The book is a tribute to Major Michael O’Donnell.",
    path: "/project/nantucket-book-festival-at-home-with-authors-in-that-time/",
    videoUrl: "",
  },
  {
    image: num39,
    title: "At Home with Authors/Crocker Snow, Jr.",
    description:
      "You could say that Crocker Snow Jr. has been writing his latest book, about the tiny island off the coast of Nantucket called Muskeget, ever since his father flew him there some 70 years ago. He shares his memories of a bygone era.",
    path: "/project/nantucket-book-festival-at-home-with-authors-crocker-snow-jr-with-rob-cocuzzo/",
    videoUrl: "",
  },
  {
    image: num40,
    title: "At Home with Authors/The Right To Vote",
    description:
      "Elaine Weiss, author of The Woman’s Hour: The Great Fight To Win The Vote, says her book “is about how change is made in a democracy….what it takes to make change, and how hard it is.”",
    path: "/project/nantucket-book-festival-at-home-with-authors-the-right-to-vote/",
    videoUrl: "",
  },
  {
    image: num41,
    title: "BlueKey Construction Liberty Welding",
    description:
      "Hurricane Ida wreaked havoc on New Orleans, and Liberty Welding was hit hard. BlueKey Restoration saved the day and got Liberty Welding the money needed to restore, and improve, the building.",
    path: "/project/bluekey-construction-liberty-welding/",
    videoUrl: "",
  },
  {
    image: num42,
    title: "Your Teams Play Here",
    description: "",
    path: "/project/your-teams-play-here/",
    videoUrl: "https://player.vimeo.com/video/819568010?h=7874e5197a&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    image: num43,
    title: "Mercedes-Benz of Buckhead / Black Friday",
    description:
      "Black Friday promotional event for Mercedes-Benz of Buckhead. SkySee Video’s camera and drone crew followed the Black Friday caravan around the Buckhead area, including the Lennox Mall roundabout.",
    path: "/project/mercedes-benz-of-buckhead-black-friday/",
    videoUrl: "",
  },
  {
    image: num44,
    title: "Fly Fishing B-Roll",
    description:
      "B-roll shot for Blowing Rock, NC, and Chetola Resort ad campaigns. Panasonic GH5s and Inspire 2 with X7 camera.",
    path: "/project/fly-fishing-b-roll/",
    videoUrl: "https://player.vimeo.com/video/810150851?h=1a38fca439",
  },
  {
    image: num45,
    title: "life.less",
    description:
      "”Myong-hee,” played by Jennifer Sun Bell, who was abused by close members of her family. When she runs away from home, she finds herself on the street where predators await vulnerable girls like her.",
    path: "/project/life-less/",
    videoUrl: "",
  },
  {
    image: num46,
    title: "Rasin Mwen – L’ Amour Du Fric",
    description:
      "“For The Love Of Money” A film by Robinson Vil, shot entirely on location in Haiti, is a Hollywood-styled film that combines great visuals of the island & a story full of plot twists that will entertain from start to finish.",
    path: "/project/rasin-mwen-l-amour-du-fric/",
    videoUrl: "",
  },
  {
    image: num47,
    title: "Emory GBS Leadership ExecMBA",
    description:
      "Overview of the Goizueta Business School’s Executive MBA program at Emory University in Atlanta, GA. Learn about the programs offered and what Emory GBS has to offer candidates for higher learning.",
    path: "/project/emory-gbs-leadership-execmba/",
    videoUrl: "https://player.vimeo.com/video/810134426?h=a08dd44dbe&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    image: num48,
    title: "Emory GBS Entrepreneurship",
    description:
      "Overview of Emory’s Entrepreneurship program for undergraduate students of the Roberto C. Goizueta Business School.",
    path: "/project/emory-gbs-entrepreneurship/",
    videoUrl: "https://player.vimeo.com/video/810134261?h=158c3952a4&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    image: num49,
    title: "Emory Goizueta Business School",
    description:
      "The Emory Goizueta Business School prides itself on helping to develop the next generation of business leaders. Emory GBS is preparing these leaders to overcome these challenges our planet faces.",
    path: "/project/emory-goizueta-business-school/",
    videoUrl: "https://player.vimeo.com/video/810134643?h=a8f4375e6f&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    image: num50,
    title: "Horizon Roofing / Friendship Baptist Church",
    description:
      "When Friendship Baptist Church, its school and gym were devastated by a hurricane, Horizon Roofing was able to secure $2,500,000 to repair all of the damages and restore the property.",
    path: "/project/horizon-roofing-friendship-baptist-church/",
    videoUrl: "",
  },
  {
    image: num51,
    title: "Chetola Lifestyle / Girlfriends Getaway",
    description:
      "Social medial promo for Chetola Resort in Blowing Rock, NC, highlighting the surrounding area and its amenities, including trout fishing, hiking, horseback riding, fine dining, picnicking, and more.",
    path: "/project/chetola-lifestyle-girlfriends-getaway/",
    videoUrl: "",
  },
  {
    image: num52,
    title: "Chetola Resort Lifestyle / Romantic Couple",
    description:
      "Social medial promo for Chetola Resort in Blowing Rock, NC, highlighting the surrounding area and its amenities, including trout fishing, hiking, horseback riding, fine dining, picnicking, and more.",
    path: "/project/chetola-resort-lifestyle-romantic-couple/",
    videoUrl: "https://player.vimeo.com/video/323272396?h=93cf4999d4&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    image: num53,
    title: "Coronavirus Cleanup GA CBS 46",
    description:
      "Created for Coronavirus Cleanup GA, a company specializing in disinfecting businesses and schools. The video includes 3-D animation of viruses and bacteria eliminated by CVCGA.",
    path: "/project/coronavirus-cleanup-ga-cbs-46/",
    videoUrl: "https://player.vimeo.com/video/481297068?h=fe2336c494&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    image: num54,
    title: "Emory GBS Leadership EvMBA",
    description: "Overview of Executive MBA program at Emory GBS.",
    path: "/project/emory-gbs-leadership-evmba/",
    videoUrl: "https://player.vimeo.com/video/810134355?h=b7cca93ae9&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    image: num55,
    title: "Emory GBS Leadership FTMBA",
    description:
      "Overview of Emory Goizueta Business School’s full-time Leadership MBA program.",
    path: "/project/emory-gbs-leadership-ftmba/",
    videoUrl: "https://player.vimeo.com/video/810134477?h=af982b45c1&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    image: num56,
    title: "The Melting Pot / MBN Al Hurra",
    description:
      "13-part series on immigration in the United States of America, broadcast in the Middle East on American-owned network, Al Hurra. Audio is dubbed over in Arabic",
    path: "/project/the-melting-pot-mbn-al-hurra/",
    videoUrl: "",
  },
  {
    image: num57,
    title: "Clayton Homes / Hurricane Michael",
    description:
      "Clayton Homes manufactures modular houses that are not only aesthetically stylish, they’re built to withstand the worst that Mother Nature can throw at it. Hurricane Michael proved their case.",
    path: "/project/clayton-homes-1-hurricane-michael-0/",
    videoUrl: "https://player.vimeo.com/video/306255507?h=e9b1b92e21",
  },
  {
    image: num58,
    title: "Blowing Rock Family Getaway",
    description: "",
    path: "/project/blowing-rock-family-getaway/",
    videoUrl: "https://player.vimeo.com/video/273605317?h=d62089c2d1",
  },
  {
    image: num59,
    title: "Blowing Rock Girlfriends Getaway",
    description: "",
    path: "/project/blowing-rock-girlfriends-getaway/",
    videoUrl: "https://player.vimeo.com/video/273022160?h=eceb188db2",
  },
  {
    image: num60,
    title: "Blowing Rock Romantic Getaway",
    description: "",
    path: "/project/blowing-rock-romantic-getaway/",
    videoUrl: "https://player.vimeo.com/video/273374202?h=8813d935b0",
  },
  {
    image: num61,
    title: "Chetola Winter Wonderland",
    description: "",
    path: "/project/chetola-winter-wonderland/",
    videoUrl: "https://player.vimeo.com/video/248217852?h=2b0e41f6f7",
  },
  {
    image: num62,
    title: "Chetola Resort @ Blowing Rock/Fall Season",
    description: "",
    path: "/project/chetola-resort-at-blowing-rock/",
    videoUrl: "https://player.vimeo.com/video/191655429?h=2131f7e88f",
  },
  {
    image: num63,
    title: "The Hold Fast Foundation",
    description: "",
    path: "/project/the-hold-fast-foundation/",
    videoUrl: "https://player.vimeo.com/video/224190911?h=3bfd747b51",
  },
  {
    image: num64,
    title: "Kearns Marine Construction",
    description: "",
    path: "/project/kearns-marine-construction/",
    videoUrl: "",
  },
  {
    image: num65,
    title: "SkySee Video | PT Stearman Biplane",
    description: "",
    path: "/project/pt-stearman-airplane-drone-1/",
    videoUrl: "https://player.vimeo.com/video/191636395?h=e5608067e9",
  },
  {
    image: num66,
    title: "This American Land on PBS / Land of Legends",
    description: "",
    path: "/project/this-american-land-land-of-legends/",
    videoUrl: "https://player.vimeo.com/video/194558172?h=26b65ca8d0",
  },
  {
    image: num67,
    title: "This American Land: Sage Advice for Sage Lands",
    description: "",
    path: "/project/this-american-land-sage-advice-for-sage-lands/",
    videoUrl: "https://player.vimeo.com/video/194550536?h=219c93c2c3",
  },
  {
    image: num68,
    title: "This American Land: Farming The Upstream",
    description: "",
    path: "/project/this-american-land-farming-the-upstream/",
    videoUrl: "https://player.vimeo.com/video/193980833?h=11978f6104",
  },
  {
    image: num69,
    title: "This American Land / Megaloads",
    description:
      "Protestors stand up to oil companies attempting to transport “Megaloads” through scenic routes on federal lands, often requiring the disassembly and reassembly of bridges.",
    path: "/project/this-american-land-megaloads-blocked-from-wild-scenic-river-route/",
    videoUrl: "https://player.vimeo.com/video/194552658?h=4491c5108a",
  },
  {
    image: num70,
    title: "This American Land / Back To Organics",
    description:
      "Small-scale farmers in Montana learn how to grow crops organically with helpful support from advisers with the Natural Resources Conservation Service.",
    path: "/project/this-american-land-back-to-organics/",
    videoUrl: "https://player.vimeo.com/video/194591362?h=731578adc2",
  },
  {
    image: num71,
    title: "This American Land / Sold on Organics",
    description: "",
    path: "/project/this-american-land-sold-on-organics/",
    videoUrl: "https://player.vimeo.com/video/194571431?h=1c76ff2e1c",
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
          <Picture
            key={src}
            data={src}
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
