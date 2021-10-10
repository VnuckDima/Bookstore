import React from "react";
import "../Products.scss";
import "./Admin.scss";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { Link } from "react-router-dom";

function HeaderAdmin() {
  return (
    <div>
      <nav>
        <div className="navbar-header">
          <div className="title">
            <h1 className="title-admin">Admin Page</h1>
          </div>

          <div className="icon-wrap">
            <Link to="registration">
              <AccountCircleIcon
                fontSize="large"
                style={{ color: "black" }}
                className="icon-user"
              />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderAdmin;
