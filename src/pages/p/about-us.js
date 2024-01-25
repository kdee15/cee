import { createClient } from "contentful";
import Nav from "../../components/molecules/nav/Nav";
import ComponentFooter from "../../components/blocks/footer/Footer";
import HeroCarousel from "../../components/organisms/heroCarousel/HeroCarousel";
import OneColumnCopy from "../../components/organisms/oneColumnCopy/OneColumnCopy";
import CardList from "../../components/organisms/cardList/CardList";
import TestimonialsCarousel from "../../components/organisms/testimonialsCarousel/TestimonialsCarousel";
import SignUp from "../../components/organisms/signup/SignUp";
const {
  C_SPACE_ID,
  C_DELIVERY_KEY,
} = require("../../helpers/contentful-config");

export async function getStaticProps(context) {
  const client = createClient({
    space: C_SPACE_ID,
    accessToken: C_DELIVERY_KEY,
  });

  const resPage = await client
    .getEntries({
      content_type: "pageContent",
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

export default function PageAboutUs({ Page, Footer }) {
  const aboutPage = Page[0].fields;
  const {
    0: pageMenu,
    1: pageBanner,
    2: visionMission,
    3: teamChangeMakers,
    4: visionaries,
    5: testimonials,
  } = Page[0].fields.components;
  console.log("aboutPage", Page);
  return (
    <div className="anchor" id="top">
      <Nav contentModule={pageMenu} />
      <HeroCarousel contentModule={pageBanner} />
      <OneColumnCopy contentModule={visionMission} />
      <CardList contentModule={teamChangeMakers} />
      <CardList contentModule={visionaries} />
      <SignUp />
      <TestimonialsCarousel contentModule={testimonials} />
      <ComponentFooter contentModule={Footer} />
    </div>
  );
}
