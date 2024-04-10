import React from "react";
import Movie from "./Movie";

const Movies = ({ movies }) => {

  return (
    <div className="movies__list">
        {movies.map((movie) => {
          return (
            <Movie
            movie={movie}
            key={`movie__${movie.attributes.title}`}
            />
            );
          })}
    </div>
  );
};

export default Movies;