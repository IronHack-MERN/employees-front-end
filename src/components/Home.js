import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";

class Home extends Component {
  render() {
    return (
      <div className="navigator">
        <div className="columns">
          <div className="column">
            <Link
              className="navbar-brand"
              to="/employees"
              style={{ textDecoration: "none" }}
            >
              {" "}
              All Employees
            </Link>{" "}
          </div>
          <div className="column">
            <Link
              className="navbar-brand"
              to="/create"
              style={{ textDecoration: "none" }}
            >
              {" "}
              Create an Employee
            </Link>{" "}
          </div>
          <div className="column">
            <Link
              className="navbar-brand"
              to="/create"
              style={{ textDecoration: "none" }}
            >
              {" "}
              Update an Employee
            </Link>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
