export default (state = null, action) => {
    switch (action.type) {
        case "SET_CURRENT_CLIENT":
            return action.client
        default:
            return state
    }
}