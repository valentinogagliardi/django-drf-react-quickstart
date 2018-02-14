import React from "react";
import PropTypes from "prop-types";

const Table = ({ data }) => {
  return (
    <React.Fragment>
      <h2 className="subtitle">
        Showing <strong>{data.length} leads</strong>
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {data.sort().map(el => (
            <tr key={el.id}>
              <td>
                <strong>{el.email}</strong>
              </td>
              <td>{el.name}</td>
              <td>{el.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired
};

export default Table;
