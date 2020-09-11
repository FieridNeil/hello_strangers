import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/login";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MasterLayout from "./components/Layout/MasterLayout";

function App() {
  return (
    <MasterLayout>
      <Router>
        <Switch>
          <Route path={["/login", "/"]} component={Login} exact />
          <Route path='/404' component={PageNotFound} exact />
        </Switch>
      </Router>
    </MasterLayout>
  );
}

export default App;
