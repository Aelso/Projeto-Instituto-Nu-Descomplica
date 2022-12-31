import React, { useState, useEffect } from 'react';
import database from './database';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(database.users);
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;