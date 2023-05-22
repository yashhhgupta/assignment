import "./Home.css";
import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faPieChart } from "@fortawesome/free-solid-svg-icons";
 import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
 import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
 import SearchIcon from "@mui/icons-material/Search";
 import FlareIcon from "@mui/icons-material/Flare";
 import graph from "./g.png"
 import graph2 from "./g2.png"
// import { Button } from "@mui/material";
const Home = () => {
  const [alignment, setAlignment] = React.useState("left");

  const handleChange = (event, newAlignment) => {
  };
  return (
    <div className="home">
      <div className="main">
        <div className="main-header">
          <div className="left-main">
            <h1>Analytics</h1>
            <div
              style={{
                backgroundColor: "#EAE9EE",
                borderRadius: "30px",
                marginLeft: "50px",
              }}
            >
              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                style={{
                  borderRadius: "10px",
                }}
              >
                <ToggleButton
                  value="web"
                  style={{ backgroundColor: "white", borderRadius: "30px" }}
                >
                  Full Statistics
                </ToggleButton>
                <ToggleButton value="android" style={{ border: "none" }}>
                  Results Summary
                </ToggleButton>
                {/* <ToggleButton value="ios">iOS</ToggleButton> */}
              </ToggleButtonGroup>
            </div>
          </div>
          <div className="right-main">
            <AddBoxOutlinedIcon sx={{ fontSize: "50px" }} />
            <AccountCircleIcon sx={{ fontSize: "50px" }} />
          </div>
        </div>
        <div className="main-card-body">
          <div className="card">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h2>Team Payments</h2>
              <NotificationsIcon />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
                marginBottom: "30px",
              }}
            >
              <CalendarTodayIcon />
              &nbsp; 07 Dec approval
            </div>
            <AccountCircleIcon sx = {{fontSize:"50px"}}/>
            <AccountCircleIcon sx = {{fontSize:"50px"}}/>
            <AccountCircleIcon sx = {{fontSize:"50px"}}/>
            <AccountCircleIcon sx = {{fontSize:"50px"}}/>
          </div>
          <div className="card">
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon
                icon={faPieChart}
                size="2x"
                style={{ marginRight: "10px", color: "#8889d8" }}
              />
              <h2>Savings</h2>
            </div>
            <img src={graph} style={{ width: "240px", height: "70px" }}></img>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ fontSize: "40px" }}>$5839</div>
                <span style={{ color: "red" }}>-11% </span> last week
              </div>
              <ArrowCircleRightIcon sx={{ fontSize: "40px" }} />
            </div>
          </div>
          <div className="card" style={{ backgroundColor: "white" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h2>Income Statistics</h2>
              <NotificationsIcon />
            </div>
            <img src={graph2} style={{ width: "240px", height: "150px" }}></img>
          </div>
          <div className="card3">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <div>
                <div style={{ fontSize: "50px", fontWeight: "bold" }}>
                  $95.9
                </div>
                Per Month
              </div>
              <FlareIcon sx={{ fontSize: "50px" }} />
            </div>
            <div style={{ fontSize: "25px" }}>Choose Best Plan</div>
            <div style={{ fontSize: "25px" }}>For You!</div>
            <div className="grad-bottom">
              <div style={{ fontSize: "15px", fontWeight: "bold",color:"black" }}>
              Details
                </div>
              <div style={{ fontSize: "15px", fontWeight: "bold",backgroundColor:"black", padding:"2px 12px 2px 12px",borderRadius: "15px"}}>
              Upgrade
                </div>
            </div>
          </div>
        </div>
        <div className="main-body">
          <h2>Recently Payments</h2>
          <div className="body1">
            <div className="body-card">
              <div style={{ display: "flex" }}>
                <AccountCircleIcon sx={{ fontSize: "45px" }} />
                &nbsp;&nbsp;
                <div>
                  <div>Emma Ryan Jr.</div>
                  <span style={{ fontSize: "14px", fontWeight: "lighter" }}>
                    Mar 9,2023
                  </span>
                </div>
              </div>
              <div></div>
              <div style={{ fontSize: "20px", fontWeight: "bold" }}>$4830</div>
              <div
                style={{
                  backgroundColor: "#E6F6F5",
                  borderRadius: "20px",
                  padding: "2px 15px 2px 15px",
                  color: "#81AEAE",
                }}
              >
                Done
              </div>
              <div>.&nbsp;.&nbsp;.</div>
            </div>
            <div className="body-card">
              <div style={{ display: "flex" }}>
                <AccountCircleIcon sx={{ fontSize: "45px" }} />
                &nbsp;&nbsp;
                <div>
                  <div>Justin Weber</div>
                  <span style={{ fontSize: "14px", fontWeight: "lighter" }}>
                    Mar 2,2023
                  </span>
                </div>
              </div>
              <div></div>
              <div style={{ fontSize: "20px", fontWeight: "bold" }}>$3937</div>
              <div
                style={{
                  backgroundColor: "#FFF0E3",
                  borderRadius: "20px",
                  padding: "2px 15px 2px 15px",
                  color: "#DA995D",
                }}
              >
                Pending
              </div>
              <div>.&nbsp;.&nbsp;.</div>
            </div>
          </div>
          <div className="trans">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h2>Transactions</h2>
              <div className="search">
                <SearchIcon />
                &nbsp;&nbsp; Search
              </div>
            </div>
            <hr />
            <div>
              <table>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>Reciever</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <AccountCircleIcon />
                      &nbsp; Emma Ryan Jr.{" "}
                    </div>
                  </td>
                  <td>Income</td>
                  <td>
                    <div
                      style={{
                        backgroundColor: "#FFF0E3",
                        borderRadius: "20px",
                        padding: "2px 15px 2px 15px",
                        color: "#DA995D",
                        width: "70px",
                      }}
                    >
                      Pending
                    </div>
                  </td>
                  <td>Feb 19th,2023</td>
                  <td>
                    $3892
                    {/* <div className="details">Details</div> */}
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <AccountCircleIcon />
                      &nbsp; Adrian Daren{" "}
                    </div>
                  </td>
                  <td>Bonus</td>
                  <td>
                    <div
                      style={{
                        backgroundColor: "#E6F6F5",
                        borderRadius: "20px",
                        padding: "2px 15px 2px 15px",
                        color: "#81AEAE",
                        width: "70px",
                      }}
                    >
                      Done
                    </div>
                  </td>
                  <td>Feb 18th,2023</td>
                  <td>$1073</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <AccountCircleIcon />
                      &nbsp; Roxanne Hills{" "}
                    </div>
                  </td>
                  <td>Income</td>
                  <td>
                    <div
                      style={{
                        backgroundColor: "#FFF0E3",
                        borderRadius: "20px",
                        padding: "2px 15px 2px 15px",
                        color: "#DA995D",
                        width: "70px",
                      }}
                    >
                      Pending
                    </div>
                  </td>
                  <td>Apr 16th,2023</td>
                  <td>$2790</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
