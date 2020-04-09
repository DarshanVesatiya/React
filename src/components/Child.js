import React, { Component } from 'react'

export default class Child extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            count : 0
        }
    }    
    
    increaseCounter(){
        this.setState({
            count : this.state.count + 1 
        })
    }

    render() {
        return (
            <div>
                <h1>Hello THis is Child and i'm giving access of my function to my Parent.</h1>            
            </div>
        )
    }
}
