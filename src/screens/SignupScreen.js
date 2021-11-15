import React from "react";
import { Link } from "react-router-dom";
import FooterSecondary from "../FooterSecondary";
import "./SignupScreen.css";
import SignupForm from "../SignupForm.js";

function SignupScreen() {
  return (
    <div className="signupScreen">
      <div className="signupScreen__header">
        <Link to="/">
          <img
            src="https://cdn.dribbble.com/users/514552/screenshots/4255081/taxidup.gif"
            alt=""
          />
        </Link>
      </div>
      <h1 className="signupScreen__heading">Create an account</h1>
      <div className="signupScreen__rewards">
        <h4>TAXI-ASSISTANT®</h4>
      </div>
      <SignupForm />
      <FooterSecondary alignItems="center" flexDirection="column" />
    </div>
  );
}

export default SignupScreen;