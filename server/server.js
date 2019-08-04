const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const { typeDefs }  = require('./graphql/schema.gql');
const { resolverRoot } = require('./graphql/resolvers');

const app = express();
const port = 3000;

// Construct a schema, using GraphQL schema language
var schema = buildSchema(typeDefs);

app.use('/api', graphqlHTTP({
  schema: schema,
  rootValue: resolverRoot,
  graphiql: true,
}));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));