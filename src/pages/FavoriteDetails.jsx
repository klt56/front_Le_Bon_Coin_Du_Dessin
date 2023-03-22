import React from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../components/Card/Data';

const FavoriteDetails = () => {
  const { id } = useParams();
  const artwork = db.find(artwork => artwork.id === parseInt(id));

  return (
    <div>
      <h1>{artwork.title}</h1>
      <p>{artwork.description}</p>
      <p>{artwork.price}</p>
    </div>
  );
};

export default FavoriteDetails;
