import React, { Component } from "react";
import EmployeeService from "../services/employeeService";
import UpdateEmployee from "./UpdateEmployee";

class UpdateEmployeeDetail extends Component {
  state = {
    employee: {},
    loading: true,
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    try {
      const employee = await EmployeeService.getEmployeeById(id);

      this.setState({
        employee,
        loading: false,
      });
    } catch (error) {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { employee, loading } = this.state;

    return (
      <>
        {loading && <div>Loading...</div>}
        {!loading && <UpdateEmployee employee={employee} />}
      </>
    );
  }
}

export default UpdateEmployeeDetail;
