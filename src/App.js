import React, { Fragment } from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import Logo from './components/Logo';
import ListOfCategory from './components/ListOfCategories';
import ListOfPhotoCards from './components/ListOfPhotoCards';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Logo />
      <ListOfCategory />
      <ListOfPhotoCards />
    </Fragment>
  )
}

export default App;
