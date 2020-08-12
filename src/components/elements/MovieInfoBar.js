import React from 'react';
import FontAwesome from 'react-fontawesome';
import { StyledMovieInfoBar } from './../styles/StyledMovieInfoBar';
import { calcTime, convertMoney } from '../../utils/helpers';

const MovieInfoBar = ({ time, budget, revenue }) => (
  <StyledMovieInfoBar>
    <div className='movieinfobar-content'>
      <div className='movieinfobar-content-col'>
        <FontAwesome className='fa-time' name='clock-o' size='2x' />
        <span className='movieinfobar-info'>
          Running time: {calcTime(time)}
        </span>
      </div>

      <div className='movieinfobar-content-col'>
        <FontAwesome className='fa-budget' name='money' size='2x' />
        <span className='movieinfobar-info'>
          Budget: {budget === 0 ? 'Unknown' : convertMoney(budget)}
        </span>
      </div>

      <div className='movieinfobar-content-col'>
        <FontAwesome className='fa-revenue' name='ticket' size='2x' />
        <span className='movieinfobar-info'>
          Revenue: {revenue === 0 ? 'Unknown' : convertMoney(revenue)}
        </span>
      </div>
    </div>
  </StyledMovieInfoBar>
);

export default MovieInfoBar;
