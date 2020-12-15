import { concatenateTypeDefs } from 'apollo-server-express';

import result from './result';
import params from './params';
import enums from './enums';
import admin from './admin';
import user from './user';
import setting from './setting';

export default concatenateTypeDefs([
  result,
  enums,
  params,
  admin,
  setting,
  user,
]);
