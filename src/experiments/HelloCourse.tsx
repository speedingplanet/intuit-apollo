import React from 'react';
import { gql, useQuery } from '@apollo/client';

// gql(StringArgument) -> GraphQL Query
const getFirstCourse = gql`
  query GetFirstCourse {
    Course(id: 1) {
      courseTitle
      courseDescription
      credits
    }
  }
`;

type Props = {};

const HelloCourse = (props: Props) => {
  // const results = useQuery(getFirstCourse);

  // loading -> true if we're waiting on a request
  // error -> truthy if there's an error (and it's the error)
  // data -> The results we want
  const { loading, error, data } = useQuery(getFirstCourse);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {error.message}</p>;

  const {
    Course: { courseTitle, courseDescription, credits },
  } = data;

  return (
    <ul>
      <li>{courseTitle}</li>
      <li>{courseDescription}</li>
      <li>{credits}</li>
    </ul>
  );
};

export default HelloCourse;
