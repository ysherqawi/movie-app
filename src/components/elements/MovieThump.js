import React from 'react';
import { StyledMovieThumb } from './../styles/StyledMovieThumb';

const MovieThump = ({ movieId, image, clickable }) => (
  <StyledMovieThumb>
    {clickable ? (
      <img src={image} className='clickable' alt='moviethumb' />
    ) : (
      <img src={image} alt='moviethump' />
    )}
  </StyledMovieThumb>
);

export default MovieThump;
