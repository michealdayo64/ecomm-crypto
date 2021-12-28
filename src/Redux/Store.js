import {createStore, combineReducers, applyMiddleware} from 'redux'
//import Reducer from './FnRedux/Reducer'
import { todo, counter } from './CRExample/Reducer'

const reducer = combineReducers({
    todo,
    counter
})

const logMiddleware = (store) => (next) =>(action) => {
    console.log('Previous state:', store.getState())
    next(action)
}

const MiddlewareCalled = applyMiddleware(logMiddleware)
const store = createStore(reducer, MiddlewareCalled)

export default store