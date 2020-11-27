import Admin from './admin';
import User from './user';

export default {
  Query: {
    ...Admin.Query,
    ...User.Query,
  },
  Mutation: {
    ...Admin.Mutation,
    ...User.Mutation,
  },
};
