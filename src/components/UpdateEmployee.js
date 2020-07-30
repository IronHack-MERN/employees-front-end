import React, { Component } from "react";
import EmployeeService from "../services/employeeService";
import Home from "../components/Home";

class UpdateEmployee extends Component {
  state = {
    id: "",
    name: "",
    surname: "",
    job: "",
    createdAt: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    EmployeeService.updateEmployee(this.state);

    this.setState({
      id: "",
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
    // const { id, name, surname, job, createAt } = this.props.employee;
    return (
      <div>
        <Home />
        <div className="form-wrapper">
          <h1 className="title">Update Employee</h1>

          <div className="">
            <form onSubmit={this.handleFormSubmit}>
              <div className="field is-horizontal">
                <div className="field-label">
                  <label className="label is-medium">Id</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        name="id"
                        //defaultValue={id}
                        value={this.state.id}
                        onChange={(e) => this.handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label">
                  <label className="label is-medium">Name</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        name="name"
                        //defaultValue={name}
                        value={this.state.name}
                        onChange={(e) => this.handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label">
                  <label className="label is-medium">Surname</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        name="surname"
                        //defaultValue={surname}
                        value={this.state.surname}
                        onChange={(e) => this.handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label">
                  <label className="label is-medium">Job</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        name="job"
                        //defaultValue={job}
                        value={this.state.job}
                        onChange={(e) => this.handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label">
                  <label className="label is-medium">Date</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        name="createdAt"
                        // defaultValue={createAt}
                        value={this.state.createdAt}
                        onChange={(e) => this.handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label"></div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <button className="button is-primary btn-add-employee">
                        UPDATE EMPLOYEE
                      </button>
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

export default UpdateEmployee;
