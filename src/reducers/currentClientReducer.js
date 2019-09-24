export default (state = null, action) => {

    switch (action.type) {
        case "SET_CURRENT_CLIENT":
            return action.client
        case "CLEAR_CURRENT_CLIENT":
            return null
        default:
            return state
    }
}