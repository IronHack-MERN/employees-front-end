import axios from "axios";

class EmployeeService {
  constructor() {
    this.axios = axios.create({
      baseURL: "http://localhost:8080",
    });
  }

  getAllEmployees() {
    return this.axios
      .get("/employees")
      .then(({ data: employees }) => employees);
    console.log("estoy cogiendo employees");
  }

  getEmployeeById(id) {
    return this.axios
      .get(`/employee/${id}`)
      .then(({ data: employee }) => employee);
  }

  addNewEmployee(body) {
    return this.axios
      .post("/create", body)
      .then(({ data: employee }) => employee);
  }

  updateEmployee(body) {
    return this.axios
      .post("/create", body)
      .then(({ data: employee }) => employee);
  }
}

const employeeService = new EmployeeService();

export default employeeService;
