import updateBirthday from './Mutation/updateBirthday';
import updateCategories from './Mutation/updateCategories';
import updateDescription from './Mutation/updateDescription';
import updateFullName from './Mutation/updateFullName';

import { Profile } from '../../../models';
import { getMany, getOne } from '../../../lib/templates/get';
import update from '../../../lib/templates/update';
import deleteMany from '../../../lib/templates/deleteMany';

export default {
  Query: {
    getProfile: getOne(Profile),
    getProfiles: getMany(Profile, 'profile'),
  },
  Mutation: {
    updateProfile: update(Profile, 'profile'),
    deleteProfiles: deleteMany(Profile, 'profile'),
    updateBirthday,
    updateCategories,
    updateDescription,
    updateFullName,
  },
};
