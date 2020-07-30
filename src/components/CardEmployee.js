import React from "react";

const CardEmployee = ({ employee }) => {
  const { name, surname, job, createAt } = employee;
  return (
    <div className="card is-centered card-little">
      <div className="media-content">
        <p className="card-header-title is-centered">{name}</p>
        <div className="content">
          <p className="card-header-title is-centered">
            Employee: {name} {surname} <br />
            Job: {job} <br />
            Created: {createAt} <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardEmployee;
