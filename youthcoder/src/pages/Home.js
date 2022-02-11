import React, { Component } from 'react';
import NavbarComponent from '../components/NavbarComponent';
import JumbotronComponent from '../components/JumbotronComponent';
import Footer from '../components/FooterComponent';
// import TableComponent from '../components/TableComponent';
// import { getRequestList, deleteDataRequest } from '../actions/requestAction';
// import { connect } from 'react-redux';
// import { Container } from 'reactstrap';

class HomePage extends Component {
  //   componentDidMount() {
  //     this.props.dispatch(getRequestList());
  //     this.props.dispatch(deleteDataRequest());
  //   }
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
        {/* <TableComponent /> */}
        <Footer />
      </div>
    );
  }
}

export default connect()(HomePage);
