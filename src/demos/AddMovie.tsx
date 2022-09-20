import { gql, useMutation } from '@apollo/client';
import React, { FormEventHandler } from 'react';
import BootstrapInput from '../components/BootstrapInput';
import { Movie } from '../types';

const ADD_MOVIE = gql`
  mutation AddMovie($movie: MovieInput) {
    createManyMovie(data: [$movie]) {
      id
      title
      year
      director
      writer
      rating
      genres
    }
  }
`;

type MovieInput = Partial<Movie>;
type MovieKey = keyof MovieInput;

const AddMovie = () => {
  const [addMovie, { loading, error, data }] = useMutation(ADD_MOVIE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {error.message}</p>;

  let movie = data?.createManyMovie[0] as Movie;

  const handleAddMovie = (data: FormData) => {
    let movie: MovieInput = {};
    for (let entry of data.entries()) {
      let key = entry[0] as MovieKey;
      let value = entry[1];
      if (value instanceof File) continue; // No way this triggers
      // writers, and genres
      // TypeScript doesn't know the [v1, v2].includes() trick as a type guard
      if (key === 'writer' || key === 'genres') {
        movie[key] = value.split(/,\s*/);
      } else if (key === 'year' || key === 'rating') {
        movie[key] = Number(value);
      } else if (key !== 'id') {
        movie[key] = value;
      }
    }

    addMovie({ variables: { movie } });
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <AddMovieForm addMovie={handleAddMovie} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>{movie ? `${movie.title} added with id ${movie.id}` : ''}</p>
        </div>
      </div>
    </>
  );
};

const AddMovieForm = ({ addMovie }: { addMovie: (data: FormData) => void }) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    addMovie(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <BootstrapInput className="mb-2" id="title" name="title" label="Title" type="text" />
      <BootstrapInput className="mb-2" id="year" name="year" label="Year" type="number" />
      <BootstrapInput className="mb-2" id="rating" name="rating" label="Rating" type="number" />
      <BootstrapInput className="mb-2" id="director" name="director" label="Director" type="text" />
      <BootstrapInput className="mb-2" id="writer" name="writer" label="Writer(s)" type="text" />
      <BootstrapInput className="mb-2" id="genres" name="genres" label="Genres" type="text" />
      <div>
        <button className="btn btn-primary" type="submit">
          Add Movie
        </button>
      </div>
    </form>
  );
};

export default AddMovie;
