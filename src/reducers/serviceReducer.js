export default function serviceReducer(state = {services:[]}, action) {
    switch (action.type) {
        case "GET_SERVICES":
            return state

        case "ADD_SERVICE":
            return action.service
        default:
            return state
    }
}