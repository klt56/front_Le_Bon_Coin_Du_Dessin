import React, { useState } from 'react';

function Login({ handleLogin }) {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e) => {
e.preventDefault();
// Vous pouvez faire votre traitement ici en utilisant les valeurs de l'e-mail et du mot de passe
// Pour cette exemple, je vais simplement rediriger l'utilisateur vers la page d'accueil
handleLogin(true); // Mettre à jour l'état pour indiquer que l'utilisateur est connecté
alert(`Vous êtes connecté!`);
window.location.href = '/'; // Rediriger l'utilisateur vers la page d'accueil
};

return (
<section className="form-section">
<div className="form-box">
<div className="form-value">
<form onSubmit={handleSubmit}>
<div className="inputbox">
<label htmlFor="email">Email</label>
<input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
</div>
<div className="inputbox">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>

        <div className="checkbox-container">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Se souvenir de moi</label>
        </div>

        <button type="submit">Se connecter</button>

        <p className="error-message">L'adresse e-mail n'est pas disponible.</p>
        <div className="success-message">Vous êtes connecté avec succès!</div>
      </form>
    </div>
  </div>
</section>
);
}

export default Login;
