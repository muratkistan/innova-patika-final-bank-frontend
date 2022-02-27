import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CreditService from "../services/CreditService";
const ListCreditsComponent = () => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getCredits();
  }, []);

  const getCredits = (response) => {
    CreditService.getAllCredits()
      .then((response) => {
        setCredits(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="tepe">
      <div className="container mt-8">
        <h2 className="text-center"> ALL CREDITS </h2>
        <table className="table table-bordered table-striped  ">
          <thead>
            <th> Credit Id </th>
            <th> Identity Number </th>
            <th> Limit</th>
            <th> Status</th>
           
          </thead>
          <tbody>
            {credits.map((credit) => (
              <tr key={credit.id}>
                <td><b> {credit.id} </b></td>
                <td> {credit.identityNumber} </td>
                <td> {credit.creditLimit} </td>
                {credit.status ? (
                  <td style={{ color: "green" }}>
                    <b>ACCEPTED</b>{" "}
                  </td>
                ) : (
                  <td style={{ color: "red" }}>
                    <b>DENIED</b>{" "}
                  </td>
                )}
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListCreditsComponent;
