import React from 'react';
import './App.css';
import UserList from './UserList';
import {VscFoldDown} from 'react-icons/vsc'

function App() {

  return (
    <>
      <h1>User Info <br/><VscFoldDown/> </h1>
      
      <div className='App'>
      <UserList/>
      </div>
      
    </>
  );
}

export default App;
