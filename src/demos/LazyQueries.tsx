import { useState, useRef } from 'react';
import { useLazyQuery } from '@apollo/client';
import { Movie } from '../types';
import MovieRating from '../components/MovieRating';
import { GET_MOVIES_BY_YEAR } from './queries';

const LazyQueries = () => {
  let yearRef = useRef<HTMLInputElement>(null);
  // const [year, setYear] = useState(0);
  const [getMovies, { loading, error, data }] = useLazyQuery(GET_MOVIES_BY_YEAR);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  const handleClick = () => {
    if (yearRef.current !== null) {
      getMovies({ variables: { year: Number(yearRef.current.value) } });
    }
  };

  return (
    <>
      <h3>Lazy Queries</h3>
      <div className="row">
        <div className="col">
          <div>
            <label htmlFor="query-year" className="form-label">
              Movie Year
            </label>
            <input type="number" className="form-control" id="query-year" ref={yearRef} />
          </div>
          <div className="mt-2">
            <button className="btn btn-primary" onClick={handleClick}>
              Search
            </button>
          </div>
        </div>
        <div className="col">
          <h3>Results</h3>
          {data?.allMovies ? (
            <ul>
              {data.allMovies.map((movie: Movie) => (
                <li key={movie.id}>
                  {movie.title} ({movie.year}) <MovieRating rating={movie.rating} />
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default LazyQueries;
