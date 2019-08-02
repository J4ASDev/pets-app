import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard';

const ListOfPhotoCardsComponent = ({ data: { photos = [] }} = {}) => (
  <ul>{ photos.map(photo => <PhotoCard key={photo.id} {...photo} />) }</ul>
);

ListOfPhotoCardsComponent.propTypes = {
  data: PropTypes.object,
  photos: PropTypes.array,
};

export default ListOfPhotoCardsComponent;
