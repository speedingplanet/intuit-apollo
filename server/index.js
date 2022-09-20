// Server implementation here
const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core');
const { rooms } = require('../data/all-data.cjs');

// We need data, graphql type definitions, resolvers for our data

// GraphQL types
const typeDefs = gql`
  type Room {
    id: ID!
    building: String!
    roomCapacity: Int
  }

  type Query {
    rooms: [Room]
  }
`;

// Resolvers (provide data)
const resolvers = {
  Query: {
    rooms: () => rooms, // lots of rooms, one would think
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true, // Patch a security hole
  cache: 'bounded', // Limited cache, about 30 MB, can configure for me
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })], // Apollo's version of GraphiQL
});

server.listen().then(({ url }) => {
  console.log(`Apollo server running at ${url}`);
});
