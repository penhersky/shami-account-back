import UserQuery from './userQuery';
import * as userMutation from './userMutation';

import profile from './profile';
import accountType from './accountType';
import security from './security';

import addContact from './contacts/addContact';

export default {
  Mutation: {
    addContact,
    ...userMutation,
    ...profile.Mutation,
    ...security.Mutation,
    ...accountType.Mutation,
  },
  Query: {
    ...UserQuery,
    ...profile.Query,
    ...security.Query,
    ...accountType.Query,
  },
};
