import React, { Component } from 'react'

class Counter extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    incraeseCount(){
        this.setState({
            count: this.state.count + 1
        })
        //console.log(this.state.count)
        // this.setState((prevState)=>({
        //     count : prevState.count+1
        // }),()=>{
        //     console.log(this.state.count)
        // })
    }
    incraeseCountByFive(){
        this.incraeseCount()
        this.incraeseCount()
        this.incraeseCount()
        this.incraeseCount()
        this.incraeseCount()
    }
    render() {
        console.log(this.state.count);
        return (
            <div>
                <div>
                    count : {this.state.count}
                </div>
                <button onClick={()=>{this.incraeseCountByFive()}}>Increase Count</button>
            </div>
        )
    }

}

export default Counter
