import { User } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import auth from '../../../lib/checkAuth';

export default async (_: any, args: any, context: any) =>
  cather(
    async (user: any) => {
      await User.findByIdAndUpdate(user.id, {
        deleted: true,
      });

      return {
        result: 'SUCCESS',
        status: 25,
      };
    },
    context,
    auth,
  );
