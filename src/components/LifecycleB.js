import React, { Component } from 'react'

class LifecycleB extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
        console.log("LifecycleB Constructure");
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifecycleB getDerivedFromProps")
        return null
    }
    
    componentDidMount(){
        console.log("LifecycleB Didmount")
    }

    stateChange=()=>{
        this.setState({
            count : ++this.state.count
        })
    }

    shouldComponentUpdate(){
        console.log("LifecycleB shouldComponentUpdateMethod")   
        return true
    }
   
    getSnapshotBeforeUpdate(prevProps, prevState){
           console.log("LifecycleB getSnapshotBeforeUpdate")
           return null
    }
   
    componentDidUpdate(){
           console.log("LifecycleB componentDidUpdate")
    }
       
    render() {
        console.log("LifecycleB render")
        return (
            <div>
                <h1>Parent Count {this.props.parentCount}</h1>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.props.testMethod}>Chnage STate</button>
            </div>
        )
    }
}
export default LifecycleB