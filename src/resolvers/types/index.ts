import User from './user';
import AccountType from './accountType';
import Contact from './contacts';
import Location from './location';
import Security from './security';
import Image from './image';
import Scalar from './scalar';

export default {
  User,
  Image,
  AccountType,
  Contact,
  Location,
  Security,
  ...Scalar,
};
