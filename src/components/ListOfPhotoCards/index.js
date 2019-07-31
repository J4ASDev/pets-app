import React from 'react';
import PhotoCard from '../PhotoCard';

const ListOfPhotoCards = () => (
  <ul>
      {[1, 2, 3].map(index => <li key={index}><PhotoCard /></li>)}
  </ul>
);

export default ListOfPhotoCards;
