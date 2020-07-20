import React, { Component } from "react";
import EmployeeService from "../services/employeeService";
import Home from '../components/Home';

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
      <div>
        <Home/>
        <div className="form-wrapper">
      
        <h1 className="title">New Employee</h1>

        <div className="">
          <form onSubmit={this.handleFormSubmit}>
            <div className="field is-horizontal">
              <div class="field-label">
                <label className="label is-medium">Name</label>
              </div>

              <div class="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-medium"
                      placeholder="John"
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={(e) => this.handleChange(e)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div class="field-label">
                <label className="label is-medium">Surname</label>
              </div>
              <div class="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-medium"
                      placeholder="Doe"
                      type="text"
                      name="surname"
                      value={this.state.surname}
                      onChange={(e) => this.handleChange(e)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div class="field-label">
                <label className="label is-medium">Job</label>
              </div>
              <div class="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-medium"
                      placeholder="Developer, Software enginyeer"
                      type="text"
                      name="job"
                      value={this.state.job}
                      onChange={(e) => this.handleChange(e)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div class="field-label">
                <label className="label is-medium">Date</label>
              </div>
              <div class="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-medium"
                      placeholder="20-10-2020"
                      type="text"
                      name="createdAt"
                      value={this.state.createdAt}
                      onChange={(e) => this.handleChange(e)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label"></div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <button class="button is-primary btn-add-employee">ADD NEW EMPLOYEE</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
      
    );
  }
}

export default NewEmployee;
