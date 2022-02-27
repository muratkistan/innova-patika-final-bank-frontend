import alertify from "alertifyjs";
import React, { useEffect, useState } from "react";
import "../css/style.css";
import CreditService from "../services/CreditService";
const Search = () => {
  const [credits, setCredits] = useState([]);
  const [identityNumber, setIdentityNumber] = useState({});
  const [credit,setCredit]=useState({});

  const onClickSearch = (event) => {
    event.preventDefault();

    CreditService.getCreditByIdentityNumber(identityNumber)
      .then((response) => {
        // setCredits(response.data);
        setCredit(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(() => {
  //   CreditService.getCreditByIdentityNumber(identityNumber)
  //     .then((response) => {
  //       console.log(response.data)
  //       setCredit(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [identityNumber]);

  return (
    <div className="container">
      <div>
        <form>
          <div className="sorgu">
            <div className="row">
              <div className="col-8">
                <input
                  name="identityNumber"
                  onClick={onClickSearch}
                  onChange={(e) => setIdentityNumber(e.target.value)}
                  class="form-control mr-sm-2"
                  placeholder="Identity Number"
                  type="search"
                  aria-label="Search"
                />
              </div>
              <div className="col">
                <button className="btn btn-info" onClick={onClickSearch}>Search</button>
              </div>
              
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
            {credit.identityNumber && <tr>
                <td >{credit.id}</td>
                <td >{credit.IdentityNumber}</td>
                <td >{credit.creditLimit}</td>
                            {credit.status ? (
                  <td style={{ color: "green" }}>
                    <b>ACCEPTED</b>{" "}
                  </td>
                ) : (
                  <td style={{ color: "red" }}>
                    <b>DENIED</b>{" "}
                  </td>
                )}
              </tr>}
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Search;


