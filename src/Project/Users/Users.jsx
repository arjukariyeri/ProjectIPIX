import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Users.css'; 

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/users');
        setUsers(response.data); 
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="all-users-title"><span>USERS</span></h1><br /><br />
      <div className="user-grid">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <div className="user-avatar">
              <img src={user.avatar} alt={user.name} />
            </div>
            <h3 className="user-name">{user.name}</h3>
            <p className="user-email"><b>Email:</b> {user.email}</p>
            <p className="user-password"><b>Password:</b> {user.password}</p>
            <p className="user-role"><b>Role:</b> {user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
