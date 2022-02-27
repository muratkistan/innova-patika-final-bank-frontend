import React, { useEffect, useState } from "react";
import CustomerService from "../services/CustomerService";
import "../css/style.css";
import { Link } from "react-router-dom";

const ListCustomerComponent = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = (response) => {
    CustomerService.getAllCustomers()
      .then((response) => {
        setCustomers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCustomer = (customerId) => {
    CustomerService.deleteCustomer(customerId)
      .then((response) => {
        getAllEmployees();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="tepe">
      <div className="container mt-8">
        <h2 className="text-center"> All Customers </h2>
        <table className="table table-bordered table-striped ">
          <thead>
            <th> Customer Id </th>
            <th> Identity Number </th>
            <th> First Name </th>
            <th> Last Name </th>
            <th> Monthly Salary </th>
            <th> Phone Number </th>
            <th> Actions </th>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td> <b>{customer.id}</b> </td>
                <td> {customer.identityNumber} </td>
                <td> {customer.firstName} </td>
                <td>{customer.lastName}</td>
                <td>{customer.monthlySalary}</td>
                <td>{customer.phoneNumber}</td>
                <td>
                  <Link to={`/edit/customer/${customer.id}`}>
                    <img
                      src="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-1/512/edit-icon.png"
                      alt="edit"
                      style={{ width: "25px", marginLeft: "30px" }}
                    ></img>
                  </Link>
                  <img
                    onClick={() => deleteCustomer(customer.id)}
                    src="https://img.icons8.com/plasticine/100/000000/filled-trash.png"
                    style={{
                      width: "30px",
                      marginLeft: "30px",
                      cursor: "pointer",
                    }}
                    alt="delete"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListCustomerComponent;
