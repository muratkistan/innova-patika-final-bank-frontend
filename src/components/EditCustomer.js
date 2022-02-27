import React, { useEffect, useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import CustomerService from "../services/CustomerService";

const EditCustomer = () => {
  const [identityNumber, setIdentityNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [monthlySalary, setMonthlySalary] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");

  const history = useHistory();
  const { id } = useParams();

  const onClickSendButton = (event) => {
    event.preventDefault();

    const customer = {
      identityNumber,
      firstName,
      lastName,
      monthlySalary,
      phoneNumber,
    };

    CustomerService.updateCustomer(id, customer)
      .then((response) => {
        // toast.success(" Basarili", { autoClose: 1000 });
        history.push("/customers");
      })
      .catch((error) => {
        // toast.error("Basarisiz", { autoClose: 1000 });
        console.log(error);
      });
  };

  useEffect(() => {
    CustomerService.getCustomerById(id)
      .then((response) => {
        setIdentityNumber(response.data.identityNumber);
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setMonthlySalary(response.data.monthlySalary);
        setPhoneNumber(response.data.phoneNumber);

        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="AddCustomer">
      <div>
        <div id="contact" class="contact-us section">
          <div class="container">
            <div class="row">
              <div
                class="col-lg-12 wow fadeInUp"
                data-wow-duration="0.5s"
                data-wow-delay="0.25s"
              >
                <form id="contact" action="" method="post">
                  <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                      <div class="section-heading">
                        <h6>Contact Us</h6>
                        <h2>
                          <span>UPDATE CUSTOMER</span>
                        </h2>
                      </div>
                    </div>
                    <form>
                      <div class="col-lg-9 text-center">
                        <div class="row">
                          <div class="col-lg-6">
                            <fieldset>
                              <input
                                type="firstName"
                                onChange={(e) => setFirstName(e.target.value)}
                                value={firstName}
                                name="firstName"
                                id="firstName"
                                placeholder="First Name"
                                autocomplete="on"
                                required
                              />
                            </fieldset>
                          </div>
                          <div class="col-lg-6">
                            <fieldset>
                              <input
                                type="lastName"
                                onChange={(e) => setLastName(e.target.value)}
                                value={lastName}
                                name="lastName"
                                id="lastName"
                                placeholder="Last Name"
                                required=""
                              />
                            </fieldset>
                          </div>
                          <div class="col-lg-6">
                            <fieldset>
                              <input
                                type="identityNumber"
                                onChange={(e) =>
                                  setIdentityNumber(e.target.value)
                                }
                                value={identityNumber}
                                name="identityNumber"
                                id="identityNumber"
                                placeholder="Identity Number"
                                autocomplete="on"
                                required
                              />
                            </fieldset>
                          </div>
                          <div class="col-lg-6">
                            <fieldset>
                              <input
                                type="monthlySalary"
                                onChange={(e) =>
                                  setMonthlySalary(e.target.value)
                                }
                                value={monthlySalary}
                                name="monthlySalary"
                                id="monthlySalary"
                                placeholder="Monthly Salary"
                                autocomplete="on"
                              />
                            </fieldset>
                          </div>
                          <div class="col-lg-6">
                            <fieldset>
                              <input
                                type="phoneNumber"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                value={phoneNumber}
                                name="phoneNumber"
                                id="phoneNumber"
                                placeholder="Phone Number"
                                autocomplete="on"
                              />
                            </fieldset>
                          </div>
                          <div class="col-lg-12">
                            <fieldset>
                              <button
                                type="submit"
                                id="form-submit"
                                onClick={onClickSendButton}
                                class="main-button "
                              >
                                Update
                              </button>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCustomer;
