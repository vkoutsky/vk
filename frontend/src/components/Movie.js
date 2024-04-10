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