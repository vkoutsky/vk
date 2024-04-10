import gql from "graphql-tag";

const MOVIE_QUERY = gql`
  query Movie($slug: String!) {
    movies(filters: { slug: { eq: $slug } }) {
      data{
        id, 
        attributes{
          title,
          description,
          thumbnail,
          year,
          categories{
            data{
              attributes{name}
            }
          }
          actors{
            data{
              attributes{name}
            }
          }
        },
        
      }
    }
  }
`;

export default MOVIE_QUERY;