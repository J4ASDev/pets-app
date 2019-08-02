import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return sessionStorage.getItem('token');
  });

  const value = {
    isAuth,
    activateAuth: token => {
      setIsAuth(true);
      sessionStorage.setItem('token', token);
    },
    removeAuth: () => {
      setIsAuth(false);
      sessionStorage.removeItem('token');
    }
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node
};

export default {
  Provider,
  Consumer: Context.Consumer
};
