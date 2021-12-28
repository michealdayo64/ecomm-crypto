import {
   ActionType
} from '../Actions/types';

const initialState = {
    category: [],
    //allProduct: [],
    productById: [],
    prodD: null,
    //productCount: 0,
    
}

export default function products(state = initialState, action){

    const { type, payload } = action;

    switch(type){
        case ActionType.LIST_CATEGORY:
            return{
                ...state,
                category: payload.category
            }
        /*case ActionType.LIST_PRODUCT:
            return{
                ...state,
                allProduct: payload.product
            }*/
        case ActionType.LIST_PRODUCT_BY_ID:
            return{
                ...state,
                productById: payload.prods
            }
            case ActionType.PRODUCT_DETAIL:
                return{
                    ...state,
                    prodD: payload.prodDetail
                }
            /*case ActionType.PRODUCT_COUNT:
                return{
                    ...state,
                    productCount: payload.serial
                }*/
        default:
            return state
    }

}