import React from "react";
import "./App.scss";

import { Route } from "react-router-dom";



import Header from "./components/products/Header";
import { Home, Books } from "./pages";


function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Route path="/" component={Home} exact />
        <Route path="/books" component={Books} exact />
      </div>
    </div>
  );
}

export default App;
