import React, { Fragment } from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import Logo from './components/Logo';
import ListOfCategories from './components/ListOfCategories';
import ListOfPhotoCards from './components/ListOfPhotoCards';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </Fragment>
  );
};

export default App;
