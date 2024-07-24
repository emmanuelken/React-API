import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUser(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>User List</h1>
      <ul>
        {listOfUser.map(user => (
          <li key={user.id} style={{ margin: '10px 0', listStyleType: 'none', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <strong>{user.name}</strong> <br />
            <span>{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
