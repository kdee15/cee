import { createClient } from "contentful";
import Nav from "../components/molecules/nav/Nav";
import HeroCarousel from "../components/organisms/heroCarousel/HeroCarousel";
import TwoColumnText from "../components/organisms/twoColumnText/TwoColumnText";
import CapsuleItemList from "../components/organisms/capsuleItemList/CapsuleItemList";
import CardList from "../components/organisms/cardList/CardList";
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

  return {
    props: {
      Page: resPage,
    },
    revalidate: 1,
  };
}

export default function Home({ Page }) {
  const {
    0: mainMenu,
    1: heroBanner,
    2: twoColumnText,
    3: capsuleItemList,
    4: whatWeDo,
  } = Page[0].fields.components;

  return (
    <div className="anchor" id="top">
      <Nav contentModule={mainMenu} />
      <HeroCarousel contentModule={heroBanner} />
      <TwoColumnText contentModule={twoColumnText} />
      <CapsuleItemList contentModule={capsuleItemList} />
      <CardList contentModule={whatWeDo} />
    </div>
  );
}
