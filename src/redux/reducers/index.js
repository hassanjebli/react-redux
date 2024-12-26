import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
import { productReducer, selectedProductReducer } from './productReducer';

const rootReducer = combineReducers({ counterReducer, productReducer ,selectedProductReducer});

export default rootReducer;
