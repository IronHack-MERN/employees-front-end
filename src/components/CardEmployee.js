import React from 'react';
import employeeService from '../services/EmployeeService';

const CardEmployee = ({ employee }) => {
    const { id, name, surname, job, createAt } = employee;
console.log({employee});
    return(
        <div>
            Employee: {name} {surname} <br/>
            Job: {job} <br/>
            Created: {createAt} <br/>
            
        </div>
    );
}

export default CardEmployee;