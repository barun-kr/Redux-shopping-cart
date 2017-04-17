import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddToCart from './addtocart';
import { getItems, getCartItems, removeFromCart } from '../actions/index';

class PurchaseItems extends Component {
	
	componentWillMount(){
		this.props.getItems();
		this.props.getCartItems();
	}
	
	handleClick(id){
		this.props.removeFromCart(id);	
	}
	
	renderItems(){
		return this.props.itemsList.map((item) => {
			return (
				<li className="list-group-item" key={item._id.$oid}>
					<div className="row">
  				<div className="col-sm-6 col-md-4">
    			<div className="thumbnail">
      			<img src={item.url}/>
      			<div className="caption">
        			<h3>{item.title}</h3>
        			<p> Price : ${item.price} </p>
        			<AddToCart item={item} cartList={this.props.cartItemList} />
     				</div>
    			</div>
  			</div>
				</div>	
				</li>
			);
		});
	}
	
	renderCartItems(){
		if(this.props.cartItemList.length === 0){
			return (
				<li className="list-group-item" >
					Cart is Empty
				</li>
			);
		} else{
		return this.props.cartItemList.map((cartItem) => {
			return (
				<li className="list-group-item" key={cartItem._id.$oid}>
					{cartItem.title}
					<button onClick={this.handleClick.bind(this, cartItem )} 
					className="btn btn-primary btn-sm pull-right">Remove From Cart</button>
				</li>
			);
		});
		}
	}
	
	render(){
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<h1>Shopping Cart</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						<h3>Items</h3>
						<ul className="list-group">
							{this.renderItems()}
						</ul>
					</div>
					<div className="col-md-4">
						<h3>Cart Details</h3>
						<div className="panel panel-default">
					  <ul className="list-group">
					  	{this.renderCartItems()}
					  </ul>
					</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { 
		itemsList: state.items.all, 
		cartItemList: state.cartItems
	};
}

export default connect(mapStateToProps, {
		getItems, 
		getCartItems, 
		removeFromCart 
	})(PurchaseItems);
