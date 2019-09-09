export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_SERVICES":
            return action.services
    
        case "ADD_SERVICE":
            return {...state, services: [...state.services, action.payload]}
        default:
            return state
    }
}