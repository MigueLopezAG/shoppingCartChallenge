import { combineReducers } from 'redux';
import { productReducer } from './Products/productsReducer';

const appReducer = combineReducers({
	productCatalog: productReducer
});

const rootReducer = (state: any, action: any) => {
	return appReducer(state, action);
}

export default rootReducer;
