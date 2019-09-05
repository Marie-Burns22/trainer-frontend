export default (state = [], action) => {
    switch (action.type) {
        case "ADD_SERVICE":
            return action.service
        default:
            return state
    }
}