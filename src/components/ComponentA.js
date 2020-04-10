import React, { Component } from 'react'
import { UserProvider } from './UserContext'
import ComponentB from './ComponentB'


export default class ComponentA extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    incrementCounter = () =>{
        this.setState(prevState=>{
            return {count : prevState.count +1}
        })
    }

    render() {
        const contextValue={
            count:this.state.count,
            incrementCounter:this.incrementCounter
        }
        return (
            <UserProvider value={contextValue}>
                 <ComponentB />               
            </UserProvider>
        )
    }
}
