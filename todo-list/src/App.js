import './App.css';
import AddUser from './components/AddUser';
import React, {useState} from 'react';
import UserList from './components/UsersList';

function App() {

  const [userList, setUserList] = useState([]);

  const addUserHandler = (userData) => {
    console.log(userData);
    setUserList([...userList, userData])
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>React App</p>
        <AddUser onSubmit={addUserHandler}/>
        <UserList userList={userList} />
      </header>
    </div>
  );
}

export default App;
