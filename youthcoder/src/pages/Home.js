import React, { Component } from 'react';
import JumbotronComponent from '../components/JumbotronComponent';
import NavbarComponent from '../components/NavbarComponent';
import Footer from '../components/FooterComponent';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
        <Footer />
      </div>
    );
  }
}
