import axios from 'axios';

class employeeService{
    constructor(){
        this.axios = axios.create({
            baseURL: 'http://localhost:8080',
        });
    }
}