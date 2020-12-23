import { User } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import auth from '../../../lib/checkAuth';

export default async (_: any, { description }: any, context: any) =>
  cather(
    async (authUser: any) => {
      await User.findByIdAndUpdate(authUser.id, { description });

      return {
        result: 'SUCCESS',
        status: 21,
        message: 'Description updated successful!',
      };
    },
    context,
    auth,
  );
