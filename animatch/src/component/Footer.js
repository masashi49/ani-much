import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    <nav className="footer-nav">
      <ul className="nav-list">
        <li className="nav-list-item">
          <Link className="nav-list-item__link" to="/">
            TOP
          </Link>
        </li>
        <li className="nav-list-item">
          <Link className="nav-list-item__link" to="/about">
            アニマッチ
          </Link>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
