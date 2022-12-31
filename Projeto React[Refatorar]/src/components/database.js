

const addUser = (user) => {
    database.users.push(user);
  }
  
  const updateUser = (id, updatedUser) => {
    const index = database.users.findIndex(user => user.id === id);
    database.users[index] = updatedUser;
  }
  
  const deleteUser = (id) => {
    const index = database.users.findIndex(user => user.id === id);
    database.users.splice(index, 1);
  }
  
  export { addUser, updateUser, deleteUser };
  