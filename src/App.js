import React from "react";
import "./App.scss";

import { Route } from "react-router-dom";



import Header from "./components/products/Header";
import { Home, Books } from "./pages";
import Registration from "./components/registration/Registration"

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Route path="/" component={Home} exact />
        <Route path="/books" component={Books} exact />
        <Route path="/registration" component={Registration} exact />
      </div>
    </div>
  );
}

export default App;
