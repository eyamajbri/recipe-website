import React, { useState } from 'react';
import { getNames } from 'country-list';
import axios from 'axios';

const countries = getNames();

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nationality, setNationality] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email,
      firstName,
      lastName,
      nationality,
      password,
    };
    try {
      const response = await axios.post('http://localhost:8000/users', formData);
      if (response.status === 201) {
        // User was successfully saved
        // Reset form fields
        setEmail('');
        setFirstName('');
        setLastName('');
        setNationality('');
        setPassword('');
      } else {
        // Handle error response
      }
    } catch (error) {
      // Handle fetch or server connection error
    }
  };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label>First Name:</label>
      <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />

      <label>Last Name:</label>
      <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />

      <label>Nationality:</label>
      <select value={nationality} name="nationality" onChange={handleNationalityChange} required>
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      <label>Password:</label>
      <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUp;
