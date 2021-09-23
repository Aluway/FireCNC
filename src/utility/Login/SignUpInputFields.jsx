import React from "react";

const SignInputFields = (props) => {
  return (
    <div className="sign-up-wrapper">
      <div className="col m12">
        <div className="input-field" id="email">
          <div className="form-label">Email</div>
          <input
            onChange={props.changeEmail}
            type="text"
            placeholder="Email"
          ></input>
        </div>
      </div>
      <div className="col m12">
        <div className="input-field" id="email">
          <div className="form-label">Password</div>
          <input
            onChange={props.changePassword}
            type="password"
            placeholder="Password"
          ></input>
        </div>
      </div>
      <div className="col m12">
        <button type="submit" className="btn accent-2">
          Sign up!
        </button>
      </div>
    </div>
  );
};

export default SignInputFields;
