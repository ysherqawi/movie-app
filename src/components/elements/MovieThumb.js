import React from 'react';
import { StyledMovieThumb } from '../styles/StyledMovieThumb';
import { Link } from 'react-router-dom';

const MovieThumb = ({ movieId, image, clickable }) => (
  <StyledMovieThumb>
    {clickable ? (
      <Link to={`movies/${movieId}`}>
        <img src={image} className='clickable' alt='moviethumb' />
      </Link>
    ) : (
      <img src={image} alt='moviethumb' />
    )}
  </StyledMovieThumb>
);

export default MovieThumb;
