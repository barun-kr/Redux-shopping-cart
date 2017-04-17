import { combineReducers } from 'redux';
import { routerReducer} from 'react-router-redux';
import ItemsReducer from './reducer_items';
import CartItemsReducer from './reducer_cart_items';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	items: ItemsReducer,
	routing: routerReducer,
	cartItems:CartItemsReducer,
	form: formReducer
});

export default rootReducer;