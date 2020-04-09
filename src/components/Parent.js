import React, { Component, createRef } from 'react'
import Child from './Child'

export default class Parent extends Component {

    constructor(props) {
        super(props)
        this.cbRef = createRef()
        this.state = {
            count : 0
        }
    }
    
     increaseCount = async ()=>{
        await this.cbRef.current.increaseCounter()
        this.setState({
            count : this.cbRef.current.state.count
        })
    }

    render() {
        return (
            <>
                <Child ref={this.cbRef}></Child>
                <button onClick={this.increaseCount}>Increase Count usnig Child</button>
                <h1>Counter : {this.state.count}</h1>
            </>
        )
    }
}
