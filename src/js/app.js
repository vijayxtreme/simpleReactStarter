import React, { Component } from 'react';
import CommentBox from './commentbox';

import data from './data.js'

export default class App extends Component {
  render() {
    return (
      <CommentBox data={data}/>
    );
  }
}
