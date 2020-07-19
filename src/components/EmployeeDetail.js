import React, { Component } from "react";
import employeeService from "../services/EmployeeService";
import CardEmployee from "./CardEmployee";

class EmployeeDetail extends Component {
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
      const employee = await employeeService.getEmployeeById(id);

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
        {!loading && <CardEmployee employee={employee} />}
      </>
    );
  }
}

export default EmployeeDetail;