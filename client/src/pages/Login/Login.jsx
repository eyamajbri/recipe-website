import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    try {
      const response = await axios.post('http://localhost:8000/login', formData);
      console.log(response.data);
      if (response.status === 200) {
        // Successful login
        alert('Login successful');
        const { token, userData } = response.data;
        localStorage.setItem('token', token);
        setUserData(userData);
        console.log(userData);
        // Reset form fields
        setEmail('');
        setPassword('');
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
      {userData && (
        <div>
          <h2>User Data:</h2>
          <p>firstame: {userData.firstName}</p>
          <p> lastname:{userData.lastName} </p>
          <p> email: {userData.email} </p>
        </div>
      )}
    </div>
  );
};

export default Login;
