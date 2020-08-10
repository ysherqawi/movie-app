import React, { Fragment } from 'react';
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThump from './elements/MovieThump';
import Spinner from './elements/Spinner';
import LoadMoreBtn from './elements/LoadMoreBtn';
import { useHomeFetch } from './hooks/useHomeFetch';

const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();
  console.log(state);
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
