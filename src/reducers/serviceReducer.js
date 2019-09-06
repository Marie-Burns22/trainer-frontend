export default function serviceReducer(state = {services:[]}, action) {
    switch (action.type) {
        case "FETCH_SERVICES":
            return {services: action.payload}

    //     case "ADD_SERVICE":
    //         return action.service
        default:
            return state
    }

}