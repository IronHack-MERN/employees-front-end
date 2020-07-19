import React, { Component } from "react";
import employeeService from "./services/EmployeeService";
import AllEmployees from './components/AllEmployees';
import EmployeeDetail from './components/EmployeeDetail';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";

import "./App.css";
import Employees from "./components/AllEmployees";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/employees' component={AllEmployees} />
            <Route exact path="/employees/:id" component={EmployeeDetail} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
