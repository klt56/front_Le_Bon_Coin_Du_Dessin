import React, { useState } from 'react';

function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e) => {
e.preventDefault();

alert(`Vous êtes connecté!`);
window.location.href = '/'; // Rediriger l'utilisateur vers la page d'accueil
};

return (
<section className="form-section">
<div className="form-box">
<div className="form-value">
<form onSubmit={handleSubmit}>
<div className="inputbox">
<input placeholder="email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
</div>
<div className="inputbox">
          
          <input placeholder="password" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>

        <div className="checkbox-container">
          <input className="inputbox__label" type="checkbox" id="remember" />
          <label htmlFor="remember">Se souvenir de moi</label>
        </div>

        <button className="form__button" type="submit">Se connecter</button>

        
        <div className="success-message">Vous êtes connecté avec succès!</div>
      </form>
    </div>
  </div>
</section>
);
}

export default Login;