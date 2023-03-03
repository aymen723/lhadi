import React from "react";
import "./comp.css";
function Comp() {
  return (
    <div>
      <nav>
        <div ClassName="logo-name">
          <div ClassName="logo-image">
            <img src="images/logo.png" alt=""></img>
          </div>

          <span ClassName="logo_name">CodingLab</span>
        </div>

        <div ClassName="menu-items">
          <ul ClassName="nav-links">
            <li>
              <a href="#">
                <i ClassName="uil uil-estate"></i>
                <span ClassName="link-name">Dahsboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i ClassName="uil uil-files-landscapes"></i>
                <span ClassName="link-name">Content</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i ClassName="uil uil-chart"></i>
                <span ClassName="link-name">Analytics</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i ClassName="uil uil-thumbs-up"></i>
                <span ClassName="link-name">Like</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i ClassName="uil uil-comments"></i>
                <span ClassName="link-name">Comment</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i ClassName="uil uil-share"></i>
                <span ClassName="link-name">Share</span>
              </a>
            </li>
          </ul>

          <ul ClassName="logout-mode">
            <li>
              <a href="#">
                <i ClassName="uil uil-signout"></i>
                <span ClassName="link-name">Logout</span>
              </a>
            </li>

            <li ClassName="mode">
              <a href="#">
                <i ClassName="uil uil-moon"></i>
                <span ClassName="link-name">Dark Mode</span>
              </a>

              <div ClassName="mode-toggle">
                <span ClassName="switch"></span>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <section ClassName="dashboard">
        <div ClassName="top">
          <i ClassName="uil uil-bars sidebar-toggle"></i>

          <div ClassName="search-box">
            <i ClassName="uil uil-search"></i>
            <input type="text" placeholder="Search here..."></input>
          </div>

          <img src="images/profile.jpg" alt=""></img>
        </div>
        <div ClassName="dash-content">
          <div ClassName="overview">
            <div ClassName="title">
              <i ClassName="uil uil-list-ui-alt"></i>
              <span ClassName="text">List of Historique</span>
            </div>

            <div ClassName="boxes">
              <div ClassName="box box1">
                <div ClassName="box1">
                  <table ClassName="content-table">
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
                          <i ClassName="uil uil-user-check"></i>
                        </td>
                        <td>
                          <i ClassName="uil uil-times-circle"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Sally</td>
                        <td>72,400</td>
                        <td>Students</td>
                        <td>
                          <i ClassName="uil uil-user-check"></i>
                        </td>
                        <td>
                          <i ClassName="uil uil-times-circle"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Nick</td>
                        <td>52,300</td>
                        <td>dcode</td>
                        <td>
                          <i ClassName="uil uil-user-check"></i>
                        </td>
                        <td>
                          <i ClassName="uil uil-times-circle"></i>
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
    </div>
  );
}

export default Comp;
