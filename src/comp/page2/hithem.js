import React from "react";
import "./pageadmin.css";
import "./hithem.js";
import { useEffect } from "react";
function Hithem() {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   // const url = "./list.js";
  //   script.src = "./list.js";
  //   script.async = true;

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  return (
    <div>
      <nav>
        <div class="logo-name">
          <div class="logo-image">
            <img src="images/logo.png" alt=""></img>
          </div>

          <span class="logo_name">SNC BLS</span>
        </div>

        <div class="menu-items">
          <ul class="nav-links">
            <li>
              <a href="#">
                <i class="uil uil-estate"></i>
                <span class="link-name">Dahsboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="uil uil-files-landscapes"></i>
                <span class="link-name">listeA</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="uil uil-chart"></i>
                <span class="link-name">listb</span>
              </a>
            </li>
          </ul>

          <ul class="logout-mode">
            <li>
              <a href="#">
                <i class="uil uil-signout"></i>
                <span class="link-name">Logout</span>
              </a>
            </li>

            <li class="mode">
              <a href="#">
                <i class="uil uil-moon"></i>
                <span class="link-name">Dark Mode</span>
              </a>

              <div class="mode-toggle">
                <span class="switch"></span>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <section class="dashboard">
        <div class="top">
          <i class="uil uil-bars sidebar-toggle"></i>

          <img src="images/profile.jpg" alt=""></img>
        </div>

        <div class="dash-content">
          <div class="overview">
            <div id="fullscreen-div"></div>
            <form class="modal" id="modal">
              <div class="modal-content">
                <div class="modal-head">
                  <h3 id="modal-title">Add Address</h3>
                  <button type="button" id="close-btn">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
                <div class="modal-main">
                  <div class="modal-row">
                    <div class="modal-col">
                      <label for="">How should your mail be addressed?</label>
                      <input
                        type="text"
                        placeholder="E.g. The Smith Family"
                        class="form-control"
                        name="addr_ing_name"
                      ></input>
                    </div>
                  </div>

                  <div class="modal-row grid-row">
                    <div class="modal-col">
                      <label for="">First Name</label>
                      <input
                        type="text"
                        placeholder="The first name"
                        class="form-control"
                        name="first_name"
                      ></input>
                    </div>
                    <div class="modal-col">
                      <label for="">Last Name</label>
                      <input
                        type="text"
                        placeholder="The last name"
                        class="form-control"
                        name="last_name"
                      ></input>
                    </div>
                  </div>

                  <div class="modal-row grid-row">
                    <div class="modal-col">
                      <label for="">Email</label>
                      <input
                        type="email"
                        placeholder="The email"
                        class="form-control"
                        name="email"
                      ></input>
                    </div>
                    <div class="modal-col">
                      <label for="">Phone</label>
                      <input
                        type="text"
                        placeholder="The phone number"
                        class="form-control"
                        name="phone"
                      ></input>
                    </div>
                  </div>

                  <div class="modal-row grid-row">
                    <div class="modal-col">
                      <label for="">Street address</label>
                      <input
                        type="text"
                        placeholder="Street address, apartment, house number, etc."
                        class="form-control"
                        name="street_addr"
                      ></input>
                    </div>
                    <div class="modal-col">
                      <label for="">Postal Code</label>
                      <input
                        type="text"
                        placeholder="60323"
                        class="form-control"
                        name="postal_code"
                      ></input>
                    </div>
                  </div>

                  <div class="modal-row grid-row">
                    <div class="modal-col">
                      <label for="">City</label>
                      <input
                        type="text"
                        placeholder="City name"
                        class="form-control"
                        name="city"
                      ></input>
                    </div>
                    <div class="modal-col">
                      <label for="">Country</label>
                      <select id="country-list" name="country">
                        <option>USA</option>
                      </select>
                    </div>
                  </div>

                  <div class="modal-row">
                    <div class="modal-col">
                      <label for="">Labels</label>
                      <select name="labels">
                        <option value="Family">Family</option>
                        <option value="Friends">Friends</option>
                        <option value="Colleagues">Colleagues</option>
                      </select>
                    </div>
                  </div>

                  <div class="modal-row" id="modal-btns">
                    <button type="submit" id="save-btn">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </form>

            <div class="addr-book" id="addr-book">
              <div class="addr-book-content">
                <div class="addr-book-head">
                  <i class="fa-solid fa-address-book fa-2x"></i>
                  <h2>
                    Address<span>Book</span>
                  </h2>
                </div>

                <div class="addr-book-top">
                  <button type="button" class="btn" id="add-btn">
                    <span>
                      <i class="fas fa-plus"></i> Add address
                    </span>
                  </button>
                </div>

                <div class="addr-book-list" id="addr-book-list">
                  <table class="addr-table">
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
                      <tr>
                        <td>1</td>
                        <td>
                          <span class="addressing-name">Smith Family</span>
                          {/* <br> */}
                          <span class="address">
                            Johnson Street - 5668, Lake side
                          </span>
                        </td>
                        <td>
                          <span>Colleagues</span>
                        </td>
                        <td>Mark Smith</td>
                        <td>123-456-7890</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hithem;
