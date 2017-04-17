import { FETCH_ITEMS } from '../actions/index';

const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action){
	switch(action.type){	
	case FETCH_ITEMS:
		return { ...state, all: action.payload };
	default:	
		return state;	
	}
}