import React from 'react';
import PropTypes from 'prop-types';
import MovieThumb from './MovieThumb';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config/config';
import NoImage from '../images/no_image.jpg';
import { StyledMovieInfo } from './../styles/StyledMovieInfo';

const MovieInfo = ({ movie }) => (
  <StyledMovieInfo backdrop={movie.backdrop_path}>
    <div className='movieinfo-content'>
      <div className='movieinfo-thumb'>
        <MovieThumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
          alt='moviethumb'
        />
      </div>
      <div className='movieinfo-text'>
        <h1>{movie.title}</h1>
        <h3>PLOT</h3>
        <p>{movie.overview}</p>

        <div className='rating-director '>
          <div>
            <h3>IMDB RATING</h3>
            <div className='score'>{movie.vote_average}</div>
          </div>
          <div className='director'>
            <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
            {movie.directors.map((director) => (
              <p key={director.credit_id}>{director.name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </StyledMovieInfo>
);

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieInfo;
