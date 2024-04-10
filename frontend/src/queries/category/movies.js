import gql from "graphql-tag";

const CATEGORY_ARTICLES_QUERY = gql`
  query Category($slug: String!) {
    categories(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          slug,
          name,
          movies {
            data {
              attributes {
                slug
                title,
                year,
                description,
                thumbnail,
                categories{
                  data{
                    attributes{name}
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default CATEGORY_ARTICLES_QUERY;