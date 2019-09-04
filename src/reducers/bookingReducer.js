export default (state = [], action) => {
    switch (action.type) {
        case "ADD_BOOKING":
            return action.booking
        default:
            return state
    }
}