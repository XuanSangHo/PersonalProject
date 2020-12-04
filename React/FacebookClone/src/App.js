import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginHeader from "./LoginHeader/LoginHeader.js";
import Login from "./Login/Login.js";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "/login">
            <LoginHeader />
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
