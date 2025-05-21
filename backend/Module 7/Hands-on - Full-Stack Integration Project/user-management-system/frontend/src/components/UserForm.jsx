import React, { useState, useEffect } from 'react';

const UserForm = ({ onSubmit, selectedUser }) => {
  const [form, setForm] = useState({ name: '', email: '', role: '' });

  useEffect(() => {
    if (selectedUser) setForm(selectedUser);
  }, [selectedUser]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: '', email: '', role: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input name="role" value={form.role} onChange={handleChange} placeholder="Role" />
      <button type="submit">{selectedUser ? 'Update' : 'Add'} User</button>
    </form>
  );
};

export default UserForm;
