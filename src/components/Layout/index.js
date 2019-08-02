import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Wrapper } from './styles';

const Layout = ({ children, title }) => (
  <Fragment>
    <Helmet>
      { title && <title>Petgram - {title}</title> }
    </Helmet>
    <Wrapper>
      { children }
    </Wrapper>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default Layout;
