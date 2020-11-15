import resolveAdminUnion from './admin/resolveUnion';

import adminLogin from './admin/Query/login';

export default {
  Query: {
    adminLogin,
  },
  ...resolveAdminUnion,
};
