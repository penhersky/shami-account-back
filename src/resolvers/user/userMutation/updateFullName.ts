import { User } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import auth from '../../../lib/checkAuth';

export default async (_: any, { fullName }: any, context: any) =>
  cather(
    async (authUser: any) => {
      await User.findByIdAndUpdate(authUser.id, { ...fullName });

      return {
        result: 'SUCCESS',
        status: 21,
        message: 'FullName updated successful!',
      };
    },
    context,
    auth,
  );
