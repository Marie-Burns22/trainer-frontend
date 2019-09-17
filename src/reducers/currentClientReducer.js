export default (state = null, action) => {

    switch (action.type) {
        case "SET_CURRENT_CLIENT":
            return action.client
        case "CLEAR_CURRENT_CLIENT":
            return null
        // case "ADD_BOOKING":
        //     return action.payload
        default:
            return state
    }
}