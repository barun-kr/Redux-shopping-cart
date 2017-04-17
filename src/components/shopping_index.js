import React, { Component } from 'react';
import { Link } from 'react-router';

class ShoppingIndex extends Component {

	render(){
		return (
			<div>
				<nav className="navbar navbar-inverse navbar-fixed-top">
					<div className="container">
						<div className="navbar-header">
								<div className="navbar-brand">Shopping Cart</div>
								<ul className="nav navbar-nav">
									<li>
										<Link to="additems">Add Items</Link>
									</li>
									<li>
										<Link to="purchaseitems">Purchase Items</Link>
									</li>
								</ul>
						</div>
					</div>
				</nav>

				<div className="jumbotron">
					<div className="container">
							<div className="block content">
									Welcome to Shopping World.
							</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ShoppingIndex;