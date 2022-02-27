import alertify from "alertifyjs";
import React, { useEffect, useState } from "react";
import "../css/style.css";
import CreditService from "../services/CreditService";
const Search = () => {
  const [credits, setCredits] = useState([]);
  const [identityNumber, setIdentityNumber] = useState({});

  const onClickSearch = (event) => {
    event.preventDefault();

    CreditService.getAllCreditsByIdentityNumber(identityNumber)
      .then((response) => {
        setCredits(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    CreditService.getAllCreditsByIdentityNumber(identityNumber)
      .then((response) => {
        setCredits(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [identityNumber]);

  return (
    <div className="container">
      <div>
        <form>
          <div className="sorgu">
            <div className="row">
              <div className="col">
                <input
                  name="identityNumber"
                  onClick={onClickSearch}
                  onChange={(e) => setIdentityNumber(e.target.value)}
                  class="form-control mr-sm-2"
                  placeholder="only identity number"
                  type="search"
                  aria-label="Search"
                />
              </div>
            </div>
            <div className="col">
              <button class="btn btn-info mt-3">Search</button>
            </div>
          </div>
        </form>

        <div className="tablo">
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Credit Id</th>
                <th scope="col">Identity Number</th>
                <th scope="col">Limit</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {credits.map((credit) => (
                <tr key={credit.id}>
                  <td> {credit.id} </td>
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
    </div>
  );
};

export default Search;
