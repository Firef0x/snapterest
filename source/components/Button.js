/**
 * Created by F on 2017/4/28.
 */
import PropTypes from 'prop-types';
import React from 'react';

const buttonStyle = {
  margin: '10px 10px 10px 0'
};

const Button = ({ handleClick, label }) => (
  <button
    className="btn btn-default"
    style={buttonStyle}
    type="button"
    onClick={handleClick}
  >
    {label}
  </button>
);

Button.propTypes = {
  handleClick: PropTypes.func,
  label: PropTypes.string.isRequired
};

export default Button;
