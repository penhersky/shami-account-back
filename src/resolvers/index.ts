import resolveAdminUnion from './admin/resolveUnion';

import adminLogin from './admin/Query/login';
import addAdmin from './admin/Mutation/addAdmin';

export default {
  Query: {
    adminLogin,
  },
  Mutation: {
    addAdmin,
  },
  ...resolveAdminUnion,
};
