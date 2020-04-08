import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
        console.log("LifecycleA Constructure");
    }

    testMethod=()=>{
        alert("From Parent")
    }
    static getDerivedStateFromProps(props, state){
        console.log("LifecycleA getDerivedFromProps")
        return null
    }
    
    componentDidMount(){
        console.log("LifecyleA Didmount")
    }

    stateChange=()=>{
        this.setState({
            count: ++this.state.count
        })
    }

    shouldComponentUpdate(){
     console.log("LifecycleA shouldComponentUpdateMethod")   
     return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifecycleA getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("LifecycleA componentDidUpdate")
    }

    render() {
        console.log("LifecycleA render")
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.stateChange}>Change STate</button>
                <LifecycleB parentCount={this.state.count} testMethod={this.testMethod}></LifecycleB>
            </div>
        )
    }
}
export default LifecycleA