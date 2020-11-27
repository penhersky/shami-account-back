import { concatenateTypeDefs } from 'apollo-server-express';

import user from './user';

export default concatenateTypeDefs([user]);
