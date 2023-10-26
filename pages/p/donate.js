import { createClient } from "contentful";
import Nav from "../../components/molecules/nav/Nav";
import ComponentFooter from "../../components/blocks/footer/Footer";
import HeroCarousel from "../../components/organisms/heroCarousel/HeroCarousel";
import OneColumnCopy from "../../components/organisms/oneColumnCopy/OneColumnCopy";
import CardList from "../../components/organisms/cardList/CardList";
import TestimonialsCarousel from "../../components/organisms/testimonialsCarousel/TestimonialsCarousel";
import SignUp from "../../components/organisms/signup/SignUp";
import DonateForm from "../../components/blocks/donateForm/DonateForm";
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

export default function PageDonate({ Page, Footer }) {
  const { 0: pageMenu, 1: pageBanner } = Page[0].fields.components;
  return (
    <div className="anchor" id="top">
      <Nav contentModule={pageMenu} />
      <HeroCarousel contentModule={pageBanner} />
      <DonateForm />
      <ComponentFooter contentModule={Footer} />
    </div>
  );
}
