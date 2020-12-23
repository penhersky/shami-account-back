import { User } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import auth from '../../../lib/checkAuth';

export default async (_: any, { birthday }: any, context: any) =>
  cather(
    async (authUser: any) => {
      await User.findByIdAndUpdate(authUser.id, { birthday });

      return {
        result: 'SUCCESS',
        status: 21,
        message: 'Birthday updated successful!',
      };
    },
    context,
    auth,
  );
