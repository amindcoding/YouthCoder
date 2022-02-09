import React, { Component } from 'react';
import NavbarComponent from '../components/NavbarComponent';
import JumbotronComponent from '../components/JumbotronComponent';
import Comments from '../components/comments/CommentsComponent';

export default class ForumPage extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        {/* <JumbotronComponent /> */}
        <Comments commentsUrl="http://localhost:3004/comments" currentUserId="1" />
      </div>
    );
  }
}
