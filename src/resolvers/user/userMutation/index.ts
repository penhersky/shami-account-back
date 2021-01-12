import { User } from '../../../models';

import update from '../../../lib/templates/update';

export { default as deleteUser } from './deleteUser';
export { default as createUser } from './createUser';
export { default as updateBirthday } from './updateBirthday';
export { default as updateCategories } from './updateCategories';
export { default as updateDescription } from './updateDescription';
export { default as updateFullName } from './updateFullName';
export { default as deleteAccount } from './deleteAccount';

export const updateUser = update(User, 'user');
