import React, { Component } from "react";
import AllEmployees from './components/AllEmployees';
import EmployeeDetail from './components/EmployeeDetail';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import NewEmployee from './components/NewEmployee';

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/employees' component={AllEmployees} />
            <Route exact path="/employees/:id" component={EmployeeDetail} />
            <Route exact path='/create' component={NewEmployee} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
