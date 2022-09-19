import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Student } from '../types';

const getAllStudents = gql`
  query GetAllStudents {
    allStudents {
      firstName
      lastName
      city
      province
      country
    }
  }
`;

const LabOne = () => {
  const { loading, error, data } = useQuery(getAllStudents);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {error.message}</p>;

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>City</th>
          <th>Province</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {data.allStudents.map((student: Student) => {
          return (
            <tr>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.city}</td>
              <td>{student.province}</td>
              <td>{student.country}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default LabOne;
