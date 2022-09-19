/**
 * Base props for React components
 * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example}
 */
export declare interface AppProps {
  children?: React.ReactNode;
  // childrenElement: JSX.Element;
  style?: React.CSSProperties;
}

export interface Movie {
  id: number;
  title: string;
  year: number;
  director: string;
  writer: string[];
  rating: number;
  genres: string[];
}

export type Semester = 'Fall' | 'Winter' | 'Spring' | 'Summer';

export interface Movies {
  id: number;
  title: string;
  year: number;
  director: string | string[];
  writer: string | string[];
  rating: number;
  genres: string | string[];
}

export interface Class {
  seats: number;
  semester: Semester;
  courseId: number;
  instructorId: number;
  roomId: number;
  id: number;
}

export interface Course {
  courseTitle: string;
  courseDescription: string;
  credits: number;
  duration: number;
  departmentId: number;
  id: number;
}

export interface Department {
  departmentName: string;
  id: number;
}

export interface Instructor {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  city: string;
  province: string;
  country: string;
  postalCode: string;
  departmentId: number;
  id: number;
}

export interface Registration {
  registrationDate: string;
  registrationStatus: string;
  studentId: number;
  classId: number;
  id: number;
}

export interface Room {
  roomCapacity: number;
  building: string;
  id: number;
}

export interface Student {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  city: string;
  province: string;
  country: string;
  postalCode: string;
  departmentId: number;
  id: number;
}
