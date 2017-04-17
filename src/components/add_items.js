import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { addItem } from '../actions/index'

class AddItems extends Component {
		
	onSubmit(props){
		this.props.addItem(props);
	}
	
	render(){
		const { fields: { title, url, price}, handleSubmit} = this.props;
		return (
			<div className="container">
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3> Create a New Product</h3>
				<div className="form-group">
					<label>Title</label>
					<input type="text" className="form-control" {...title}/>
				</div>
				<div className="form-group">
					<label>Image URL</label>
					<input type="text" className="form-control" {...url}/>
				</div>
				<div className="form-group">
					<label>Price</label>
					<input type="text" className="form-control" {...price}/>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'ItemForm',
	fields: ['title', 'url', 'price']
}, null , { addItem })(AddItems);
