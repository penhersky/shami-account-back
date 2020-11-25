import addAdmin from './Mutation/addAdmin';
import deleteAdmins from './Mutation/deleteAdmin';
import updateAdmin from './Mutation/updateAdmin';

import getAdmin from './Query/getAdmin';
import getAdmins from './Query/getAdmins';
import adminLogin from './Query/login';

export default {
  Query: {
    adminLogin,
    getAdmin,
    getAdmins,
  },
  Mutation: {
    addAdmin,
    deleteAdmins,
    updateAdmin,
  },
};
