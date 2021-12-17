import React, { Component } from "react";
import axios from "axios";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import openModal from "../../actions/openModal";
import regAction from "../../actions/regAction";

import Login from "./Login";
import SignInputFields from "./SignUpInputFields";

import swal from "sweetalert";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      lowerPartOfForm: (
        <button
          type="button"
          onClick={this.showInputs}
          className="sign-up-button"
        >
          Sign up with email
        </button>
      ),
    };
  }

  changeEmail = (e) =>
    this.setState({
      email: e.target.value,
    });

  changePassword = (e) =>
    this.setState({
      password: e.target.value,
    });

  submitLogin = async (e) => {
    e.preventDefault();
    const url = `${window.apiHost}/users/signup`;
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    const resp = await axios.post(url, data);

    // resp.data.message could be:
    // -invalidData
    // -userExists
    // -userAdded

    if (resp.data.msg === "userExists") {
      swal({
        title: "Email exists",
        text: "The email you provided is already registred.",
        icon: "error",
      });
    } else if (resp.data.msg === "invalidData") {
      swal({
        title: "Invalid email/password",
        text: "Plese provide a valid email and password",
        icon: "error",
      });
    } else if (resp.data.msg === "userAdded") {
      swal({
        title: "Success!",
        icon: "success",
      });
      // we call our regAction to update auth reducer
      this.props.regAction(resp.data);
    }

    // const urlToken = `${window.apiHost}/users/token-check`;
    // const respToken = await axios.post(urlToken, { token });
    // console.log(respToken);
  };

  showInputs = (e) => {
    this.setState({
      lowerPartOfForm: (
        <SignInputFields
          changeEmail={this.changeEmail}
          changePassword={this.changePassword}
        />
      ),
    });
  };

  render() {
    console.log(this.props.auth);
    return (
      <div className="login-form">
        <form onSubmit={this.submitLogin}>
          <button className="facebook-login">Connect With Facebook</button>
          <button className="google-login">Connect With Google</button>
          <div className="login-or center">
            <span>or</span>
            <div className="or-divider"></div>
          </div>
          {this.state.lowerPartOfForm}
          <div className="divider"></div>
          <div>
            Already have an account?{" "}
            <span
              className="pointer"
              onClick={() => {
                this.props.openModal("open", <Login />);
              }}
            >
              Log in
            </span>
          </div>
        </form>
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
      regAction: regAction,
    },
    dispatcher
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
