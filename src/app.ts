import 'dotenv-flow/config';
import express from 'express';
import rateLimit from 'express-rate-limit';
import { graphql } from 'body-parser-graphql';
import { ApolloServer, makeExecutableSchema, gql } from 'apollo-server-express';
import cors from 'cors';
import passport from 'passport';

import { authMiddleware, loginMiddleware } from './authBy/faceBook';
import { authGoogleMiddleware, loginGoogleMiddleware } from './authBy/google';

import database from './database';
import { PORT, DB_STR_URL } from './config';
import { logInfo } from './lib/logger';

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

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
app.use(limiter);
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

database(String(DB_STR_URL));

app.listen({ port: PORT }, () =>
  logInfo(`🚀 Server ready at 🔗 http://localhost:4000${server.graphqlPath}`),
);
