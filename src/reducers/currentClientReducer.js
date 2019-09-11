export default (state = null, action) => {
    console.log("action is", action)
    switch (action.type) {
        case "SET_CURRENT_CLIENT":
            return action.client
        default:
            return state
    }
}