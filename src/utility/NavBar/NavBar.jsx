import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import openModal from "../../actions/openModal";
import logoutAction from "../../actions/logoutAction";

import Login from "../Login/Login";
import SignUp from "../Login/SingUp";

import "./NavBar.css";

class NavBar extends React.Component {
  componentDidUpdate(oldProps) {
    if (oldProps.auth.token !== this.props.auth.token) {
      this.props.openModal("closed", "");
    }
  }

  render() {
    let navColor = "transparent";
    if (this.props.location.pathname !== "/") {
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
                {this.props.auth.email ? (
                  <>
                    <li className="login-signup">
                      Hello, {this.props.auth.email}
                    </li>
                    <li
                      className="login-signup"
                      onClick={() => this.props.logoutAction()}
                    >
                      Log out
                    </li>
                  </>
                ) : (
                  <>
                    <li
                      className="login-signup"
                      onClick={() => {
                        this.props.openModal("open", <SignUp />);
                      }}
                    >
                      Sign up
                    </li>
                    <li
                      className="login-signup"
                      onClick={() => {
                        this.props.openModal("open", <Login />);
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
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatcher) {
  return bindActionCreators(
    {
      openModal: openModal,
      logoutAction: logoutAction,
    },
    dispatcher
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
