import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        alert("Click is Handled by Class Component")
    }

    render() {
        return (            
            <div>
               <button onClick={this.clickHandler}>Show Alert</button>             
            </div>
        )
    }
}

export default ClassClick
