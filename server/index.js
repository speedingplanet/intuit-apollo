// Server implementation here
const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core');
const { rooms, departments } = require('../data/all-data.cjs');

// We need data, graphql type definitions, resolvers for our data

// GraphQL types
const typeDefs = gql`
  type Room {
    id: ID!
    building: String!
    roomCapacity: Int
  }

  type Department {
    id: ID!
    departmentName: String!
  }

  type Query {
    rooms: [Room]
    roomById(id: ID!): Room
    departments: [Department]
  }
`;

// Resolvers (provide data)
const resolvers = {
  Query: {
    rooms: () => rooms, // lots of rooms, one would think
    roomById: (parent, { id }) => rooms.find((room) => room.id === Number(id)),
    departments: () => departments,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cache: 'bounded', // Limited cache, about 30 MB, can configure for me
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })], // Apollo's version of GraphiQL
});

server.listen().then(({ url }) => {
  console.log(`Apollo server running at ${url}`);
});
