import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MasterLayout from "./components/Layout/MasterLayout";
import Main from "./components/Main/Main";

function App() {
  return (
    <MasterLayout>
      <Router>
        <Switch>
          <Route path={["/home", "/", "/login"]} component={Home} exact />
          <Route path='/main' component={Main} exact />
          <Route component={PageNotFound} exact />
        </Switch>
      </Router>
    </MasterLayout>
  );
}

export default App;
