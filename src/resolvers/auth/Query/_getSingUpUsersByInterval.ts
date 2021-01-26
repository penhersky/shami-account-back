import { User } from '../../../models';

import cather from '../../../wrappers/resolverCather';
import auth from '../../../lib/checkAuth';

const get = (root: any, args: any, context: any) =>
  cather(
    async () => {
      const date = new Date();
      return User.find({
        createdAt: {
          $gte: date.setHours(date.getHours() - 24 * 30),
        },
      });
    },
    context,
    auth,
  );

export default get;
