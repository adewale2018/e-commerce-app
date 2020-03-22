import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/homepage/Homepage";
import ShopPage from "./pages/homepage/shop/ShopPage";
import Header from "./components/header/Header";
import SignInAndSignUp from './pages/homepage/signIn_signOut/SignIn_Out';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
