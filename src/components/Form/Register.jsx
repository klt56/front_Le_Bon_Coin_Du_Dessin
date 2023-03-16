import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://starfish-app-3xk6j.ondigitalocean.app/users/', {
        user: {
          first_name: firstName,
          email: email,
          password: password
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="form-section">
<div className="form-box">
<div className="form-value">
    <form onSubmit={handleSubmit}>
      <div className='inputbox'>
        
        <input
        placeholder="firstname"
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          placeholder="email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        
        <input
        placeholder="password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign Up</button>
      
        <div className="success-message">Vous êtes connecté avec succès!</div>
    </form>
    </div>
    </div>
    </section>
  );
}

export default Register;
