import React from "react";
import { useParams } from "react-router";
import Query from "../components/Query";
import Header from '../components/Header'
import MOVIE_QUERY from "../queries/movie/movie";

const Movie = () => {
  let { slug } = useParams();

  return (
    <Query query={MOVIE_QUERY} slug={slug}>
      {({ data: { movies } }) => {
        if (movies.data.length) {
          return (
            <section>
              <div className="movie__intro">
                <div className="movie__content">
                  <h1>{movies.data[0].attributes.title}</h1>
                  <div className="movie__year">Year: {movies.data[0].attributes.year}</div>
                  <div className="movie__description">{movies.data[0].attributes.description}</div>
                </div>
                <div>
                  <img src={movies.data[0].attributes.thumbnail} alt={movies.data[0].attributes.title} />
                </div>
              </div>
              <div className="movie__bottom">
                <div className="movies__categories">
                <h4>Categories:</h4>
                  <ul>
                    {movies.data[0].attributes.categories.data.map(category => (
                      <li key={category.attributes.name}>{category.attributes.name}</li>
                    ))}
                  </ul>
                </div>
                    
                <div className="movies__actors">
                  <h4>Actors:</h4>
                  <ul>
                    {movies.data[0].attributes.actors.data.map(actor => (
                      <li key={actor.attributes.name}>{actor.attributes.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          );
        }
      }}
    </Query>
  );
};

export default Movie;