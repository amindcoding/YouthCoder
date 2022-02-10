import React, { Component } from 'react';
import NavbarComponent from '../components/NavbarComponent';
import Comments from '../components/comments/CommentsComponent';
import JumbotronForumComponent from '../components/JumbotronForumComponent';

export default class ForumPage extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronForumComponent />
        <Comments commentsUrl="http://localhost:3004/comments" currentUserId="1" />
      </div>
    );
  }
}
