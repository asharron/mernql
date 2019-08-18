const { GraphQLServer } = require('graphql-yoga');
const { typeDefs } = require('./graphql/schema.gql');
const { prisma } = require('./graphql/generated/prisma-client');

// 2
const resolvers = {
  Query: {
      users: async (parent, args, context, info) => {
          const users = await prisma.users();
          return users;
      }
  }
};

// 3
const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => console.log(`Server is running on http://localhost:4000`));