---
layout: page
title: Components
permalink: /components/
---

This project provides components for
* [Movies](#movies)
* [Movie](#movie)

## Movies
This component provides all movies

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
This component show one movie in list

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


[Pages](https://vkoutsky.github.io/vk/pages)