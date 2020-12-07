import getSecurity from './Query/getSecurity';
import getSecuritys from './Query/getSecuritys';

import deleteSecuritys from './Mutation/deleteSecuritys';
import updateSecurity from './Mutation/updateSecurity';

export default {
  Query: {
    getSecurity,
    getSecuritys,
  },
  Mutation: {
    deleteSecuritys,
    updateSecurity,
  },
};
