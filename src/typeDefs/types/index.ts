import { concatenateTypeDefs } from 'apollo-server-express';

import result from './result';
import admin from './admin';
import user from './user';

export default concatenateTypeDefs([result, admin, user]);
