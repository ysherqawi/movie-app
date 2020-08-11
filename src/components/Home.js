import React, { Fragment } from 'react';
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThump from './elements/MovieThump';
import Spinner from './elements/Spinner';
import LoadMoreBtn from './elements/LoadMoreBtn';
import { useHomeFetch } from './hooks/useHomeFetch';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../config/config';

const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();
  console.log(state);

  if (error) return <div>Somthing went wrong...</div>;
  if (!state.movies[0]) return <Spinner />;

  return (
    <Fragment>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
        title={state.heroImage.original_title}
        text={state.heroImage.overview}
      />
      <SearchBar />
      <Grid />
      <MovieThump />
      <Spinner />
      <LoadMoreBtn />
    </Fragment>
  );
};

export default Home;
