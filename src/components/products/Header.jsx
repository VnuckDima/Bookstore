import React from "react";
import "./Products.scss";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const {totalPrice, totalCount} = useSelector(({cart}) => cart)

  return (
    <div>
      <nav>
        <div className="navbar-header">
        <Link to="/">
          <div className="home-icon">
            <HomeIcon fontSize="large" style={{ color: "black" }} />
          </div>
          </Link>

          <div className="title-header">
            <h1>Book Store</h1>
          </div>
        
          <div className="icon-wrap">
          <Link to="registration">
            <AccountCircleIcon
              fontSize="large"
              style={{ color: "black" }}
              className="icon-user"
            />
            </Link>
            <Link to="/books" style={{ textDecoration: 'none'}} >
              <div className="link-basket">
              <span className="total-price">{totalPrice} $</span>
              <ShoppingCartIcon fontSize="large" style={{ color: "black" }} /><span className="total-price">{totalCount}</span>
              </div>
              
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
