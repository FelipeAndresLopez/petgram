import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './styles';

export const SubmitButton = ({ children, disabled, onClick }) => (
  <Button onClick={onClick} disabled={disabled}>
    {children}
  </Button>
);

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};
