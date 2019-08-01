import React, { Fragment } from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import Context from './Context';

import { Router } from '@reach/router';

import Logo from './components/Logo';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Favs from './pages/Favs';
import User from './pages/User';
import NotRegisterUser from './pages/NotRegisterUser';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>

        <Context.Consumer>
          {
            ({ isAuth }) =>
              isAuth
              ? <Router>
                  <Favs path='/favs' />
                  <User path='/user' />
                </Router>
              : <Router>
                  <NotRegisterUser path='/favs' />
                  <NotRegisterUser path='/user' />
                </Router>
          }
        </Context.Consumer>
      <NavBar />
    </Fragment>
  );
};

export default App;
