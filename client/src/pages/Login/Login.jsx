import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);
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
        setSubmitStatus({ message: 'Recipe saved successfully', type: 'success' });

      } else {
        setSubmitStatus({ message: 'Error saving recipe', type: 'error' });

      }
    } catch (error) {
      // Handle fetch or server connection error
      alert('An error occurred: ' + error.message);
    }
  };
  
  


  return (
    <div className='log-in'>
      <div className="form-container">
        <div className="par22">
        <form onSubmit={handleSubmit}>
        <div class="box-outer">
        <h1>Log In</h1>
        <p>Welcome Back !</p>
    </div>
        <div className="form-control-sp">
        <label><b>Email:</b></label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>

        <div className="form-control-sp">
        <label><b>Password:</b></label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </div>
        {submitStatus && <div className={`alert ${submitStatus.type}`}>{submitStatus.message}</div>}

        <button type="submit">Login</button>
      </form>
        </div>
        <div className="par12"></div>
      </div>
    </div>
  );
};

export default Login;