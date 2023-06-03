import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/Profil');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    try {
      const response = await axios.post('http://localhost:8000/login', formData);
      if (response.status === 200) {
        // Successful login
        alert('Login successful');
        const { token, userData } = response.data;
        localStorage.setItem('token', token);
        setUserData(userData);
        console.log(userData);
        console.log(userData.photo);
        // Reset form fields
        setEmail('');
        setPassword('');
  
        // Store the name in localStorage
        localStorage.setItem('name', userData.firstName);
        localStorage.setItem('last', userData.lastName);
        localStorage.setItem('email', userData.email);
        localStorage.setItem('photo', userData.photo);

  
        navigate('/Profil', { state: { userData } });
      } else {
        // Handle error response
        alert('Login failed');
      }
    } catch (error) {
      // Handle fetch or server connection error
      alert('An error occurred: ' + error.message);
    }
  };
  
  


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
