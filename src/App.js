import React from "react";
import "./App.scss";

import { Route } from "react-router-dom";



import Header from "./components/products/Header";
import { Home, Books } from "./pages";
import Registration from "./components/registration/Registration"
import Completed from "./components/products/Completed";
import AdminPaige from "./components/products/admin/AdminPaige";


function App() {
 
  return (
    <div>
      <div>
        {/* <Header path="/" component={Home} exact/> */}
        <Route path="/" component={Header} exact />
        <Route path="/books" component={Header} exact />
      </div>
      <div>
        <Route path="/" component={Home} exact />
        <Route path="/books" component={Books} exact />
        <Route path="/registration" component={Registration} exact />
        <Route path="/completed" component={Completed} exact />
        <Route path="/admin" component={AdminPaige} exact />
      </div>
    </div>
  );
}

export default App;
