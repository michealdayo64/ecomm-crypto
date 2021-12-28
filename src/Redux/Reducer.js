const initialState = {
    count: 0
}

export default function Reducer(state = initialState, action){
    //console.log(action)
    switch(action.type){
        case "INCREMENT":
            return {
                count: state.count + action.payload
            }
        case "DECREMENT":
            return {
                count: state.count - action.payload
            }
        default:
            return state
    }   
}