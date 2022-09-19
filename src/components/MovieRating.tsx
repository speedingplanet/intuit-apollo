import React from 'react';

type Props = { rating: number };

const MovieRating = ({ rating }: Props) => {
  return <span>{'⭐'.repeat(rating)}</span>;
};

export default MovieRating;
