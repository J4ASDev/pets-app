import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login (input: $input)
  }
`;

const LoginMutation = ({ children }) => {
  return (
    <Mutation mutation={LOGIN}>
      {children}
    </Mutation>
  );
};

LoginMutation.propTypes = {
  children: PropTypes.func
};

export default LoginMutation;
