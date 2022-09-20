const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core');

const {
  classes,
  courses,
  departments,
  instructors,
  movies,
  registrations,
  rooms,
  students,
} = require('../data/all-data.cjs');

const typeDefs = gql`
  enum Semester {
    Fall
    Winter
    Spring
    Summerconst
  }

  type Movie {
    id: ID!
    title: String!
    year: Int!
    director: [String!]!
    writer: [String!]!
    rating: Int!
    genres: [String!]!
  }

  input MovieInput {
    title: String!
    year: Int!
    director: [String!]!
    writer: [String!]!
    rating: Int!
    genres: [String!]!
  }

  type Department {
    departmentName: String!
    id: ID!
  }

  type Course {
    courseTitle: String!
    courseDescription: String!
    credits: Int!
    duration: Int!
    departmentId: ID
    department: Department
    id: ID!
  }

  type Instructor {
    firstName: String!
    lastName: String!
    dateOfBirth: String!
    email: String!
    phoneInt: String!
    city: String!
    province: String
    country: String!
    postalCode: String!
    departmentId: ID!
    department: Department
    id: ID!
  }

  type Room {
    roomCapacity: Int!
    building: String!
    id: ID!
  }

  type Class {
    seats: Int!
    semester: Semester!
    courseId: ID!
    instructorId: ID!
    roomId: ID!
    id: ID!
    course: Course
    instructor: Instructor
    room: Room
  }

  type Student {
    firstName: String!
    lastName: String!
    dateOfBirth: String!
    email: String!
    phoneInt: String!
    city: String!
    province: String
    country: String!
    postalCode: String!
    departmentId: Int!
    department: Department
    id: ID!
  }

  type Registration {
    registrationDate: String!
    registrationStatus: String!
    studentId: ID!
    classId: ID!
    student: Student
    class: Class
    id: ID!
  }

  type Query {
    movies: [Movie]
    departments: [Department]
    courses: [Course]
    instructors: [Instructor]
    rooms: [Room]
    classes: [Class]
    students: [Student]
    registrations: [Registration]
  }

  type Mutation {
    # Using individual arguments
    addRoom(roomCapacity: Int, building: String): Room

    # Using an Input type
    addMovie(movie: MovieInput): Movie
  }
`;

// Resolver signature:
// (parent, args, context, info)
// parent -> return value of the parent in the resolver chain
// args -> Arguments provided to this query
// context -> shared context across an operation
// info -> Contains information about the operation's execution state, including the field name, the path to the field from the root, and more. 🤷‍♂️
/**
 * @see {@link https://www.apollographql.com/docs/apollo-server/data/resolvers#resolver-arguments}
 */
const resolvers = {
  Query: {
    movies: () => movies,
    departments: () => departments,
    courses: () => courses,
    instructors: () => instructors,
    rooms: () => rooms,
    classes: () => classes,
    students: () => students,
    registrations: () => registrations,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cache: 'bounded',
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

server.listen().then(({ url }) => {
  console.log(`Apollo server is go at ${url}`);
});
