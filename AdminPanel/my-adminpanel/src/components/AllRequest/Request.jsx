import React from "react";

const Request = () => {
    const requests = [
        { id: 1, name: "John", surname: "Doe", title: "Request 1", email: "john.doe@example.com" },
        { id: 2, name: "Jane", surname: "Smith", title: "Request 2", email: "jane.smith@example.com" },
        { id: 3, name: "Alice", surname: "Johnson", title: "Request 3", email: "alice.johnson@example.com" },
      ];
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Title</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {requests.map((request) => (
          <tr key={request.id}>
            <td>{request.name} {request.surname}</td>
            <td>{request.title}</td>
            <td>{request.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Request;
