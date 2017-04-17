import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import ShoppingIndex from './components/shopping_index';
import AddItems from './components/add_items';
import PurchaseItems from './components/purchase_items';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={ShoppingIndex} />
		<Route path="additems" component={AddItems} />
		<Route path="purchaseitems" component={PurchaseItems} />
	</Route>
);
