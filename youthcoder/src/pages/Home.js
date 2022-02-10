import React, { Component } from 'react';
import JumbotronComponent from '../components/JumbotronComponent';
import NavbarComponent from '../components/NavbarComponent';
import ArticlesComponent from '../components/ArticlesComponent';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
        <ArticlesComponent />
      </div>
    );
  }
}
