import axios from "axios";

class EmployeeService {
  constructor() {
    this.axios = axios.create({
      baseURL: "http://localhost:8080",
    });
  }

  getAllEmployees(){
    return this.axios.get('/employees')
      .then(({ data: employees }) => employees);
  }
}

const employeeService = new EmployeeService();

export default employeeService;
