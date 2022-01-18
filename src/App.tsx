import React, {useState, useEffect} from 'react';
import './App.css';
import ListUser from './components/list-user/index';
import {IUser} from "./components/types/types";

const  App = () =>  {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(()=> {
    getUsers();
  }, [])

  async function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json(); 
    })
    .then(data => {
      setUsers(data);
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  return (
    <div className="App">
      <ListUser users={users} /> 
    </div>
  );
}

export default App;
