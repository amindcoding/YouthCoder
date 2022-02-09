import React, { Component } from "react";
import NavbarComponent from "../components/NavbarComponent";
import ForumComponent from "../components/ForumComponent";

export default class ForumPage extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <ForumComponent />
      </div>
    );
  }
}
