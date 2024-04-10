import React from "react";
import Query from "./Query";
import { Link } from "react-router-dom";

import CATEGORIES_QUERY from "../queries/category/categories";

const Nav = () => {
  return (
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => { 
          return (
            <div className="header">
              <div className="header__logo">
                    <Link to="/">VK</Link>
              </div>
              <nav data-uk-navbar>
                  <ul className="nav">
                    {categories.data.map((category) => {
                      return (
                        <li key={category.attributes.slug}>
                          <Link
                            to={`/category/${category.attributes.slug}`}
                            className="uk-link-reset"
                          >
                            {category.attributes.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
              </nav>
            </div>
          );
        }}
      </Query>
  );
};

export default Nav;