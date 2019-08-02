import React from 'react';
import { Button } from './styles';
import PropTypes from 'prop-types';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;
  
  return (
    <Button onClick={onClick}>
      <Icon size='32px' /> {likes} likes
    </Button>
  );
};

FavButton.propTypes = {
  liked: PropTypes.bool,
  likes: PropTypes.number,
  onClick: PropTypes.func
};

export default FavButton;
