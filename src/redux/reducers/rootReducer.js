import { combineReducers } from 'redux';
import productReducers from 'redux/reducers/productReducers';

const allReducers = combineReducers({
  productReducers
});
export default allReducers;
