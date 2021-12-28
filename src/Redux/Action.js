const Increment = (value) => {
    return{
        type: "INCREMENT",
        payload: value
    }
}

const Decrement = (value) => {
    return{
        type: "DECREMENT",
        payload: value
    }
} 

export{Increment, Decrement}