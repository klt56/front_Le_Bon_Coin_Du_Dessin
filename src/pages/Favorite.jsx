import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      {favorites.map((artwork) => {
  if (artwork && artwork.swiped === 'right') {
    return (
      <Link to={`/favorites/${artwork.id}`} key={artwork.id}>
                <div
                  style={{ backgroundImage: 'url(' + artwork.url + ')' }}
                  className='card'
                  key={artwork.name}>
                  <h3>{artwork.name}</h3>
                  <button>Voir plus</button>
                </div>
              </Link>
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
