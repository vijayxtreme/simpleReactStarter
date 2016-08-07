import React, { Component } from 'react';
import jQuery from 'jquery';

import CommentForm from './commentform';
import CommentList from './commentlist';

export default class CommentBox extends Component {
	constructor(props){
		super(props);
		this.state = {
			data:[]
		}
	}
	componentDidMount() {
		console.log(this.props.url)
	     jQuery.ajax({
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
	render(){
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data}/>
				<CommentForm />
			</div>
		);
	}
}