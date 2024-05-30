import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function RegisterForm() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users/register', formData);
      alert('Registration successful!');
      navigate('/loginform'); 
    } catch (error) {
      alert('Error registering user');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>User Name :- </label>
        <br />
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        <br />
        <br />
        <label>User Password :- </label>
        <br />
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <br />
        <br />
        <button type="submit">Register</button>
        <p>
          Already a customer!! <Link to="/loginform">Login Here</Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
