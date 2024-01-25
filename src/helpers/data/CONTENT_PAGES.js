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

export const PROJECT_CONTENT = `
  query GetProject($slug: String!) {
    pageContentCollection(where: { slug: $slug }, limit: 1) {
      items {
        title
        slug
        componentsCollection {
          items {
            __typename
          }
        }
      }
    }
  }
`;

export const PROJECT_SLUG = `
query {
  pageContentCollection {
      items {
        slug
      }
    }
}
`;

export const PROJECT_LIST = `
query GetHome {
  pageContentCollection {
    items {
        title
        slug
        ... on PageProjects {
          title
          isFeatured
          previewImageDesktop {
            title
            url
            width
            height
          }
        }

    }
  }

}
`;
