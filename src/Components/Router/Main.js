import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  NavLink,
} from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import "./Main.css";

const Main = () => {
  return (
    <Router>
      <div>
        <nav style={{ backgroundColor: "limegreen" }}>
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
              <NavLink exact to="/home" activeClassName={"active"}>
                {" "}
                Home
              </NavLink>
            </li>
            <li
              style={{
                padding: "10px",
                textDecoration: "none",
                fontSize: "larger",
                fontWeight: "900",
              }}
            >
              <NavLink to="/about-us/1/1" activeClassName={"active"}>
                About Us
              </NavLink>
            </li>
            <li
              style={{
                padding: "10px",
                textDecoration: "none",
                fontSize: "larger",
                fontWeight: "900",
              }}
            >
              <NavLink to="/contact-us" activeClassName={"active back"}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/home/*">
            <Home />
          </Route>

          <Route path="/about-us/:userId/:departmentId" component={AboutUs} />
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Redirect from="/about-uss" to="/about-us" />
          <Route path="/page-not-found" component={PageNotFound} />
          {/* <Redirect to="/page-not-found" /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default Main;

//  Normal User

//  Login Usernanem password
// Token
//  API call - > user Details -> token -> user details
//  User Details -> user role -> admin -> Admin Dashboard
//  User Details -> user role -> normal -> Normal Dashboard
//  User Details -> user role -> superadmin -> Superadmin Dashboard
