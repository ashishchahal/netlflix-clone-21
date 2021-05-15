import React from "react";
import "./LoginScreen.css";

const LoginScreen = () => {
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fthebutlercollegian.com%2F%3Fp%3D38567&psig=AOvVaw1TrqNFEq_pUBt2VcRpjaBc&ust=1614101138777000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjiqbqB_u4CFQAAAAAdAAAAABAI"
          alt=""
        />
        <button className="loginScreen__button">Sign In</button>
        <div className="loginScreen__gradient" />
      </div>
    </div>
  );
};

export default LoginScreen;
