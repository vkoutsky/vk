import gql from "graphql-tag";

const MOVIES_QUERY = gql`
  query Movies {
    movies (sort: "createdAt:desc", pagination: { limit: 1500 }){
      data{
        id, 
        attributes{
          title,
          year,
          slug,
          description,
          thumbnail,
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

export default MOVIES_QUERY;