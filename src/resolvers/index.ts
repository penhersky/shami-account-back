import Auth from './auth';
import Admin from './admin';
import User from './user';

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
};
