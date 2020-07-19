import React, { Component } from "react";
import employeeService from "../services/EmployeeService";
import { Link } from 'react-router-dom';

class Employees extends Component {
  state = {
    employees: [],
    loading: true,
  };

  async componentDidMount() {
    try {
      const employees = await employeeService.getAllEmployees();
      this.setState({
        employees,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log("render");
    const { employees, loading } = this.state;

    return (
      <div className="App">
        <h1>Employees</h1>

        {!loading &&
          employees.map((employee) => {
            return (
              <div key={employee.id}>
                <Link to={`/employees/${employee.id}`}>{employee.name} {employee.surname}</Link>
              </div>
            );
          })}
        {loading && <div>loading...</div>}
      </div>
    );
  }
}
export default Employees;
