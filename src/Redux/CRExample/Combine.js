//import React from 'react'
/*import { useSelector, useDispatch } from 'react-redux'

export default function Combine() {
    const counter = useSelector(state => state)
    const dispatch = useDispatch()
    //console.log(counter)
    return (
        <div>
            <h1>Combine Reducers</h1>

            <button onClick={() => dispatch({ type: 'ADD_TODO', payload: 'Adding to todo'})}>Add Todos</button>
            <button onClick={() => dispatch({ type: 'INCREMENT'})}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT'})}>Decrement</button>
        </div>
    )
}*/

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActionCreator from './Action'
class Combine extends Component {
    constructor(props){
        super(props);
        const {dispatch} = props
        this.boundActionCreators = bindActionCreators(TodoActionCreator, dispatch)
        console.log(this.boundActionCreators)
    }
    componentDidMount(){
        const { dispatch } = this.props
        let action = TodoActionCreator.addTodo('Use Redux')
        dispatch(action)
    }
    render() {
        let{ todos } = this.props
        console.log(todos)
        return (
            <div>
                
            </div>
        )
    }
}

export default connect(state => ({todos: state.todo}))(Combine)

