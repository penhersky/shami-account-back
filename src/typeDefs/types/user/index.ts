import { concatenateTypeDefs } from 'apollo-server-express';

import user from './user';
import contact from './contact';
import security from './security';
import accountType from './accountType';
import profile from './profile';

export default concatenateTypeDefs([
  user,
  profile,
  security,
  accountType,
  contact,
]);
