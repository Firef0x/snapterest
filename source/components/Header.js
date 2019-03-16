/**
 * Created by F on 2017/4/21.
 */
import PropTypes from 'prop-types';
import React from 'react';

const headerStyle = {
  fontSize: '16px',
  fontWeight: '300',
  display: 'inline-block',
  margin: '20px 10px'
};

const Header = ({ text }) => (
  <h2 style={headerStyle}>{text}</h2>
);

Header.propTypes = {
  text: PropTypes.string
};

Header.defaultProps = {
  text: '默认标题'
};

export default Header;
