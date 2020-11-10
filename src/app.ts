import 'dotenv-flow/config';
import express from 'express';
import { graphql } from 'body-parser-graphql';
import { ApolloServer, makeExecutableSchema, gql } from 'apollo-server-express';
import cors from 'cors';
import passport from 'passport';

import { authMiddleware, loginMiddleware } from './authBy/faceBook';
import { authGoogleMiddleware, loginGoogleMiddleware } from './authBy/google';

import database from './database';
import { isDevelopment, PORT } from './config';

const app = express();

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'The result was obtained successfully! Congratulations!',
  },
};

app.use('*', cors());
app.use(graphql());

// authentication as
app.use(passport.initialize());
app.get('/login/facebook', loginMiddleware);
app.get('/auth/facebook/callback', authMiddleware);
app.get('/login/google', loginGoogleMiddleware);
app.get('/auth/google/callback', authGoogleMiddleware);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
});

const server = new ApolloServer({
  schema,
  context: ({ req, res }) => ({ req, res }),
});

server.applyMiddleware({ app, path: '/graphql' });

database
  .authenticate()
  .then(() => {
    console.log('✔️ Successfully connected to mysql');
  })
  .catch((error: string) => {
    if (isDevelopment) console.log(error);
    console.log('❌ Unable to connect to the database');
  });

app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Server ready at 🔗 http://localhost:4000${server.graphqlPath}`,
  ),
);
