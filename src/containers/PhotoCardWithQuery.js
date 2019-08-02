import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from '../components/PhotoCard';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id,
      categoryId,
      src,
      likes,
      userId,
      liked
    }
  }
`;

const renderProp = ({ loading, error, data: { photo = [] } }) => {
  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error...</p>;

  return <PhotoCard {...photo} />;
};

const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    { renderProp }
  </Query>
);

PhotoCardWithQuery.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

renderProp.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  data: PropTypes.object,
  photo: PropTypes.array
};

export default PhotoCardWithQuery;
