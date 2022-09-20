import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Student } from '../types';

const getAllStudentsSorted = gql`
  query GetAllStudentsSorted($sortField: String, $sortOrder: String) {
    students(sortField: $sortField, sortOrder: $sortOrder) {
      firstName
      lastName
      city
      province
      country
      id
    }
  }
`;

const getAllStudents = gql`
  query GetAllStudents {
    students {
      firstName
      lastName
      city
      province
      country
      id
    }
  }
`;

enum SortDirection {
  asc = 'asc',
  desc = 'desc',
}

type SortConfig = {
  sortField: string;
  sortDirection: SortDirection;
};

type RowClickHandler = {
  selectRow?: (studentId: number) => void;
};
type StudentsTableProps = SortConfig & RowClickHandler;

const DisplaySortedStudentsList = ({ sortField, sortDirection, selectRow }: StudentsTableProps) => {
  const { loading, error, data } = useQuery(getAllStudents, {
    variables: { sortField, sortOrder: sortDirection },
  });

  const handleRowClick = (studentId: number) => {
    selectRow && selectRow(studentId);
  };

  if (loading)
    return (
      <tbody>
        <tr>
          <td colSpan={5}>Loading...</td>
        </tr>
      </tbody>
    );
  if (error)
    return (
      <tbody>
        <tr>
          <td colSpan={5}>Something went wrong: {error.message}</td>
        </tr>
      </tbody>
    );

  return (
    <tbody>
      {data.students.map((student: Student) => {
        return (
          <tr
            key={student.id}
            onClick={() => handleRowClick(student.id)}
            style={{ cursor: 'pointer' }}>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.city}</td>
            <td>{student.province}</td>
            <td>{student.country}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export const LabTwo = ({ selectRow }: RowClickHandler) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    sortField: '',
    sortDirection: SortDirection.asc,
  });

  const handleHeaderClick = (columnName: string) => {
    let sortDirection = SortDirection.asc;
    if (columnName === sortConfig.sortField && sortConfig.sortDirection === SortDirection.asc) {
      sortDirection = SortDirection.desc;
    }

    setSortConfig({ sortDirection, sortField: columnName });
  };

  return (
    <>
      <h3>Lab Two</h3>
      <table className="table table-striped">
        <thead>
          <tr style={{ cursor: 'pointer' }}>
            <th onClick={() => handleHeaderClick('firstName')}>First Name</th>
            <th onClick={() => handleHeaderClick('lastName')}>Last Name</th>
            <th onClick={() => handleHeaderClick('city')}>City</th>
            <th onClick={() => handleHeaderClick('province')}>Province</th>
            <th onClick={() => handleHeaderClick('country')}>Country</th>
          </tr>
        </thead>
        <DisplaySortedStudentsList {...sortConfig} selectRow={selectRow} />
      </table>
    </>
  );
};

export default LabTwo;
