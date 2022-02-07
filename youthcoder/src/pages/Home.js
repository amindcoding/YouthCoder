import React, { Component } from 'react';
import JumbotronComponent from '../components/JumbotronComponent';
import NavbarComponent from '../components/NavbarComponent';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
      </div>
    );
  }
}
