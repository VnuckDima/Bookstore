import React from "react";
import "./Products.scss";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <div className="navbar-header">
        <Link to="/">
          <div>
            <HomeIcon fontSize="large" style={{ color: "black" }} />
          </div>
          </Link>

          <div>
            <h1>Book Store</h1>
          </div>

          <div>
            <EmojiObjectsIcon
              className="icon-lamp"
              fontSize="large"
              style={{ color: "black" }}
            />

            <AccountCircleIcon
              fontSize="large"
              style={{ color: "black" }}
              className="icon-user"
            />
            <Link to="/books">
              <ShoppingCartIcon fontSize="large" style={{ color: "black" }} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
