import React, { Component } from 'react';

import CommentForm from './commentform';
import CommentList from './commentlist';


export default class CommentBox extends Component {
	render(){
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.props.data}/>
				<CommentForm />
			</div>
		);
	}
}