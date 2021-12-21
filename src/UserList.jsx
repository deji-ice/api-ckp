import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'


function UserList() {
    const[userList, setUserList] = useState([])

    useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res =>{console.log(res)
            setUserList(res.data)
            })
            .catch(err=> {console.log(err)})
    },[])

    return (
        <div>
            <ul>
                {
                    userList.map(userList => <li key={userList.id}> <b>Name: </b> {userList.name} <br/> 
                    <b>UserName: </b>{userList.username} <br/> 
                    <b>Email: </b>{userList.email} </li>)
                }
            </ul>
        </div>
    )
}

export default UserList
