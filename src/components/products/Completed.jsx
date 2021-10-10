import React from "react";
import "./Products.scss";

import Confetti from "react-confetti";



function Completed() {
  return (
    <div>
      <Confetti />
      <div className="font-congratulations">Congratulations, you're AWESOME!!!</div>
    </div>
  );
}

export default Completed;
