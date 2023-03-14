import React, { useState, useEffect } from 'react';

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const clearLocalStorage = () => {
    localStorage.removeItem('favorites');
    setFavorites([]);
  };

  return (
    <section>
      <h1>Mes favoris</h1>
      <button onClick={clearLocalStorage}>Supprimer tous les favoris</button>
      <div className='cardContainer'>
      {favorites.map((character) => {
  if (character && character.swiped === 'right') {
    return (
      <div
        style={{ backgroundImage: 'url(' + character.url + ')' }}
        className='card'
        key={character.name}>
        <h3>{character.name}</h3>
      </div>
    );
  } else {
    return null;
  }
})}
    </div>
    </section>
  );
};

export default Favorite;
