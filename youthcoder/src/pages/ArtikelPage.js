import React, { Component } from 'react';
import NavbarComponent from '../components/NavbarComponent';
import JumbotronArtikelComponent from '../components/JumbotronArtikelComponent';
import ArticlesComponent from '../components/ArticlesComponent';

export default class ArtikelPage extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronArtikelComponent />;
        <ArticlesComponent />
      </div>
    );
  }
}
