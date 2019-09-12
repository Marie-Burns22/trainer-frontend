import clientReducer from './reducers/clientReducer'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import bookingReducer from './reducers/bookingReducer';
import currentClientReducer from './reducers/currentClientReducer'
import serviceReducer from './reducers/serviceReducer'
import loginFormReducer from './reducers/loginFormReducer'
import signUpReducer from './reducers/signUpReducer';

const reducer = combineReducers({
    bookings: bookingReducer,
    clients: clientReducer,
    currentClient: currentClientReducer,
    services: serviceReducer,
    loginForm: loginFormReducer,
    signUpForm: signUpReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store