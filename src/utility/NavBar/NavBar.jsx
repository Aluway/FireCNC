import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import openModal from "../../actions/openModal";
import logoutAction from "../../actions/logoutAction";

import Login from "../Login/Login";
import SignUp from "../Login/SingUp";

import "./NavBar.css";

function NavBar(props) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(openModal("closed", "")); //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.token]);

  let navColor = "transparent";
  if (props.location.pathname !== "/") {
    // user is not on the homepage
    navColor = "black";
  }

  return (
    <div className="container-fluid nav">
      <div className="row">
        <nav className={navColor}>
          <div className="nav-wrapper">
            <Link to="/" className="left logo">
              FireCnC
            </Link>
            <ul id="nav-mobile" className="right">
              <li>
                <Link to="/">English (US)</Link>
              </li>
              <li>
                <Link to="/">$ USD</Link>
              </li>
              <li>
                <Link to="/">Become a host</Link>
              </li>
              <li>
                <Link to="/">Help</Link>
              </li>
              {auth.email ? (
                <>
                  <li className="login-signup login-signup-link">
                    <Link to="/account"> Hello, {auth.email} </Link>
                  </li>
                  <li
                    className="login-signup"
                    onClick={() => dispatch(logoutAction())}
                  >
                    Log out
                  </li>
                </>
              ) : (
                <>
                  <li
                    className="login-signup"
                    onClick={() => {
                      dispatch(openModal("open", <SignUp />));
                    }}
                  >
                    Sign up
                  </li>
                  <li
                    className="login-signup"
                    onClick={() => {
                      dispatch(openModal("open", <Login />));
                    }}
                  >
                    Log in
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
