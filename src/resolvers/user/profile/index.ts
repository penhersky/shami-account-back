import getProfiles from './Query/getProfiles';
import getProfile from './Query/getProfile';

import updateProfile from './Mutation/updateProfile';
import deleteProfile from './Mutation/deleteProfiles';

export default {
  Query: {
    getProfile,
    getProfiles,
  },
  Mutation: {
    updateProfile,
    deleteProfile,
  },
};
