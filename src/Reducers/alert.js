import { ActionType } from "../Actions/types";

const initialState = []

export default function alert(state = initialState, action){
    const { type, payload } = action;

    switch(type){
        case ActionType.SET_ALERT:
            return [...state, payload];
        case ActionType.REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload);
        default:
            return state;
    }
}