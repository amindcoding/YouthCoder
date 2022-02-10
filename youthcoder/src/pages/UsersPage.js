import React, { Component } from 'react';
import NavbarComponent from '../components/NavbarComponent';
import JumbotronUsersComponent from '../components/JumbotronUsersComponent';

export default class UsersPage extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronUsersComponent />
      </div>
    );
  }
}
