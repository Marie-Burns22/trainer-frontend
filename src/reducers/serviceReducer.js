export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_SERVICES":
            return action.services
        default:
            return state
    }
}