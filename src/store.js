import clientReducer from './reducers/clientReducer'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import bookingReducer from './reducers/bookingReducer';
import currentUserReducer from './reducers/currentUserReducer'
import serviceReducer from './reducers/serviceReducer'

const reducer = combineReducers({
    bookings: bookingReducer,
    clients: clientReducer,
    currentUser: currentUserReducer,
    services: serviceReducer

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store