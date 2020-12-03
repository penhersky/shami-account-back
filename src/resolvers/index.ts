import Auth from './auth';
import Admin from './admin';
import User from './user';

import types from './types';

export default {
  Query: {
    ...Auth.Query,
    ...Admin.Query,
    ...User.Query,
  },
  Mutation: {
    ...Auth.Mutation,
    ...Admin.Mutation,
    ...User.Mutation,
  },
  ...types,
};
