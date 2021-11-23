import React from 'react'
import {map, isEmpty} from "lodash"
import "./ListUsers.scss"
import User from "./User"
export default function ListUsers(props) {
    const {users} = props;

    if(isEmpty(users)){
        return <h2>No hay resultados</h2>
    }
    return (
        <div className="listuser">
       <ul className="list-users">
           {map(users, user =>(
              <User key={user.id} user={user}/>
           ))}
       </ul>
        </div>
    )
}
