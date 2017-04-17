import axios from 'axios';
import { push } from 'react-router-redux';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS';
export const ADD_CART_ITEMS = 'ADD_CART_ITEMS';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const ROOT_URL = 'https://api.mlab.com/api/1/databases/shopping-cart/collections';
const API_KEY = '?apiKey=KrKqVwJ1mV9hk_9Ly3tEsras8pOrS7ZI';

export function getItems() {
	const request = axios.get(`${ROOT_URL}/items${API_KEY}`);
	
	return (dispatch) => {
		request.then(({data}) => {
			dispatch({ type: FETCH_ITEMS, payload: data })
		});
	};
}

export function getCartItems() {
	return (dispatch) => {
		dispatch({ type: FETCH_CART_ITEMS })
	};
}

export function addItem(props) {
	const request = axios({
		method: 'post',
		url: `${ROOT_URL}/items${API_KEY}`,
		data: JSON.stringify(props),
		headers: {
			'content-type': 'application/json'
		}
	});
	return (dispatch) => {
		request.then(({data}) => {
			return dispatch(push('/'))
		});
	};
}

export function addCartIem(props){
	return (dispatch) => {
		dispatch({ type: ADD_CART_ITEMS, payload:props})
	};
}	
	
export function removeFromCart(props){
	return (dispatch) => {
		dispatch({ type: REMOVE_FROM_CART, payload:props })
	};
}
