import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ type, backgroundColor, size, label, elevation, ...props }) => {
  return (
    <button
      type="button"
      className={[
        'sileui', 
        `sileui--${size}`, 
        "sileui--" + type, 
        elevation ? "elevation" : ""
      ].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['s', 'm', 'l']),
  elevation: PropTypes.bool,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "primary",
  size: 'm',
  elevation: true,
  backgroundColor: null,
  onClick: undefined,
};
