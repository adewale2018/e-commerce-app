import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/homepage/Homepage";
import ShopPage from './pages/homepage/shop/ShopPage';


function App() {
  return (
    <Switch>
      <div>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
      </div>
    </Switch>
  );
}

export default App;
