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
  const [photo, setPhoto] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('email', email);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('nationality', nationality);
    formData.append('password', password);
    formData.append('profile', photo);
  
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
        setPhoto(null);
      } else {
        // Handle error response
      }
    } catch (error) {
      // Handle fetch or server connection error
    }
    console.log(photo)
  };
  

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };
  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" >
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

      <div className="form-control">
          <label>Product Image</label>
          <input
            type="file"
            className="form-control"
            name="profile"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUp;
