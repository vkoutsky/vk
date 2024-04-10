import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
      <div className="footer">
        <div className="footer__col">
          <span>VK</span>
          <Link to="mailto:vojta@elementstudio.cz">vojta@elementstudio.cz</Link>
        </div>
        <div className="footer__col">
          <div className="footer__link">
            <span>Git:</span>
            <Link to="#">Doplnit link</Link>
          </div>
          <div className="footer__link">
            <Link to="/documentation">Documentation</Link>
          </div>
          
        </div>
      </div>
  );
};

export default Nav;