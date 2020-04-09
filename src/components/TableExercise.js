import React, { Component } from 'react'
// import TableChild from './TableChild'

export default class TableExercise extends Component {
    constructor(props) {
        super(props)
        this.state = {
             id:0,
             firstName:'',
             lastName:'',
             isUpdate:false,
             temp:0,
             user:[]
        }
    }
    
    getFirstName = (event)=>{
        this.setState({
            firstName:event.target.value
        })
    }

    getLastName = (event)=>{
        this.setState({
            lastName:event.target.value
        })
    }

    addValue = ()=>{
        let newEle={
            id: ++this.state.id,
            firstName:this.state.firstName,
            lastName:this.state.lastName
        };
        this.setState({
            user:[...this.state.user,newEle],
            firstName:'',
            lastName:''
        })
    }
    
    editName = (id)=>{
        let user = this.state.user
        user.forEach(element => {
            if(element.id===id){
                this.setState({
                    firstName:element.firstName,
                    lastName:element.lastName,
                    isUpdate:true,
                    temp:id
                })
            }    
        });
    }

    deleteName=(id)=>{
        let userNew = this.state.user
        userNew.forEach((element,index)=>{
            if(element.id===id){
                userNew.splice(index,1)
            }
            this.setState({
                user:userNew
            })
        })
    }

    updateValue=()=>{
        let userNew = this.state.user
        userNew.forEach(element=>{
            if(element.id===this.state.temp){
                element.firstName = this.state.firstName
                element.lastName = this.state.lastName
            }
            this.setState({
                user:userNew,
                temp:0,
                isUpdate:false,
                firstName:'',
                lastName:''
            })
        })
    }

    render() {
        return (
                !this.state.isUpdate ?
                <div>
                <div>
                    <input type="text" value={this.state.firstName} onChange={this.getFirstName} placeholder="Enter FirstName" />
                    <input type="text" value={this.state.lastName} onChange={this.getLastName} placeholder="Enter LastName" />
                    <button onClick={this.addValue}>ADD</button>   
                </div>
                <div>
                    {
                        this.state.user.map(user=><li key={user.id} style={{listStyleType:"none"}}> {user.firstName} {user.lastName} <button onClick={()=>this.editName(user.id)}>EDIT</button> <button onClick={()=>this.deleteName(user.id)}>DELETE</button></li>)
                    }
                </div>
                </div> :
                <div>
                <div>
                    <input type="text" value={this.state.firstName} onChange={this.getFirstName} placeholder="Enter FirstName" />
                    <input type="text" value={this.state.lastName} onChange={this.getLastName} placeholder="Enter LastName" />
                    <button onClick={this.updateValue}>Update</button>   
                </div>
                <div>
                    {
                        this.state.user.map(user=><li key={user.id} style={{listStyleType:"none"}}> {user.firstName} {user.lastName} <button onClick={()=>this.editName(user.id)}>EDIT</button> <button onClick={()=>this.deleteName(user.id)}>DELETE</button></li>)
                    }
                </div>
                </div> 
            ) 
    }
}
