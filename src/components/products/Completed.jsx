import React from "react";
import "./Products.scss";

import { Link } from "react-router-dom";

import Confetti from "react-confetti";

function Completed() {
  return (
    <div>
      <Confetti />
      <div className="font-congratulations">
        <p>Thanks, you're AWESOME!!!</p>
      </div>
      <Link to="/" style={{ color: "black", textDecoration: "none" }}>
        <div className="font-button-congratulations">Back to books</div>
      </Link>
    </div>
  );
}

export default Completed;
