import React, { Component } from 'react'

export default class Clock extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            time: new Date()
        }
    }
    
    componentDidMount(){
        this.localtime = setInterval(()=>{
            this.setState({time:new Date()})
        },1000)
    }
    
    componentWillUnmount(){
        clearInterval(this.localtime)
    }
    
    render() {
        return (
            <div>
                <h1>TIME : {this.state.time.toLocaleTimeString()}</h1>
            </div>
        )
    }
}
