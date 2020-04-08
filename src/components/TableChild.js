import React from 'react'

export default function TableChild(props) {
    let users = [];
    users.push({
        firstName:props.firstName,
        lastName:props.lastName
    });
    return (
        <div>
            {users.map(user => <li>{user.firstName} {user.lastName} <button onClick="">EDIT</button> <button onClick="">DELETE</button></li> )}
        </div>
    )
}
