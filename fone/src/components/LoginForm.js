// LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function LoginForm() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', formData);
      localStorage.setItem('token', res.data.token);
      if (res.data.role === 'admin') {
        navigate('/dashboard');
      } else {
        console.log('Navigated to home');
        navigate('/home');
      }
      alert('Successfully logged in!');
    } catch (error) {
      alert('Invalid username or password');
    }
  };
  
  
  

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>User Name :- </label>
        <br/>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        <br/>
        <br/>
        <label>User password :- </label>
        <br/>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <br/>
        <br/>
        <button type="submit">Login</button>
        <p>Not yet Registered!! <Link to="/registerform">Register Here</Link>    </p>
      </form>
    </div>
  );
}

export default LoginForm;
