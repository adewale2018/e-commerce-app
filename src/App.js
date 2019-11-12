import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/homepage/Homepage";

const HatsPage = props => {
  console.log(props);
  return <h1>This is the OTHER PAGE!!!</h1>;
};

function App() {
  return (
    <Switch>
      <div>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/hats' component={HatsPage} />
      </div>
    </Switch>
  );
}

export default App;
