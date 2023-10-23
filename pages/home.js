import { createClient } from "contentful";
import Nav from "../components/molecules/nav/Nav";
import HeroCarousel from "../components/organisms/heroCarousel/HeroCarousel";
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
  const { 0: mainMenu, 1: heroBanner } = Page[0].fields.components;

  return (
    <div className="anchor" id="top">
      <Nav contentModule={mainMenu} />
      <HeroCarousel contentModule={heroBanner} />
    </div>
  );
}
