import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Dashboard from "./Dashboard";
import Reports from "./Report";

const Home = () => {
  return (
    <div>
      <nav>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            textDecoration: "none",
          }}
        >
          <li
            style={{
              padding: "10px",
              textDecoration: "none",
              fontSize: "larger",
              fontWeight: "900",
            }}
          >
            <NavLink to="/home/dashboard" activeClassName={"active"}>
              Dashboard
            </NavLink>
          </li>
          <li
            style={{
              padding: "10px",
              textDecoration: "none",
              fontSize: "larger",
              fontWeight: "900",
              backgroundColor: "lightgray",
              borderRadius: "20px",
              border: "1px solid black",
            }}
          >
            <NavLink to="/home/reports" activeClassName={"active"}>
              Reports
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/home/dashboard" component={Dashboard} />
        <Route path="/home/reports" component={Reports} />
        <Redirect to="/home/dashboard" />
      </Switch>
    </div>
  );
};

export default Home;
