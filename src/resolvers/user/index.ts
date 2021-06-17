import UserQuery from './userQuery';
import * as userMutation from './userMutation';

import accountType from './accountType';
import security from './security';
import contact from './contacts/index';
import location from './location';
import image from './image';

export default {
  Mutation: {
    ...userMutation,
    ...image.Mutation,
    ...contact.Mutation,
    ...security.Mutation,
    ...location.Mutation,
    ...accountType.Mutation,
  },
  Query: {
    ...UserQuery,
    ...image.Query,
    ...contact.Query,
    ...security.Query,
    ...location.Query,
    ...accountType.Query,
  },
};
