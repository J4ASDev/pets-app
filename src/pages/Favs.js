import React from 'react';
import FavsWithQuery from '../containers/GetFavorites';
import Layout from '../components/Layout';

const Favs = () => (
  <Layout title='Favorites'>
    <FavsWithQuery />
  </Layout>
);

export default Favs;
