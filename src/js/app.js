import React, { Component } from 'react';
import CommentBox from './commentbox';


export default class App extends Component {
  render() {
    return (
      <CommentBox url="data.json"/>
    );
  }
}
