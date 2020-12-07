import UserQuery from './userQuery';
import * as userMutation from './userMutation';

import profile from './profile';
import accountType from './accountType';

import addContact from './contacts/addContact';

export default {
  Mutation: {
    addContact,
    ...userMutation,
    ...profile.Mutation,
    ...accountType.Mutation,
  },
  Query: {
    ...UserQuery,
    ...profile.Query,
    ...accountType.Query,
  },
};
