import { ActionType } from "./types";
import axios from "axios";


export const categoryAPI = () => async (dispatch) => {
 
     //dispatch({ type: ActionType.USER_LOADING })
 
     const config = {
         headers:{
             'Content-Type': 'application/json',
         }
     }

     try {
         const res = await axios.get('http://127.0.0.1:8000/api/', config);
         //console.log(res.data)
         dispatch({
             type: ActionType.LIST_CATEGORY,
             payload: res.data
         });
 
     } catch (error) {
         //console.log(error.response.data)
         /*dispatch({
             type: ActionType.SIGNUP_FAIL,
             payload: error.response.data
         })*/
 
         //dispatch(setAlert('Error Authenticating', 'error'))
     }
 }


export const productIdAPI = (id = false) => async (dispatch) => {
 
    //dispatch({ type: ActionType.USER_LOADING })
    

    const config = {
        headers:{
            'Content-Type': 'application/json',
            
        }
    }
    if (id){
        try {
            const res = await axios.get(`http://127.0.0.1:8000/api/products/${id}/`, config);
            //console.log(res.data)
            dispatch({
                type: ActionType.LIST_PRODUCT_BY_ID,
                payload: res.data
            });
    
        } catch (error) {
            console.log(error.response.data)
            /*dispatch({
                type: ActionType.SIGNUP_FAIL,
                payload: error.response.data
            })*/
    
            //dispatch(setAlert('Error Authenticating', 'error'))
        }
    }else{
        try {
            const res = await axios.get(`http://127.0.0.1:8000/api/products/`, config);
            //console.log(res.data)
            dispatch({
                type: ActionType.LIST_PRODUCT_BY_ID,
                payload: res.data
            });
    
        } catch (error) {
            console.log(error.response.data)
            /*dispatch({
                type: ActionType.SIGNUP_FAIL,
                payload: error.response.data
            })*/
    
            //dispatch(setAlert('Error Authenticating', 'error'))
        }
    }
    
}

export const productDetailIdAPI = (id) => async (dispatch) => {
    
    //dispatch({ type: ActionType.USER_LOADING })

    const config = {
        headers:{
            'Content-Type': 'application/json',
        }
    }

    try {
        const res = await axios.get(`http://127.0.0.1:8000/api/productsDetailapi/${id}/`, config);
        //console.log(res.data)
        dispatch({
            type: ActionType.PRODUCT_DETAIL,
            payload: res.data
        });

    } catch (error) {
        console.log(error.response.data)
        
    }
}

export const productCountAPI = () => async (dispatch, getState) => {
    const userToken = getState().auth.token;
    //console.log(userToken)

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
        const res = await axios.get('http://127.0.0.1:8000/api/total-product/', config);
        console.log(res.data)
        dispatch({
            type: ActionType.PRODUCT_COUNT,
            payload: res.data
        });

    } catch (error) {
        console.log(error.response.data)
    }
}

