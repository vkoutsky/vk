import React from "react";
import HeaderDoc from '../components/HeaderDoc'
import { Link } from "react-router-dom";

const ComponentsPage = () => {
  return (
    <section>
      <HeaderDoc />
      <div className="documentation">
            <h1>Pages</h1>
            <p>This project provides pages for</p>
            <ol>
              <li>
                <Link to="#movies">Movies</Link>
              </li>
              <li>
                <Link to="#movie-detail">Movie detail</Link>
              </li>
              <li>
                <Link to="#category">Category</Link>
              </li>
            </ol>  
      </div>
    </section>
  );
};

export default ComponentsPage;