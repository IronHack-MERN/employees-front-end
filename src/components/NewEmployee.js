import React, { Component } from "react";
import EmployeeService from "../services/employeeService";

class NewEmployee extends Component {
  state = {
    name: "",
    surname: "",
    job: "",
    createdAt: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    EmployeeService.addNewEmployee(this.state);

    this.setState({
      name: "",
      surname: "",
      job: "",
      createdAt: "",
    });
  };

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="wrapper-form">
        <h1>New Employee</h1>
        <div className="new-employee-form">
          <form onSubmit={this.handleFormSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(e) => this.handleChange(e)}
            />

            <label>Surname</label>
            <input
              type="text"
              name="surname"
              value={this.state.surname}
              onChange={(e) => this.handleChange(e)}
            />

            <label>Job</label>
            <input
              type="text"
              name="job"
              value={this.state.job}
              onChange={(e) => this.handleChange(e)}
            />

            <label>Date</label>
            <input
              type="text"
              name="createdAt"
              value={this.state.createdAt}
              onChange={(e) => this.handleChange(e)}
            />

            <input
              className="submit-button"
              type="submit"
              value="ADD NEW EMPLOYEE"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default NewEmployee;
