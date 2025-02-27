import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledNavigation } from './../styles/StyledNavigation';

const Navigation = ({ movie }) => (
  <StyledNavigation>
    <div className='navigation-content'>
      <Link to='/'>
        <p>Home</p>
      </Link>
      <p>|</p>
      <p>{movie}</p>
    </div>
  </StyledNavigation>
);

Navigation.propTypes = {
  movie: PropTypes.string.isRequired,
};

export default Navigation;
