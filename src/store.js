import clientsReducer from './reducers/clients'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import booking from './reducers/booking';
import currentUser from './reducers/currentUser'

const reducer = combineReducers({
    clients: clientsReducer,
    booking,
    currentUser

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store