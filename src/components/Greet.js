import React from 'react'

// function Greet(){
//     return <h1>Hello Darshan</h1>
// }
const Greet = (props) => {
    return(
        <div>
            <h1>
                Gretting {props.name}
            </h1>
    <p>{props.children}</p>
            </div>
    )
}
export default Greet