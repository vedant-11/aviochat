import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import firebase from "firebase/app";

import { auth } from "./Firebase";
import imagedown from "./image1.png";
import imageup from "./Saly2.png";

const Login = () => {
  return (
    <div id="login-page">
      <img className="imageup" src={imageup} alt="" />
      <div id="login-card">
        <h2 className="Welcome-heading">Welcome to AvioChat</h2>
        <div className="welcome-bar"></div>
        <p className="para">
          A simple web based chat application that lets you connect to your
          peers quickly{" "}
        </p>
        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined /> Sign in with Google
        </div>
        <br /> <br />
        <div
          className="login-button facebook"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
          }
        >
          <FacebookOutlined /> Sign in with Facebook
        </div>
      </div>
      <img src={imagedown} className="imagedown" alt="" />
    </div>
  );
};

export default Login;
