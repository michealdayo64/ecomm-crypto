import {
    ActionType
} from '../Actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false,
    error: null,
    logsucces: null,
    signupsuccess: null,
    logoutSuccess: null,
    user: null
};

export default function auth(state = initialState, action){
    
    const { type, payload } = action;

    switch(type){
        case ActionType.LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                isAuthenticated: true,
                loading: true,
                token: payload.token,
                logsucces: payload.success,
                error: false
            }

        case ActionType.SIGNUP_SUCCESS:
            return{
                ...state,
                isAuthenticated: false,
                loading: false,
                signupsuccess: payload.success,
                error: false
            }
        
        case ActionType.LOGIN_FAIL:
           return {
                ...state,
                loading: false,
                isAuthenticated: false,
                error: payload.error,
                logsucces: false
            }

        case ActionType.SIGNUP_FAIL:
            return{
                ...state,
                isAuthenticated: false,
                loading: false,
                signupsuccess: false,
                error: payload.error
            }

        case ActionType.USER_LOADING:
            return{
                ...state,
                loading: true
            }

        case ActionType.USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                user: payload.user,
                loading: false
            }

        case ActionType.LOGOUT:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                loading: false,
                logoutSuccess: true
            }

        default:
            return state
    }
}


