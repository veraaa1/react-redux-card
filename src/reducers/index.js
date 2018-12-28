
import products from './products'
import cart from './cart'
import {combineReducers} from 'redux'
const RootReducer = combineReducers({
    products,
    cart
})
export default RootReducer