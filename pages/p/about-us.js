import { createClient } from "contentful";
import Nav from "../../components/molecules/nav/Nav";
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

  return {
    props: {
      Page: resPage,
    },
    revalidate: 1,
  };
}

export default function PageAboutUs({ Page, MainMenu }) {
  const home = Page[0].fields;
  const { 0: pageMenu } = Page[0].fields.components;
  return (
    <div className="anchor" id="top">
      <Nav contentModule={pageMenu} />
      <h1>{home.title}</h1>
    </div>
  );
}
