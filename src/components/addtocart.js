import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { addCartIem } from '../actions/index';

class AddToCart extends Component {
	
	handleClick(){
		this.props.addCartIem(this.props.item);	
	}
	
	render(){
		if(_.find(this.props.cartList, '_id.$oid', this.props.item._id.$oid)){
			var showButton = '';
		} else {
			var showButton = <button onClick={this.handleClick.bind(this)} 
					className="btn btn-primary">Add to Cart</button>
		}
		return(
			<div>
			 { showButton }
			</div>
		);
	}
}

export default connect(null, { addCartIem })(AddToCart);