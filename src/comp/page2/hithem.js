import React, { useState } from "react";
import Container from "../container/container";
import countery from "./counteries.json";
import { useEffect } from "react";
import axios from "axios";
import "./list.css";
function Hithem() {
  const [pop, setpop] = useState(false);
  const [fname, setfname] = useState();
  const [fam, setfam] = useState();

  const [lname, setlname] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [streetad, setstreetad] = useState();
  const [pcode, setpcode] = useState();
  const [city, setcity] = useState();
  const [country, setcountry] = useState();
  const [labels, setlabels] = useState();
  const [res, setres] = useState();
  const [table, settable] = useState();
  // this function is to send address to the backend server just change the url
  function postdata() {
    const address = {};

    axios.post(`https://Url`, { address }).then((res) => {
      console.log(res.data);
      setres(res.data);
    });
  }
  // this function is to fetch information for the table
  function getdata() {
    axios.get(`https://Url`).then((res) => {
      console.log(res.data);
      settable(res.data);
    });
  }
  return (
    <Container>
      <section className="dashboard">
        <div className="top">
          <i className="uil uil-bars sidebar-toggle"></i>

          <img src="images/profile.jpg" alt=""></img>
        </div>

        <div className="dash-content">
          <div className="overview">
            {/* <div id="fullscreen-div"></div> */}
            {pop ? (
              <div id="fullscreen-div">
                <form className="pop" id="modal">
                  <div className="modal-content">
                    <div className="modal-head">
                      <h3 id="modal-title">Add Address</h3>
                      <button
                        type="button"
                        id="close-btn"
                        onClick={() => {
                          setpop(false);
                        }}
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                    <div className="modal-main">
                      <div className="modal-row">
                        <div className="modal-col">
                          <label for="">
                            How should your mail be addressed?
                          </label>
                          <input
                            type="text"
                            placeholder="E.g. The Smith Family"
                            className="form-control"
                            name="addr_ing_name"
                            defaultValue={fam}
                            onChange={(e) => {
                              setfam(e.target.value);
                              console.log(e.target.value);
                            }}
                          ></input>
                        </div>
                      </div>

                      <div className="modal-row grid-row">
                        <div className="modal-col">
                          <label for="">First Name</label>
                          <input
                            type="text"
                            placeholder="The first name"
                            className="form-control"
                            name="first_name"
                            defaultValue={fname}
                            onChange={(e) => {
                              setfname(e.target.value);
                              console.log(e.target.value);
                            }}
                          ></input>
                        </div>
                        <div className="modal-col">
                          <label htmlFor="">Last Name</label>
                          <input
                            type="text"
                            placeholder="The last name"
                            className="form-control"
                            name="last_name"
                            defaultValue={lname}
                            onChange={(e) => {
                              setlname(e.target.value);
                              console.log(e.target.value);
                            }}
                          ></input>
                        </div>
                      </div>

                      <div className="modal-row grid-row">
                        <div className="modal-col">
                          <label for="">Email</label>
                          <input
                            type="email"
                            placeholder="The email"
                            className="form-control"
                            name="email"
                            defaultValue={email}
                            onChange={(e) => {
                              setemail(e.target.value);
                              console.log(e.target.value);
                            }}
                          ></input>
                        </div>
                        <div className="modal-col">
                          <label for="">Phone</label>
                          <input
                            type="text"
                            placeholder="The phone number"
                            className="form-control"
                            name="phone"
                            defaultValue={phone}
                            onChange={(e) => {
                              setphone(e.target.value);
                              console.log(e.target.value);
                            }}
                          ></input>
                        </div>
                      </div>

                      <div className="modal-row grid-row">
                        <div className="modal-col">
                          <label for="">Street address</label>
                          <input
                            type="text"
                            placeholder="Street address, apartment, house number, etc."
                            className="form-control"
                            name="street_addr"
                            defaultValue={streetad}
                            onChange={(e) => {
                              setstreetad(e.target.value);
                              console.log(e.target.value);
                            }}
                          ></input>
                        </div>
                        <div className="modal-col">
                          <label for="">Postal Code</label>
                          <input
                            type="text"
                            placeholder="60323"
                            className="form-control"
                            name="postal_code"
                            defaultValue={pcode}
                            onChange={(e) => {
                              setpcode(e.target.value);
                              console.log(e.target.value);
                            }}
                          ></input>
                        </div>
                      </div>

                      <div className="modal-row grid-row">
                        <div className="modal-col">
                          <label for="">City</label>
                          <input
                            type="text"
                            placeholder="City name"
                            className="form-control"
                            name="city"
                            defaultValue={city}
                            onChange={(e) => {
                              setcity(e.target.value);
                              console.log(e.target.value);
                            }}
                          ></input>
                        </div>
                        <div className="modal-col">
                          <label>Country</label>
                          <select
                            defaultValue={country}
                            onChange={(e) => {
                              setcountry(e.target.value);
                              console.log(e.target.value);
                            }}
                            id="country-list"
                            name="country"
                          >
                            {/* <option>USA</option> */}
                            {countery ? (
                              countery.map((each, index) => {
                                return <option key={index}>{each.name}</option>;
                              })
                            ) : (
                              <option>USA</option>
                            )}
                            {/* {countery.map((each, index) => {
                              <option key={index}>{each.name}</option>;
                            })} */}
                          </select>
                        </div>
                      </div>

                      <div className="modal-row">
                        <div className="modal-col">
                          <label>Labels</label>
                          <select
                            defaultValue={labels} // ...force the select's value to match the state variable...
                            onChange={(e) => {
                              setlabels(e.target.value);
                              console.log(e.target.value);
                            }}
                            name="labels"
                          >
                            <option value={"Family"}>Family</option>
                            <option value={"Friends"}>Friends</option>
                            <option value={"Colleagues"}>Colleagues</option>
                          </select>
                        </div>
                      </div>

                      <div className="modal-row" id="modal-btns">
                        <button
                          type="submit"
                          onClick={() => {
                            postdata();
                          }}
                          id="save-btn"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            ) : null}

            <div className="addr-book" id="addr-book">
              <div className="addr-book-content">
                <div className="addr-book-head">
                  <i className="fa-solid fa-address-book fa-2x"></i>
                  <h2>
                    Address<span>Book</span>
                  </h2>
                </div>

                <div className="addr-book-top">
                  <button
                    type="button"
                    className="btn"
                    id="add-btn"
                    onClick={() => {
                      setpop(true);
                    }}
                  >
                    <span>
                      <i className="fas fa-plus"></i> Add address
                    </span>
                  </button>
                </div>

                <div className="addr-book-list" id="addr-book-list">
                  <table className="addr-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Address</th>
                        <th>Labels</th>
                        <th>By Name</th>
                        <th>Phone</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table
                        ? true(
                            <tr>
                              <td>{table.id}</td>
                              <td>
                                <span className="addressing-name">
                                  {table.address}
                                </span>
                                {/* <br> */}
                                <span className="address">
                                  {/* Johnson Street - 5668, Lake side */}
                                  {table.address}
                                </span>
                              </td>
                              <td>
                                <span>Colleagues</span>
                                <span>{table.Labels}</span>
                              </td>
                              <td>{table.name}</td>
                              <td>{table.phone}</td>
                            </tr>
                          )
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Hithem;
