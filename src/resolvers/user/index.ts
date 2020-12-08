import UserQuery from './userQuery';
import * as userMutation from './userMutation';

import profile from './profile';
import accountType from './accountType';
import security from './security';
import contact from './contacts/index';

export default {
  Mutation: {
    ...userMutation,
    ...profile.Mutation,
    ...contact.Mutation,
    ...security.Mutation,
    ...accountType.Mutation,
  },
  Query: {
    ...UserQuery,
    ...profile.Query,
    ...contact.Query,
    ...security.Query,
    ...accountType.Query,
  },
};
