import React from "react";
import './SignIn_Out.scss';
import SignIn from "./../signin/SignIn";
import SignUp from './../signup/SignUp';

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-out">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
