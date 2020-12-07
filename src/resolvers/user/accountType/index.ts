import getAccountType from './Query/getAccountType';
import getAccountTypes from './Query/getAccountTypes';

import deleteAccountTypes from './Mutation/deleteAccountTypes';
import updateAccountType from './Mutation/updateAccountType';

export default {
  Query: {
    getAccountType,
    getAccountTypes,
  },
  Mutation: {
    deleteAccountTypes,
    updateAccountType,
  },
};
