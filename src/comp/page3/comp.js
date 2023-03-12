import React, { useState } from "react";
import Container from "../container/container";
import "./comp.css";
import axios from "axios";
import CancelIcon from "@mui/icons-material/Cancel";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
function Comp() {
  const [table, settable] = useState();

  // this function is to fetch the data from api and push it to the table
  function fetchtabledata() {
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

          <div className="search-box">
            <i className="uil uil-search"></i>
            <input type="text" placeholder="Search here..."></input>
          </div>
          <img src="images/profile.jpg" alt=""></img>
        </div>
        <div className="dash-content">
          <div className="overview">
            <div className="title">
              <i className="uil uil-list-ui-alt"></i>
              <span className="text">List of Historique</span>
            </div>

            <div className="boxes">
              <div className="box box1">
                <div className="box1">
                  <table className="content-table">
                    <thead>
                      <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Points</th>
                        <th>Team</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Domenic</td>
                        <td>88,110</td>
                        <td>dcode</td>
                        <td>
                          {/* <i className="uil uil-user-check"></i> */}
                          <GroupAddIcon fontSize={"small"}></GroupAddIcon>
                        </td>
                        <td>
                          {/* <i className="uil uil-times-circle"></i> */}
                          <CancelIcon fontSize={"small"}></CancelIcon>
                        </td>
                      </tr>

                      <tr>
                        <td>3</td>
                        <td>Nick</td>
                        <td>52,300</td>
                        <td>dcode</td>
                        <td>
                          {/* <i className="uil uil-user-check"></i> */}
                          <GroupAddIcon fontSize={"small"}></GroupAddIcon>
                        </td>
                        <td>
                          {/* <i className="uil uil-times-circle"></i> */}
                          <CancelIcon fontSize={"small"}></CancelIcon>
                        </td>
                      </tr>
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

export default Comp;
