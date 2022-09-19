import { useState, useRef, useEffect } from 'react';
import { gql, NetworkStatus, QueryHookOptions, useQuery } from '@apollo/client';
import { Movie } from '../types';
import MovieRating from '../components/MovieRating';

type StateProps = {
  year: number;
  doPolling?: boolean;
  doRefetch?: boolean;
};

type BaseArgs = {};

const GET_MOVIES_BY_YEAR = gql`
  query GetMoviesByYear($year: Int) {
    allMovies(filter: { year: $year }) {
      title
      year
      rating
      id
    }
  }
`;

const QueryByYear = () => {
  let yearRef = useRef<HTMLInputElement>(null);
  const [config, setConfig] = useState({ year: 0 });

  const handleClick = (pollingRefetch?: Omit<StateProps, 'year'>) => {
    let nextConfig: StateProps = { year: 0 };
    if (yearRef.current !== null) {
      nextConfig.year = Number(yearRef.current.value);
    }

    if (pollingRefetch?.doPolling) {
      nextConfig.doPolling = true;
    } else if (pollingRefetch?.doRefetch) {
      nextConfig.doRefetch = true;
    }

    setConfig(nextConfig);
  };

  return (
    <>
      <h3>Query by year with caching</h3>
      <div className="row">
        <div className="col">
          <div>
            <label htmlFor="query-year" className="form-label">
              Movie Year
            </label>
            <input type="number" className="form-control" id="query-year" ref={yearRef} />
          </div>
          <div className="mt-2">
            <button className="btn btn-primary" onClick={() => handleClick()}>
              Search
            </button>
            &nbsp;
            <button className="btn btn-primary" onClick={() => handleClick({ doPolling: true })}>
              Search w/Polling
            </button>
            &nbsp;
            <button className="btn btn-primary" onClick={() => handleClick({ doRefetch: true })}>
              Search w/Refetch
            </button>
          </div>
        </div>
        <div className="col">
          <h3>Results</h3>
          {config.year ? <MovieByYearResults {...config} /> : null}
        </div>
      </div>
    </>
  );
};

const MovieByYearResults = ({ year, doPolling, doRefetch }: StateProps) => {
  const { loading, error, data, startPolling, stopPolling, refetch, networkStatus } = useQuery(
    GET_MOVIES_BY_YEAR,
    { variables: { year } }
  );

  useEffect(() => {
    if (doPolling) {
      startPolling(500);
      // Stops polling when we exit this rendering of this component
      return stopPolling;
    } else if (doRefetch) {
      refetch({ year }); // Otherwise runs last fetch, which may not be what we want?
    }
  });

  // Shows up if you're in refetch status, difficult when client and server are on the same machine!
  if (networkStatus === NetworkStatus.refetch) {
    console.log('Refetching!');
    return <p>Refetching</p>;
  }
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <ul>
      {data.allMovies.map((movie: Movie) => (
        <li key={movie.id}>
          {movie.title} ({movie.year}) <MovieRating rating={movie.rating} />
        </li>
      ))}
    </ul>
  );
};

export default QueryByYear;
