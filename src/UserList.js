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
      <ul className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        {
          listOfUser.map(listOfUser => (
            <div>
            <h3>{listOfUser.name}</h3>
            <h4>{listOfUser.username}</h4>
            <h5>{listOfUser.email}</h5>
            <h6>{listOfUser.address.street}</h6>
            <hr />
            </div>
          ))
        }
      </ul>
    </div>
  )
}

export default UserList
