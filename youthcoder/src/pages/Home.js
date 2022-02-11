import React, { Component } from 'react';
import JumbotronComponent from '../components/JumbotronComponent';
import NavbarComponent from '../components/NavbarComponent';
import TableComponent from '../components/TableComponent';
import { getRequestList, deleteDataRequest } from '../actions/requestAction';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch(getRequestList());
    this.props.dispatch(deleteDataRequest());
  }

  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
        {/* <TableComponent /> */}
      </div>
    );
  }
}

export default connect()(HomePage);
