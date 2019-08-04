const express = require('express');
const graphqlHTTP = require('express-graphql');
const MongoClient = require('mongodb').MongoClient;
const { buildSchema } = require('graphql');
const { typeDefs } = require('./graphql/schema.gql');
const { resolverRoot } = require('./graphql/resolvers');

const app = express();
const port = 3000;
const mongo_uri = 'mongodb://localhost:27017';

var db = null;

// Construct a schema, using GraphQL schema language
var schema = buildSchema(typeDefs);

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolverRoot,
    graphiql: true,
}));

app.get('/', (req, res) => {
    console.log(db);
    res.send('Hello World!');
});

MongoClient.connect(mongo_uri, { useNewUrlParser: true })
    .then(client => {
        db = client.db('my-db');
        app.listen(port, () => console.log(`Example app listening on port ${port}!`));

    }).catch(error => {
        console.error(error);
    });
