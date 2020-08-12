import React from 'react';

const Movie = ({ match }) => {
  return <div>Movie {match.params.id}</div>;
};

export default Movie;
