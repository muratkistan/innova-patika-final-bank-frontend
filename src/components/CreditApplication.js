import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import CreditService from "../services/CreditService";

toast.configure();
const CreditApplication = () => {
  const [form, setForm] = useState({
    identityNumber: null,
    firstName: null,
    lastName: null,
    monthlySalary: null,
    phoneNumber: null,
  });

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const { firstName, lastName, identityNumber, phoneNumber, monthlySalary } =
    errors;

  const onChange = (event) => {
    const { name, value } = event.target;

    const newErrors = { ...errors };
    newErrors[name] = undefined;
    setErrors(newErrors);

    const formCopy = { ...form };

    formCopy[name] = value;
    setForm(formCopy);
  };

  const onClickSendButton = (event) => {
    event.preventDefault();

    const { identityNumber, firstName, lastName, monthlySalary, phoneNumber } =
      form;

    const body = {
      identityNumber: identityNumber,
      firstName: firstName,
      lastName: lastName,
      monthlySalary: monthlySalary,
      phoneNumber: phoneNumber,
    };

    CreditService.addCredit(body)
      .then((response) => {
        console.log("Data",response.data);
    
        toast.info("Apply Sended", { autoClose: 1000 });
       

        history.push("/sorgu");
      })
      .catch((err) => {
        if (err.response.data.validationErrors) {
          
          setErrors(err.response.data.validationErrors);
           toast.error("Unsuccessful", { autoClose: 1000 });
        }
      });
  };

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
                        <h6>Fill Out The Form Below To For</h6>
                        <h2>
                          <span>Apply Credit </span>{" "}
                        </h2>
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <div class="row">
                        <div class="col-lg-6">
                          <fieldset>
                            <input
                              type="firstName"
                              className={
                                firstName
                                  ? "form-control is-invalid"
                                  : "form-control "
                              }
                              name="firstName"
                              id="firstName"
                              onChange={onChange}
                              placeholder="First Name"
                              autocomplete="on"
                              required
                            />
                            <div className="invalid-feedback">
                              {errors.firstName}
                            </div>
                          </fieldset>
                        </div>

                        <div class="col-lg-6">
                          <fieldset>
                            <input
                              type="lastName"
                              className={
                                lastName
                                  ? "form-control is-invalid"
                                  : "form-control "
                              }
                              name="lastName"
                              id="lastName"
                              onChange={onChange}
                              placeholder="Last Name"
                              required=""
                            />
                            <div className="invalid-feedback">
                              {errors.lastName}
                            </div>
                          </fieldset>
                        </div>

                        <div class="col-lg-6">
                          <fieldset>
                            <input
                              type="identityNumber"
                              className={
                                identityNumber
                                  ? "form-control is-invalid"
                                  : "form-control "
                              }
                              name="identityNumber"
                              id="identityNumber"
                              type="number"
                              onChange={onChange}
                              placeholder="Identity Number"
                              autocomplete="on"
                              required
                            />
                            <div className="invalid-feedback">
                              {errors.identityNumber}
                            </div>
                          </fieldset>
                        </div>

                        <div class="col-lg-6">
                          <fieldset>
                            <input
                              type="monthlySalary"
                              className={
                                monthlySalary
                                  ? "form-control is-invalid"
                                  : "form-control "
                              }
                              name="monthlySalary"
                              type="number"
                              onChange={onChange}
                              id="monthlySalary"
                              placeholder="Monthly Salary"
                              autocomplete="on"
                            />
                            <div className="invalid-feedback">
                              {errors.monthlySalary}
                            </div>
                          </fieldset>
                        </div>
                        <div class="col-lg-6">
                          <fieldset>
                            <input
                              type="phoneNumber"
                              className={
                                phoneNumber
                                  ? "form-control is-invalid"
                                  : "form-control "
                              }
                              name="phoneNumber"
                              onChange={onChange}
                              id="phoneNumber"
                              type="number"
                              placeholder="Phone Number"
                              autocomplete="on"
                            />
                            <div className="invalid-feedback">
                              {errors.phoneNumber}
                            </div>
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
                              Send Apply
                            </button>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="contact-info">
                        <ul>
                          <li>
                            <div class="icon">
                              <img
                                src="assets/images/contact-icon-01.png"
                                alt="email icon"
                              />
                            </div>
                            <a href="#">info@innova.com.tr</a>
                          </li>
                          <li>
                            <div class="icon">
                              <img
                                src="assets/images/contact-icon-02.png"
                                alt="phone"
                              />
                            </div>
                            <a href="#">444 5 468</a>
                            <div>
                              <a href="#">
                                444 5 <em>INV</em>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div class="icon">
                              <img
                                src="assets/images/contact-icon-03.png"
                                alt="location"
                              />
                            </div>
                            <a href="#">
                              T??rk Telekom Ar-Ge Binas?? ODT?? Teknokent
                              ??niversiteler Mah. No:15, B Blok 06800 ??ankaya /
                              Ankara
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
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

export default CreditApplication;
