import Auth from './auth';
import AppSettings from './AppSettings';
import Admin from './admin';
import User from './user';

import types from './types';

export default {
  Query: {
    ...Auth.Query,
    ...Admin.Query,
    ...User.Query,
    ...AppSettings.Query,
  },
  Mutation: {
    ...Auth.Mutation,
    ...Admin.Mutation,
    ...User.Mutation,
    ...AppSettings.Mutation,
  },
  ...types,
};
