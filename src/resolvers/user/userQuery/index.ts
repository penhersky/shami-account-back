import getCP from './getC&P';
import getAccount from './getAccount';
import getUser from './getUser';
import getCustomers from './getCustomers';
import getPerformers from './getPerformers';
import findUsers from './findUsers';
import getUsersByCategoryId from './getUsersByCategoryId';

export default {
  getUser,
  getCustomer: getCP,
  getPerformer: getCP,
  getAccount,
  getCustomers,
  getPerformers,
  findUsers,
  getUsersByCategoryId,
};
