import addAdmin from './Mutation/addAdmin';
import deleteAdmin from './Mutation/deleteAdmin';
import updateAdmin from './Mutation/updateAdmin';

import getAdmins from './Query/getAdmins';
import adminLogin from './Query/login';

export default {
  Query: {
    adminLogin,
    getAdmins,
  },
  Mutation: {
    addAdmin,
    deleteAdmin,
    updateAdmin,
  },
};
