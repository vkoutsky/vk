import React from "react";
import HeaderDoc from '../components/HeaderDoc'
import { Link } from "react-router-dom";

const ComponentsPage = () => {
  return (
    <section>
      <HeaderDoc />
      <div className="documentation">
            <h1>Components</h1>
            <p>This project provides components for</p>
            <ol>
              <li>
                <Link to="#movies">Movies</Link>
              </li>
              <li>
                <Link to="#movie">Movie</Link>
              </li>
              <li>
                <Link to="#query">Query</Link>
              </li>
            </ol>
            
      </div>
    </section>
  );
};

export default ComponentsPage;