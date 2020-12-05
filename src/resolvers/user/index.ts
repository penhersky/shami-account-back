import UserQuery from './userQuery';
import * as userMutation from './userMutation';

import addContact from './contacts/addContact';

export default {
  Mutation: {
    addContact,
    ...userMutation,
  },
  Query: {
    ...UserQuery,
  },
};
