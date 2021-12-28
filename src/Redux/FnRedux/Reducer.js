import ActionType from "./Action";

function Reducer(state = {vehicle: ''}, action){
     switch(action.type){
         case ActionType.car:
             return{
                 vehicle: 'This is a car'
             }
        case ActionType.bike:
            return{
                vehicle: 'This is a bike'
            }
        default:
            return {
                vehicle: 'Nothing'
            }
     }
}

export default Reducer