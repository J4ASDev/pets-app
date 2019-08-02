import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import ListOfCategories from '../components/ListOfCategories';
import ListOfPhotoCards from '../containers/ListOfPhotoCards';

const HomePage = ({ id }) => (
  <Layout title='Home'>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={id} />
  </Layout>
);

HomePage.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id;
});

export default Home;
