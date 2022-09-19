import { useQuery } from '@apollo/client';
import { GET_RAIDERS } from './queries';

type Props = {};

const QueryOne = (props: Props) => {
  const { loading, error, data } = useQuery(GET_RAIDERS);

  if (loading) return <p>Loading...</p>; // Should update with a spinner
  if (error) return <p>Error! {error.message}</p>;

  const { title, year, rating } = data.Movie;

  return (
    <>
      <h3>One Query</h3>
      <ul>
        <li>Title: {title}</li>
        <li>Year: {year}</li>
        <li>Rating: {rating}</li>
      </ul>
    </>
  );
};

export default QueryOne;
