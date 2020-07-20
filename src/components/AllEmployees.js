import React, { Component } from "react";
import employeeService from "../services/employeeService";
import { Link } from "react-router-dom";

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
    } catch (error) {}
  }

  render() {
    const { employees, loading } = this.state;

    return (
      <div className="card card-little">
      <header className='card-header'>
        <p className="card-header-title is-centered">
          List all employees
        </p>
      </header>
      
        <div className='card-content'>
          <div className='content'>
          {!loading &&
              employees.map((employee) => {
                return (
                  <div key={employee.id}>
                    <Link to={`/employees/${employee.id}`}>
                      {employee.name} {employee.surname}
                    </Link>
                  </div>
                );
              })}
            {loading && <div>loading...</div>}
          </div>
        </div>
      </div>
    );
  }
}
export default Employees;
