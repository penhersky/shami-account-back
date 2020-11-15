import { concatenateTypeDefs } from 'apollo-server-express';

import result from './result';
import admin from './admin';

export default concatenateTypeDefs([result, admin]);
