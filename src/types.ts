export type Semester = 'Fall' | 'Winter' | 'Spring' | 'Summer';

export interface Movie {
  id: number;
  title: string;
  year: number;
  director: string | string[];
  writer: string | string[];
  rating: number;
  genres: string | string[];
}

export interface Department {
  departmentName: string;
  id: number;
}

export interface Course {
  courseTitle: string;
  courseDescription: string;
  credits: number;
  duration: number;
  departmentId: number;
  department?: Department;
  id: number;
}

export interface Instructor {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  city: string;
  province: string | null;
  country: string;
  postalCode: string;
  departmentId: number;
  department?: Department;
  id: number;
}

export interface Room {
  roomCapacity: number;
  building: string;
  id: number;
}

export interface Class {
  seats: number;
  semester: Semester;
  courseId: number;
  instructorId: number;
  roomId: number;
  id: number;
  course?: Course;
  instructor?: Instructor;
  room?: Room;
}

export interface Student {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  city: string;
  province: string | null;
  country: string;
  postalCode: string;
  departmentId?: number;
  department?: Department;
  id: number;
}

export interface Registration {
  registrationDate: string;
  registrationStatus: string;
  studentId: number;
  classId: number;
  student?: Student;
  class?: Class;
  id: number;
}
