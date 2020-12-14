import addAdmin from './Mutation/addAdmin';
import deleteAdmins from './Mutation/deleteAdmin';
import updateAdmin from './Mutation/updateAdmin';

import adminLogin from './Query/login';

import { getMany, getOne } from '../../lib/templates/get';
import { Admin } from '../../models';

export default {
  Query: {
    adminLogin,
    getAdmin: getOne(Admin),
    getAdmins: getMany(Admin, 'admin'),
  },
  Mutation: {
    addAdmin,
    deleteAdmins,
    updateAdmin,
  },
};
