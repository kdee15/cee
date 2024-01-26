import { createClient } from "contentful";
import Nav from "../components/molecules/nav/Nav";
import HeroCarousel from "../components/organisms/heroCarousel/HeroCarousel";
import TwoColumnText from "../components/organisms/twoColumnText/TwoColumnText";
import CapsuleItemList from "../components/organisms/capsuleItemList/CapsuleItemList";
import CardList from "../components/organisms/cardList/CardList";
import TestimonialsCarousel from "../components/organisms/testimonialsCarousel/TestimonialsCarousel";
import SignUp from "../components/organisms/signup/SignUp";
import ComponentFooter from "../components/blocks/footer/Footer";
import HeroBanner from "../components/organisms/heroBanner/HeroBanner";
import TwoColumnCopyImage from "../components/organisms/twoColumnCopyImage/TwoColumnCopyImage";
const { C_SPACE_ID, C_DELIVERY_KEY } = require("../helpers/contentful-config");

export async function getStaticProps(context) {
  const client = createClient({
    space: C_SPACE_ID,
    accessToken: C_DELIVERY_KEY,
  });

  const resPage = await client
    .getEntries({
      content_type: "pageHome",
      include: 10,
    })

    .then((entries) => entries.items);

  const resFooter = await client.getEntries({
    content_type: "componentFooter",
    include: 10,
  });

  return {
    props: {
      Page: resPage,
      Footer: resFooter.items[0].fields,
    },
    revalidate: 1,
  };
}

export default function Home({ Page, Footer }) {
  const {
    0: mainMenu,
    1: heroBanner,
    2: whatWeDo,
    3: unlockCreativity,
    4: twoColumnText,
    5: capsuleItemList,
    6: testimonials,
  } = Page[0].fields.components;

  return (
    <div className="anchor" id="top">
      <Nav contentModule={mainMenu} />
      <HeroBanner contentModule={heroBanner} />
      <CardList contentModule={whatWeDo} />
      <TwoColumnCopyImage contentModule={unlockCreativity} />
      <CapsuleItemList contentModule={capsuleItemList} />
      <SignUp />
      <TestimonialsCarousel contentModule={testimonials} />
      <ComponentFooter contentModule={Footer} />
    </div>
  );
}
