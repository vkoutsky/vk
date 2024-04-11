# Pages

* [Movies](#movies)
* [Movie detail](#movie-detail)
* [Category](#category)

## Movies

```
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
```
## Movie detail

```
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
```
## Category

```
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
```