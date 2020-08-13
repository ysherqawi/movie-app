import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import {
  StyledSearchBar,
  StyledSearchBarContent,
} from './../styles/StyledSearchBar';

const SearchBar = ({ callback }) => {
  const [state, setstate] = useState('');
  const timeOut = useRef(null);

  const doSearch = (e) => {
    const { value } = e.target;

    clearTimeout(timeOut.current);
    setstate(value);

    timeOut.current = setTimeout(() => {
      callback(value);
    }, 500);
  };
  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
        <FontAwesome className='fa-search' name='search' size='2x' />
        <input
          type='text'
          onChange={doSearch}
          value={state}
          placeholder='Search Movie'
        />
      </StyledSearchBarContent>
    </StyledSearchBar>
  );
};

SearchBar.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default SearchBar;
