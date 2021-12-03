import axios from 'axios'
import SearchBox from './SearchBox';
import React, { useState, useEffect } from 'react'
import './style.css'

function UserList() {
  // const [listOfUser, setListOfUser] = useState([])
  //  const [searchField, setSearchField] = useState('')
   const [listOfUser, setListOfUser] = useState({
    users: [],
    searchField: '',
  });

  const filteredUsers = listOfUser.users.filter((user) => {
    return user.name.toLowerCase().includes(listOfUser.searchField.toLowerCase());
  });

  const onSearchChange = (e) => {
    setListOfUser({ searchField: e.target.value });
  };

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

  // const onSearchChange = (event) => {
  // setSearchField(event.target.value)
  // }

  return (
    <div >
     <SearchBox 
      searchChange={onSearchChange}
       />
      <ul className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        {
          users.map(users => (
            <div>
            <h3>{users.name}</h3>
            <h4>{users.username}</h4>
            <h5>{users.email}</h5>
            <h6>{users.address.street}</h6>
            <hr />
            </div>
          ))
        }
      </ul>
    </div>
  )
}

export default UserList
