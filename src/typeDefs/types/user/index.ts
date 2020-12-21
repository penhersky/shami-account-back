import { concatenateTypeDefs } from 'apollo-server-express';

import user from './user';
import contact from './contact';
import security from './security';
import accountType from './accountType';
import location from './location';
import images from './images';

export default concatenateTypeDefs([
  user,
  contact,
  security,
  location,
  accountType,
  images,
]);
