import React, { Component } from "react";
import LoginComponent from "../components/LoginComponent";
import NavbarComponent from "../components/NavbarComponent";

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <LoginComponent />
      </div>
    );
  }
}
