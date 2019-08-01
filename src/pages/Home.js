import React, { Fragment } from 'react';
import ListOfCategories from '../components/ListOfCategories';
import ListOfPhotoCards from '../containers/ListOfPhotoCards';

const Home = ({ id }) => (
  <Fragment>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={id} />
  </Fragment>
);

export default Home;
