import loggedReducer from './isLogged';
import categoryClicked from './categoryClicked';
import cart, * as fromCart from './cart'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    isLogged : loggedReducer,
    categoryClicked,
    cart
});

export default allReducers;