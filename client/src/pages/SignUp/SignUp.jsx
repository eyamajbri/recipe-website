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
  const [photo, setPhoto] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create an object with the form data
    const formData = {
      email,
      firstName,
      lastName,
      nationality,
      password,
      photo,
    };
    try {
      const response = await axios.post('/api/users', formData);
      console.log(response.data); // Handle the response data
    } catch (error) {
      console.error(error); // Handle any errors
    }
  };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label>First Name:</label>
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />

      <label>Last Name:</label>
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />

      <label>Nationality:</label>
      <select value={nationality} onChange={handleNationalityChange} required>
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

      <label>Photo:</label>
      <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUp;
