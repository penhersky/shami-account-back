import { User } from '../../../models';

import update from '../../../lib/templates/update';

export { default as deleteUser } from './deleteUser';

export const updateUser = update(User, 'user');
