import React from 'react';
import PropTypes from 'prop-types';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config/config';
import NoImage from '../images/no_image.jpg';
import { StyledActor } from './../styles/StyledActor';

const Actor = ({ actor }) => (
  <StyledActor>
    <img
      src={
        actor.profile_path
          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
          : NoImage
      }
      alt='actorthumb'
    />
    <span className='actor-name'>{actor.name}</span>
    <span className='actor-character'>{actor.character}</span>
  </StyledActor>
);

Actor.propTypes = {
  actor: PropTypes.object.isRequired,
};

export default Actor;
