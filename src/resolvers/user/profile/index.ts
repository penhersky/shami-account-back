import getProfiles from './Query/getProfiles';
import getProfile from './Query/getProfile';

import updateProfile from './Mutation/updateProfile';
import deleteProfiles from './Mutation/deleteProfiles';
import updateBirthday from './Mutation/updateBirthday';
import updateCategories from './Mutation/updateCategories';
import updateDescription from './Mutation/updateDescription';
import updateFullName from './Mutation/updateFullName';

export default {
  Query: {
    getProfile,
    getProfiles,
  },
  Mutation: {
    updateProfile,
    deleteProfiles,
    updateBirthday,
    updateCategories,
    updateDescription,
    updateFullName,
  },
};
