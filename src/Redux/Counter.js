import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Increment, Decrement } from './Action'
import store from './Store'

//console.log(store.getState())
// unregister
const unregister = store.subscribe(() => console.log(store.getState()))

class Counter extends Component {
    increment = () => {
        //console.log(this)
        this.props.dispatch(Increment(1))
    }

    decrement = () => {
        this.props.dispatch(Decrement(1))
        unregister()
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    //console.log(state)
    return{
        count: state.count
    }
    
}
export default connect(mapStateToProps)(Counter)
