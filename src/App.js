import './App.css';
import UserList from './UserList';
import SearchBox from './SearchBox';
import { useState } from 'react';

function App() {
  const [searchField, setSearchField] = useState('')

const onSearchChange = (event) => {
  setSearchField(event.target.value)
}

  return (
    <div class="App">
      <SearchBox 
      searchChange={onSearchChange}
       />
      <UserList />
    </div>
  );
}

export default App;
