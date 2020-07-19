import React from 'react';

const CardEmployee = ({ employee }) => {
    const { name, surname, job, createAt } = employee;
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