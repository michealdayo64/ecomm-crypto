import { ActionType } from "./types";
import axios from "axios";
//import { setAlert } from "./alert";

//var userToken;

export const login = ({username, password}) => async dispatch => {

    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ username, password })

    try {
        const res = await axios.post('http://127.0.0.1:8000/api/login/', body, config);
        //console.log(res.data)
        dispatch(
            {type: ActionType.LOGIN_SUCCESS,
            payload: res.data
            }
        );

    
        //dispatch(setAlert("Authenticated", "Successful"))
    } catch (err) {
        //console.log(err.response.data)
        dispatch({
            type: ActionType.LOGIN_FAIL,
            payload: err.response.data
        })

        //dispatch(setAlert('Error Authenticating', 'error'))
    }
}

export const signup = ({username, email, password}) => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ username, email, password})

    try {
        const res = await axios.post('http://127.0.0.1:8000/api/usercreateapi/', body, config);
        //console.log(res.data)
        dispatch({
            type: ActionType.SIGNUP_SUCCESS,
            payload: res.data
        });

        //dispatch(login(username, password))
    } catch (error) {
        //console.log(error.response.data)
        dispatch({
            type: ActionType.SIGNUP_FAIL,
            payload: error.response.data
        })

        //dispatch(setAlert('Error Authenticating', 'error'))
    }
}

export const loadUser = () => async (dispatch, getState) => {

   const userToken = getState().auth.token;
    //console.log(userToken)

    dispatch({ type: ActionType.USER_LOADING })

    const config = {
        headers:{
            'Content-Type': 'application/json',
        }
    }

    if (userToken){
        config.headers['Authorization'] = `Token ${userToken}`
    }
    try {
        const res = await axios.get('http://127.0.0.1:8000/api/getuserapi/', config);
        //console.log(res.data)
        dispatch({
            type: ActionType.USER_LOADED,
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

export const logout = () => (dispatch, getState) => {
    let token = getState().auth.token;
    //console.log(token)


    const config = {
        headers:{
            'Content-Type': 'application/json',
        }
    }

    if (token){
        config.headers['Authorization'] = `Token ${token}`
    }

    try {
        const res = axios.post('http://127.0.0.1:8000/api/logout/', null, config);
        //console.log(res.data)
        dispatch({
            type: ActionType.LOGOUT,
        });

        //dispatch(login(username, password))
    } catch (error) {
        //console.log(error.response.data)
        /*dispatch({
            type: ActionType.SIGNUP_FAIL,
            payload: error.response.data
        })*/
    }
    
}








