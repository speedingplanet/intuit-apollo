import { gql } from '@apollo/client';

export const GET_RAIDERS = gql`
  query GetRaiders {
    Movie(id: 1) {
      title
      year
      rating
    }
  }
`;

export const GET_MOVIES_BY_YEAR = gql`
  query GetMoviesByYear($year: Int) {
    allMovies(filter: { year: $year }) {
      title
      year
      rating
      id
    }
  }
`;
