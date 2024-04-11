# VK

## Components
This project provides components for
* [Movies](#movies)
* [Movie](#movie)
* [Query](#query)

## Movies
```
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
```

## Movie
```
import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  return (
    <Link to={`/film/${movie.attributes.slug}`} className="movies__item">
          <div className="movies__item-content">
          <div className="movies__thumbnail">
            {movie.attributes.thumbnail ?
              <img src={movie.attributes.thumbnail} alt={movie.attributes.title} /> :
              <div className="movies__thumbnail-no">No thumbnail available</div>
            }
          </div>
            <h3>
              {movie.attributes.title}
            </h3>
            <div className="movies__rating">{movie.attributes.year}</div>
            <div className="movies__description">
            {movie.attributes.description.length > 50 ?
              movie.attributes.description.slice(0, 50) + '...' :
              movie.attributes.description
            }
            </div>
          </div>
    </Link>
  );
};

export default Movie;
```
## Query
```
import React from "react";
import { useQuery } from "@apollo/client";

const Query = ({ children, query, slug }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { slug: slug }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;
```

[Pages](https://vkoutsky.github.io/vk/pages)