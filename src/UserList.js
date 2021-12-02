import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './style.css'

function UserList() {
  const [listOfUser, setListOfUser] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      console.log(res)
      setListOfUser(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div >
      <ul className="users">
        {
          listOfUser.map(listOfUser => (
            <div >
            <h3>{listOfUser.name}</h3>
            <h3>{listOfUser.username}</h3>
            <h3>{listOfUser.email}</h3>
            </div>
          ))
        }
      </ul>
    </div>
  )
}

export default UserList
