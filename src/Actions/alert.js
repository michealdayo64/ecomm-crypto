/*import { v4 as uuid } from 'uuid';
import { ActionType } from './types';

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
    const id = uuid()
    dispatch({
        type: ActionType.SET_ALERT,
        payload: { msg, alertType, id }
    });

    setTimeout(() => dispatch({ type: ActionType.REMOVE_ALERT, payload: id}), timeout);
}*/