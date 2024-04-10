import React from "react";
import { Link } from "react-router-dom";


const HeaderDoc = () => {
  return (
    <div className="header">
    <div className="header__logo">
          <Link to="/">VK</Link>
    </div>
    <nav data-uk-navbar>
        <ul className="nav">
          <li><Link to="/documentation">Home</Link></li>
          <li><Link to="/first-steps">First steps</Link></li>
          <li><Link to="/components">Components</Link></li>
          <li><Link to="/pages">Pages</Link></li>
        </ul>
    </nav>
  </div>
  );
};

export default HeaderDoc;