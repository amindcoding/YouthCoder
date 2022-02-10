import React, { Component } from 'react';
import Contact from '../components/Contact';
import NavbarComponent from '../components/NavbarComponent';

export default class ContactPage extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <Contact />
      </div>
    );
  }
}