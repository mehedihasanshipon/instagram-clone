import React,{ lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from '../src/constants/routes'

const Login = lazy(() => import("../src/pages/Login.js"));
function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch >
          <Route path={ROUTES.LOGIN} >
            <Login />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
