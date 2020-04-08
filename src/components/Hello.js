import React from "react"

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello Darshan!!!</h1>
    //         </div>
    // )
    return (
        React.createElement(
            'div',
            { id : "Name"},
            React.createElement('h1',null,"Hello Darshan!!!!")
        )
    )
}

export default Hello