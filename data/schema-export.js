import { makeExecutableSchema } from '@graphql-tools/schema';
import jsonGraphqlServer from 'json-graphql-server/lib/json-graphql-server.node.min.js';
import data from './all-data.js';

console.log(jsonGraphqlServer.jsonSchemaBuilder);

const { jsonSchemaBuilder, getPlainSchema } = jsonGraphqlServer;

// const schema = jsonSchemaBuilder(data);
const schema = makeExecutableSchema(getPlainSchema(data));
console.log('schema:', schema);

/*
const query = '[...]';

graphql(schema, query).then((result) => {
  console.log(result);
});
*/
