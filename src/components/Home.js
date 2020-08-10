import React, { Fragment } from 'react';
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThump from './elements/MovieThump';
import Spinner from './elements/Spinner';
import LoadMoreBtn from './elements/LoadMoreBtn';

const Home = () => {
  return (
    <Fragment>
      <HeroImage />
      <SearchBar />
      <Grid />
      <MovieThump />
      <Spinner />
      <LoadMoreBtn />
    </Fragment>
  );
};

export default Home;
