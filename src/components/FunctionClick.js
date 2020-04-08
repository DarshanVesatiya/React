import React from 'react'

function FunctionClick() {

    const clickHandler = ()=>{
        alert("Click is Handled By Functional Component")
    }

    return (
        <div>
            <button onClick={clickHandler}>Show Alert</button>   
        </div>
    )
}

export default FunctionClick