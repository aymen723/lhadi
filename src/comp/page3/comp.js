import React from "react";
import "./comp.css";
function Comp() {
  return (
    <div>
      <nav>
        <div class="logo-name">
          <div class="logo-image">
            <img src="images/logo.png" alt=""></img>
          </div>

          <span class="logo_name">CodingLab</span>
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
                <span class="link-name">Content</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="uil uil-chart"></i>
                <span class="link-name">Analytics</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="uil uil-thumbs-up"></i>
                <span class="link-name">Like</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="uil uil-comments"></i>
                <span class="link-name">Comment</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="uil uil-share"></i>
                <span class="link-name">Share</span>
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

          <div class="search-box">
            <i class="uil uil-search"></i>
            <input type="text" placeholder="Search here..."></input>
          </div>

          <img src="images/profile.jpg" alt=""></img>
        </div>
        <div class="dash-content">
          <div class="overview">
            <div class="title">
              <i class="uil uil-list-ui-alt"></i>
              <span class="text">List of Historique</span>
            </div>

            <div class="boxes">
              <div class="box box1">
                <div class="box1">
                  <table class="content-table">
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
                          <i class="uil uil-user-check"></i>
                        </td>
                        <td>
                          <i class="uil uil-times-circle"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Sally</td>
                        <td>72,400</td>
                        <td>Students</td>
                        <td>
                          <i class="uil uil-user-check"></i>
                        </td>
                        <td>
                          <i class="uil uil-times-circle"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Nick</td>
                        <td>52,300</td>
                        <td>dcode</td>
                        <td>
                          <i class="uil uil-user-check"></i>
                        </td>
                        <td>
                          <i class="uil uil-times-circle"></i>
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
