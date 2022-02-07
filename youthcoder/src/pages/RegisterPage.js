import React, { Component } from "react";
import RegisterComponent from "../components/RegisterComponent";
import NavbarComponent from "../components/NavbarComponent";

export default class RegisterPage extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <RegisterComponent />
      </div>
    );
  }
}
