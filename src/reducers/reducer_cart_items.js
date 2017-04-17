import { FETCH_CART_ITEMS, 
				ADD_CART_ITEMS, 
				REMOVE_FROM_CART } from '../actions/index';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action){
	switch(action.type){	
	case FETCH_CART_ITEMS:
		return [ ...state ];
	case ADD_CART_ITEMS:	
		return [...state, action.payload ];
	case REMOVE_FROM_CART: {
    const keepItem = (item) => { 
    	return item._id.$oid !== action.payload._id.$oid 
    };
    return state.filter(keepItem);
  }	
	default:	
		return state;	
	}
}