import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  navLinks,
  navLinksItem,
  navLinksText,
  h1,
} from "../components/layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinksItem}>
            <Link to="/" className={navLinksText}>
              Home
            </Link>
          </li>
          <li className={navLinksItem}>
            <Link to="/about" className={navLinksText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={h1}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
