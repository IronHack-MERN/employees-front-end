import React, { Component } from "react";
import employeeService from "../services/employeeService";
import Home from "../components/Home";
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
      <div className='wrapper-table'>
        <Home />
        <div className="card card-little">
          <header className="card-header">
            <p className="card-header-title is-centered">ALL EMPLOYEES</p>
          </header>
          <table className="table employees-table" border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Job</th>
                <th>Created</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            {/* <Link to={`/employees/${employee.id}`}>
                            <td></td>
                            <td>{employee.surname}</td>
                          </Link> */}


                {!loading &&
                  employees.map((employee) => {
                    return (
                      <tr key={employee.id}>
                      <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>
                        {employee.surname}
                        </td>
                        <td>{employee.job}</td>
                        <td>{employee.createAt}</td>
                        <td><button class="button is-primary is-light btn-add-employee">Edit</button></td>                        
                        <td><button class="button is-danger is-light btn-add-employee">Delete</button></td>
                      </tr>
                    );
                  })}
                {loading && <div>loading...</div>}
   
          </table>
        </div>
      </div>
    );
  }
}
export default Employees;
