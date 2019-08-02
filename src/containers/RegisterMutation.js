import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup (input: $input)
  }
`;

const RegisterMutation = ({ children }) => {
  return (
    <Mutation mutation={REGISTER}>
      {children}
    </Mutation>
  );
};

RegisterMutation.propTypes = {
  children: PropTypes.func
};

export default RegisterMutation;
