export const PAGE_CONTENT = `
  query GetPage($slug: String!) {
    pageCollection(where: { slug: $slug }, limit: 1) {
      items {
        title
        slug
      }
    }
  }
`;

export const PAGE_SLUG = `
query {
  pageCollection {
      items {
        slug
      }
    }
}
`;

export const PAGE_LIST = `
query GetPageList
 {
  pageCollection {
    items {
        title
        slug
        ... on PageProjects {
          title
          ... on Page {
            title
            slug
            sys {
              id
            }
          }
        }

    }
  }
}
`;

export const PAGE_ELEMENTS = `
query GetElements
{
  componentMenu (id:"39KX54gNwflHWi6CKJRlcb") {
    title
  }
}
`;

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
