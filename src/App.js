import React, { Component } from "react";
import AllEmployees from "./components/AllEmployees";
import EmployeeDetail from "./components/EmployeeDetail";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import NewEmployee from "./components/NewEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import UpdateEmployeeDetail from "./components/UpdateEmployeeDetail";
import Header from "./components/Header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/employees" component={AllEmployees} />
            <Route exact path="/employees/:id" component={EmployeeDetail} />

            <Route exact path="/create" component={NewEmployee} />
            <Route exact path="/create/:id" component={NewEmployee} />

            <Route exact path="/update" component={UpdateEmployee} />
            <Route exact path="/udpate/:id" component={UpdateEmployeeDetail} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
