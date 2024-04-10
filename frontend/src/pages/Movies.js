import React from "react";
import Movies from "../components/Movies";
import Query from "../components/Query";
import MOVIES_QUERY from "../queries/movie/movies";
import Header from '../components/Header'


const Home = () => {
  return (
    <section>
       <Header />
      <div className="movies__hp">
      
            <h1>Movies list</h1>
            <Query query={MOVIES_QUERY}> 
              {({ data: { movies } }) => {
                console.log(movies)
                return <Movies movies={movies.data} />;
              }}
            </Query>
      </div>
    </section>
  );
};

export default Home;