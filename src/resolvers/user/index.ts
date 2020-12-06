import UserQuery from './userQuery';
import * as userMutation from './userMutation';

import profile from './profile';

import addContact from './contacts/addContact';

export default {
  Mutation: {
    addContact,
    ...userMutation,
    ...profile.Mutation,
  },
  Query: {
    ...UserQuery,
    ...profile.Query,
  },
};
