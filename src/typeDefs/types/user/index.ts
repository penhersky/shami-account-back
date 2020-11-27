import { concatenateTypeDefs } from 'apollo-server-express';

import user from './user';
import contact from './contact';

export default concatenateTypeDefs([user, contact]);
