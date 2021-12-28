import { createStore } from "redux";

//Action

const addTodoAction = {
    type: 'CREATE',
    payload: 'A nw post for redux'
}

const initialState = {
    posts: []
}

//Reducer
const reducer = (state = initialState, action) =>{
    if(action.type === 'CREATE'){
        return state + 1
    }
    return state;
}

//Store
const Store = createStore(reducer)

export default Store;