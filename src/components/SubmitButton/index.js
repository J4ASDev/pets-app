import React from 'react';
import { Button } from './styles';
import PropTypes from 'prop-types';

const SubmitButton = ({ children, disabled, onClick }) => {
  return <Button disabled={disabled} onClick={onClick}>{ children }</Button>;
};

SubmitButton.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

export default SubmitButton;
