import { useState, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { Movie } from '../types';
import MovieRating from '../components/MovieRating';
import { GET_MOVIES_BY_YEAR } from './queries';

const QueryByYear = () => {
  let yearRef = useRef<HTMLInputElement>(null);
  const [year, setYear] = useState(0);

  const handleClick = () => {
    if (yearRef.current !== null) {
      setYear(Number(yearRef.current.value));
    }
  };

  return (
    <>
      <h3>Query by year</h3>
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
          {year ? <MovieByYearResults year={year} /> : null}
        </div>
      </div>
    </>
  );
};

interface QueryByYearData {
  allMovies: Movie[];
  // allMovies: Pick<Movie, 'title' | 'year' | 'rating' | 'id'>[];
}

interface QueryByYearVariables {
  year: number;
}

const MovieByYearResults = ({ year }: { year: number }) => {
  const { loading, error, data } = useQuery<QueryByYearData, QueryByYearVariables>(
    GET_MOVIES_BY_YEAR,
    { variables: { year } }
  );
  // const { loading, error, data } = useQuery(GET_MOVIES_BY_YEAR, { variables: { year } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <ul>
      {data?.allMovies.map((movie: Movie) => (
        <li key={movie.id}>
          {movie.title} ({movie.year}) <MovieRating rating={movie.rating} />
        </li>
      ))}
    </ul>
  );
};

export default QueryByYear;
