import React, { Component } from 'react';

import Comment from './comment';

export default class CommentList extends Component {
	render(){
		console.log(this.props.data)
		let commentNodes = this.props.data.map((comment) => {
			return (
				<Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
			)		
		})
		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
}