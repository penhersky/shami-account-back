import { AccountType } from '../../../models';
import { getMany, getOne } from '../../../lib/templates/get';
import update from '../../../lib/templates/update';
import deleteMany from '../../../lib/templates/deleteMany';

export default {
  Query: {
    getAccountType: getOne(AccountType),
    getAccountTypes: getMany(AccountType, 'accounttype'),
  },
  Mutation: {
    deleteAccountTypes: deleteMany(AccountType, 'accountType'),
    updateAccountType: update(AccountType, 'accountType'),
  },
};
