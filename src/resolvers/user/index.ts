import UserQuery from './userQuery';

import addContact from './contacts/addContact';

export default {
  Mutation: {
    addContact,
  },
  Query: {
    ...UserQuery,
  },
};
