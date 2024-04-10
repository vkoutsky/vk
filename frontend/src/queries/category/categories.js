import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`
  query Categories {
    categories(sort: "createdAt:desc", pagination: { limit: 20 }){
      data{
        id, 
        attributes{
          name,
          slug
        }
      }
    }
  }
`;

export default CATEGORIES_QUERY;  