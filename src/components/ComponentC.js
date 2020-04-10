import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export default class ComponentC extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    ({count, incrementCounter}) => {
                        return <> 
                            <h1>Count:{count}</h1> 
                            <button onClick={incrementCounter}>Increment Counter</button>
                            </>
                    }
                }
            </UserConsumer>
        )
    }
}
