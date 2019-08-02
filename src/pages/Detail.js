import React from 'react';
import PropTypes from 'prop-types';
import PhotoCardWithQuery from '../containers/PhotoCardWithQuery';
import Layout from '../components/Layout';

const Detail = ({ detailId }) => (
  <Layout title='Detail'>
    <PhotoCardWithQuery id={detailId} />
  </Layout>
);

Detail.propTypes = {
  detailId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default Detail;
