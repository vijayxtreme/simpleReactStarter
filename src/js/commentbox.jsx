import React, { Component } from 'react';
import $ from 'jquery';

import CommentForm from './commentform';
import CommentList from './commentlist';

export default class CommentBox extends Component {
	constructor(props){
		super(props);
		this.state = {
			data:[]
		}
		this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
	}
	loadCommentsFromServer(){
		console.log(this.props)
	     $.ajax({
	     	url:this.props.url,
	     	dataType:'json',
	     	cache:false,
	     	success:function(data){
	     		this.setState({data:data});
	     	}.bind(this),
	     	error:function(xhr, status, err){
	     		console.error(this.props.url, status, err.toString());
	     	}.bind(this)
	     });
	}
	handleCommentSubmit(comment){
		console.log('submit')
		console.log(this.state)
		let comments = this.state.data;
		comment.id = Date.now();
		let newComments = comments.concat([comment]);
		this.setState({data:newComments});

		//TODO: submit to the server and refresh the list
		// $.ajax({
		// 	url:this.props.url,
		// 	dataType:'json',
		// 	data:comment,
		// 	type:'POST',
		// 	success:function(data){
		// 		this.setState({data:data});
		// 	}.bind(this),
		// 	error:function(xhr, status, err){
		// 		this.setState({data:comments});
		// 		console.error(this.props.url, status, err.toString())
		// 	}.bind(this)
		// });
	}
	componentDidMount() {
		this.loadCommentsFromServer();
		//setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
		// OR... use a fat arrow, which preserves `this` context
		//setInterval(() => this.loadCommentsFromServer(), this.props.pollInterval); 

		//setInterval(() => this.loadCommentsFromServer(), this.props.pollInterval)
	}
	render(){
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data}/>
				<CommentForm onCommentSubmit={this.handleCommentSubmit} />
			</div>
		);
	}
}