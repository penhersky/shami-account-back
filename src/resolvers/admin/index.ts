import adminLogin from './Query/login';
import addAdmin from './Mutation/addAdmin';
import getAdmins from './Query/getAdmins';

export default {
  Query: {
    adminLogin,
    getAdmins,
  },
  Mutation: {
    addAdmin,
  },
};
