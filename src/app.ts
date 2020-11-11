import 'dotenv-flow/config';
import express from 'express';
import { graphql } from 'body-parser-graphql';
import { ApolloServer, makeExecutableSchema, gql } from 'apollo-server-express';
import cors from 'cors';
import passport from 'passport';

import { authMiddleware, loginMiddleware } from './authBy/faceBook';
import { authGoogleMiddleware, loginGoogleMiddleware } from './authBy/google';

import database from './database';
import { PORT } from './config';
import { logInfo, logError } from './lib/logger';

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
    logInfo('✔️ Successfully connected to mysql');
  })
  .catch((error: string) => {
    logError('❌ Unable to connect to the database', error);
  });

app.listen({ port: PORT }, () =>
  logInfo(`🚀 Server ready at 🔗 http://localhost:4000${server.graphqlPath}`),
);
