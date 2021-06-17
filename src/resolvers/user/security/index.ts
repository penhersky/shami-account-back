import updateSecurity from './Mutation/updateSecurity';
import updatePassword from './Mutation/updatePassword';

import { Security } from '../../../models';
import { getMany, getOne } from '../../../lib/templates/get';
import deleteMany from '../../../lib/templates/deleteMany';

export default {
  Query: {
    getSecurity: getOne(Security),
    getSecuritys: getMany(Security, 'security'),
  },
  Mutation: {
    deleteSecuritys: deleteMany(Security, 'security'),
    updateSecurity,
    updatePassword,
  },
};
