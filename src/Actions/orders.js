import axios from "axios";
import { ActionType } from "./types";

export const orderItemApi = () => async (dispatch, getState) => {
    const userToken = getState().auth.token;
    //console.log(userToken)

    //dispatch({ type: ActionType.ORDER_ITEM_LOADING })

    const config = {
        headers:{
            'Content-Type': 'application/json',
        }
    }

    if (userToken){
        config.headers['Authorization'] = `Token ${userToken}`
    }
    try {
        const res = await axios.get('http://127.0.0.1:8000/api/order-api/', config);
        //console.log(res.data)
        dispatch({ type: ActionType.ORDER_ITEM,
                   payload: res.data
                })

    } catch (error) {
        dispatch({ type: ActionType.ORDER_ITEM_FAILED })
        console.log(error.response.data)
    }
}

/*export const addToCartAPI = (id) => async (dispatch, getState) => {
    const userToken = getState().auth.token;
    //dispatch({ type: ActionType.USER_LOADING })

    const config = {
        headers:{
            'Content-Type': 'application/json',
        }
    }
    if (userToken){
        config.headers['Authorization'] = `Token ${userToken}`
    }

    try {
        const res = await axios.post(`http://127.0.0.1:8000/api/add-to-cart-api/${id}/`, null, config);
        console.log(res.data)
        dispatch({

            type: ActionType.ADD_TO_CART,
            payload: res.data
        });
        
    } catch (error) {
        console.log(error.response.data)
        
    }
}

export const removeFromCartAPI = (id) => async (dispatch, getState) => {
    const userToken = getState().auth.token;
    //dispatch({ type: ActionType.USER_LOADING })

    const config = {
        headers:{
            'Content-Type': 'application/json',
        }
    }
    if (userToken){
        config.headers['Authorization'] = `Token ${userToken}`
    }

    try {
        const res = await axios.post(`http://127.0.0.1:8000/api/remove-from-cart-api/${id}/`, null, config);
        console.log(res.data)
        dispatch({

            type: ActionType.REMOVE_FROM_CART,
            payload: res.data
        });

    } catch (error) {
        console.log(error.response.data)
        
    }
}

export const removeSingeItemAPI = (id) => async (dispatch, getState) => {
    const userToken = getState().auth.token;
    //dispatch({ type: ActionType.USER_LOADING })

    const config = {
        headers:{
            'Content-Type': 'application/json',
        }
    }
    if (userToken){
        config.headers['Authorization'] = `Token ${userToken}`
    }

    try {
        const res = await axios.post(`http://127.0.0.1:8000/api/remove-single-single-item-api/${id}/`, null, config);
        console.log(res.data)
        dispatch({

            type: ActionType.REMOVE_SINGLE_ITEM,
            payload: res.data
        });

    } catch (error) {
        console.log(error.response.data)
        
    }
}*/



