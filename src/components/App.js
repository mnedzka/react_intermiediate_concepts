import React, { Component } from "react";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import { Route, Link } from "react-router-dom";

export default class App extends Component {
  renderButton() {}

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a omment</Link>
        </li>
        <li>{this.render.button}</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}
