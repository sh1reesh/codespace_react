import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:5000/api/users');
    setUsers(res.data);
  };

  const handleSubmit = async (user) => {
    if (user._id) {
      await axios.put(`http://localhost:5000/api/users/${user._id}`, user);
    } else {
      await axios.post('http://localhost:5000/api/users', user);
    }
    setEditingUser(null);
    fetchUsers();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    fetchUsers();
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User Management</h2>
      <UserForm onSubmit={handleSubmit} selectedUser={editingUser} />
      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Users;
