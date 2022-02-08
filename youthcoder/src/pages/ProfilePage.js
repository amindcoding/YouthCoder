import React, { Component } from "react";
import ProfileComponent from "../components/ProfileComponent";
import NavbarComponent from "../components/NavbarComponent";

export default class ProfilePage extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <ProfileComponent />
      </div>
    );
  }
}
