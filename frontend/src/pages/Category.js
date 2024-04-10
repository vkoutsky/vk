import React from "react";
import { useParams } from "react-router";
import Movies from "../components/Movies";
import Query from "../components/Query";
import CATEGORY_MOVIES_QUERY from "../queries/category/movies";
import Header from '../components/Header'
const Category = () => {
  let { slug } = useParams();

  return (
    <section>
    <Header />
    <Query query={CATEGORY_MOVIES_QUERY} slug={slug}>
      {({ data: { categories } }) => {
        if (categories.data) {
          return (
            <div>
                  <h1>List of movies in {categories.data[0].attributes.name}</h1>
                  <Movies movies={categories.data[0].attributes.movies.data} />
            </div>
          );
          
        }else{
          return (
            <div>
                  <h1>V této kategorii nejsou žádné filmy!</h1>
            </div>
          );
        }
      }}
    </Query>
    </section>
  );
};

export default Category;