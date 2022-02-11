import React, { Component } from 'react';
import NavbarComponent from '../components/NavbarComponent';
import JumbotronArtikelComponent from '../components/JumbotronArtikelComponent';
import ArticlesComponent from '../components/ArticlesComponent';
import Footer from '../components/FooterComponent';

export default class ArtikelPage extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronArtikelComponent />;
        <ArticlesComponent />
        <Footer />
      </div>
    );
  }
}
