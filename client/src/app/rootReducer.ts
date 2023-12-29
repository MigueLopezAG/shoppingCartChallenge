import { combineReducers } from 'redux';
import { productReducer } from './Products/productsReducer';
import { cartReducer } from './Cart/cartReducer';

const appReducer = combineReducers({
	productCatalog: productReducer,
	cart: cartReducer
});

const rootReducer = (state: any, action: any) => {
	return appReducer(state, action);
}

export default rootReducer;
