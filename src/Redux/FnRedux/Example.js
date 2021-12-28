import React from 'react'
//import Counter from '../Counter'
import {useSelector, useDispatch} from 'react-redux'

function Example() {
    const counter = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch({ type: 'CAR'})}>Car</button>
            <h1>{counter.vehicle}</h1>
            <button onClick={() => dispatch({ type: 'BIKE'})}>Bike</button>
        </div>
    )
}

export default Example
