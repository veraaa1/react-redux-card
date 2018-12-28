import RootReducer from '../reducers'
import { createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
 const store = createStore(RootReducer,applyMiddleware(logger,thunk))
 export default store