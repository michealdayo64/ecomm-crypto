import {
    ActionType
 } from '../Actions/types';

 const initialState = {
    orderItem: null,
    /*add_to_cart: localStorage.getItem('qty'),
    remove_from_cart: null,
    remove_single_item: null*/
    error: false,
    loading: false
}

export default function orders(state = initialState, action){
    const { type, payload } = action;

    switch(type){
        case ActionType.ORDER_ITEM_LOADING:
            return{
                ...state,
                loading: true
                
            }
        case ActionType.ORDER_ITEM:
            return{
                ...state,
                orderItem: payload.order,
                loading: false
            }
        case ActionType.ORDER_ITEM_FAILED:
            
            return{
                ...state,
                loading: false,
                error: payload.error,
            }
        default:
            return state
    }
}