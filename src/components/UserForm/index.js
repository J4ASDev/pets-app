import React, { Fragment } from 'react';
import { Title, Form, Input, Error } from './styles';
import PropTypes from 'prop-types';
import useInputValue from '../../hooks/useInputValue';
import SubmitButton from '../SubmitButton';

const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <Fragment>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input placeholder='Email' {...email} disabled={disabled} />
        <Input placeholder='Password' type='password' {...password} disabled={disabled} />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      { error && <Error>{error}</Error> }
    </Fragment>
  );
};

UserForm.propTypes = {
  error: PropTypes.string,
  disabled: PropTypes.bool,
  onSubmit: PropTypes.func,
  title: PropTypes.string
};

export default UserForm;
