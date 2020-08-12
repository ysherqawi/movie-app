import React from 'react';
import Navigation from './elements/Navigation';
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Actor from './elements/Actor';
import Grid from './elements/Grid';
import Spinner from './elements/Spinner';
import { useMovieFetch } from './hooks/useMovieFetch';

const Movie = ({ match }) => {
  const [movie, loading, error] = useMovieFetch(match.params.id);

  if (error) return <div>Something went wrong ...</div>;
  if (loading) return <Spinner />;

  return (
    <>
      <Navigation movie={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      {movie.actors && (
        <Grid header='Actors'>
          {movie.actors.map((actor, i) => (
            <Actor key={actor.credit_id} actor={actor} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default Movie;
