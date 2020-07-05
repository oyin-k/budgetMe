import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, type, className, disabled, onClick }) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.protoTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.element,
};

export default Button;
