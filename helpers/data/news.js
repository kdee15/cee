export const NEWS_CONTENT = `
  query GetNews($slug: String!) {
    pagePageCollection(where: { slug: $slug }, limit: 1) {
      items {
        title
        slug
        copy {
          json
        }
        hasHeroBanner
        image {
          title
          url
          width
          height
        }
        customClass
      }
    }
  }
`;

export const NEWS_SLUG = `
query {
  pagePageCollection{
    items {
      title
      slug
    }
  }
}
`;

export const NEWS_PAGE = `
query GetNewsIndex($id: String!)  {
  pageContent ({id: $id})  {
    title
    slug
    sys {
      id
    }
  }
 }
`;
