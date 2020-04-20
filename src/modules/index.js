import { combineReducers } from 'redux';
import products from './products';
import loading from './loading';

const rootReducer = combineReducers({
  products,
  loading,
});

export default rootReducer;
