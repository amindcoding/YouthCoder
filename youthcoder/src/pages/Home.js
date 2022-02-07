import React, { Component } from 'react';
import JumbotronComponent from '../components/JumbotronComponent';
import LoginComponent from '../components/LoginComponent';
import NavbarComponent from '../components/NavbarComponent';

export default class HomePage extends Component {
  render() {
    return (<NavbarComponent />), (<JumbotronComponent />);
  }
}
