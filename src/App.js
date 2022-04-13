import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbars from "./Page/Navbar";
// import Buy from './Buy'
// import Sell from './Sell'
import Home from "./Page/Home";
import Resgistration from "./Page/Resgistration";
import Hsection10 from "./Components/HomeSection/Hsection10A";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbars />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Resgistration">
            <Resgistration />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
